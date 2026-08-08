import { Link, createFileRoute } from "@tanstack/react-router";
import { Page, Section } from "../components/Layout";
import { UniversityLogo } from "../components/Brand";
import { universities } from "../data/universities";
import { UniversityMissing } from "../components/UniversityMissing";

const title = "Universities on Stupus — VTU, JNTUH, JNTUK, Anna, AKTU";
const description =
  "Calculators that follow each university's own grading rules, for VTU, JNTUH, JNTUK, Anna University and AKTU students.";

export const Route = createFileRoute("/universities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/universities/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/universities/" }],
  }),
  component: UniversitiesPage,
});

function UniversitiesPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "Universities" }]}>
      <h1 className="text-2xl font-bold tracking-tight">Universities</h1>
      <p className="mt-1.5 text-[0.95rem] text-muted-foreground">
        Each university page uses that university's published grading rules instead of a
        generic formula.
      </p>

      <Section title="Available now">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {universities.map((u) => (
            <li key={u.slug}>
              <Link
                to="/$university"
                params={{ university: u.slug }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 hover:border-brand-border hover:bg-brand-light"
              >
                <UniversityLogo
                  src={u.logo}
                  name={u.shortName}
                  initials={u.initials}
                  size={40}
                />
                <span>
                  <span className="block text-sm font-semibold">{u.shortName}</span>
                  <span className="block text-xs text-muted-foreground">
                    {u.name} · {u.state}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <UniversityMissing />
        </div>
      </Section>
    </Page>
  );
}
