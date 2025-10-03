# Deployment Guide for GitHub Pages

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `DongqingZhang.github.io`
5. Make sure it's set to "Public"
6. Don't initialize with README (we already have files)
7. Click "Create repository"

### 2. Upload Files

#### Option A: Using GitHub Web Interface
1. Go to your new repository
2. Click "uploading an existing file"
3. Drag and drop all files from the `personal-website` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
4. Add commit message: "Initial website upload"
5. Click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Navigate to the personal-website directory
cd personal-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website upload"

# Add your GitHub repository as origin
git remote add origin https://github.com/DongqingZhang/DongqingZhang.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Access Your Website

Your website will be available at:
**https://DongqingZhang.github.io**

It may take a few minutes for the changes to propagate.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain name from a registrar
2. In your repository settings, under "Pages", add your custom domain
3. Update your domain's DNS settings to point to GitHub Pages
4. Add a `CNAME` file to your repository root with your domain name

## Updates

To update your website:
1. Make changes to your local files
2. Commit and push changes to GitHub
3. GitHub Pages will automatically rebuild and deploy

## Troubleshooting

- If your site doesn't load, check the repository name is exactly `DongqingZhang.github.io`
- Make sure all files are in the root directory of the repository
- Check that `index.html` is in the root directory
- Wait 5-10 minutes after pushing changes for them to appear
