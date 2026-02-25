# FluvoSoft Website

Next.js 14 + Tailwind CSS website for FluvoSoft.

## Project structure

```
e:\FluvoSoft Website\
├── app/
│   ├── layout.tsx      # Root layout (metadata, font)
│   ├── page.tsx        # Home page (all sections)
│   └── globals.css     # Tailwind + base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── LogosSection.tsx
│       ├── BentoSection.tsx
│       ├── FeaturesSection.tsx
│       ├── QualitySection.tsx
│       ├── TestimonialsSection.tsx
│       ├── FAQSection.tsx
│       ├── PricingSection.tsx
│       ├── CTASection.tsx
│       └── index.ts
├── public/             # Static assets (optional)
├── tailwind.config.ts  # Tailwind theme (colors, maxWidth)
├── next.config.js      # Next config (e.g. images)
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Commands

- **Develop:** `npm run dev` — start dev server at [http://localhost:3000](http://localhost:3000)
- **Build:** `npm run build` — production build
- **Start:** `npm start` — run production build
- **Lint:** `npm run lint`

## Tech stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**
