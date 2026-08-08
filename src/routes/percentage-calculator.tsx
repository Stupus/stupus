import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";
import { ToolIntro, Formula, RelatedLinks } from "../components/content";
import { Faq, faqJsonLd, type FaqItem } from "../components/Faq";
import { PercentageCalculator } from "../components/calculators/PercentageCalculator";

const title = "Percentage Calculator for Marks | Stupus";
const description =
  "Turn marks into a percentage instantly. Enter what you scored and the total marks — works for any exam or semester total.";

const faqs: FaqItem[] = [
  {
    q: "How do I calculate percentage of marks?",
    a: "Divide the marks you scored by the total marks and multiply by 100.",
  },
  {
    q: "How do I find my aggregate percentage for a year?",
    a: "Add the marks scored in every subject, add the maximum marks of every subject, then divide one by the other and multiply by 100.",
  },
  {
    q: "Is percentage the same as percentile?",
    a: "No. A percentage is your own score out of the total. A percentile compares your score with everyone else who took the exam.",
  },
  {
    q: "Can I use this for CGPA?",
    a: "No — CGPA follows a conversion rule set by your university. Use the GPA to Percentage Converter for that.",
  },
];

export const Route = createFileRoute("/percentage-calculator")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/percentage-calculator/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/percentage-calculator/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: PercentagePage,
});

function PercentagePage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "Percentage Calculator" }]}>
      <ToolIntro h1="Percentage Calculator">
        Enter the marks you scored and the total marks to get your percentage, rounded to
        two decimals.
      </ToolIntro>

      <PercentageCalculator />

      <Section title="How percentage of marks is calculated">
        <Prose>
          <Formula>Percentage = (Marks scored ÷ Total marks) × 100</Formula>
          <p>
            <strong>Example:</strong> 428 out of 500 gives (428 ÷ 500) × 100 = 85.6%.
          </p>
          <p>
            For a full semester, add up the marks of every subject first and use the
            combined totals — that is your aggregate percentage.
          </p>
        </Prose>
      </Section>

      <RelatedLinks
        links={[
          { to: "/gpa-converter", label: "CGPA to Percentage" },
          { to: "/cgpa-calculator", label: "CGPA Calculator" },
          { to: "/attendance-calculator", label: "Attendance Calculator" },
        ]}
      />

      <Section title="Frequently asked questions">
        <Faq items={faqs} />
      </Section>
    </Page>
  );
}
