# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages for free hosting.

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" or go to https://github.com/new
3. Repository name: `portfolio` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click "Create repository"

### 2. Upload Your Files

**Option A: Git Command Line (Recommended)**
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio deployment"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: GitHub Web Interface**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all your portfolio files
3. Commit the files

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### 4. Access Your Live Site

- Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio`
- GitHub will show the URL in the Pages settings
- It may take a few minutes to go live

## 🔧 Post-Deployment Setup

### Update Environment Variables

Since GitHub Pages is a static host, your Google Analytics will work automatically with the environment configuration we set up.

### Custom Domain (Optional)

1. Buy a domain (like `scottfloyd.com`)
2. In repository Settings > Pages > Custom domain
3. Enter your domain
4. Configure DNS with your domain provider

### SSL Certificate

GitHub Pages automatically provides HTTPS for all sites.

## 📝 Making Updates

To update your portfolio:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Update portfolio content"
git push origin main
```

Changes will appear on your live site within a few minutes.

## 🛠️ Troubleshooting

**Site not loading?**
- Check that repository is public
- Verify GitHub Pages is enabled
- Wait a few minutes for deployment

**Contact form not working?**
- Verify Formspree endpoint is correct
- Check that form action URL is properly set

**Analytics not tracking?**
- Ensure Google Analytics measurement ID is set
- Check browser console for errors

## 📊 Performance Tips

- Images are already optimized
- CSS and JS are minified for production
- Site should score 90+ on Google PageSpeed Insights

## 🔄 Workflow Recommendations

1. **Development**: Test changes locally first
2. **Staging**: Use a separate branch for testing
3. **Production**: Keep main branch clean and working
4. **Backups**: GitHub serves as your backup

Your portfolio is now ready for professional deployment!