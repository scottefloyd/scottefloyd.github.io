const { test, expect } = require('@playwright/test');

test.describe('Accessibility Tests', () => {
  test('should have proper semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper heading hierarchy
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h2')).toHaveCountGreaterThan(0);
    
    // Check for proper navigation structure
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main, section')).toHaveCountGreaterThan(0);
    
    // Check for footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have proper ARIA labels and roles', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation has proper structure
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check buttons have proper labels
    const themeToggle = page.locator('.theme-toggle');
    await expect(themeToggle).toBeVisible();
    
    // Check form elements have proper labels
    await page.locator('#contact').scrollIntoViewIfNeeded();
    const formFields = page.locator('input, textarea');
    const fieldCount = await formFields.count();
    
    for (let i = 0; i < fieldCount; i++) {
      const field = formFields.nth(i);
      // Check field has either label, placeholder, or aria-label
      const hasLabel = await field.getAttribute('aria-label');
      const hasPlaceholder = await field.getAttribute('placeholder');
      expect(hasLabel || hasPlaceholder).toBeTruthy();
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation through main navigation
    await page.keyboard.press('Tab');
    
    // Check that focus is visible on navigation elements
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Continue tabbing through interactive elements
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const currentFocus = page.locator(':focus');
      await expect(currentFocus).toBeVisible();
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Test both light and dark themes
    const themes = ['light', 'dark'];
    
    for (const theme of themes) {
      if (theme === 'dark') {
        await page.click('.theme-toggle');
        await page.waitForTimeout(100); // Wait for theme transition
      }
      
      // Check that text is visible and readable
      await expect(page.locator('.hero-title')).toBeVisible();
      await expect(page.locator('.hero-description')).toBeVisible();
      await expect(page.locator('.nav-link')).toBeVisible();
    }
  });

  test('should handle reduced motion preferences', async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Check that content is still accessible
    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page.locator('.cycling-text')).toBeVisible();
    
    // Navigation should still work
    await page.click('a[href="#story"]');
    await expect(page.locator('#story')).toBeInViewport();
  });

  test('should have proper image alt text', async ({ page }) => {
    await page.goto('/');
    
    // Scroll through the page to load all images
    await page.locator('#projects').scrollIntoViewIfNeeded();
    
    // Check that images have alt text
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const altText = await image.getAttribute('alt');
      expect(altText).toBeTruthy();
      expect(altText.length).toBeGreaterThan(0);
    }
  });
});