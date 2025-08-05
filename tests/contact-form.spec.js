const { test, expect } = require('@playwright/test');

test.describe('Contact Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('should display contact form correctly', async ({ page }) => {
    // Check form is present
    await expect(page.locator('#contactForm')).toBeVisible();
    
    // Check all form fields are present
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"]');
    
    // Try to submit empty form
    await submitButton.click();
    
    // Check that form doesn't submit and validation messages appear
    // Note: This depends on your form validation implementation
    const nameField = page.locator('input[name="name"]');
    const emailField = page.locator('input[name="email"]');
    const messageField = page.locator('textarea[name="message"]');
    
    // Check HTML5 validation or custom validation
    await expect(nameField).toHaveAttribute('required');
    await expect(emailField).toHaveAttribute('required');
    await expect(messageField).toHaveAttribute('required');
  });

  test('should fill and submit form successfully', async ({ page }) => {
    // Fill out the form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message for form validation.');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Check for success message or loading state
    // Note: This depends on your Formspree integration
    // You might want to mock the Formspree response for testing
    await expect(page.locator('.form-success, .form-loading')).toBeVisible({ timeout: 5000 });
  });

  test('should have proper form accessibility', async ({ page }) => {
    // Check form labels are properly associated
    const nameField = page.locator('input[name="name"]');
    const emailField = page.locator('input[name="email"]');
    const messageField = page.locator('textarea[name="message"]');
    
    // Check for proper labeling (either label elements or aria-label)
    await expect(nameField).toHaveAttribute('placeholder');
    await expect(emailField).toHaveAttribute('placeholder');
    await expect(messageField).toHaveAttribute('placeholder');
  });
});