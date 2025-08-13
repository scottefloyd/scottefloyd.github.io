# Environment Configuration for Playwright Tests

This document explains how to configure the test environment for different scenarios.

## Environment Variables

The test suite uses environment variables to determine the base URL and port for testing:

### Available Variables

- `NODE_ENV`: Environment type (`development`, `production`, `ci`)
- `BASE_URL`: Override the base URL for tests
- `PORT`: Override the port for local development

### Environment Configurations

#### Development (Default)
```bash
NODE_ENV=development
BASE_URL=http://localhost:8000
PORT=8000
```

#### Production (GitHub Pages)
```bash
NODE_ENV=production
BASE_URL=https://scottefloyd.github.io
```

#### CI/CD
```bash
NODE_ENV=ci
BASE_URL=http://localhost:8000
PORT=8000
```

## Usage Examples

### Local Development
```bash
# Start the development server
npm run start

# Run tests against local server
npm run test:dev

# Run tests with browser visible
npm run test:headed

# Run tests in UI mode
npm run test:ui
```

### Production Testing
```bash
# Test against production site
npm run test:prod
```

### Custom Configuration
```bash
# Use custom base URL
BASE_URL=http://localhost:3000 npm run test

# Use custom port
PORT=3000 npm run test
```

## Environment Detection

The system automatically detects the environment:

1. **Production**: `NODE_ENV=production`
2. **CI/CD**: `CI=true` (GitHub Actions, etc.)
3. **Development**: Default fallback

## File Structure

```
tests/
├── env.js              # Environment configuration
├── playwright.config.js # Playwright configuration
├── ENVIRONMENT.md      # This documentation
└── *.spec.js          # Test files
```

## Troubleshooting

### Port Already in Use
If you get "Address already in use" error:
```bash
# Find what's using the port
lsof -ti:8000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=3000 npm run test
```

### Tests Can't Connect
1. Ensure the server is running: `npm run start`
2. Check the base URL in `tests/env.js`
3. Verify the port is correct
4. Try running with `--headed` to see the browser

### Environment Variables Not Working
1. Check that `tests/env.js` is properly configured
2. Verify the environment variable is set: `echo $NODE_ENV`
3. Try setting the variable explicitly: `NODE_ENV=development npm run test` 