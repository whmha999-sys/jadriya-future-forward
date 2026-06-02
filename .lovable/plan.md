## Plan: Replace navbar logo with AL-JADRIYA knot logo and enlarge it

### What changes
1. **Copy the knot logo** (same one used for favicon) into `src/assets/` as `logo-knot.png` so the navbar can import it.
2. **Update `src/components/Navbar.tsx`**:
   - Replace both `logoIcon` and `logoDark` imports with the new knot logo (same image used in both scroll states, since the knot works on both transparent and solid backgrounds).
   - Increase the logo container size from `h-14 w-14` to `h-20 w-20` (≈43% bigger). Nothing else — text, spacing, nav links, language toggle, menu button all stay identical.

### What stays the same
- Navbar height, padding, background blur behavior
- "AL-JADRIYA / ENGINEERING" text next to the logo
- All other components and pages
- Division navbars (Oil & Gas, Medical, Robotics) — untouched unless you want those too

### Files
- `src/assets/logo-knot.png` (new, from the uploaded knot PDF)
- `src/components/Navbar.tsx` (logo import + size class only)

Confirm and I'll implement.
