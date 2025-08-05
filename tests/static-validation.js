const fs = require('fs');
const path = require('path');

// Static HTML validation tests that work without browser dependencies
class PortfolioValidator {
  constructor() {
    this.results = [];
    this.indexHtml = '';
    this.resumeHtml = '';
    this.css = '';
  }

  async loadFiles() {
    try {
      this.indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
      this.resumeHtml = fs.readFileSync(path.join(__dirname, '../resume.html'), 'utf8');
      this.css = fs.readFileSync(path.join(__dirname, '../styles.css'), 'utf8');
      console.log('✅ Files loaded successfully');
    } catch (error) {
      console.error('❌ Error loading files:', error.message);
    }
  }

  test(description, testFn) {
    try {
      const result = testFn();
      if (result) {
        console.log(`✅ ${description}`);
        this.results.push({ test: description, status: 'PASS' });
      } else {
        console.log(`❌ ${description}`);
        this.results.push({ test: description, status: 'FAIL' });
      }
    } catch (error) {
      console.log(`❌ ${description} - ${error.message}`);
      this.results.push({ test: description, status: 'ERROR', error: error.message });
    }
  }

  runAllTests() {
    console.log('🎭 Portfolio Validation Tests\n');

    // Basic HTML structure tests
    this.test('Homepage has correct title', () => {
      return this.indexHtml.includes('<title>Scott Floyd - QA Automation & AI Solutions</title>');
    });

    this.test('Resume page has correct title', () => {
      return this.resumeHtml.includes('<title>Resume - Scott Floyd</title>');
    });

    this.test('Navigation contains all required links', () => {
      const requiredLinks = ['#story', '#current-work', '#projects', '#contact', 'resume.html'];
      return requiredLinks.every(link => this.indexHtml.includes(`href="${link}"`));
    });

    this.test('Hero section has cycling text elements', () => {
      return this.indexHtml.includes('cycling-text') && 
             this.indexHtml.includes('cycling-word') &&
             this.indexHtml.includes('Hire a Creative');
    });

    this.test('All main sections are present', () => {
      const sections = ['id="story"', 'id="current-work"', 'id="projects"', 'id="contact"'];
      return sections.every(section => this.indexHtml.includes(section));
    });

    this.test('Theme toggle functionality exists', () => {
      return this.indexHtml.includes('theme-toggle') && 
             this.indexHtml.includes('themeToggle');
    });

    this.test('Skills section has accordion structure', () => {
      return this.indexHtml.includes('skills-category') &&
             this.indexHtml.includes('skillsMasterToggle');
    });

    this.test('Contact form has all required fields', () => {
      return this.indexHtml.includes('name="name"') &&
             this.indexHtml.includes('name="email"') &&
             this.indexHtml.includes('name="message"') &&
             this.indexHtml.includes('type="submit"');
    });

    this.test('Resume page has PDF download link', () => {
      return this.resumeHtml.includes('Scott-Floyd-Resume') &&
             this.resumeHtml.includes('Download PDF');
    });

    this.test('CSS has Dancing Script font for nav-logo', () => {
      return this.css.includes('.nav-logo') &&
             this.css.includes('Dancing Script');
    });

    this.test('Mobile responsive meta tag present', () => {
      return this.indexHtml.includes('name="viewport"') &&
             this.indexHtml.includes('width=device-width');
    });

    this.test('Social media meta tags present', () => {
      return this.indexHtml.includes('property="og:') &&
             this.indexHtml.includes('property="twitter:');
    });

    // Generate summary
    this.generateSummary();
  }

  generateSummary() {
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;
    const errors = this.results.filter(r => r.status === 'ERROR').length;
    const total = this.results.length;

    console.log('\n📊 Test Summary:');
    console.log(`Total Tests: ${total}`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⚠️  Errors: ${errors}`);
    console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);

    if (failed > 0 || errors > 0) {
      console.log('\n🔍 Failed/Error Tests:');
      this.results
        .filter(r => r.status !== 'PASS')
        .forEach(r => console.log(`  - ${r.test}: ${r.status}${r.error ? ` (${r.error})` : ''}`));
    }

    // Generate HTML report
    this.generateHtmlReport();
  }

  generateHtmlReport() {
    const timestamp = new Date().toISOString();
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const total = this.results.length;
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Validation Report</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .summary { display: flex; gap: 20px; margin: 20px 0; }
        .metric { background: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd; }
        .test-result { padding: 10px; margin: 5px 0; border-radius: 4px; }
        .pass { background: #d4edda; border-left: 4px solid #28a745; }
        .fail { background: #f8d7da; border-left: 4px solid #dc3545; }
        .error { background: #fff3cd; border-left: 4px solid #ffc107; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎭 Portfolio Validation Report</h1>
        <p>Generated: ${timestamp}</p>
        <p>Success Rate: ${((passed / total) * 100).toFixed(1)}%</p>
    </div>
    
    <div class="summary">
        <div class="metric">
            <h3>✅ Passed</h3>
            <p>${passed}</p>
        </div>
        <div class="metric">
            <h3>❌ Failed</h3>
            <p>${this.results.filter(r => r.status === 'FAIL').length}</p>
        </div>
        <div class="metric">
            <h3>⚠️ Errors</h3>
            <p>${this.results.filter(r => r.status === 'ERROR').length}</p>
        </div>
    </div>
    
    <h2>Test Results</h2>
    ${this.results.map(result => `
        <div class="test-result ${result.status.toLowerCase()}">
            <strong>${result.test}</strong> - ${result.status}
            ${result.error ? `<br><small>Error: ${result.error}</small>` : ''}
        </div>
    `).join('')}
</body>
</html>`;

    fs.writeFileSync(path.join(__dirname, 'validation-report.html'), html);
    console.log('\n📄 HTML report generated: tests/validation-report.html');
  }
}

// Run the tests
async function runTests() {
  const validator = new PortfolioValidator();
  await validator.loadFiles();
  validator.runAllTests();
}

runTests();