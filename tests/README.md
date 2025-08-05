# Playwright Test Automation for Scott Floyd Portfolio

This directory contains comprehensive test automation for your portfolio website using Playwright.

## Test Structure

### Core Test Files
- **`homepage.spec.js`** - Tests main page functionality, navigation, hero content, and theme switching
- **`mobile.spec.js`** - Mobile-specific tests for responsive design and touch interactions
- **`skills.spec.js`** - Tests the Skills & Expertise accordion functionality
- **`contact-form.spec.js`** - Contact form validation and submission tests
- **`resume-page.spec.js`** - Resume page functionality and navigation consistency
- **`accessibility.spec.js`** - Accessibility compliance and WCAG guidelines

### Configuration
- **`playwright.config.js`** - Main configuration including browsers, viewports, and test settings

## Getting Started

### 1. Install Dependencies
```bash
npm install @playwright/test
```

### 2. Install Browser Binaries
```bash
npx playwright install
```

### 3. Run Tests
```bash
# Run all tests
npx playwright test

# Run with browser UI visible
npx playwright test --headed

# Run specific test file
npx playwright test tests/homepage.spec.js

# Run in debug mode
npx playwright test --debug

# Run with UI mode (interactive)
npx playwright test --ui
```

## Test Coverage

### Homepage Tests
- ✅ Page loading and title verification
- ✅ Hero section content and cycling text
- ✅ Navigation functionality and smooth scrolling
- ✅ All main sections visibility
- ✅ Theme toggle functionality

### Mobile Tests
- ✅ Mobile navigation menu
- ✅ Responsive layout adaptation
- ✅ Touch interactions
- ✅ Mobile-specific styling

### Skills Section Tests
- ✅ Accordion expand/collapse behavior
- ✅ "Show All Details" toggle functionality
- ✅ Individual category interactions
- ✅ Content visibility states

### Contact Form Tests
- ✅ Form field validation
- ✅ Required field checking
- ✅ Form submission flow
- ✅ Accessibility compliance

### Resume Page Tests
- ✅ Page loading and navigation
- ✅ Font consistency (Dancing Script for "Scott Floyd")
- ✅ PDF download functionality
- ✅ Theme toggle and scroll-to-top button
- ✅ Content section visibility

### Accessibility Tests
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Color contrast (light/dark themes)
- ✅ Reduced motion support
- ✅ Image alt text validation

## Browser Coverage

Tests run across multiple browsers and devices:
- **Desktop**: Chrome, Firefox, Safari (WebKit)
- **Mobile**: Chrome on Pixel 5, Safari on iPhone 12

## Reports and Debugging

### HTML Report
```bash
npx playwright show-report
```

### Screenshots and Traces
- Automatic screenshots on test failures
- Trace files for debugging failed tests
- HTML report with detailed test results

## Continuous Integration

The configuration is CI-ready with:
- Retry logic for flaky tests
- Parallel execution for faster runs
- Built-in web server startup/shutdown
- Multiple reporter options

## Test Maintenance

### Adding New Tests
1. Create new `.spec.js` file in `/tests` directory
2. Follow existing naming conventions
3. Use page object patterns for complex interactions
4. Include both positive and negative test cases

### Best Practices
- Use descriptive test names
- Group related tests with `test.describe()`
- Include proper waits and assertions
- Test both desktop and mobile viewports
- Verify accessibility compliance

## Example Usage

```javascript
// Basic test structure
const { test, expect } = require('@playwright/test');

test.describe('My Feature Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should do something', async ({ page }) => {
    await expect(page.locator('.my-element')).toBeVisible();
  });
});
```

This test suite provides comprehensive coverage of your portfolio's functionality, ensuring quality across all devices and browsers.