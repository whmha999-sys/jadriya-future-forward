
# Why the "Lovable-style" icon shows in Google search

## What's actually happening

Your site code is correct. `index.html` already references your AL-JADRIYA favicon files (`/favicon.ico`, `/favicon.png`, `/apple-touch-icon.png`), and those files exist in `public/` with your knot logo.

The icon Google shows next to `aljadriya.com` is **Google's cached favicon snapshot**, taken by Googlebot the last time it crawled your site, likely **before** the favicon was replaced. Google can take days or weeks to refresh favicon caches independently of page content. This is not something your visitors see in their browser tab — only Google search results.

A second contributing factor: the published Lovable preview domain (`*.lovable.app`) and your custom domain may have served different favicons at different times, and Googlebot may have indexed an older snapshot.

## The fix (two parts)

### 1. Harden the favicon setup so Google can't be confused

Edit `index.html` to:
- Add an explicit `sizes` attribute on the PNG icon (`sizes="32x32"`)
- Add a larger PNG variant reference (`sizes="192x192"`) which Google specifically prefers for Search results, per Google's own guidance
- Keep the existing `.ico` and `apple-touch-icon` entries

Result snippet (head):
```text
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

### 2. Generate a proper 192x192 PNG from the logo

- Create `public/favicon-192.png` from the existing AL-JADRIYA logo at exactly 192x192 (Google's recommended minimum for Search favicons)
- Keep all existing favicon files untouched

## What stays unchanged

- The site code, layout, branding, and all routes
- Existing favicon.ico, favicon.png, apple-touch-icon.png
- Meta tags, OG image, titles, descriptions

## What you (the user) need to do after deploy

These steps are outside the codebase, but required for Google to refresh:

1. After the change is published, open Google Search Console for `aljadriya.com`
2. Use **URL Inspection** on `https://aljadriya.com/` then click **Request Indexing**
3. Wait 3 to 14 days; Google refreshes favicon caches on its own schedule and will not honor a manual "refresh favicon" request
4. Hard-refresh your browser tab (Cmd/Ctrl + Shift + R) to confirm your local browser sees the new icon — it already should

Note: there is no API or button that forces Google to update the favicon thumbnail in search results immediately. The hardened markup above maximizes the chance that the next crawl picks up the correct icon.

## Files to edit

- `index.html` — add the two extra `<link rel="icon">` entries
- `public/favicon-192.png` — new file, 192x192 AL-JADRIYA logo
