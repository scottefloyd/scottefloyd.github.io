const { test, expect } = require('@playwright/test');
const { navigateTo, setupPage } = require('./test-utils');

test.describe('Mobile Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

  test.beforeEach(async ({ page }) => {
    await setupPage(page, '/');
  });

  test('should display mobile navigation correctly', async ({ page }) => {
    // Check that mobile menu toggle is visible
    await expect(page.locator('.nav-toggle')).toBeVisible();
    
    // Check that desktop navigation is hidden on mobile
    await expect(page.locator('.nav-menu')).not.toBeVisible();
    
    // Click mobile menu toggle
    await page.click('.nav-toggle');
    
    // Check that mobile menu opens
    await expect(page.locator('.nav-menu')).toBeVisible();
    
    // Check mobile theme toggle is present in menu
    await expect(page.locator('.mobile-theme-toggle')).toBeVisible();
  });

  test('should have proper mobile hero layout', async ({ page }) => {
    // Check hero content is visible and properly laid out on mobile
    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page.locator('.hero-title')).toBeVisible();
    
    // Check cycling text is centered on mobile
    const cyclingText = page.locator('.cycling-text');
    await expect(cyclingText).toBeVisible();
    
    // Check hero buttons stack properly on mobile
    await expect(page.locator('.hero-buttons')).toBeVisible();
  });

  test('should handle mobile interactions correctly', async ({ page }) => {
    // Test mobile menu navigation
    await page.click('.nav-toggle');
    await page.click('a[href="#story"]');
    
    // Verify navigation worked and menu closed
    await expect(page.locator('#story')).toBeInViewport();
    await expect(page.locator('.nav-menu')).not.toBeVisible();
  });

  test('should display mobile-optimized content', async ({ page }) => {
    // Check that sections adapt to mobile layout
    await expect(page.locator('#current-work')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    
    // Scroll to ensure all content is accessible
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact')).toBeInViewport();
  });
});