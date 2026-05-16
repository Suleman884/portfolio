# 🚀 Quick Deploy Guide (5 Minutes)

## Prerequisites
- A free GitHub account: https://github.com/signup
- A free Vercel account: https://vercel.com/signup (sign up with GitHub)

---

## Step 1: Test Locally (Optional but Recommended)

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 — your portfolio should appear.

---

## Step 2: Add Your Resume PDF

Copy your resume PDF into `portfolio/public/`:
```
public/Muhammad_Suleman_Resume.pdf
```

This makes the "Download Resume" button work.

---

## Step 3: Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
```

Now create a new repo on GitHub:
1. Go to https://github.com/new
2. Repository name: `portfolio` (or anything you like)
3. Keep it **Public** (required for Vercel free tier)
4. Click **Create repository**
5. Copy the commands GitHub shows you — should look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy on Vercel

1. Go to https://vercel.com/new
2. Click **Import** next to your `portfolio` repo
3. Leave all settings as default (Vercel auto-detects Next.js)
4. Click **Deploy**

Wait ~2 minutes. Your site is live at:
**`https://portfolio-YOUR_USERNAME.vercel.app`**

---

## Step 5: Customize the URL (Optional)

In your Vercel project → **Settings → Domains**:
- Click "Edit" next to the default domain
- Change to something like `muhammad-suleman` → final URL becomes `muhammad-suleman.vercel.app`

---

## Step 6: Submit to Google

1. Go to https://search.google.com/search-console
2. Add property → enter your portfolio URL
3. Verify ownership (HTML tag method is easiest)
4. Submit sitemap: `https://your-portfolio.vercel.app/sitemap.xml`

Within 1-2 weeks your portfolio appears in Google search results.

---

## ✏️ Future Updates

Edit any file, then:
```bash
git add .
git commit -m "Update projects"
git push
```

Vercel auto-deploys every push to `main`. Changes live in ~60 seconds.

---

## 📩 Share With Recruiters

Update these places with your new URL:

1. **LinkedIn headline** — add `| Portfolio: muhammad-suleman.vercel.app`
2. **LinkedIn Contact Info** — add as website
3. **LinkedIn Featured section** — add as website link
4. **Resume** — update the contact line
5. **Email signature** — include the URL
6. **GitHub README** — add to your GitHub profile

That's it. Total time: ~5 minutes to deploy + ongoing free hosting forever.
