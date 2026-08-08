import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";

const title = "About Stupus — student tools without the clutter";
const description =
  "Why Stupus exists, how the calculators are built, and how we verify university grading rules.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/about/" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "About" }]}>
      <h1 className="text-2xl font-bold tracking-tight">About Stupus</h1>
      <Prose>
        <p className="mt-3">
          Stupus is a small set of calculators for Indian college students. Most tools
          like these are buried under adverts, pop-ups and sign-up walls. Stupus loads in
          a second on a slow connection, works on any phone, and asks for nothing.
        </p>
      </Prose>

      <Section title="How the numbers are checked">
        <Prose>
          <p>
            University pages use the formulas and grade tables published in that
            university's own regulations or notices, and each page links to the document
            it relies on. Where we could not verify an official source — AKTU's
            CGPA-to-percentage rule, for example — we say so rather than quoting a
            number that looks official.
          </p>
          <p>
            Regulations change between batches. Always cross-check against your own grade
            card before using a figure on an application.
          </p>
        </Prose>
      </Section>

      <Section title="Privacy in one line">
        <Prose>
          <p>
            Every calculation runs in your browser. Nothing you type is sent anywhere or
            stored.
          </p>
        </Prose>
      </Section>

      <Section title="Contact">
        <Prose>
          <p>
            Corrections and university requests are welcome at{" "}
            <a
              href="mailto:hello@stupus.bond"
              className="font-medium text-brand underline underline-offset-2"
            >
              hello@stupus.bond
            </a>
            .
          </p>
        </Prose>
      </Section>
    </Page>
  );
}
