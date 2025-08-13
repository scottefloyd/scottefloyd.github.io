// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { getBaseURL, getPort } = require('./env');

// Get environment configuration
const baseURL = getBaseURL();
const port = getPort();

console.log('Playwright Configuration:');
console.log('  Base URL:', baseURL);
console.log('  Port:', port);
console.log('  NODE_ENV:', process.env.NODE_ENV);

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    /* Wait for network to be idle */
    waitForLoadState: 'networkidle',
    /* Additional timeout for navigation */
    navigationTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: true,
        baseURL: baseURL,
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: `python3 -m http.server ${port}`,
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});