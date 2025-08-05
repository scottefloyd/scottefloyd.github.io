const { test, expect } = require('@playwright/test');

test.describe('Skills & Expertise Section Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to skills section
    await page.locator('#skills').scrollIntoViewIfNeeded();
  });

  test('should display skills section correctly', async ({ page }) => {
    // Check section title and subtitle
    await expect(page.locator('#skills .section-title')).toContainText('Skills & Expertise');
    await expect(page.locator('#skills .section-subtitle')).toBeVisible();
    
    // Check all three skill categories are present
    await expect(page.locator('.skills-category').nth(0)).toBeVisible();
    await expect(page.locator('.skills-category').nth(1)).toBeVisible();
    await expect(page.locator('.skills-category').nth(2)).toBeVisible();
  });

  test('should have functional accordion behavior', async ({ page }) => {
    const firstCategory = page.locator('.skills-category').first();
    const firstContent = firstCategory.locator('.skills-content');
    
    // Initially content should be hidden
    await expect(firstContent).not.toBeVisible();
    
    // Click to expand
    await firstCategory.locator('.skills-header').click();
    await expect(firstContent).toBeVisible();
    
    // Click again to collapse
    await firstCategory.locator('.skills-header').click();
    await expect(firstContent).not.toBeVisible();
  });

  test('should have working "Show All Details" toggle', async ({ page }) => {
    const showAllButton = page.locator('.show-all-btn');
    
    // Check button is present
    await expect(showAllButton).toBeVisible();
    
    // Click to show all details
    await showAllButton.click();
    
    // All skill contents should be visible
    await expect(page.locator('.skills-content').nth(0)).toBeVisible();
    await expect(page.locator('.skills-content').nth(1)).toBeVisible();
    await expect(page.locator('.skills-content').nth(2)).toBeVisible();
    
    // Button text should change
    await expect(showAllButton).toContainText('Hide All Details');
    
    // Click again to hide all
    await showAllButton.click();
    
    // All contents should be hidden
    await expect(page.locator('.skills-content').nth(0)).not.toBeVisible();
    await expect(page.locator('.skills-content').nth(1)).not.toBeVisible();
    await expect(page.locator('.skills-content').nth(2)).not.toBeVisible();
  });

  test('should display correct skill categories', async ({ page }) => {
    // Check category titles
    await expect(page.locator('.skills-category').nth(0).locator('h3')).toContainText('Test Automation & Quality');
    await expect(page.locator('.skills-category').nth(1).locator('h3')).toContainText('Development & Programming');
    await expect(page.locator('.skills-category').nth(2).locator('h3')).toContainText('DevOps & Collaboration');
  });
});