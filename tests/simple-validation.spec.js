const { test, expect } = require('@playwright/test');
const { navigateTo, setupPage } = require('./test-utils');

test.describe('Basic Site Validation', () => {
  test('should load homepage with correct title', async ({ page }) => {
    await setupPage(page, '/');
    await expect(page).toHaveTitle(/Scott Floyd - QA Automation & AI Solutions/);
  });

  test('should have main navigation elements', async ({ page }) => {
    await setupPage(page, '/');
    
    // Check navigation is present
    await expect(page.locator('nav.nav')).toBeVisible();
    await expect(page.locator('.nav-logo')).toContainText('Scott Floyd');
    
    // Check main navigation links
    await expect(page.locator('a[href="#story"]')).toBeVisible();
    await expect(page.locator('a[href="#current-work"]')).toBeVisible(); 
    await expect(page.locator('a[href="#projects"]')).toBeVisible();
    await expect(page.locator('a[href="#contact"]')).toBeVisible();
  });

  test('should have hero section with cycling text', async ({ page }) => {
    await setupPage(page, '/');
    
    await expect(page.locator('.hero-title')).toBeVisible();
    await expect(page.locator('.creative-text')).toContainText('Hire a Creative');
    await expect(page.locator('.cycling-text')).toBeVisible();
    await expect(page.locator('.hero-description')).toBeVisible();
  });

  test('should have all main sections', async ({ page }) => {
    await setupPage(page, '/');
    
    await expect(page.locator('#story')).toBeVisible();
    await expect(page.locator('#current-work')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should have working theme toggle', async ({ page }) => {
    await setupPage(page, '/');
    
    const themeToggle = page.locator('.theme-toggle');
    await expect(themeToggle).toBeVisible();
    
    // Click theme toggle
    await themeToggle.click();
    
    // Check that theme changed (data-theme attribute should be added)
    await expect(page.locator('body')).toHaveAttribute('data-theme', 'dark');
  });

  test('should load resume page correctly', async ({ page }) => {
    await setupPage(page, '/resume.html');
    
    await expect(page).toHaveTitle(/Resume - Scott Floyd/);
    await expect(page.locator('.resume-hero')).toBeVisible();
    await expect(page.locator('.nav-logo')).toContainText('Scott Floyd');
  });
});