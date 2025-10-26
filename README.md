## Kunal Singh — Professional Video Editing Portfolio

A cinematic, motion-driven portfolio for Kunal Singh showcasing hero video loops, kinetic typography, featured project lightboxes, and a showreel centerpiece. Built with Next.js 16, the App Router, Tailwind CSS v4, and Framer Motion for refined transitions.

### Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion
- next/font with Poppins + Inter

### Key Features

- Full-screen looping hero video with parallax typography and motion CTA
- Sticky navigation with scroll-aware highlighting and magnetic hover effect
- Animated sections for About, Work, Showreel, and Contact with intentional pacing
- Work grid that opens cinematic lightbox overlays for each project
- Showreel embed framed by cinematic borders and lighting accents
- Cursor-follow glow and tactile button interactions for added depth

### Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the portfolio.

### Customisation Checklist

- Replace `public/videos/kunal-singh-reel-loop.mp4` with the final looping hero background (same filename).
- Update project links in `src/components/HomePage.tsx` and swap `public/videos/showreel.mp4` if you have a different reel cut.
- Add high-resolution OG image to `public/og-image.png` for social sharing previews.
- Adjust palette or typography in `src/app/globals.css` if needed.

### Available Scripts

- `npm run dev` — start the development server
- `npm run build` — create an optimized production build
- `npm start` — run the production build locally
- `npm run lint` — execute ESLint over the project

### Deployment

Deploy to any Next.js-compatible host (Vercel recommended). Run `npm run build` locally before shipping to ensure the cinematic animations compile without issues.
