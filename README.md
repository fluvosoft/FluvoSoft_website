# FluvoSoft Website

**FluvoSoft** — Venture catalysts studio. Official website built with Next.js, featuring blockchain development, AI automation, custom software, and SaaS solutions.

🔗 **Live site:** [fluvosoft.com](https://www.fluvosoft.com)

---

## Features

### Home page

- Hero, dashboard preview, launch features, and solutions overview
- **Latest releases** — Auto-playing product slider (Inventory Stock Tracker, Easy Invoice mobile/web, SANDBOX)
- **Contributions** — Partner company logos and names
- FluvoSoft Lab, features, quality, testimonials, pricing, FAQ, and CTA
- **Book a quick call** — Contact section with calendar time slots, project inquiry form (service, budget, location), and social links

### Product pages

- **[Easy Invoice](/easy-invoice)** — Free mobile invoicing app (Android APK, Google Play, [web app](https://easyinvoice.fluvosoft.com/))
- **[Inventory Stock Tracker](/inventory-stock-tracker)** — Android inventory and stock management app

### Solution pages

- [Blockchain](/blockchain) — Smart contracts, Ethereum, Solana, Corda, enterprise blockchain
- [Automation](/automation) — AI automation, RPA, workflow automation
- [Custom Development](/custom-development) — Enterprise and web applications, legacy modernization
- [SaaS](/saas) — Cloud platforms, subscription management, multi-tenant architecture

### Resources

- [Privacy Policy](/privacy), [Security](/security), [Careers](/careers), [Research](/research), [Blog](/blog), [Contact](/contact)
- [About](/about) — Company story, mission, values, leadership, and technology stack



### SEO & forms

- Metadata, Open Graph, Twitter cards, JSON-LD (Organization, WebSite, FAQPage), sitemap, robots.txt
- Contact and subscribe forms via protected API routes (validation, honeypot, rate limiting)
- Firebase Firestore storage for `contactMessages` and `subscribers`

---

## Quick start

### Prerequisites

- **Node.js** 18.17+ and **npm**

### Setup

```bash
# Clone the repository
git clone https://github.com/fluvosoft/FluvoSoft_website.git
cd FluvoSoft_website

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
| Backend / data | **Firebase** (client SDK + Admin SDK), Firestore |
| Fonts | Poppins (Google Fonts) |
| Device mockups | `react-device-mockup` (product showcase) |

---

## Project structure

```
FluvoSoft_website/
├── app/
│   ├── layout.tsx              # Root layout, metadata, JSON-LD
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind + global styles
│   ├── about/                  # About FluvoSoft
│   ├── easy-invoice/           # Easy Invoice product landing
│   ├── inventory-stock-tracker/
│   ├── blockchain/ automation/ custom-development/ saas/
│   ├── contact/ privacy/ security/ careers/ research/ blog/
│   ├── admin/                  # Contact submissions dashboard
│   ├── api/
│   │   ├── contact/            # Contact form API
│   │   ├── subscribe/          # Newsletter subscribe API
│   │   └── admin/messages/     # Server-side message delete
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Home page sections
│   ├── contact/                # Booking calendar
│   ├── dashboard/              # Admin dashboard UI
│   ├── easy-invoice/           # Easy Invoice page components
│   ├── inventory-stock-tracker/
│   ├── resources/              # Shared resource page layout
│   ├── seo/
│   └── ui/
├── data/                       # FAQs, releases, contributions, resource copy
├── lib/                        # SEO, Firebase client/admin, dashboard access
├── public/
│   ├── images/
│   └── downloads/              # APK files
├── tailwind.config.ts
└── package.json
```

---

## Configuration

### Site & SEO

Edit `lib/seo.ts` for site URL, description, keywords, and Open Graph defaults. Theme colors (`cta`, `brand`, `background`) live in `tailwind.config.ts`.

### Firebase (forms)

Set `NEXT_PUBLIC_FIREBASE_*` in `.env.local` so contact and subscribe forms write to Firestore:

- `contactMessages` — name, email, subject, message, service, location, budget, meeting slot
- `subscribers` — newsletter emails

### Firebase Admin (dashboard delete)

Set `FIREBASE_SERVICE_ACCOUNT_JSON` in `.env.local` (full service account JSON on one line) for server-side delete in `/admin`.

### Admin access

Allowed Google accounts are defined in `lib/dashboard-access.ts`. Enable Google sign-in in Firebase Authentication and restrict Firestore rules to admin emails for `contactMessages`.

### Search verification (optional)

- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

---

## License & contact

- **Repository:** [github.com/fluvosoft/FluvoSoft_website](https://github.com/fluvosoft/FluvoSoft_website)
- **FluvoSoft Ltd.** — Dhaka, Bangladesh
- **Email:** support@fluvosoft.com
