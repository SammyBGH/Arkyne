# Arkyne – Company Website

Welcome! This is Arkyne’s polished, responsive website built with React + Vite. It’s fast, animated, and easy to edit. This guide helps you run it, tweak content, and deploy.

---

## Quick Start
- **Install**
  ```bash
  npm install
  ```
- **Run locally**
  ```bash
  npm run dev
  ```
- **Build**
  ```bash
  npm run build
  ```
- **Preview build**
  ```bash
  npm run preview
  ```

---

## What you get
- **Beautiful sections**: Hero, About, Services, Portfolio, Testimonials, Process, CTA Band, FAQ, Contact, Footer
- **Delightful motion**: Clean scroll reveals and micro‑interactions
- **EN/FR language switch**: In the navbar, instant switch
- **Forms that feel good**: Newsletter and Contact with friendly feedback
- **SEO‑ready**: Meta tags, sitemap, robots, and JSON‑LD Organization

---

## Edit content fast
- Hero, About, Services, Portfolio, etc. live in `src/components/`
- Copy lives in `src/i18n/strings.js` (EN + FR). Change text once, it updates everywhere.
- Colors, spacing, and typography are in `src/index.css` and section CSS files in `src/css/`

---

## Environment (copy‑paste this)
Create `frontend/.env` with any of the below you need:
```
VITE_BACKEND_URL
VITE_WHATSAPP_NUMBER
VITE_WHATSAPP_MESSAGE
```
Notes:
- Leave `VITE_BACKEND_URL` empty for local dev. Dev server proxies `/api` to `http://localhost:5001`.
- `VITE_WHATSAPP_NUMBER` has no plus sign.

---

## Deploy to Vercel
This project already includes `vercel.json`.

1) Push your repo to GitHub
2) Import in Vercel (use `frontend/` as the project root)
3) Add environment variables in Vercel (same as `.env`)
4) Deploy 🎉

SEO files live in `public/`:
- `robots.txt`
- `sitemap.xml`

---

## Tips to customize
- Change brand copy and CTAs in `src/i18n/strings.js`
- Update palette, shadows, and rounded corners in `src/index.css`
- Swap images in `src/assets/images/`
- Tweak animations in `src/css/animations.css`

---

## Under the hood (for curious minds)
- React 19 + Vite 7
- CSS with utility classes and component styles
- Optimized images (`loading="lazy"`, `decoding="async"`, `sizes`)
- Lighthouse‑friendly (reduced CLS, eager hero image)

---

## Need the backend?
There’s a tiny Node/Express server with newsletter + contact endpoints in `../backend/`. Run it if you want the forms to save:
```bash
cd ../backend
npm install
npm run dev
```
Then set `VITE_BACKEND_URL` to your backend URL for production.

---

Made with care by Arkyne.
