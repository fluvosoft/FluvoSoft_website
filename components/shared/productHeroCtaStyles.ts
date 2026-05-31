export const productHeroCtaGhost =
  "ei-cta-ghost border-2 border-ei-forest/25 bg-transparent transition-[transform,background-color,border-color] hover:border-ei-lime hover:bg-ei-lime/10";

/** Primary filled hero CTA (non-ghost). */
export const productHeroCtaBase =
  "inline-flex h-[56px] min-w-[168px] items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime";

/** Download APK — height matches Play badge button; width fits one line of text. */
export const productHeroCtaGhostApkButton = `${productHeroCtaGhost} inline-flex h-[56px] w-auto shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-3.5 text-sm font-semibold leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime`;

/** Google Play badge — snug width around the badge image. */
export const productHeroCtaGhostBadgeButton = `${productHeroCtaGhost} inline-flex h-[56px] w-fit shrink-0 items-center justify-center overflow-hidden rounded-xl px-2 py-1 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime`;

/** Filled Google Play store CTA (dark pill, white label). */
export const productHeroCtaPlayStoreButton =
  "ei-cta-primary inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-black/10 bg-[#142b22] text-white shadow-[0_2px_8px_rgba(20,43,34,0.35)] transition-[transform,background-color,box-shadow] hover:bg-[#1a352b] hover:shadow-[0_4px_14px_rgba(20,43,34,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime";

export const productHeroCtaPlayStoreButtonLg = `${productHeroCtaPlayStoreButton} h-[56px] min-w-[200px] px-5 py-3`;

export const productHeroCtaPlayStoreButtonSm = `${productHeroCtaPlayStoreButton} h-[48px] min-w-[168px] gap-2.5 px-4 py-2.5`;

export const productHeroCtaGhostSm = `${productHeroCtaGhost} inline-flex h-[48px] w-auto shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-3 text-xs font-semibold leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime`;

export const productHeroCtaGhostBadgeSm = `${productHeroCtaGhost} inline-flex h-[48px] w-fit shrink-0 items-center justify-center overflow-hidden rounded-xl px-1.5 py-1 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ei-lime`;

/** @deprecated Use productHeroCtaGhostApkButton */
export const productHeroCtaGhostButton = productHeroCtaGhostApkButton;
