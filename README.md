# Remix of Stupus Student Tools

STUPUS — COMPLETE WEBSITE BUILD PROMPT

1. PROJECT OVERVIEW

Build a production-ready, lightweight, mobile-first student tools website called Stupus.

Stupus is a student utility platform focused initially on India.

The core philosophy is:

Simple. Fast. Useful. Easy to find. Easy to use.

Do NOT design Stupus like a complicated SaaS dashboard, AI landing page, or flashy startup website.

The website must look modern and polished, but usability comes first.

A student should be able to search for a tool, open it, understand it immediately, enter their values, and get the result with minimal effort.

2. MOST IMPORTANT DESIGN PRINCIPLE

DO NOT OPTIMIZE FOR "WOW"

Do not create a website that looks impressive in a screenshot but is difficult to use.

Avoid:

Huge gradient backgrounds

Excessive glassmorphism

Glowing cards

Excessive shadows

Large decorative blobs

Complicated animations

Excessive rounded containers

Giant hero sections

Text over busy backgrounds

Excessive colors

Unnecessary illustrations

Complicated navigation

Dashboard-style layouts

Heavy visual effects

The website should feel:

Clean

Calm

Modern

Trustworthy

Lightweight

Student-friendly

Fast

Obvious

The design should be beautiful because it is clean and intentional, not because it contains many effects.

3. BRANDING

Brand name

Stupus

Suggested tagline:

Student tools, made simple.

You may use this tagline throughout the website where appropriate.

Main brand color

Use blue as Stupus's primary brand color.

The overall site should remain primarily white/light.

Use blue for:

Primary buttons

Links

Important UI elements

Selected states

Icons where appropriate

Small visual accents

Use a subtle blue gradient in selected areas only.

Do NOT make the entire website a blue gradient.

Example visual direction:

White background

Dark text

Blue primary actions

Very light blue surfaces

Subtle blue gradients

Clean borders

Moderate border radius

Minimal shadows

4. UNIVERSITY-SPECIFIC THEMING

Stupus will contain university-specific tools.

Each university has its own logo.

University logos will be manually added as lightweight .webp files.

Example:

assets/
└── universities/
    ├── vtu.webp
    ├── jntuh.webp
    ├── jntuk.webp
    ├── anna-university.webp
    └── aktu.webp


Each logo should ideally be around 5–15 KB, approximately 10 KB where practical.

University page colors

Each university page should have a subtle theme based on that university's identity.

For example:

University logo
        ↓
University-specific predefined theme
        ↓
Primary accent
Light accent
Subtle gradient


IMPORTANT:

Do NOT automatically analyze/extract colors from the WebP logo in the browser.

Instead, define each university's colors manually in the university configuration/data.

Example concept:

{
  name: "Example University",
  slug: "example-university",
  logo: "/assets/universities/example.webp",
  theme: {
    primary: "...",
    light: "...",
    gradientStart: "...",
    gradientEnd: "..."
  }
}


The university theme should affect:

Primary buttons

Links

Small accents

Calculator result highlights

Focus states

Subtle gradients

Selected navigation states

The following must remain consistent:

Stupus branding

Layout

Typography

Navigation

General background

Overall design system

Do NOT turn an entire university page into a strong red/green/blue background.

The university color should be an accent, not the entire interface.

5. LOGO AND FAVICON

I will manually add:

assets/logo.png
assets/favicon.png


Do NOT generate replacement logos.

Do NOT create another logo.

Use:

assets/logo.png


for the Stupus brand logo.

Use:

assets/favicon.png


for the favicon.

Make sure the HTML references these files correctly.

6. WEBSITE STRUCTURE

Build a clean structure similar to:

/
├── index.html
│
├── cgpa-calculator/
│   └── index.html
│
├── sgpa-calculator/
│   └── index.html
│
├── attendance-calculator/
│   └── index.html
│
├── percentage-calculator/
│   └── index.html
│
├── gpa-converter/
│   └── index.html
│
├── universities/
│   └── index.html
│
├── vtu/
│   ├── index.html
│   ├── cgpa-calculator/
│   │   └── index.html
│   ├── sgpa-calculator/
│   │   └── index.html
│   └── percentage-calculator/
│       └── index.html
│
├── jntuh/
│   ├── index.html
│   ├── cgpa-calculator/
│   │   └── index.html
│   └── sgpa-calculator/
│       └── index.html
│
├── jntuk/
│   └── ...
│
├── anna-university/
│   └── ...
│
├── aktu/
│   └── ...
│
├── assets/
│   ├── logo.png
│   ├── favicon.png
│   ├── universities/
│   │   ├── vtu.webp
│   │   ├── jntuh.webp
│   │   ├── jntuk.webp
│   │   ├── anna-university.webp
│   │   └── aktu.webp
│   └── images/
│       ├── image-1.webp
│       └── image-2.webp
│
├── robots.txt
├── sitemap.xml
├── manifest.json
└── ...


Use clean, human-readable URLs.

Avoid URLs such as:

/tool?id=123
/calculator.php?university=vtu
/page.html?id=5


Prefer:

/vtu/cgpa-calculator/
/jntuh/cgpa-calculator/
/attendance-calculator/


7. HOMEPAGE

The homepage must immediately communicate what Stupus does.

Do not create an enormous marketing hero.

Recommended structure:

STUPUS

Student tools, made simple.

[ Search for a tool... ]

Popular tools

[ CGPA Calculator ]
[ SGPA Calculator ]
[ Attendance Calculator ]
[ Percentage Calculator ]

Universities

[ VTU ]
[ JNTUH ]
[ JNTUK ]
[ Anna University ]
[ AKTU ]

More tools

Short useful description

Footer


The search box should be prominent.

The user should not have to open a menu to find tools.

8. SEARCH

Implement a lightweight client-side search.

Search should recognize:

Tool names

Synonyms

University names

University abbreviations

Common student search terms

Examples:

vtu cgpa


should find:

VTU CGPA Calculator


attendance


should find:

Attendance Calculator


jntuh sgpa


should find:

JNTUH SGPA Calculator


Search results should be simple and fast.

Do not add a heavy search library unless genuinely necessary.

9. CALCULATOR UX

The calculator is the most important part of Stupus.

The calculator should appear near the top of the page.

Do not force users to scroll through a large article before reaching the calculator.

A typical tool page:

University logo

VTU CGPA Calculator

Short explanation

Calculator

[ Input ]
[ Input ]
[ Input ]

[ Calculate ]

Your CGPA
8.42


The result should be visually obvious.

10. INPUT DESIGN

Inputs must match the expected value.

If an input only requires:

8.5


do not create a huge input box.

If an input only requires 2–4 digits, use a compact input width.

Examples:

Semester: [  8  ]
Credits:  [ 24 ]
Grade:    [ A  ]


Do not make every input full-width unnecessarily.

However, on very small mobile screens, inputs must remain comfortable to tap.

Use appropriate:

inputmode

type

autocomplete

aria-label

validation

11. MOBILE FIRST

Stupus is primarily a mobile website.

Design for Android phones first.

The site must work beautifully at:

320px

360px

375px

390px

412px

larger phones

tablets

desktop

Do not simply shrink the desktop website.

Build the layout mobile-first.

Buttons must have comfortable touch targets.

Text must remain readable.

Avoid horizontal scrolling.

12. PERFORMANCE

Performance is a major requirement.

The website should be extremely lightweight.

Avoid:

Large JavaScript bundles

Heavy CSS frameworks

Unnecessary dependencies

Huge images

Autoplay media

Video backgrounds

Excessive fonts

Unnecessary third-party scripts

Large animation libraries

Prefer:

Native HTML

CSS

Vanilla JavaScript where practical

Small reusable components/modules

WebP images

Lazy loading for non-critical images

System fonts or one lightweight font if absolutely necessary

Images should be compressed.

The two general website images should be lightweight .webp files, preferably around 20–50 KB each or less where quality allows.

University logos should be around 10 KB each where practical.

13. SEO

SEO is a major requirement.

Do NOT simply add the phrase "SEO optimized" and consider the work finished.

Every important page must have proper SEO implementation.

Each page needs:

<title>
<meta name="description">
<link rel="canonical">
<meta name="robots">


Use proper:

<h1>
<h2>
<h3>


hierarchy.

Do not use multiple unnecessary H1 elements.

14. UNIQUE SEO FOR EVERY PAGE

Every calculator page must have unique:

Title

Meta description

H1

Introductory content

FAQs where appropriate

Internal links

Structured data where appropriate

Do NOT copy the exact same paragraph onto every university page.

For example:

VTU CGPA Calculator should contain information specifically relevant to VTU.

JNTUH CGPA Calculator should contain information specifically relevant to JNTUH.

Only use university-specific calculation rules when they are verified and accurate.

Do not invent academic rules.

15. SEARCH ENGINE FRIENDLY CONTENT

Tool pages should contain useful content after the calculator.

Recommended structure:

H1: VTU CGPA Calculator

Short introduction

Calculator

How to calculate VTU CGPA

Explanation

Example

How to use this calculator

Related VTU tools

Frequently Asked Questions


The content must be genuinely useful.

Do not write meaningless SEO filler.

Do not keyword-stuff.

Write naturally for students.

16. STRUCTURED DATA

Where appropriate, implement structured data using JSON-LD.

Potential types include:

WebSite

WebPage

BreadcrumbList

FAQPage where appropriate and supported by visible FAQ content

Do not add fake structured data.

Structured data must accurately represent visible page content.

17. ROBOTS.TXT

Create a valid:

robots.txt


Allow search engine crawlers to access public pages.

Include the sitemap reference.

18. SITEMAP

Create:

sitemap.xml


Include all important public tool and university pages.

Do not include:

Duplicate URLs

Development pages

Test pages

Non-canonical URLs

19. CANONICAL URLs

Every indexable page should have a self-referencing canonical URL unless another canonical is intentionally required.

Keep URL formats consistent.

For example:

https://example.com/vtu/cgpa-calculator/


not multiple versions such as:

/vtu/cgpa-calculator
/vtu/cgpa-calculator/
/vtu/cgpa-calculator/index.html


The website should consistently link to the preferred URL format.

20. INTERNAL LINKING

Use useful internal links.

For example:

VTU CGPA Calculator can link to:

VTU SGPA Calculator

VTU Percentage Calculator

VTU Tools

General CGPA Calculator

General CGPA Calculator can link to:

VTU CGPA Calculator

JNTUH CGPA Calculator

JNTUK CGPA Calculator

Other relevant university calculators

Do not create excessive links just for SEO.

21. UNIVERSITY CARDS

University cards should show:

[University logo]

Visvesvaraya Technological University

CGPA Calculator
SGPA Calculator


Keep cards compact.

The university logo should be small but recognizable.

Use the WebP logo.

Do not make university logos huge.

22. ACCESSIBILITY

Make Stupus accessible.

Use:

Semantic HTML

Proper labels

Keyboard navigation

Visible focus states

Good contrast

Accessible buttons

aria-label where necessary

Meaningful alt text

Proper form validation

Do not rely only on color to communicate information.

23. IMAGES

I will manually provide:

assets/logo.png
assets/favicon.png


The coder must not replace these.

Add two lightweight general .webp images where they genuinely improve the site.

Do not add images just to fill space.

Suggested image sizes:

Approximately:

20 KB–50 KB


where practical.

Use:

loading="lazy"


for non-critical images.

Always specify image dimensions to reduce layout shift.

24. DESIGN SYSTEM

Create a small reusable design system.

Use CSS variables such as:

--brand-primary
--brand-light
--brand-gradient-start
--brand-gradient-end
--text-primary
--text-secondary
--background
--surface
--border
--success
--error


University themes should override only the necessary accent variables.

Do not create completely different designs for every university.

Stupus must remain recognizable everywhere.

25. GRADIENT RULE

Gradients are allowed.

But gradients must be subtle.

Good:

light blue → slightly lighter blue


Bad:

blue → purple → pink → cyan


Avoid gradients behind important text if they reduce readability.

Do not use gradients everywhere.

Use them mainly for:

Small hero accents

Buttons where appropriate

Result highlights

Decorative separators

University-specific accents

26. ANIMATIONS

Use very little animation.

Animations should improve usability, not distract users.

Allowed:

Small hover transitions

Button feedback

Subtle result appearance

Search interaction

Small navigation transitions

Avoid:

Loading screens

Long entrance animations

Floating elements everywhere

Continuous movement

Parallax

Animated gradients

Excessive bouncing

The calculator should feel instant.

27. NO LOGIN REQUIREMENT

Do not require an account to use calculators.

A student should be able to:

Open Stupus

Choose a tool

Enter values

Calculate

Get the result

without registration.

28. ERROR HANDLING

Make errors understandable.

Bad:

Invalid input.


Better:

Please enter a grade for Semester 3.


Validation should happen clearly and immediately.

Do not allow broken calculations.

Handle:

Empty inputs

Invalid numbers

Negative values where invalid

Impossible percentages

Invalid grades

Division by zero

Missing required values

29. NO UNNECESSARY COMPLEXITY

If something can be implemented with simple HTML/CSS/JS, do not introduce a complicated framework or dependency.

Do not build features simply because they look impressive.

Every feature must answer:

Does this make Stupus more useful or easier to use?

If not, leave it out.

30. CONTENT QUALITY

Content must be:

Clear

Natural

Student-friendly

Concise

Accurate

Original

Useful

Avoid:

Keyword stuffing

AI-sounding filler

Repeated paragraphs

Fake statistics

Unverified university rules

Generic 1,000-word articles that nobody needs

The calculator should remain the primary purpose of the page.

31. FOOTER

Keep the footer simple.

Possible sections:

Stupus

Student tools, made simple.

Tools
Universities
About
Privacy
Terms
Contact

© 2026 Stupus


Do not create a huge corporate footer.

32. FILE ORGANIZATION

Keep the project organized.

Example:

stupus/
├── index.html
├── robots.txt
├── sitemap.xml
├── manifest.json
├── favicon.ico (if needed)
│
├── assets/
│   ├── logo.png
│   ├── favicon.png
│   ├── universities/
│   └── images/
│
├── css/
│   ├── global.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── search.js
│   ├── theme.js
│   └── calculators/
│
└── pages/
    ...


The final architecture can differ if there is a strong technical reason, but keep it simple and maintainable.

33. STATIC HOSTING COMPATIBILITY

The final website must work on static hosting.

Do not require a Node.js server for basic calculator functionality.

Do not require a database.

Do not require an API for calculators that can run entirely in the browser.

The project should be deployable to services such as:

Cloudflare Pages

Firebase Hosting

GitHub Pages

Similar static hosting

Avoid server-side requirements unless genuinely necessary.

34. SECURITY

Do not include unnecessary third-party scripts.

Do not expose secrets.

Do not put API keys into frontend JavaScript.

Avoid unsafe HTML injection.

If user-entered values are displayed, handle them safely.

35. BROWSER SUPPORT

Make the website work on modern:

Chrome

Firefox

Safari

Edge

Android browsers

Do not depend on experimental browser APIs for core functionality.

36. FINAL QUALITY CHECK

Before considering the project finished, test:

Mobile

320px width

360px

390px

412px

Desktop

768px

1024px

1440px

Check:

No horizontal overflow

Buttons work

Forms work

Calculations are correct

Search works

Links work

Images load

Logo loads

Favicon loads

University themes work

Dark text has sufficient contrast

SEO metadata exists

Canonical URLs exist

robots.txt works

sitemap.xml exists

No broken links

No console errors

37. VERY IMPORTANT — DO NOT INVENT CALCULATION RULES

For university-specific calculators, use verified calculation formulas/rules.

If a university's rules are not known or cannot be verified, do not invent them.

Keep the calculation logic separated from the UI so it can be corrected or updated easily.

38. FINAL DESIGN TEST

Before finishing, ask:

Can a student who has never seen Stupus understand what to do within 5 seconds?

If no, simplify the interface.

Ask:

Can the student reach the calculator quickly?

If no, simplify the homepage.

Ask:

Can the student complete the calculation comfortably on a phone?

If no, fix the mobile UX.

Ask:

Is every visual effect actually useful?

If no, remove it.

Ask:

Is this page genuinely useful to a student, or was this content added only for SEO?

If it is only SEO filler, remove or improve it.

39. FINAL PRODUCT FEEL

The finished Stupus website should feel like:

A very good student utility website.

Not:

A complicated SaaS dashboard

An AI website

A design experiment

A blog

A flashy landing page

The user should feel:

"I searched for something, Stupus gave me exactly what I needed."

That is the product.

40. DELIVERABLE

After completing the entire website:

Test the complete website.

Fix broken links and functionality.

Check the responsive design.

Check all calculator logic.

Check SEO files.

Check assets.

Check that assets/logo.png and assets/favicon.png are referenced correctly.

Make sure no placeholder logos replace them.

Make sure the website can run as a static website.

Package the complete finished website into a ZIP file.

The ZIP must contain the actual finished website source files, not merely instructions or a prompt.

The final ZIP should be ready to upload/deploy.

FINAL INSTRUCTION

Build Stupus for students, not for screenshots.

Prioritize:

Usability > Speed > Accuracy > SEO > Visual polish

while still making the website modern, clean, attractive, and professional.

Use blue as the Stupus identity, subtle gradients for polish, and university-specific accent colors to give university pages their own identity.

Keep everything simple. Add couldnt find your university email us we will make a page for it as soon as possible hello@stupus.bond

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7b387136-4766-445b-8f00-70fd215405b5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
