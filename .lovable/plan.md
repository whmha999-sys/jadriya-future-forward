

## Plan: Remove Case Studies Section from Oil & Gas Page

**File to edit:** `src/pages/OilGas.tsx`

1. Remove the case study image imports (`case1`, `case2`, `case3`)
2. Remove the `caseStudies` array definition
3. Remove the entire Case Studies `<section>` block (the one with `og.caseStudies` heading)
4. Remove unused translation keys reference (`og.readMore`, etc.) if they become orphaned

No other files or sections will be touched.

