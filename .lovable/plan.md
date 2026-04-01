

## Plan: Fix Hero Timer to 5s and Move Pause to Tab Bar Only

### What Changes

Two changes across all 4 hero sliders (Homepage, Medical, Oil & Gas, Robotics):

1. **Timer to 5 seconds** — adjust the progress increment so 100% is reached in 5 seconds (currently varies per page)
2. **Pause only on bottom tab bar** — move `onMouseEnter`/`onMouseLeave` from the full `<section>` to only the bottom tab bar `<div>`, so hovering over the image does not pause the slideshow

### Files to Edit

| File | Timer fix | Pause fix |
|------|-----------|-----------|
| `src/components/HeroSection.tsx` | Change `prev + 1.25` to `prev + 2` (100 / 50 intervals = 5s) | Move `onMouseEnter`/`onMouseLeave` from `<section>` (line 76-77) to the bottom tab bar `<div>` (line 129) |
| `src/pages/Medical.tsx` | Already `prev + 2` — correct for 5s | Move from `<section>` (line 86-87) to bottom tab bar `<div>` (line 125) |
| `src/pages/OilGas.tsx` | Already `prev + 2` — correct for 5s | Move from `<section>` (line 86-87) to bottom tab bar `<div>` (line 125) |
| `src/pages/Robotics.tsx` | Already `prev + 2` — correct for 5s | Move from `<section>` (line 70-71) to bottom tab bar `<div>` (line 109) |

### Technical Detail

- For HeroSection.tsx: progress increments at 100ms intervals. `prev + 2` means 50 ticks to reach 100% = 5 seconds exactly.
- The `onMouseEnter={() => setPaused(true)}` and `onMouseLeave={() => setPaused(false)}` handlers will be removed from the hero `<section>` element and placed on the bottom tab bar container instead. This means hovering over the photo/content area will NOT pause the slideshow — only hovering over the named tab sections (ENERGY, ROBOTICS, MEDICAL, OIL & GAS) at the bottom will pause it.

