

## Plan: Move Logo Image to the Right

Add a `ml-4` (margin-left) class to the logo `<img>` element only, keeping the text ("AL-JADRIYA Engineering") in its current position.

**Change in `src/components/Navbar.tsx` (line 32):**
- From: `className="h-24 w-24 -mt-1"`
- To: `className="h-24 w-24 -mt-1 ml-4"`

This shifts only the image logo to the right without affecting the written text beside it.

