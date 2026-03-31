
Goal: fix the runtime crash (`useLanguage must be used within LanguageProvider`) without losing the Arabic toggle, 150% logo size, or “main menu not clickable” behavior.

1) Stabilize the language context architecture
- Refactor `src/contexts/LanguageContext.tsx` into a more HMR-safe structure:
  - `LanguageContext.ts` (context + types + translations object)
  - `LanguageProvider.tsx` (provider component only)
  - `useLanguage.ts` (hook only)
- Reason: this avoids fragile Fast Refresh behavior from mixing provider/hook/translations in one `.tsx` module.

2) Enforce a single import path everywhere
- Normalize all imports to alias form (`@/contexts/...`) in:
  - `src/App.tsx`
  - all components/pages that call `useLanguage`
- This prevents duplicate module instances of the same context during HMR (a common cause of provider/hook mismatch).

3) Make provider mounting unambiguous at the app root
- Ensure `LanguageProvider` wraps the whole routed app at the top level (same effective scope as now, but with the new split files).
- Keep `Navbar`, `MegaMenu`, and all translated sections under that provider.

4) Add a safe dev-time fallback to prevent blank-screen loops
- In `useLanguage`, keep strict behavior in production.
- In development only, if context is temporarily unavailable during hot reload, return a safe English fallback and log a warning instead of throwing hard.
- This prevents the error overlay loop while preserving production correctness.

5) Re-verify requested UX behaviors after fix
- Arabic toggle still switches all translated strings and RTL direction.
- Logo remains 150% in navbar.
- Mega menu parent categories remain non-clickable; only sub-items navigate.

Technical details
- Files to update:
  - `src/contexts/LanguageContext.tsx` (replace/split)
  - `src/contexts/LanguageContext.ts`
  - `src/contexts/LanguageProvider.tsx`
  - `src/contexts/useLanguage.ts`
  - `src/App.tsx` (provider import path cleanup)
  - all `useLanguage` consumers (import path normalization)
- Fallback shape in dev:
  - `{ language: "en", setLanguage: noop, t: (k) => k or English map lookup, isRTL: false }`
- Keep `dir="rtl"` handling in provider wrapper exactly as current behavior.

Validation checklist
- Load `/` and confirm no runtime context error.
- Toggle language EN ↔ AR and verify:
  - navbar labels
  - homepage sections
  - service pages
  - contact page
  - footer links/text
- Open mega menu and confirm top-level items do not navigate; sub-items do.
- Check desktop + mobile widths to confirm logo scaling and no layout regressions.
