
Problem likely comes from two separate places, not one:

1. Preview/build issue, your current preview has signs of instability
- The session context shows `vite server connection lost` and a `503` on the preview root.
- If the preview is stale or half-loaded, you will not reliably see recent fixes even if the code was changed.

2. The image implementation is still fragile for mobile Safari
- In `src/components/HeroSection.tsx`, one hero background still uses a remote Unsplash URL instead of a local asset. That can fail on phones, slower networks, or Safari/privacy restrictions.
- In `src/components/CaseStudiesGrid.tsx` and `src/pages/CaseStudies.tsx`, the galleries still use stacked `absolute` images with opacity transitions. Safari often fails to paint these reliably when some slides are lazy-loaded and hidden with `opacity: 0`.

Plan

1. Re-check and harden the hero background
- Replace the external Unsplash hero slide with a local bundled asset.
- Keep the Safari viewport-height fix, but remove the dependency on third-party image delivery.

2. Make case study sliders Safari-safe
- Refactor both sliders so the active image is rendered more reliably on mobile.
- Prefer one visible image at a time instead of many absolutely stacked images.
- Preload the first image, and likely the next image too, instead of relying on hidden lazy-loaded slides.
- Add a neutral background/fallback so the block never appears as an empty white panel while loading.

3. Verify why you do not see the previous fixes
- The current evidence suggests the preview may not be showing the newest code because the dev server dropped.
- After implementation, I would verify both preview and published behavior separately, because the issue may be partly code and partly stale preview state.

4. Keep the previous mobile fixes, but strengthen them
- Keep the Safari animation compatibility changes in `src/index.css`.
- Keep the responsive text fix for `AL-HUSAYNIYYA`.
- Keep the `dvh` hero height fixes.
- Improve the image rendering logic itself, because that is the weakest part now.

Files to update
- `src/components/HeroSection.tsx`
- `src/components/CaseStudiesGrid.tsx`
- `src/pages/CaseStudies.tsx`
- possibly `src/index.css` for a small image/fallback helper class if needed

Technical details
- Most likely background issue: remote hero image URL in `HeroSection`
- Most likely case-study issue: `absolute inset-0 + opacity transition + lazy loading` on iPhone Safari
- Most likely reason you cannot see earlier changes: preview server instability, shown by `503` and lost Vite connection in the current session data

Expected result after implementation
- Hero backgrounds load consistently on phone
- Case study images appear immediately instead of blank white boxes
- The same behavior is visible in both preview and published site after refresh/republish
