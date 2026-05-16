# Muhammad Suleman — Portfolio

A bold, animated Next.js portfolio showcasing my work as a Senior React Native & Front-End Engineer.

**Live URL:** _will be added after you deploy_

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom theme
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Bricolage Grotesque (display) + Manrope (body) + JetBrains Mono (code) — all from Google Fonts
- **Hosting:** Vercel (free tier)

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Main page composition
│   ├── globals.css      # Global styles, fonts, animations
│   ├── sitemap.ts       # SEO sitemap
│   └── robots.ts        # Search engine robots config
├── components/
│   ├── Nav.tsx          # Floating glass nav bar
│   ├── Hero.tsx         # Animated hero with typewriter
│   ├── About.tsx        # About section with stats
│   ├── Projects.tsx     # Project showcase cards
│   ├── Experience.tsx   # Work history timeline
│   ├── Skills.tsx       # Tech stack grid + marquee
│   └── Contact.tsx      # Contact CTA section
├── lib/
│   └── data.ts          # All your projects, skills, experience
├── public/
│   └── Muhammad_Suleman_Resume.pdf   # Put your resume here
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🏃 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

---

## ✏️ How to Customize

All your content lives in **one file**: `lib/data.ts`

You can edit:
- **`profile`** — Your name, title, email, phone, LinkedIn, bio, stats
- **`skills`** — Tech stack grouped by category
- **`projects`** — Project name, description, stack, links
- **`experience`** — Work history with bullets

After editing, the changes appear instantly in dev mode.

### Adding Your Resume PDF

Put your resume PDF in `public/Muhammad_Suleman_Resume.pdf` (already referenced in the Hero "Download Resume" button).

---

## 🌐 Free Deployment on Vercel (Recommended)

Vercel is built by the same team that makes Next.js — it's the **#1 recommended host** for Next.js projects, and the free tier is generous.

### Step-by-step:

**1. Push code to GitHub**

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"

# Create a new repo on github.com (call it "portfolio")
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**2. Connect to Vercel**

1. Go to https://vercel.com
2. Click **Sign Up** → Continue with GitHub
3. Click **Add New Project** → select your `portfolio` repo
4. Click **Deploy** — Vercel auto-detects Next.js, no config needed
5. Done! In ~2 minutes you get a live URL like:
   `https://your-portfolio-name.vercel.app`

**3. Optional — Custom Domain**

- Free `.vercel.app` subdomain comes with every project
- If you want `muhammadsuleman.dev` or `.com`, buy it from Namecheap ($10/yr) and add it in Vercel project settings → Domains
- Every git push to `main` auto-deploys your changes

### Why Vercel over alternatives?

| Feature | Vercel | Netlify | GitHub Pages |
|---|---|---|---|
| Next.js support | ✅ Native | ⚠️ Limited (no SSR) | ❌ Static only |
| Auto deploys from GitHub | ✅ | ✅ | ✅ |
| Custom domain (free SSL) | ✅ | ✅ | ✅ |
| Image optimization | ✅ Built-in | ❌ | ❌ |
| Edge functions | ✅ | ✅ | ❌ |
| Server-side rendering | ✅ | ⚠️ Functions only | ❌ |
| Analytics | ✅ Free tier | 💰 Paid | ❌ |

For a Next.js portfolio, **Vercel is the clear winner**.

---

## 📈 SEO — Built-in

The portfolio is fully SEO-optimized so Google can rank you for searches like:
- "Muhammad Suleman React Native"
- "Senior React Native Engineer Pakistan"
- "Remote React Native Developer"

**Already configured:**
- ✅ Metadata (title, description, keywords) in `app/layout.tsx`
- ✅ Open Graph tags (for LinkedIn/Twitter previews)
- ✅ `robots.ts` allows all search engines
- ✅ `sitemap.ts` for Google indexing
- ✅ Semantic HTML (`<section>`, `<article>`, `<nav>`)
- ✅ Mobile responsive

**After deploying:**
1. Submit your URL to Google Search Console: https://search.google.com/search-console
2. Add the sitemap URL: `https://your-domain.vercel.app/sitemap.xml`
3. Wait 1-2 weeks — your portfolio will start appearing in Google search results

---

## 📤 Sharing With Recruiters

Once deployed, here are the best ways to share your portfolio:

### LinkedIn
1. Add the URL to your **Headline** (e.g., "Senior React Native Engineer | Portfolio: muhammad-suleman.vercel.app")
2. Add it to the **Contact Info** section
3. Add it to the **Featured** section as a website link with a screenshot

### Email Signature
```
Muhammad Suleman
Senior React Native & Front-End Engineer
📧 sulemanashiq984@gmail.com
🌐 muhammad-suleman.vercel.app
🔗 linkedin.com/in/muhammad-suleman-804225178
```

### Resume
Update the contact line on your resume to include the portfolio URL.

### Cold Outreach Template
> Hi [Name],
>
> I'm a Senior React Native & Front-End Engineer with 6+ years building apps used by 100K+ people. I noticed [company] is hiring for [role].
>
> You can see my live work, tech stack, and full background here: **muhammad-suleman.vercel.app**
>
> Would love to discuss how I can contribute to your team.
>
> Best,
> Muhammad

---

## 🎨 Design Customization

### Colors
Edit `tailwind.config.ts` to change the color palette:
```ts
neon: {
  cyan: "#00ffd1",    // change this
  violet: "#a855f7",  // and these
  pink: "#ff2d92",
  amber: "#ffb627",
}
```

### Fonts
Edit `app/globals.css` to swap fonts. Currently using Google Fonts:
- **Display:** Bricolage Grotesque
- **Body:** Manrope
- **Mono:** JetBrains Mono

---

## ⚡ Performance

The portfolio is optimized for speed:
- Server-rendered HTML for fast first paint
- Tree-shaken JS bundles
- Lazy-loaded animations
- No external image dependencies
- Lighthouse score target: 95+ on all metrics

---

## 🛠 Troubleshooting

**Build fails on Vercel?**
- Make sure `package.json` is committed
- Check `node_modules` is in `.gitignore`

**Fonts not loading?**
- Google Fonts CDN may be blocked in some regions; the site falls back to system fonts

**Animations choppy on mobile?**
- Reduce animation intensity in `Hero.tsx` (lower blur values, fewer blobs)

---

## 📝 License

Personal portfolio — feel free to use as a reference for your own.

---

Built by Muhammad Suleman with ❤️
