import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";

const title = "Contact Stupus";
const description =
  "Request a university page, report a wrong formula, or send feedback about a Stupus calculator.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contact/" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "Contact" }]}>
      <h1 className="text-2xl font-bold tracking-tight">Contact</h1>
      <Prose>
        <p className="mt-3">
          One inbox, read by a person:{" "}
          <a
            href="mailto:hello@stupus.bond"
            className="font-medium text-brand underline underline-offset-2"
          >
            hello@stupus.bond
          </a>
        </p>
      </Prose>

      <Section title="Add my university">
        <Prose>
          <p>
            Send the university name and, if you have it, a link to the regulation PDF
            with the grading scheme. Having the official document speeds things up a lot,
            because we only publish rules we can source.
          </p>
        </Prose>
      </Section>

      <Section title="Report a wrong result">
        <Prose>
          <p>
            Tell us the page, the numbers you entered and the result you expected. If a
            formula is wrong, include the official document that shows the correct one.
          </p>
        </Prose>
      </Section>

      <Section title="Everything else">
        <Prose>
          <p>
            Feature requests, corrections to wording, or a tool you wish existed — all
            welcome at the same address.
          </p>
        </Prose>
      </Section>
    </Page>
  );
}
