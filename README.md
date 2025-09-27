# Arkyn Website (React + Vite)

Modern, animated, and responsive company site for Arkyn built with React + Vite. It features scroll‑triggered animations, portfolio case‑study modals, a testimonial carousel, advanced contact/newsletter forms, dark‑mode‑free light theme, internationalization (EN/FR), and SEO enhancements.

## Tech Stack
- React 19 + Vite 7
- CSS modules (plain CSS files scoped by class names)
- Custom animations in `src/css/animations.css`
- Node/Express backend (optional, not required to run the frontend)

## Getting Started

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```

3) Build for production
```bash
npm run build
```

4) Preview the production build
```bash
npm run preview
```

## Environment Variables (Frontend)
Create a `.env` in `frontend/` (same folder as this README), and define as needed:
```
VITE_BACKEND_URL=https://api.your-backend.com   # optional, defaults to dev proxy
VITE_WHATSAPP_NUMBER=233508748443               # used by Contact + CTA band (no plus sign)
VITE_WHATSAPP_MESSAGE=Hello Arkyn! I would like to talk about a project.
```

If `VITE_BACKEND_URL` is not provided, Vite dev server proxies `/api` to `http://localhost:5001` (see `vite.config.js`).

## Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – build production bundle into `dist/`
- `npm run preview` – preview the production bundle locally

## Project Structure (Frontend)
```
src/
  App.jsx                 # main page composition
  main.jsx                # React root + providers (i18n)
  index.css               # design tokens, typography, theming
  css/
    animations.css        # keyframes, hover effects, helpers (ambient backgrounds, fade-out)
    Hero.css, About.css, Services.css, Portfolio.css, Testimonials.css, Contact.css, Footer.css, Navbar.css
  components/
    Navbar.jsx            # sticky nav, active link, EN/FR toggle
    Hero.jsx              # headline, CTAs, animated image
    About.jsx             # stats counter + bullets
    Services.jsx          # image cards with overlays & hover effects
    Portfolio.jsx         # grid + case study modal
    Testimonials.jsx      # carousel with autoplay + dots + controls
    Contact.jsx           # WhatsApp + form with validation and feedback
    Footer.jsx            # social links + newsletter with success fade-out
    ScrollReveal.jsx      # intersection-based reveal wrapper
    FloatingParticles.jsx # subtle background particles
    LoadingSpinner.jsx    # spinner + skeletons
    Process.jsx           # multi-step timeline
    CTABand.jsx           # dual CTA band
    FAQ.jsx               # accordion
  i18n/
    I18nProvider.jsx      # i18n context (EN/FR)
    strings.js            # all copy for EN/FR
public/
  robots.txt              # SEO crawling policy
  sitemap.xml             # SEO sitemap (update hostname if needed)
index.html                # JSON-LD schema, meta tags
vercel.json               # build/output settings for Vercel
```

## Key Features
- **Animations & Micro‑interactions**: `src/css/animations.css` (fade, float, shimmer, ambient backgrounds, focus rings, etc.)
- **Scroll Reveal**: `ScrollReveal.jsx` for per‑section animation on entry
- **Testimonials Carousel**: clean translateX logic, autoplay, controls, dots
- **Portfolio Modals**: case study details with tags and CTAs
- **Forms UX**: contact + newsletter with success/error feedback and fade‑out
- **Internationalization**: EN/FR switcher in Navbar, content in `i18n/strings.js`
- **Responsive**: tablet/mobile breakpoints with improved grids & no horizontal overflow
- **SEO**: meta tags in `index.html`, `robots.txt`, `sitemap.xml`, JSON‑LD Organization

## Internationalization (EN/FR)
- Language switcher in `Navbar.jsx`. State persisted in `localStorage` (key `arkyn-lang`).
- Add/edit copy in `src/i18n/strings.js`.

## Performance Notes
- Hero image marked `loading="eager"` + `fetchpriority="high"` with explicit dimensions for better LCP.
- Services/Portfolio images use `loading="lazy"`, `decoding="async"`, and `sizes` for responsive loading.
- Success/error messages use `aria-live="polite"`.

## Deployment (Vercel)
This project includes `vercel.json` in the `frontend/` folder:
- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- `framework`: `vite`
- Caching headers for `/assets/*`

Steps:
1) Push the repo to GitHub.
2) Import the project in Vercel and select the `frontend/` folder as the root.
3) In Vercel Project Settings → Environment Variables, add (as needed):
   - `VITE_BACKEND_URL`
   - `VITE_WHATSAPP_NUMBER=233508748443`
   - `VITE_WHATSAPP_MESSAGE=Hello Arkyn! I would like to talk about a project.`
4) Deploy. Your `robots.txt` and `sitemap.xml` already reference `https://arkyne.vercel.app`. Update if your domain differs.

## Backend (Optional)
There is a Node/Express backend in `../backend/` with newsletter and contact endpoints. If you run it locally:
```bash
cd ../backend
npm install
npm run dev
```
Set `VITE_BACKEND_URL` to your server URL in the frontend `.env` for production.

## Branding & Design System
- Primary: `#3C2A4D` (deep purple), Accent: `#E9C46A` (gold), Secondary: `#F4A261` (orange), Background: `#F5F3F0` (cream)
- Rounded corners (10–14px), subtle purple‑tint shadows, Inter typography, card‑based UI

## License
MIT © Arkyn
