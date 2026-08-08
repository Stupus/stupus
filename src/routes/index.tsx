import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Section } from "../components/Layout";
import { SearchBox } from "../components/SearchBox";
import { UniversityLogo } from "../components/Brand";
import { ToolIcon, ToolIconTile } from "../components/ToolIcon";
import { universities } from "../data/universities";
import { generalToolList } from "../data/tools";
import { UniversityMissing } from "../components/UniversityMissing";

const title = "CGPA & SGPA Calculator for Indian Students | Stupus";
const description =
  "Free CGPA, SGPA, attendance and percentage calculators — plus VTU, JNTUH, JNTUK, Anna University and AKTU versions that use each university's own grading rules.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: "/assets/logo.webp", fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Stupus",
              url: "/",
              description,
            },
            {
              "@type": "SoftwareApplication",
              name: "Stupus Student Calculators",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Any (web browser)",
              url: "/",
              description,
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Page>
      <div className="brand-gradient -mx-4 rounded-none border-b border-brand-border px-4 pt-6 pb-7 sm:mx-0 sm:rounded-lg sm:border">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          CGPA, SGPA and attendance calculators
        </h1>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
          Student tools, made simple — instant results, no sign-up, and university
          grading rules built in.
        </p>
        <div className="mt-4">
          <SearchBox />
        </div>
      </div>

      <Section title="Universities">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {universities.map((u) => (
            <li key={u.slug}>
              <Link
                to="/$university"
                params={{ university: u.slug }}
                className="flex min-h-[3.25rem] items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-brand-border hover:bg-brand-light focus-visible:border-brand-border"
              >
                <UniversityLogo
                  src={u.logo}
                  name={u.shortName}
                  initials={u.initials}
                  size={36}
                />
                <span>
                  <span className="block text-sm font-semibold">{u.shortName}</span>
                  <span className="block text-xs text-muted-foreground">{u.state}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <UniversityMissing />
        </div>
      </Section>

      <Section title="All calculators">
        <ul className="divide-y divide-border rounded-lg border border-border">
          {generalToolList.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to as never}
                className="flex min-h-[3.5rem] items-center gap-3 px-4 py-3 transition-colors hover:bg-brand-light"
              >
                {t.icon ? <ToolIconTile name={t.icon} size={38} /> : null}
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{t.title}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What is Stupus?">
        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
          Stupus is a small collection of calculators Indian students actually need
          during a semester. Everything runs in your browser, nothing is stored, and no
          account is required. University pages use that university's own grading rules —
          including its published CGPA to percentage formula — instead of a generic one.
        </p>
        <p className="mt-3 flex items-center gap-2 text-[0.95rem] text-muted-foreground">
          <ToolIcon name="converter" size={18} />
          <Link to="/tools" className="font-medium text-brand hover:underline">
            Browse every tool
          </Link>
        </p>
      </Section>
    </Page>
  );
}
