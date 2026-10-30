export type StudioProduct = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  logo: string;
  logoBg?: string;
  accent: string;
  href: string;
  ctaLabel: string;
  web?: { label: string; href: string };
  shots: string[];
};

/* Google Play listing screenshots (served from Google's image CDN). */
const PLAY = "https://play-lh.googleusercontent.com/";
const play = (...keys: string[]) => keys.map((k) => `${PLAY}${k}=w540-h960-rw`);


export const STUDIO_PRODUCTS: StudioProduct[] = [
  {
    id: "teenypdf",
    name: "TeenyPDF",
    tagline: "Private PDF tools. Files never leave your device.",
    category: "Productivity · Web + Android",
    logo: "/teenypdf/teenypdf_logo.png",
    accent: "#E5484D",
    href: "https://play.google.com/store/apps/details?id=com.teenypdf.www",
    ctaLabel: "Get on Google Play",
    web: { label: "Open web app", href: "https://www.teenypdf.com/" },
    shots: play(
      "Zn9fCFzQN7ZsekT19sjKbKAn9sQBqek3XVpn5Jkkvzpu9D37zNFk20N_tc71A-1t4t33WfeLhbFShCf7B9kO",
      "AdRh_hbtfjbYBcs1ArjjwSjLJLGBa8W7pX6s7bopfZmqREBGHaFynloPrV6c-KgYg9b92Y3wV9hrKmuBx9lJ4A",
      "lWUlNxyRdU6m9Q5HyEVOxqVw0QRSEVs6zCecv5VNtm3JPZNuOgGv2GBeaodE6u0vItAt4EDBB-XVdq9_Yz_vy4w",
      "NYGMMGgYo5EfDdNXwncYp9NVyGy956WIBkAue9hRVxbh5JRIaostPRXUrU0RY3k-xpDqCNerPxFcHQzJ_ZBJng",
      "8K9c2eWBeu7_4DB_p9D2SPT-AxtRtDVGh7gMOx7PqEBDVdTmd3v5uaybmu702ekA09SHskncrs8WujUXyQpAhg",
      "0oopMFRTvS7Ox876x09tLh1WA_fnj7UAtI_CrqQALmujSHJ_E093xfphZuvtSBisj3uQzZ3XnTe7aF7U0zdw4g",
      "flbfZXQ63LFeYyXyF8dT3vcdDIVhj27H8ytSKfQ-TEEBiYqJ7fdEMQC1SF062VVnT_Xus9hv04yw0KdiBSRSNQ",
      "ldi9cOxSVmpU9hlcMl4tFrAy5xadZulEdp1uTttETrkal-zNxlPClIZC8XdWmeliiygPeeTfeEzDQoFAtUyUwg",
    ),
  },
  {
    id: "onething",
    name: "OneThing",
    tagline: "One sticky note on your home and lock screen. Nothing else.",
    category: "Productivity · Android",
    logo: "/OneThing/logo.png",
    logoBg: "bg-white",
    accent: "#E8590C",
    href: "https://play.google.com/store/apps/details?id=com.fluvosoft.onething",
    ctaLabel: "Get on Google Play",
    shots: play(
      "rKI_WIC8hX7zRu2UxcB63U0SO1Vdjx6TMSPn5OlySpWXYv2iILc5bLhFjwv4Jdg4DEkLYRNvQyE6RWqM5GMdLw",
      "SWCwCa5W818E67ORHnNaystsy9iP10IEKGmI_b7G5W3qwDa6cEUepBm5dkgqjJCVX_WgAID3wODgd0q5aV_W",
      "kfJGVgzK6T9dnNejtOqPVbwmyp30y0DlycYIQcw3PYWfj3e_Di5c5oXKg2dHt66UDbOeFnSW7_B0xUIQUL5x",
      "JmGgd-iBUpS2w9A1Pb0i1iWMLsPB5mu9NmZX8NYEZsqkxITo8w3NxDdoizmxoNBtkcY2Y3aIG2Frms5gpeEVJg",
      "olyNIHWWybMaWXfc8CQDS56PcGR4-k_q4eYxWWYnBy6aMPuuH5fG6dqNlkloGlIvYf98_FSED-syXmq9j72L",
      "YJb3qmT-90EUqU79GhwyOGONXjObjd7KY5RgjknLU3f0lPsh71ULrz_cZ_1AdqXfC4xhMn-33Ps_dWmKV3nG5sg",
    ),
  },
  {
    id: "easy-invoice",
    name: "Easy Invoice",
    tagline: "Invoices in seconds. Track payments, export PDFs.",
    category: "Business · Web + Android",
    logo: "/images/easy_invoice_logo.webp",
    logoBg: "bg-white",
    accent: "#2A9D9F",
    href: "/easy-invoice",
    ctaLabel: "View product",
    shots: play(
      "_mIDkgN83J7UtTyQ9YaDxBlhsi0ey7X7JI5kYDRiup6tlf8Mkr49HmsW9IrVtHrE6h72yl1CybsoHC-SPl0LaPE",
      "mXcBX6FN51rQ7VAApRVo9VBVx33LatRhstCgs6epXYSUZa0RPA7SKO7D3ckCRf6rbtyp57mJwNbxjb_e6rLR",
      "z2FdnTlInEtE0pAAcVOUPf8FEfR-gPli1lm2e2yahHQ_WVU13mKs_X8U08Ob_Ca7dD6b8jdf-9qLo49F6I5u6A",
      "aaqWjVkcsan4h-AGrrF13QoK3mwOymi1VFog6DewNvraOa28xxJ-goVSCEw40afI4MGOpQ-E8DtXrjbogN0V",
      "ic9WsBXQajZM3rvQ4z40wq5phy4BvVhC2bVbdAYlIdqQU19C2iQp9754PDeHWMSqpz3Jm2RW0kn-xLybVyrW8mQ",
      "OfGNhd1nTbx-hHlA-ETA-uSoOk0VWR6e7w5Ti4LFMSvCydb-ChOR43kfcYbbIXX303PdeH1M3huWQlF4AcfU",
      "VZMwEH1H-kfxNhrq8paap1R2S229y_fC2L0j1Z8PE3MIwFMEjbxl0dxHTQLPIDSCOEAlwlcBEusa42R5JQMMAJg",
      "9rXPC_TvszX-Q5oMSrNkvWclmNUp-nTioowok203987Z-6TdKSY7ADCo1WtJBy7KEKJ5smLTftpsC6go1QTrag",
    ),
  },
  {
    id: "inventory",
    name: "Inventory Stock Tracker",
    tagline: "Scan barcodes, log stock in and out, and see what's running low.",
    category: "Business · Android",
    logo: "/images/inventory_stock_tracker_logo.webp",
    logoBg: "bg-white",
    accent: "#3B82F6",
    href: "/inventory-stock-tracker",
    ctaLabel: "View product",
    shots: [
      "/images/inventory-app/home.webp",
      "/images/inventory-app/bar-code-scan.webp",
      "/images/inventory-app/items.webp",
      "/images/inventory-app/add-item.webp",
      "/images/inventory-app/activity-log.webp",
      "/images/inventory-app/create-contact.webp",
    ],
  },
  {
    id: "kyoto",
    name: "KYOTO Habit Tracker",
    tagline: "Build habits with streaks, clubs and leaderboards.",
    category: "Lifestyle · Android",
    logo: "/habit_tracker/habit_tracker_kyoto_logo.png",
    logoBg: "bg-white",
    accent: "#8B5CF6",
    href: "/kyoto-habit-tracker",
    ctaLabel: "View product",
    shots: ["dashboard", "activity", "custom_habit", "clubs", "leaderboard", "explore", "profile"].map(
      (n) => `/habit_tracker/habit_tracker_KYOTO_${n}.jpeg`,
    ),
  },
  {
    id: "resume",
    name: "Resume Builder",
    tagline: "Pick a template, fill in your details, export a clean resume.",
    category: "Careers · Android",
    logo: "/images/resume-builder/resume_builder_logo.webp",
    logoBg: "bg-white",
    accent: "#0EA5E9",
    href: "/resume-builder",
    ctaLabel: "View product",
    shots: [1, 2, 3, 4].map((n) => `/images/resume-builder/resume_builder_fluvosoft${n === 1 ? "" : `_${n}`}.webp`),
  },
];

