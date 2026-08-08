import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";
import { ToolIntro, Formula, RelatedLinks, breadcrumbJsonLd } from "../components/content";
import { Faq, faqJsonLd, type FaqItem } from "../components/Faq";
import { GpaConverter } from "../components/calculators/GpaConverter";

const title = "CGPA to Percentage Converter (and back) | Stupus";
const description =
  "Convert CGPA to percentage or percentage to CGPA using your university's own rule — (CGPA − 0.75) × 10 or CGPA × 10.";

const faqs: FaqItem[] = [
  {
    q: "Which conversion formula should I choose?",
    a: "Use the one your university publishes. VTU, JNTUH and JNTUK use (CGPA − 0.75) × 10, while Anna University and AKTU use CGPA × 10.",
  },
  {
    q: "Why do universities subtract 0.75?",
    a: "It is a fixed adjustment written into those universities' regulations so that a 10-point CGPA maps onto a percentage scale their transcripts use. It is a rule, not a derivation.",
  },
  {
    q: "Will employers accept the converted percentage?",
    a: "Most do when it matches the formula on your official transcript or conversion certificate. If a form asks for an exact figure, use the number your university certifies.",
  },
  {
    q: "Can I convert a percentage back into CGPA?",
    a: "Yes — switch the direction at the top of the calculator. It applies the same rule in reverse.",
  },
];

export const Route = createFileRoute("/gpa-converter")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gpa-converter/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/gpa-converter/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Stupus", path: "/" },
            { name: "CGPA to Percentage Converter", path: "/gpa-converter/" },
          ]),
        ),
      },
    ],
  }),
  component: ConverterPage,
});

function ConverterPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "GPA to Percentage" }]}>
      <ToolIntro h1="CGPA to Percentage Converter">
        Pick the direction and the rule your university uses, then enter your figure.
      </ToolIntro>

      <GpaConverter />

      <Section title="The two common Indian rules">
        <Prose>
          <Formula>Percentage = (CGPA − 0.75) × 10</Formula>
          <p>
            Used by VTU, JNTUH and JNTUK. A CGPA of 8.42 becomes (8.42 − 0.75) × 10 =
            76.7%.
          </p>
          <Formula>Percentage = CGPA × 10</Formula>
          <p>
            Used by Anna University and AKTU. A CGPA of 8.42 becomes 84.2%.
          </p>
          <p>
            Always confirm against your own grade card — a conversion that does not match
            your transcript can cause problems in job and higher-study applications.
          </p>
        </Prose>
      </Section>

      <RelatedLinks
        links={[
          { to: "/cgpa-calculator", label: "CGPA Calculator" },
          { to: "/percentage-calculator", label: "Percentage Calculator" },
          {
            to: "/$university/$tool",
            params: { university: "vtu", tool: "percentage-calculator" },
            label: "VTU Percentage Calculator",
          },
          {
            to: "/$university/$tool",
            params: { university: "anna-university", tool: "percentage-calculator" },
            label: "Anna University Percentage",
          },
        ]}
      />

      <Section title="Frequently asked questions">
        <Faq items={faqs} />
      </Section>
    </Page>
  );
}
