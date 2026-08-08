import { Link, createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";
import { GradeTable, breadcrumbJsonLd } from "../components/content";
import { UniversityLogo } from "../components/Brand";
import { getUniversity, themeStyle } from "../data/universities";

export const Route = createFileRoute("/$university/")({
  head: ({ params }) => {
    const u = getUniversity(params.university);
    const title = `${u.shortName} Calculators — CGPA, SGPA & Percentage | Stupus`;
    const description = `Free ${u.shortName} calculators using ${u.shortName}'s own grading rules: CGPA, SGPA and CGPA to percentage.`;
    const url = `/${u.slug}/`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Stupus", path: "/" },
              { name: "Universities", path: "/universities/" },
              { name: u.shortName, path: url },
            ]),
          ),
        },
      ],
    };
  },
  component: UniversityHub,
});

function UniversityHub() {
  const { university } = Route.useParams();
  const u = getUniversity(university);

  return (
    <Page
      themeStyle={themeStyle(u.theme)}
      crumbs={[{ label: "Stupus", to: "/" }, { label: u.shortName }]}
    >
      <div className="brand-gradient rounded-lg border border-brand-border px-4 py-5">
        <div className="flex items-center gap-3">
          <UniversityLogo src={u.logo} name={u.shortName} initials={u.initials} size={44} />
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {u.shortName} Calculators
            </h1>
            <p className="text-xs text-muted-foreground">
              {u.name} · {u.state}
            </p>
          </div>
        </div>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          {u.intro}
        </p>
      </div>

      <Section title={`Tools for ${u.shortName} students`}>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {u.tools.map((t) => (
            <li key={t.slug}>
              <Link
                to="/$university/$tool"
                params={{ university: u.slug, tool: t.slug }}
                className="block rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold transition-colors hover:border-brand-border hover:bg-brand-light hover:text-brand"
              >
                {u.shortName} {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Grading scale">
        <p className="mb-3 text-sm text-muted-foreground">{u.scheme}</p>
        <GradeTable rows={u.grades} />
      </Section>

      <Section title="CGPA to percentage">
        <Prose>
          <p>{u.percentageNote}</p>
          {u.source ? (
            <p className="text-sm">
              Source:{" "}
              <a
                href={u.source.url}
                rel="nofollow noopener"
                className="font-medium text-brand underline underline-offset-2"
              >
                {u.source.label}
              </a>
            </p>
          ) : null}
        </Prose>
      </Section>
    </Page>
  );
}
