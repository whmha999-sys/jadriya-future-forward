

## Plan: Frosted Glass Blur Effect on Specializations Panel

The ABB reference shows the bottom panel uses a **backdrop blur** (frosted glass) effect over the image rather than a solid dark color. The image extends full-height behind the panel and the text area has a semi-transparent blurred background.

### Changes in `src/components/SpecializationsSection.tsx`

1. **Make the image fill the entire right panel** — change the layout so the image is positioned absolutely behind both the photo area and the text panel (full height).

2. **Replace the solid `#1A2B4A` panel** with a semi-transparent backdrop-blur panel:
   - `backdrop-blur-xl bg-black/40` (or similar) instead of `bg-[#1A2B4A]`
   - Remove the gradient div hack (`-mt-16` trick)

3. **Use a stacked layout**: The right panel becomes `relative` with the image as absolute full-cover, and the bottom text area overlays with `backdrop-blur`.

This matches the ABB style where you can see the blurred image behind the text content.

