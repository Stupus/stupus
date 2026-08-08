# Stupus — student tools, made simple

A fast, clean, mobile-first student utility site built as routes in this app, so the live preview and publishing work. Same URLs you specced (`/vtu/cgpa-calculator/`, `/attendance-calculator/`, etc.), no login, all calculations run in the browser.

## Design

White background, dark text, blue as the single brand colour. Moderate radius, thin borders, minimal shadows, one subtle blue gradient reserved for the small home header and result highlights. No glassmorphism, no glowing cards, no big hero, no decorative blobs. Animation limited to hover/press feedback and the result appearing.

Tokens (`--brand-primary`, `--brand-light`, `--brand-gradient-start/end`, `--surface`, `--border`, `--text-secondary`, `--success`, `--error`) live in one stylesheet. A university page overrides only the accent tokens — buttons, links, focus rings, result highlight, selected nav. Layout, type, nav and background stay identical everywhere.

## Pages

- `/` — logo, tagline, prominent search box, Popular tools, Universities, More tools, footer.
- General tools: CGPA, SGPA, attendance, percentage, GPA↔percentage converter.
- `/universities/` — compact cards (logo, full name, two tool links) plus a "Couldn't find your university? Email hello@stupus.bond and we'll add it" block, repeated on the homepage.
- Per university (VTU, JNTUH, JNTUK, Anna University, AKTU): a hub page plus its CGPA/SGPA/percentage tools where the formula is verified.

## Search

Client-side, no library. A small static index of tools with synonyms and university abbreviations, so "vtu cgpa", "attendance", "jntuh sgpa", "percentage to gpa" all resolve. Results appear instantly under the box, keyboard navigable.

## Calculator UX

Calculator sits directly under the H1 and a two-line intro. Inputs sized to their value — credits and grades stay compact, still comfortable to tap on a 320px screen. Correct `inputmode`, `type`, labels and `aria-label` on every field. Errors are specific ("Please enter credits for Subject 3"), shown next to the field, and block calculation. Empty, negative, non-numeric, >100%, and zero-credit cases are all handled. Result is a large, obvious number in an accented panel.

Below the calculator: how the formula works, a worked example, related tools, and a short FAQ — written for that specific university, not duplicated.

## Assets and fallbacks

The site references `/assets/logo.png`, `/assets/favicon.png` and `/assets/universities/<slug>.webp` exactly as you'll upload them. Until a file exists, the header shows a text "Stupus" wordmark and university cards show initials in an accent tile; the real image takes over automatically once uploaded. I won't generate or commit any logo. The two general `.webp` images are added only where they genuinely help (homepage and universities index), lazy-loaded with explicit dimensions.

## University formulas

Before writing any university calculator I'll research current official rules per university and only ship what I can verify against an official or clearly authoritative source. Anything unverified is left out rather than guessed, and each page states the rule it uses. Formula code lives in its own module per university, separate from the UI, so corrections are one-line edits.

## SEO

Per-page unique title, meta description, single H1, self-referencing canonical (trailing-slash form, consistently linked), and og/twitter tags. JSON-LD: WebSite on home, BreadcrumbList on nested pages, FAQPage only where FAQs are visible. `robots.txt` allowing crawl, and a `sitemap.xml` listing every public tool and university page.

## Checks before I hand over

Render at 320/360/390/412/768/1024/1440, confirm no horizontal overflow, run each calculator against a hand-worked example, click through every internal link, and check the console is clean.

## Technical notes

Routes under `src/routes/` using TanStack file routing with trailing-slash-consistent paths; metadata via each route's `head()`. Shared UI as small components; university config (name, slug, logo path, theme colours, available tools) as one typed data file; calculation logic as pure functions with no DOM access. No backend, no database, no auth, no new heavy dependencies — Tailwind tokens plus the existing stack only. `sitemap.xml` served from a route so it stays in sync with the route list.
