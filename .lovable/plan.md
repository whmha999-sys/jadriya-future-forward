

## Fix: Scale down dark logo to visually match yellow logo

**Problem**: The dark logo image file has less internal whitespace than the yellow logo file. At identical container size (`h-24 w-24`), the dark logo renders visually bigger.

**Solution**: Scale the dark logo down within its container using `inset-[8%] h-[84%] w-[84%]` instead of `inset-0 h-full w-full`. The yellow logo stays unchanged.

### Change in `src/components/Navbar.tsx` (line 57)

Dark logo img classes change from:
```
absolute inset-0 h-full w-full object-contain ...
```
to:
```
absolute inset-[8%] h-[84%] w-[84%] object-contain ...
```

This is the same fix we had before that was accidentally reverted. Only the dark logo is affected; the yellow logo and all navbar behavior (background, scroll triggers) remain exactly as they are.

