

# Update All Oil & Gas Content to Supply-Only Positioning

## Summary
All Oil & Gas text changes are localized in a single file: `src/contexts/LanguageContext.ts`. No layout, photo, or component changes needed.

## Changes (single file: `src/contexts/LanguageContext.ts`)

### 1. Hero Slide Headings (lines 446-461)
Update the 6 hero headings to the new supply-focused taglines:
- Slide 1: "The Right Pipe. Every Specification. On Time."
- Slide 2: "Every Tool Your Drill Site Demands."
- Slide 3: "Supplying the Instruments That Find What's Below."
- Slide 4: "Precision Instruments for Every Quality Check."
- Slide 5: "Materials Built for What Lies Beneath."
- Slide 6: "With You After Every Delivery." (already correct)

### 2. Services Grid Descriptions (lines 467-479)
Update the 6 short service descriptions on the main Oil & Gas landing page to reflect supply-only language. Also update the main heading from "Six Specialized Services" to "Six Specialized Supply Lines."

### 3. Sub-Page Overview Text (lines 517-586)
For each of the 6 sub-pages, update:
- **Overview heading** to match the new tagline
- **Overview paragraph** to the user-provided description
- **4 feature titles and descriptions** to match the user-provided features

### 4. Footer/Navbar Tagline (line 440)
Change `og.footerTagline` from "Trusted oil and gas equipment supply and services across the Middle East." to "Specialized supplier of oil and gas equipment across the region."

### 5. Arabic Translations
All Arabic translations for the above keys will be updated to match the new English content.

## Files Modified
- `src/contexts/LanguageContext.ts` — ~70 translation key updates (English + Arabic)

## What Will NOT Change
- No photos, layouts, stats bar, navigation, or other pages touched
- No component files modified
- Service names (titles) remain the same

