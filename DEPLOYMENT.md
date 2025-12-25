# 🚀 Deployment Guide

This guide will help you deploy your Habit Tracker to the internet using various platforms.

## Option 1: Vercel (Recommended - Easiest) ⚡

Vercel is the easiest way to deploy Vite apps with zero configuration.

### Steps:

1. **Install Vercel CLI** (optional, but recommended):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will automatically detect Vite
   - Your app will be live in seconds!

3. **Or Deploy via GitHub** (Recommended):
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository: `balaramdas2004/Daily_Tracking`
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your app will be live at: `https://daily-tracking.vercel.app` (or similar)

4. **Automatic Deployments**:
   - Every push to `main` branch will auto-deploy
   - Pull requests get preview deployments

### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain

---

## Option 2: Netlify 🌐

Netlify is another great option with excellent free tier.

### Steps:

1. **Deploy via GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository: `balaramdas2004/Daily_Tracking`
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Your app will be live at: `https://random-name.netlify.app`

2. **Or Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Automatic Deployments**:
   - Every push to `main` branch will auto-deploy
   - Pull requests get preview deployments

### Custom Domain:
- Go to Site settings → Domain management
- Add your custom domain

---

## Option 3: GitHub Pages 📄

Free hosting directly from GitHub.

### Steps:

1. **Update vite.config.js** (already done):
   ```js
   base: '/Daily_Tracking/'
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your app will be at: `https://balaramdas2004.github.io/Daily_Tracking`

---

## Option 4: Cloudflare Pages ☁️

Fast and free hosting from Cloudflare.

### Steps:

1. **Deploy via GitHub**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"
   - Your app will be live at: `https://your-project.pages.dev`

---

## Quick Comparison

| Platform | Free Tier | Auto Deploy | Custom Domain | Ease of Use |
|----------|-----------|------------|---------------|-------------|
| **Vercel** | ✅ Yes | ✅ Yes | ✅ Free | ⭐⭐⭐⭐⭐ |
| **Netlify** | ✅ Yes | ✅ Yes | ✅ Free | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | ✅ Yes | ⚠️ Manual | ✅ Free | ⭐⭐⭐ |
| **Cloudflare Pages** | ✅ Yes | ✅ Yes | ✅ Free | ⭐⭐⭐⭐ |

---

## Recommended: Vercel

For the easiest deployment experience, use **Vercel**:

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import `balaramdas2004/Daily_Tracking`
4. Click Deploy
5. Done! 🎉

Your app will be live in under 2 minutes!

---

## Post-Deployment Checklist

- [ ] Test the live URL
- [ ] Verify all features work
- [ ] Check mobile responsiveness
- [ ] Test localStorage functionality
- [ ] Update README with live URL
- [ ] Add live demo badge to README

---

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible
- Review build logs for errors

### 404 Errors on Routes
- Make sure redirect rules are configured (already done in config files)
- Check that SPA routing is set up correctly

### Assets Not Loading
- Verify `base` path in `vite.config.js` matches your deployment path
- Check that assets are in the correct directory

---

Need help? Open an issue on GitHub!

