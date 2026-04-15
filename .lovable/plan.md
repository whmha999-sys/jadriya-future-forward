

# Fix Safari Mobile Issues + Al-Husayniyya Text Overflow + Hero Image Cropping

## Three Issues

1. **Partners section not scrolling on mobile Safari** -- missing `-webkit-` animation prefixes and Safari collapsing `w-max` containers
2. **Case Studies images not loading on mobile Safari** -- `loading="lazy"` on absolute-positioned images with opacity transitions fails on Safari
3. **"AL-HUSAYNIYYA" text overflow** -- the stat text at 60px is too wide for a mobile card, causing overflow (image 1)
4. **Hero/sub-page images cut in half on mobile** -- the hero uses `100vh` but Safari's dynamic toolbar eats into viewport height; sub-page heroes at `70vh` also crop poorly on mobile (images 2 and 3)

## Files to Edit

### 1. `src/index.css` -- Safari animation fix
- Add `-webkit-` prefixed `@keyframes scroll-left` and animation properties
- Add `will-change: transform` and `backface-visibility: hidden` for GPU compositing

### 2. `src/components/PartnersSection.tsx` -- Layout fix for Safari
- Change container from `flex w-max` to `inline-flex min-w-max`
- Add `min-w-[40px]` to each logo wrapper to prevent Safari collapse

### 3. `src/components/CaseStudiesGrid.tsx` -- Image loading fix
- Change `loading="lazy"` to `loading="eager"` for the currently active image (index 0 initially)
- Add `-webkit-backface-visibility: hidden` style for Safari compositing

### 4. `src/pages/CaseStudies.tsx` -- Same image fix + Al-Husayniyya text
- Fix image slider `loading` attribute same as above
- Make the achievement stat text responsive: use `text-[28px] sm:text-[40px] md:text-[60px]` instead of fixed `text-[60px]` so "AL-HUSAYNIYYA" fits on mobile
- Add `break-all` or `overflow-hidden` as safety net

### 5. `src/components/HeroSection.tsx` -- Hero image not cut on mobile
- Change `height: '100vh'` to use `100dvh` (dynamic viewport height) which accounts for Safari's collapsible toolbar
- Add fallback: `min-height: 100vh` for browsers that don't support `dvh`

### 6. `src/components/medical/MedicalServiceSubPage.tsx` -- Sub-page hero fix
- Change `h-[70vh]` to use `h-[70dvh]` with a `min-h-[70vh]` fallback
- This prevents the toolbar from eating into the hero on Safari mobile

## What stays unchanged
- All content, colors, layout structure, and desktop behavior remain the same
- Only mobile Safari rendering is affected

