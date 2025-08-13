// Test utilities for URL construction and common test operations
const { getBaseURL } = require('./env');

/**
 * Constructs a full URL for testing
 * @param {string} path - The relative path (e.g., '/', '/resume.html')
 * @returns {string} The full URL
 */
function getTestURL(path = '/') {
  const baseURL = getBaseURL();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseURL}${normalizedPath}`;
}

/**
 * Navigate to a page using the test URL
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} path - The relative path to navigate to
 */
async function navigateTo(page, path = '/') {
  const url = getTestURL(path);
  console.log(`Navigating to: ${url}`);
  await page.goto(url);
}

/**
 * Common test setup for pages that need to be loaded
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} path - The relative path to navigate to
 */
async function setupPage(page, path = '/') {
  await navigateTo(page, path);
  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');
}

module.exports = {
  getTestURL,
  navigateTo,
  setupPage,
  getBaseURL
}; 