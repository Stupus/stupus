import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";

const title = "Terms of Use | Stupus";
const description =
  "The terms for using Stupus calculators, including accuracy limits and how to report an error.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms/" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "Terms" }]}>
      <h1 className="text-2xl font-bold tracking-tight">Terms of Use</h1>

      <Section title="Use of the site">
        <Prose>
          <p>
            Stupus is free to use for personal, educational purposes. You may not scrape
            the site at a volume that affects other users or republish its content as
            your own.
          </p>
        </Prose>
      </Section>

      <Section title="Accuracy">
        <Prose>
          <p>
            The calculators follow the grading rules published by each university, but
            Stupus is not affiliated with any university and cannot guarantee that a
            regulation has not changed since we checked it. Your official grade card and
            examination cell are always the final word.
          </p>
          <p>
            Do not use a figure from this site for an admission, visa or employment
            application without confirming it against your transcript.
          </p>
        </Prose>
      </Section>

      <Section title="Trademarks">
        <Prose>
          <p>
            University names and logos belong to their respective institutions and are
            used here only to identify which rules a page follows.
          </p>
        </Prose>
      </Section>

      <Section title="Reporting an error">
        <Prose>
          <p>
            Found a wrong formula or grade table? Email{" "}
            <a
              href="mailto:hello@stupus.bond"
              className="font-medium text-brand underline underline-offset-2"
            >
              hello@stupus.bond
            </a>{" "}
            with a link to the official document and we will correct it.
          </p>
        </Prose>
      </Section>
    </Page>
  );
}
