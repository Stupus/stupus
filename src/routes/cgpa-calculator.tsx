import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";
import { ToolIntro, Formula, RelatedLinks, breadcrumbJsonLd } from "../components/content";
import { Faq, faqJsonLd, type FaqItem } from "../components/Faq";
import { CgpaCalculator } from "../components/calculators/CgpaCalculator";

const title = "CGPA Calculator — Calculate CGPA from SGPA | Stupus";
const description =
  "Calculate your CGPA from semester SGPAs and credits. Free, instant, works on mobile, and no sign-up needed.";

const faqs: FaqItem[] = [
  {
    q: "What is the difference between SGPA and CGPA?",
    a: "SGPA is the grade point average for a single semester. CGPA is the average across all semesters completed so far, with each semester weighted by its credits.",
  },
  {
    q: "Do all semesters carry the same weight?",
    a: "No. A semester with 26 credits counts more than one with 18 credits, which is why this calculator asks for the credits of each semester.",
  },
  {
    q: "Can I calculate CGPA with only some semesters?",
    a: "Yes. Enter the semesters you have results for and you will get your CGPA up to that point.",
  },
  {
    q: "How do I convert CGPA to percentage?",
    a: "It depends on your university. Many Indian technical universities use (CGPA − 0.75) × 10, while others use CGPA × 10. Use the GPA to Percentage Converter and pick the rule your university publishes.",
  },
];

export const Route = createFileRoute("/cgpa-calculator")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cgpa-calculator/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/cgpa-calculator/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Stupus", path: "/" },
            { name: "CGPA Calculator", path: "/cgpa-calculator/" },
          ]),
        ),
      },
    ],
  }),
  component: CgpaPage,
});

const labels: Record<string, string> = {
  vtu: "VTU",
  jntuh: "JNTUH",
  jntuk: "JNTUK",
  "anna-university": "Anna University",
  aktu: "AKTU",
};

function CgpaPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "CGPA Calculator" }]}>
      <ToolIntro h1="CGPA Calculator">
        Enter the credits and SGPA of each semester to get your cumulative grade point
        average. Nothing is saved and nothing leaves your phone.
      </ToolIntro>

      <CgpaCalculator />

      <Section title="How CGPA is calculated">
        <Prose>
          <p>
            CGPA is a credit-weighted average of your semester results, not a plain
            average of SGPAs:
          </p>
          <Formula>CGPA = Σ (Semester credits × SGPA) ÷ Σ (Semester credits)</Formula>
          <p>
            <strong>Example:</strong> Semester 1 has 22 credits with an SGPA of 8.2 and
            Semester 2 has 24 credits with an SGPA of 8.8. The total grade points are
            (22 × 8.2) + (24 × 8.8) = 180.4 + 211.2 = 391.6, over 46 credits. CGPA =
            391.6 ÷ 46 = 8.51.
          </p>
          <p>
            A plain average of 8.2 and 8.8 would give 8.50 — close, but wrong whenever
            semesters carry different credits.
          </p>
        </Prose>
      </Section>

      <Section title="How to use this calculator">
        <Prose>
          <p>
            Take your grade cards, enter the total credits and SGPA for each semester,
            then press Calculate CGPA. Add a row for every extra semester. If a value is
            missing or out of range, the calculator tells you exactly which semester to
            fix.
          </p>
        </Prose>
      </Section>

      <RelatedLinks
        links={[
          { to: "/sgpa-calculator", label: "SGPA Calculator" },
          { to: "/gpa-converter", label: "CGPA to Percentage" },
          ...["vtu", "jntuh", "jntuk", "anna-university", "aktu"].map((u) => ({
            to: "/$university/$tool",
            params: { university: u, tool: "cgpa-calculator" },
            label: `${labels[u]} CGPA Calculator`,
          })),
        ]}
      />

      <Section title="Frequently asked questions">
        <Faq items={faqs} />
      </Section>
    </Page>
  );
}
