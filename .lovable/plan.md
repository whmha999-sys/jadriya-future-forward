

## Fix Favicon with Knot Symbol Logo

The user has provided the knot symbol (without text) to use as the favicon. This will display much better at small sizes.

### Changes

1. **Copy uploaded image** to `public/favicon.png` (replacing current full-logo favicon)
2. **Update `index.html`** to add multiple favicon sizes for cross-browser support:
   - 32x32 and 16x16 standard favicons
   - 192x192 for Android/Chrome
   - 180x180 Apple Touch Icon

Since we can't generate resized versions in the browser, we'll use the single uploaded PNG as the favicon — it's already a clean symbol on transparent background, which will scale well. We'll reference it at multiple sizes.

### Files
- `public/favicon.png` — replace with uploaded knot symbol
- `index.html` — update icon link tags

