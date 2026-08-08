# Stupus: real logos, SVG tool icons, faster loads, stronger SEO

## 1. Logos (WebP, kilobyte-sized)

The five university logos you uploaded map to the five universities already in the site:

| Upload | University |
| --- | --- |
| JNTU Kakinada mark | JNTUK |
| JNTU Hyderabad mark | JNTUH |
| Visvesvaraya Technological University mark | VTU |
| Anna University mark | Anna University |
| Dr. A.P.J. Abdul Kalam Technical University mark | AKTU |

Each one gets trimmed of empty margins, resized to the size it's actually shown at (72x72 logical, 144x144 for retina), converted to WebP, and compressed to roughly 4-10 KB each. The code already points at `/assets/universities/<slug>.webp`, so today every card shows the initials fallback — after this the real marks appear everywhere (home, universities page, university hubs, tool pages).

The sixth upload is the Stupus graduation-cap "S". It is currently near-white, so it would be invisible on the site's light background. It gets recoloured to the brand colour, exported as a compact WebP wordmark/mark for the header, and also used to replace the default favicon (a real square PNG in `public/`, plus removing the old Lovable `favicon.ico`). If you'd rather keep the white version for a dark header, say so and I'll do that instead.

Loading behaviour: explicit width/height on every logo so nothing shifts while loading, lazy loading below the fold, and the header logo loaded eagerly with high priority so it isn't the slow element.

## 2. Remove "Popular tools"

The "Popular tools" block on the home page is deleted, along with the now-unused `popularTools` export. "More tools" stays and is repositioned so the page reads: hero + search → Universities → All tools → What is Stupus → FAQ.

## 3. SVG icons for tools (no images, no emojis)

A small set of hand-drawn inline SVG icons — one per tool: CGPA, SGPA, attendance, percentage, GPA converter. They're React components using `currentColor`, so they inherit the brand colour, cost zero network requests, and stay crisp at any size. Used on the home page tool list, the All tools page, and the tool page headers. No emoji anywhere, no icon image files.

## 4. Speed / PageSpeed

- Logos as tiny WebP (above) — the biggest current win once real images land.
- Inline SVG icons instead of any icon font or image.
- Reserved dimensions on all images to keep CLS at zero.
- Preload only the header logo; nothing else competes for early bandwidth.
- Prune unused shadcn UI files that nothing imports, so less code is shipped and parsed.
- Verify with a production build and check the rendered page for layout shift and console errors.

## 5. SEO — measured improvements, not stuffing

Deliberately restrained: better structure and accuracy rather than more keywords.

- **Keyword research** against real search demand for terms like "cgpa calculator", "sgpa calculator vtu", "jntuh cgpa to percentage", "attendance percentage calculator" using the Semrush data available here, then titles and descriptions written to match the phrasing students actually search — one clear primary phrase per page, no repetition.
- **Titles/descriptions** reviewed on every route (home, tools, universities, each calculator, each university hub and university tool page) so each is unique, under 60 / 160 characters, and readable.
- **Structured data**: `WebSite` + `SoftwareApplication` on the home page, `FAQPage` where FAQs already exist, `BreadcrumbList` on inner pages. Nothing invented — only facts the pages already state.
- **Content quality**: each calculator page gets a short, genuinely useful "how it's calculated" explanation and the university's own rule where published, since thin pages are what actually holds this kind of site back.
- **Internal linking**: related-tool links between calculators and their university versions.
- **Sitemap**: keeps working; `og:image`/`twitter:image` are only added once there's a real absolute URL (after publishing), never as placeholders.
- Single H1 per page, semantic headings, alt text on every logo.

## 6. UI/UX polish

Consistent card and list styling across home, tools and university pages; clearer tap targets on mobile (you're viewing at 360px wide); icon + label alignment; visible focus states; and the university cards sized so the new logos read clearly at a glance.

## Technical notes

- Image pipeline runs in the sandbox (trim → resize → `cwebp`-style WebP encode), output committed under `public/assets/`.
- `src/data/tools.ts`: drop `popularTools`, add an `icon` key per general tool.
- New `src/components/ToolIcon.tsx` holding the inline SVG set.
- `src/components/Brand.tsx`: point `BrandLogo` at the new WebP, keep the text fallback.
- Per-route `head()` edits across `src/routes/*`; JSON-LD via the existing `scripts` option.
- Favicon: real file in `public/`, referenced from `__root.tsx`, old `favicon.ico` removed.
