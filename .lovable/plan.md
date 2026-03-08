

## Fix: Visually match dark logo size to yellow logo

**Problem**: The two logo image files have different amounts of internal whitespace. The dark logo has less padding in the image itself, so at identical container dimensions it renders visually larger.

**Solution**: Scale the dark logo down slightly within the container to compensate for the difference in internal padding. Based on the visual difference in the screenshots, the dark logo needs roughly 10-15% reduction.

### Changes to `src/components/Navbar.tsx`

Update the dark logo `<img>` to use `inset-[8%] h-[84%] w-[84%]` instead of `inset-0 h-full w-full`. This shrinks the dark logo just enough to visually match the yellow logo while keeping the smooth crossfade intact.

```tsx
<img
  src={logoDark}
  alt="AL-JADRIYA Engineering"
  className={`absolute inset-[8%] h-[84%] w-[84%] object-contain transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
/>
```

This accounts for the yellow logo having more built-in whitespace in its image file. The crossfade transition remains smooth since both images are still absolutely positioned within the same container.

