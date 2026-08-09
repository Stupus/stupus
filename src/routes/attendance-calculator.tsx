import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";
import { ToolIntro, Formula, RelatedLinks, breadcrumbJsonLd } from "../components/content";
import { Faq, faqJsonLd, type FaqItem } from "../components/Faq";
import { AttendanceCalculator } from "../components/calculators/AttendanceCalculator";

const title = "Attendance Calculator Online";
const description =
  "Check your attendance percentage and see how many classes you can skip, or how many you must attend to reach 75%.";

const faqs: FaqItem[] = [
  {
    q: "Why is 75% the usual requirement?",
    a: "Most Indian universities set a minimum attendance of 75% to be eligible to write the end-semester exam. Some allow condonation between 65% and 75% with a medical certificate or a fee.",
  },
  {
    q: "How many classes can I miss?",
    a: "The calculator answers this directly: it works out the largest number of future classes you can be absent for while still finishing at or above your required percentage.",
  },
  {
    q: "How is the number of classes to attend calculated?",
    a: "It solves (attended + x) ÷ (held + x) ≥ required, which gives the smallest number of consecutive classes you must attend without missing any.",
  },
  {
    q: "Does this count hours or classes?",
    a: "Use whichever unit your college records. If attendance is tracked per hour, enter hours instead of classes — the percentage is the same either way.",
  },
];

export const Route = createFileRoute("/attendance-calculator")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/attendance-calculator/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/attendance-calculator/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Stupus", path: "/" },
            { name: "Attendance Calculator", path: "/attendance-calculator/" },
          ]),
        ),
      },
    ],
  }),
  component: AttendancePage,
});

function AttendancePage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "Attendance Calculator" }]}>
      <ToolIntro h1="Attendance Calculator">
        Enter the classes you attended and the classes held to see where you stand — and
        how many classes you can still miss.
      </ToolIntro>

      <AttendanceCalculator />

      <Section title="How attendance is calculated">
        <Prose>
          <Formula>Attendance % = (Classes attended ÷ Classes held) × 100</Formula>
          <p>
            <strong>Example:</strong> you attended 42 of 60 classes, so your attendance
            is 70%. To reach 75% you would need to attend the next 12 classes without
            missing any, because (42 + 12) ÷ (60 + 12) = 75%.
          </p>
          <p>
            If you are already above the requirement, the calculator shows the opposite:
            how many classes you can be absent for before you drop below it.
          </p>
        </Prose>
      </Section>

      <Section title="Before you rely on this number">
        <Prose>
          <p>
            Colleges count attendance per subject as well as overall, and some count lab
            sessions as multiple hours. Check the figure against your college portal
            before making a decision about skipping a class.
          </p>
        </Prose>
      </Section>

      <RelatedLinks
        links={[
          { to: "/percentage-calculator", label: "Percentage Calculator" },
          { to: "/sgpa-calculator", label: "SGPA Calculator" },
          { to: "/cgpa-calculator", label: "CGPA Calculator" },
        ]}
      />

      <Section title="Frequently asked questions">
        <Faq items={faqs} />
      </Section>
    </Page>
  );
}
