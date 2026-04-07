

## Plan: Resize Small Partner Logos

### Problem
6 of 10 partner logos appear too small compared to the others (Karl Storz, Stryker, Vertisa, COMEG look fine).

### Solution
Give the 6 small logos individual height overrides so they visually match the larger ones. Instead of a uniform `h-8` (32px) for all logos, assign per-partner heights.

### Changes

**File: `src/components/PartnersSection.tsx`**

Add a `height` property to each partner in the array:

- Karl Storz → `h-8` (32px) — keep as is
- Stryker → `h-8` — keep as is
- Vertisa → `h-8` — keep as is
- COMEG → `h-8` — keep as is
- Coolex → `h-12` (48px) — scale up
- Angelantoni → `h-12` (48px) — scale up
- Histo-Line → `h-12` (48px) — scale up
- Medisam → `h-12` (48px) — scale up
- Amnotec → `h-12` (48px) — scale up
- Sternmed → `h-10` (40px) — scale up

Each partner object gets a `className` field (e.g., `"h-12"`), and the `<img>` tag uses that instead of the hardcoded `h-8`. Heights can be fine-tuned after seeing the result.

