

## Plan: Swap Specialization Images for Medical Tab

### What changes

1. **Copy the uploaded hospital photo** to `src/assets/spec-medical-2-new.jpg` — this becomes the new Capacity Management image.

2. **Update `src/components/SpecializationsSection.tsx`**:
   - Add a new import for the new capacity image
   - Set Capacity Management (spec.medical.2) to use the new uploaded photo
   - Set Tender Management (spec.medical.3) to use the OLD `specMedical2` image (the current capacity management photo)

This way the old capacity management photo moves to tender management, and the new hospital ward photo takes its place in capacity management. No image files are deleted.

### Files modified
- `src/assets/spec-medical-2-new.jpg` (new file — copied from upload)
- `src/components/SpecializationsSection.tsx` (update imports and photo references)

