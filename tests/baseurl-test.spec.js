const { test, expect } = require('@playwright/test');

test.describe('BaseURL Configuration Test', () => {
  test('should use baseURL from configuration', async ({ page }) => {
    // This should use the baseURL from playwright.config.js
    await page.goto('/');
    
    // Check if the page loaded
    await expect(page).toHaveTitle(/Scott Floyd/);
    
    // Check if we can see the hero section
    await expect(page.locator('.hero-title')).toBeVisible();
  });

  test('should navigate to resume page using baseURL', async ({ page }) => {
    // This should use the baseURL + /resume.html
    await page.goto('/resume.html');
    
    // Check if the page loaded
    await expect(page).toHaveTitle(/Resume - Scott Floyd/);
  });

  test('should work with explicit full URL', async ({ page }) => {
    // Test with explicit full URL as fallback
    await page.goto('http://localhost:8000/');
    
    // Check if the page loaded
    await expect(page).toHaveTitle(/Scott Floyd/);
  });
}); 