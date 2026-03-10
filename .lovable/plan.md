

## Favicon as SVG

You're right — converting the logo to SVG (vector format) would make it scale perfectly at any size, staying crisp and sharp in browser tabs.

### Plan

1. **Generate an SVG version** of the knot symbol using the AI image generation tool, creating a clean vector trace of the logo
2. **Save as `public/favicon.svg`**
3. **Update `index.html`** to use the SVG favicon:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```
4. **Keep the PNG fallback** for older browsers that don't support SVG favicons

### Why SVG helps
- Renders perfectly at 16px, 32px, or any size — no blurriness
- Smaller file size for simple logos
- Supported by all modern browsers (Chrome, Firefox, Safari, Edge)

### Alternative approach
If the AI-generated SVG doesn't match your logo precisely, you could use a tool like [Vectorizer.ai](https://vectorizer.ai) or Adobe Illustrator to trace your PNG into a proper SVG, then upload it here. That would give the most accurate result.

