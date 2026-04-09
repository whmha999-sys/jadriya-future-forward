

# Remove Tikrit Office, Tikrit Address, and +962 788310769 Phone Number

## Summary
Remove all references to Tikrit (office, address "Main Street opposite Governorate Building, Salah al-Din"), and the Jordan phone number (+962 788310769) from every page across the site.

## Files to Edit

### 1. `src/contexts/LanguageContext.ts` — Translation strings
- Remove keys: `menu.tikritOffice`, `mega.tikritOffice`, `contact.tikrit`, `contact.officeTikrit`, `footer.tikrit`, `footer.tikritAddress`, `footer.tikritOffice`
- Keep all Amman/Baghdad entries intact

### 2. `src/components/FooterSection.tsx` — Main footer
- Remove the `+962 788310769` phone number block (lines 33-36)
- Remove the Tikrit office address block (lines 51-56)
- Remove the "Tikrit Office" quick link button (lines 143-145)

### 3. `src/components/medical/MedicalFooter.tsx` — Medical footer
- Remove the `+962 788310769` phone number block (lines 29-32)
- Remove the Tikrit office address block (lines 96-102)

### 4. `src/components/oilgas/OilGasFooter.tsx` — Oil & Gas footer
- Remove the `+962 788310769` phone number block (lines 29-32)
- Remove the Tikrit office address block (lines 96-102)

### 5. `src/components/MegaMenu.tsx` — Navigation mega menu
- Remove the Tikrit Office button (lines 253-255)
- Remove the Jordan phone number line (lines 261-263)

### 6. `src/pages/Contact.tsx` — Contact page
- Remove the `tikritRef` and all `showTikrit` logic
- Remove the Tikrit office card (lines 144-157)
- Remove `tikrit` cases from `getInitialOffice` and `getInitialCountry`
- Simplify `handleOfficeSelect` (no more tikrit ref)

### 7. `src/components/ContactForm.tsx` — Contact form
- Remove the Tikrit option from the office `<select>` dropdown (line 160)

## What stays unchanged
- All page content, design, and layout
- Amman office info remains everywhere
- Iraq phone number (+964 7717323273) remains
- Baghdad office references remain

