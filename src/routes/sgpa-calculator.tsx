import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";
import { ToolIntro, Formula, RelatedLinks, breadcrumbJsonLd } from "../components/content";
import { Faq, faqJsonLd, type FaqItem } from "../components/Faq";
import { SgpaCalculator } from "../components/calculators/SgpaCalculator";

const title = "SGPA Calculator — Semester GPA from credits and grades | Stupus";
const description =
  "Calculate your SGPA for one semester from subject credits and grades. Instant, mobile-friendly and free.";

const faqs: FaqItem[] = [
  {
    q: "What does SGPA stand for?",
    a: "Semester Grade Point Average — the credit-weighted average of the grade points you earned in a single semester.",
  },
  {
    q: "Which grade points should I use?",
    a: "Use the grade point scale printed in your university's regulations. Most Indian technical universities use a 10-point scale where O is 10, A+ is 9 and so on.",
  },
  {
    q: "Do lab subjects count?",
    a: "Yes. Labs carry credits like any other course, usually 1 or 1.5, and are included in the same weighted average.",
  },
  {
    q: "What happens if I failed a subject?",
    a: "A fail grade normally carries 0 grade points but its credits still count, which pulls the SGPA down until you clear the backlog.",
  },
];

export const Route = createFileRoute("/sgpa-calculator")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sgpa-calculator/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/sgpa-calculator/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Stupus", path: "/" },
            { name: "SGPA Calculator", path: "/sgpa-calculator/" },
          ]),
        ),
      },
    ],
  }),
  component: SgpaPage,
});

function SgpaPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "SGPA Calculator" }]}>
      <ToolIntro h1="SGPA Calculator">
        Enter the credits and grade for each subject in one semester to get your SGPA on
        the 10-point scale.
      </ToolIntro>

      <SgpaCalculator />

      <Section title="How SGPA is calculated">
        <Prose>
          <p>
            Each subject contributes its credits multiplied by the grade point you
            earned:
          </p>
          <Formula>SGPA = Σ (Credits × Grade points) ÷ Σ (Credits)</Formula>
          <p>
            <strong>Example:</strong> four subjects of 4, 4, 3 and 2 credits with grades
            worth 9, 8, 10 and 7 points. Total grade points = 36 + 32 + 30 + 14 = 112
            over 13 credits, so SGPA = 112 ÷ 13 = 8.62.
          </p>
        </Prose>
      </Section>

      <Section title="How to use this calculator">
        <Prose>
          <p>
            Add one row per subject, type the credits, pick the grade you scored, then
            press Calculate SGPA. Use “Add subject” for semesters with more courses. For
            university-specific grade scales, open your university's page instead.
          </p>
        </Prose>
      </Section>

      <RelatedLinks
        links={[
          { to: "/cgpa-calculator", label: "CGPA Calculator" },
          { to: "/percentage-calculator", label: "Percentage Calculator" },
          {
            to: "/$university/$tool",
            params: { university: "vtu", tool: "sgpa-calculator" },
            label: "VTU SGPA Calculator",
          },
          {
            to: "/$university/$tool",
            params: { university: "jntuh", tool: "sgpa-calculator" },
            label: "JNTUH SGPA Calculator",
          },
          {
            to: "/$university/$tool",
            params: { university: "aktu", tool: "sgpa-calculator" },
            label: "AKTU SGPA Calculator",
          },
        ]}
      />

      <Section title="Frequently asked questions">
        <Faq items={faqs} />
      </Section>
    </Page>
  );
}
