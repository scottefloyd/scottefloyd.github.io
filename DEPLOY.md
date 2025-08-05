# GitHub Pages Deployment Guide

## GitHub Pages and npm Files

**Short Answer**: npm files (package.json, node_modules, etc.) will NOT affect your GitHub Pages deployment.

## Why npm Files Don't Impact Static Sites

### GitHub Pages Behavior:
- **Static File Serving**: GitHub Pages serves files directly from your repository
- **No Build Process**: For static sites, GitHub Pages doesn't run npm install or build commands
- **File Filtering**: GitHub Pages ignores development files and serves only web assets

### Your Portfolio Structure:
```
├── index.html          ✅ Served by GitHub Pages
├── styles.css          ✅ Served by GitHub Pages  
├── script.js           ✅ Served by GitHub Pages
├── resume.html         ✅ Served by GitHub Pages
├── images/             ✅ Served by GitHub Pages
├── package.json        🔄 Ignored by GitHub Pages
├── node_modules/       🔄 Ignored by GitHub Pages (should be in .gitignore)
└── tests/              🔄 Optional - can include or exclude
```

## Deployment Steps

### 1. Repository Setup
```bash
# Initialize repository (if not done)
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

### 3. Access Your Live Site
Your portfolio will be available at:
`https://yourusername.github.io/portfolio`

## What Gets Deployed

### Included Files:
- `index.html` - Main portfolio page
- `resume.html` - Resume page
- `styles.css` - All styling
- `script.js` - Interactive functionality
- `images/` - All image assets
- `*.pdf` - Resume PDF files

### Excluded Files (Automatically):
- `node_modules/` - npm dependencies
- `.git/` - Git metadata
- Files listed in `.gitignore`

## Optional: Clean Deployment

If you want to exclude development files from your repository:

### Update .gitignore:
```
node_modules/
npm-debug.log*
.npm
tests/
playwright-report/
test-results/
*.log
.env
```

### Keep Only Production Files:
```bash
# Remove test files from git (optional)
git rm -r --cached tests/
git rm -r --cached playwright-report/
git commit -m "Remove test files from production"
```

## Best Practices

### 1. Repository Organization
- Keep development files in repository for collaboration
- Use .gitignore to exclude large dependencies
- Include README.md for project documentation

### 2. Performance Optimization
- Optimize images before deployment
- Minify CSS/JS if needed (optional for small sites)
- Use relative paths for all assets

### 3. Testing Before Deploy
Your current test automation helps ensure:
- All links work correctly
- Responsive design functions
- Contact form validation
- Cross-page navigation

## Custom Domain (Optional)

Add a `CNAME` file to use a custom domain:
```
www.scottfloyd.dev
```

## Continuous Deployment

GitHub Pages automatically redeploys when you push changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
# Site automatically updates in ~1-2 minutes
```

## Your Portfolio Advantages

Your current setup is perfect for GitHub Pages because:
- **Pure HTML/CSS/JavaScript** - No build process required
- **Optimized Performance** - Fast loading times
- **Mobile Responsive** - Works on all devices
- **Professional Quality** - Validated with automated testing

The npm files actually demonstrate your development expertise while having zero impact on the deployed site.