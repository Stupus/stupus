import { createFileRoute, notFound } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";
import { ToolIntro, Formula, GradeTable, RelatedLinks } from "../components/content";
import { Faq, faqJsonLd } from "../components/Faq";
import { CgpaCalculator } from "../components/calculators/CgpaCalculator";
import { SgpaCalculator } from "../components/calculators/SgpaCalculator";
import { GpaConverter } from "../components/calculators/GpaConverter";
import { getUniversity, themeStyle, type University } from "../data/universities";
import { getToolContent } from "../data/universityContent";
import {
  RULE_MINUS_05,
  RULE_MINUS_075,
  RULE_TIMES_10,
  type ConversionRule,
} from "../lib/calc";

function ruleOf(u: University): ConversionRule | undefined {
  if (u.percentageRule === "minus-0.75") return RULE_MINUS_075;
  if (u.percentageRule === "minus-0.5") return RULE_MINUS_05;
  if (u.percentageRule === "times-10") return RULE_TIMES_10;
  return undefined;
}

export const Route = createFileRoute("/$university/$tool")({
  beforeLoad: ({ params }) => {
    const u = getUniversity(params.university);
    if (!u.tools.some((t) => t.slug === params.tool)) throw notFound();
  },
  head: ({ params }) => {
    const content = getToolContent(params.university, params.tool);
    if (!content) return { meta: [{ name: "robots", content: "noindex" }] };
    const url = `/${params.university}/${params.tool}/`;
    return {
      meta: [
        { title: content.title },
        { name: "description", content: content.description },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: content.title },
        { property: "og:description", content: content.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(content.faqs)),
        },
      ],
    };
  },
  component: UniversityToolPage,
});

function UniversityToolPage() {
  const { university, tool } = Route.useParams();
  const u = getUniversity(university);
  const content = getToolContent(university, tool);
  if (!content) throw notFound();

  const rule = ruleOf(u);
  const related = u.tools
    .filter((t) => t.slug !== tool)
    .map((t) => ({
      to: "/$university/$tool",
      params: { university: u.slug, tool: t.slug },
      label: `${u.shortName} ${t.label}`,
    }));

  return (
    <Page
      themeStyle={themeStyle(u.theme)}
      crumbs={[
        { label: "Stupus", to: "/" },
        { label: u.shortName, to: `/${u.slug}` },
        { label: content.h1.replace(`${u.shortName} `, "") },
      ]}
    >
      <ToolIntro h1={content.h1}>{content.intro}</ToolIntro>

      {tool === "cgpa-calculator" ? (
        <CgpaCalculator rule={rule} ruleLabel={rule?.label} />
      ) : null}
      {tool === "sgpa-calculator" ? (
        <SgpaCalculator
          grades={u.grades}
          resultLabel={u.slug === "anna-university" ? "Your GPA" : "Your SGPA"}
        />
      ) : null}
      {tool === "percentage-calculator" ? (
        <GpaConverter fixedRule={rule} fixedRuleName={rule?.label} />
      ) : null}

      <Section title={`How ${u.shortName} calculates this`}>
        <Prose>
          {tool === "sgpa-calculator" ? (
            <Formula>SGPA = Σ (Credits × Grade points) ÷ Σ (Credits)</Formula>
          ) : null}
          {tool === "cgpa-calculator" ? (
            <Formula>CGPA = Σ (Semester credits × SGPA) ÷ Σ (Semester credits)</Formula>
          ) : null}
          {tool === "percentage-calculator" && rule ? (
            <Formula>Percentage = {rule.label}</Formula>
          ) : null}
          {content.body.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
          <p className="text-sm text-muted-foreground">{u.scheme}</p>
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

      {tool === "sgpa-calculator" ? (
        <Section title={`${u.shortName} grade points`}>
          <GradeTable rows={u.grades} />
        </Section>
      ) : null}

      <RelatedLinks
        links={[
          ...related,
          { to: "/$university", params: { university: u.slug }, label: `All ${u.shortName} tools` },
          { to: "/attendance-calculator", label: "Attendance Calculator" },
        ]}
      />

      <Section title="Frequently asked questions">
        <Faq items={content.faqs} />
      </Section>
    </Page>
  );
}
