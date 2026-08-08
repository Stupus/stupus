import { Link, createFileRoute } from "@tanstack/react-router";
import { Page, Section } from "../components/Layout";
import { SearchBox } from "../components/SearchBox";
import { generalToolList } from "../data/tools";
import { universities } from "../data/universities";
import { UniversityMissing } from "../components/UniversityMissing";

const title = "All Student Calculators | Stupus";
const description =
  "Every Stupus tool in one place: CGPA, SGPA, attendance, percentage and GPA conversion, plus university-specific versions.";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/tools/" }],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "All tools" }]}>
      <h1 className="text-2xl font-bold tracking-tight">All tools</h1>
      <p className="mt-1.5 text-[0.95rem] text-muted-foreground">
        Search, or browse the full list below.
      </p>
      <div className="mt-4">
        <SearchBox />
      </div>

      <Section title="General calculators">
        <ul className="divide-y divide-border rounded-lg border border-border">
          {generalToolList.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to as never}
                className="block px-4 py-3 hover:bg-surface"
              >
                <span className="block text-sm font-semibold">{t.title}</span>
                <span className="block text-xs text-muted-foreground">
                  {t.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {universities.map((u) => (
        <Section key={u.slug} title={`${u.shortName} tools`}>
          <ul className="flex flex-wrap gap-2">
            {u.tools.map((t) => (
              <li key={t.slug}>
                <Link
                  to="/$university/$tool"
                  params={{ university: u.slug, tool: t.slug }}
                  className="inline-block rounded-md border border-border bg-card px-3 py-2 text-sm font-medium hover:border-brand-border hover:bg-brand-light hover:text-brand"
                >
                  {u.shortName} {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <div className="mt-9">
        <UniversityMissing />
      </div>
    </Page>
  );
}
