import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Section } from "../components/Layout";
import { SearchBox } from "../components/SearchBox";
import { UniversityLogo } from "../components/Brand";
import { universities } from "../data/universities";
import { generalToolList, popularTools } from "../data/tools";
import { UniversityMissing } from "../components/UniversityMissing";

const title = "Stupus — Student tools, made simple";
const description =
  "Free CGPA, SGPA, attendance and percentage calculators for Indian students, plus university-specific tools for VTU, JNTUH, JNTUK, Anna University and AKTU.";

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
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Stupus",
          url: "/",
          description,
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
          Student tools, made simple.
        </h1>
        <p className="mt-1.5 text-[0.95rem] text-muted-foreground">
          Fast calculators for CGPA, SGPA, attendance and marks — no sign-up, no clutter.
        </p>
        <div className="mt-4">
          <SearchBox />
        </div>
      </div>

      <Section title="Popular tools">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {popularTools.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to}
                className="block rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-brand-border hover:bg-brand-light"
              >
                <span className="block text-sm font-semibold">{t.title}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {t.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Universities">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {universities.map((u) => (
            <li key={u.slug}>
              <Link
                to="/$university"
                params={{ university: u.slug }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-brand-border hover:bg-brand-light"
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

      <Section title="More tools">
        <ul className="divide-y divide-border rounded-lg border border-border">
          {generalToolList.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to}
                className="flex items-baseline justify-between gap-3 px-4 py-3 hover:bg-surface"
              >
                <span className="text-sm font-medium">{t.title}</span>
                <span className="hidden text-xs text-muted-foreground sm:block">
                  {t.description}
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
          account is required. University pages use that university's own grading rules
          instead of a generic formula.
        </p>
      </Section>
    </Page>
  );
}
