

# Fix: Wrong Hero Image on Medical Slide

## Problem
The hero carousel has 4 slides but the image-to-tab mapping is wrong. The **MEDICAL** tab (slide 3) is showing `hero-2.jpg`, which contains a robotics/education scene (robotic arms, students at computers). There's an unused `hero-4.jpg` that likely contains the correct medical image.

## Root Cause
The previous Safari fix did not change images, but the original mapping was already incorrect — `hero-2.jpg` does not match the Medical slide content.

## Fix

### `src/components/HeroSection.tsx`
- Add `import hero4 from "@/assets/hero-4.jpg"`
- Change slide 3 (Medical) to use `hero4` instead of `hero2`
- Verify the other 3 slides still have correct images (Energy → hero1, Robotics → eduHero, Oil & Gas → hero3)

## Files to edit
- `src/components/HeroSection.tsx` — one import added, one image reference changed

