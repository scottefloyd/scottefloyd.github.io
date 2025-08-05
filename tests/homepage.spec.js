const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Scott Floyd - QA Automation & AI Solutions/);
    
    // Check main heading is visible
    await expect(page.locator('h1')).toBeVisible();
    
    // Check navigation is present
    await expect(page.locator('nav.nav')).toBeVisible();
  });

  test('should display correct hero content', async ({ page }) => {
    // Check hero title contains expected text
    await expect(page.locator('.hero-title')).toContainText('Hire a Creative');
    
    // Check cycling text is present
    await expect(page.locator('.cycling-text')).toBeVisible();
    
    // Check hero description
    await expect(page.locator('.hero-description')).toContainText('From catching bugs before they reach users');
    
    // Check hero buttons are present
    await expect(page.locator('.hero-buttons .btn-primary')).toBeVisible();
    await expect(page.locator('.hero-buttons .btn-secondary')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Test "My Story" navigation
    await page.click('a[href="#story"]');
    await expect(page.locator('#story')).toBeInViewport();
    
    // Test "Current Work" navigation
    await page.click('a[href="#current-work"]');
    await expect(page.locator('#current-work')).toBeInViewport();
    
    // Test "Past Projects" navigation  
    await page.click('a[href="#projects"]');
    await expect(page.locator('#projects')).toBeInViewport();
    
    // Test "Contact" navigation
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should display all main sections', async ({ page }) => {
    // Check all main sections are present
    await expect(page.locator('#story')).toBeVisible();
    await expect(page.locator('#current-work')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should have working theme toggle', async ({ page }) => {
    // Check initial theme (assuming light mode by default)
    const body = page.locator('body');
    
    // Click theme toggle
    await page.click('.theme-toggle');
    
    // Wait for theme change and verify dark mode
    await expect(body).toHaveAttribute('data-theme', 'dark');
    
    // Click again to toggle back
    await page.click('.theme-toggle');
    await expect(body).not.toHaveAttribute('data-theme', 'dark');
  });
});