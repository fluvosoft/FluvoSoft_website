# FluvoSoft Website

**FluvoSoft** — Venture catalysts studio. Official website built with Next.js, featuring blockchain development, AI automation, custom software, and SaaS solutions.

🔗 **Live site:** [fluvosoft.com](https://www.fluvosoft.com)

---

## Features

- **Home page** — Hero, partner logos marquee, solutions overview, FluvoSoft Lab, features, testimonials, pricing, FAQ, contact form, and CTA
- **Solution pages** — Dedicated pages with hero images and content for:
  - [Blockchain](/blockchain) — Smart contracts, Ethereum, Solana, Corda, enterprise blockchain
  - [Automation](/automation) — AI automation, RPA, workflow automation
  - [Custom Development](/custom-development) — Enterprise and web applications, legacy modernization
  - [SaaS](/saas) — Cloud platforms, subscription management, multi-tenant architecture
- **About** — Company story, mission, vision, values, impact metrics, and technology expertise
- **SEO** — Metadata, Open Graph, Twitter cards, JSON-LD (Organization, WebSite, FAQPage), semantic HTML, canonical URLs
- **Responsive** — Mobile-first layout with Tailwind CSS
- **Book a Demo** — Contact section with form (Name, Email, Subject, Message) and company details

---

## Quick start

### Prerequisites

- **Node.js** 18+ and **npm**

### Setup

```bash
# Clone the repository
git clone https://github.com/fluvosoft/FluvoSoft_website.git
cd FluoSoft_website

# Install dependencies
npm install

# Create env file for Firebase
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Commands

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 14** (App Router) |
| UI | **React 18**, **TypeScript** |
| Styling | **Tailwind CSS 3** |
| Fonts | Poppins (Google Fonts) |

---

## Project structure

```
FluvoSoft Website/
├── app/
│   ├── layout.tsx           # Root layout, metadata, JSON-LD
│   ├── page.tsx             # Home page
│   ├── globals.css          # Tailwind + global styles
│   ├── about/page.tsx       # About FluvoSoft
│   ├── blockchain/page.tsx  # Blockchain solutions
│   ├── automation/page.tsx  # Automation solutions
│   ├── custom-development/page.tsx
│   ├── saas/page.tsx
│   └── ...
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Main nav, logo, Solutions dropdown, Book a Demo
│   │   └── Footer.tsx       # Logo, company info, subscribe, links
│   ├── sections/            # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── LogosSection.tsx  # Partner marquee
│   │   ├── SolutionsSection.tsx
│   │   ├── LabSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ...
│   ├── seo/
│   │   └── FAQSchema.tsx    # FAQPage JSON-LD
│   ├── blocks/              # Reusable blocks (Logos, PricingCard, etc.)
│   └── ui/                  # Button, Card, Input, Accordion, etc.
├── lib/
│   └── seo.ts               # Site config, JSON-LD helpers
├── public/
│   └── images/              # fluvo_logo.png, Blockchain.png, automation.png, etc.
├── tailwind.config.ts       # Theme (colors, fonts, container)
├── next.config.js
└── package.json
```

---

## Configuration

- **Site URL & SEO:** Edit `lib/seo.ts` to change `url`, `description`, `keywords`, and Open Graph defaults.
- **Theme:** Colors (e.g. `cta`, `brand`, `background`) and typography are in `tailwind.config.ts`.
- **Firebase forms:** Fill `NEXT_PUBLIC_FIREBASE_*` values in `.env.local` so contact and subscribe forms can write to Firestore collections:
  - `contactMessages`
  - `subscribers`
- **Bot protection on forms:** Contact and subscribe now submit through protected API routes with request validation, honeypot checks, and per-IP rate limiting.

---

## License & contact

- **Repository:** [github.com/fluvosoft/FluvoSoft_website](https://github.com/fluvosoft/FluvoSoft_website)
- **FluvoSoft Ltd.** — Dhaka, Bangladesh  
- **Email:** support@fluvosoft.com
