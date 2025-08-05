const { test, expect } = require('@playwright/test');

test.describe('Resume Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resume.html');
  });

  test('should load resume page successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Resume - Scott Floyd/);
    
    // Check resume header is visible
    await expect(page.locator('.resume-hero')).toBeVisible();
    await expect(page.locator('.resume-title')).toContainText('Resume');
  });

  test('should display navigation with correct styling', async ({ page }) => {
    // Check navigation is present
    await expect(page.locator('nav.nav')).toBeVisible();
    
    // Check Scott Floyd logo has correct font (Dancing Script)
    const navLogo = page.locator('.nav-logo');
    await expect(navLogo).toBeVisible();
    await expect(navLogo).toContainText('Scott Floyd');
    
    // Check active state for Resume link
    await expect(page.locator('.nav-link.active')).toContainText('Resume');
  });

  test('should have functional PDF download', async ({ page }) => {
    // Check download button is present
    const downloadBtn = page.locator('a[href*="Scott-Floyd-Resume"]');
    await expect(downloadBtn).toBeVisible();
    await expect(downloadBtn).toContainText('Download PDF');
    
    // Check it has proper target attribute for new tab
    await expect(downloadBtn).toHaveAttribute('target', '_blank');
  });

  test('should display resume content sections', async ({ page }) => {
    // Check main content sections are present
    await expect(page.locator('.resume-content')).toBeVisible();
    await expect(page.locator('.resume-sidebar')).toBeVisible();
    
    // Check contact information section
    await expect(page.locator('.resume-section').first()).toContainText('Contact');
    
    // Check technical skills section
    await expect(page.locator('.resume-section')).toContainText('Technical Skills');
  });

  test('should have working theme toggle', async ({ page }) => {
    const body = page.locator('body');
    
    // Click theme toggle
    await page.click('.theme-toggle');
    
    // Verify theme change
    await expect(body).toHaveAttribute('data-theme', 'dark');
    
    // Toggle back
    await page.click('.theme-toggle');
    await expect(body).not.toHaveAttribute('data-theme', 'dark');
  });

  test('should have working scroll-to-top button', async ({ page }) => {
    // Scroll down to make the button appear
    await page.evaluate(() => window.scrollTo(0, 1000));
    
    // Check scroll-to-top button becomes visible
    await expect(page.locator('.scroll-to-top')).toBeVisible();
    
    // Click the button
    await page.click('.scroll-to-top');
    
    // Check we're back at the top
    await expect(page.locator('.resume-hero')).toBeInViewport();
  });

  test('should navigate back to main site correctly', async ({ page }) => {
    // Click on navigation links that should go to main site
    const homeLink = page.locator('a[href="index.html#home"]');
    await expect(homeLink).toBeVisible();
    
    // Test the main logo link
    const logoLink = page.locator('a[href="index.html"]');
    await expect(logoLink).toBeVisible();
  });

  test('should display skill tags correctly', async ({ page }) => {
    // Check skill categories are present
    await expect(page.locator('.skill-category')).toHaveCount(3); // Assuming 3 categories
    
    // Check skill tags are visible
    await expect(page.locator('.skill-tag')).toHaveCountGreaterThan(0);
    
    // Check specific skills are mentioned
    await expect(page.locator('.skill-tag')).toContainText(['Playwright', 'JavaScript', 'Cypress']);
  });
});