// Environment configuration for Playwright tests
const env = {
  // Development environment
  development: {
    baseURL: 'http://localhost:8000',
    port: 8000
  },
  
  // Production environment (GitHub Pages)
  production: {
    baseURL: 'https://scottefloyd.github.io',
    port: 443
  },
  
  // CI/CD environment
  ci: {
    baseURL: 'http://localhost:8000',
    port: 8000
  }
};

// Get current environment
const getEnvironment = () => {
  console.log('Environment Detection:');
  console.log('  NODE_ENV:', process.env.NODE_ENV);
  console.log('  CI:', process.env.CI);
  console.log('  BASE_URL:', process.env.BASE_URL);
  console.log('  PORT:', process.env.PORT);
  
  if (process.env.NODE_ENV === 'production') {
    console.log('  Selected: Production');
    return env.production;
  }
  if (process.env.CI) {
    console.log('  Selected: CI');
    return env.ci;
  }
  console.log('  Selected: Development');
  return env.development;
};

// Get base URL for tests
const getBaseURL = () => {
  const baseURL = process.env.BASE_URL || getEnvironment().baseURL;
  console.log('  Final Base URL:', baseURL);
  return baseURL;
};

// Get port for local development
const getPort = () => {
  const port = process.env.PORT || getEnvironment().port;
  console.log('  Final Port:', port);
  return port;
};

module.exports = {
  env,
  getEnvironment,
  getBaseURL,
  getPort
}; 