const { test, expect } = require('@playwright/test');

test.describe('Debug Tests', () => {
  test('should connect to local server', async ({ page }) => {
    // Try to navigate to the full URL
    await page.goto('http://localhost:8000');
    
    // Check if the page loaded
    await expect(page).toHaveTitle(/Scott Floyd/);
    
    // Check if we can see the hero section
    await expect(page.locator('.hero-title')).toBeVisible();
  });

  test('should load resume page', async ({ page }) => {
    // Try to navigate to the resume page
    await page.goto('http://localhost:8000/resume.html');
    
    // Check if the page loaded
    await expect(page).toHaveTitle(/Resume - Scott Floyd/);
  });
}); 