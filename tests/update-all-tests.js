#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Test files to update (excluding test-utils.js and env.js)
const testFiles = [
  'accessibility.spec.js',
  'contact-form.spec.js',
  'homepage.spec.js',
  'mobile.spec.js',
  'resume-page.spec.js',
  'skills.spec.js'
];

function updateTestFile(filePath) {
  console.log(`Updating ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add import for test-utils
  if (!content.includes('require(\'./test-utils\')')) {
    content = content.replace(
      'const { test, expect } = require(\'@playwright/test\');',
      'const { test, expect } = require(\'@playwright/test\');\nconst { navigateTo, setupPage } = require(\'./test-utils\');'
    );
  }
  
  // Replace page.goto('/') with setupPage(page, '/')
  content = content.replace(
    /await page\.goto\('\/'\);/g,
    'await setupPage(page, \'/\');'
  );
  
  // Replace page.goto('/resume.html') with setupPage(page, '/resume.html')
  content = content.replace(
    /await page\.goto\('\/resume\.html'\);/g,
    'await setupPage(page, \'\/resume.html\');'
  );
  
  // Replace other page.goto calls with navigateTo
  content = content.replace(
    /await page\.goto\(['"]([^'"]+)['"]\);/g,
    (match, url) => {
      if (url.startsWith('http')) {
        return match; // Keep full URLs as-is
      }
      return `await navigateTo(page, '${url}');`;
    }
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated ${filePath}`);
}

// Update all test files
testFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    updateTestFile(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('\n🎉 All test files updated!');
console.log('Run "npm run test:dev" to test the updated files.'); 