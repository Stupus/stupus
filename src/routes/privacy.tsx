import { createFileRoute } from "@tanstack/react-router";
import { Page, Section, Prose } from "../components/Layout";

const title = "Privacy Policy | Stupus";
const description =
  "Stupus runs every calculation in your browser. What we do and do not collect.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy/" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Page crumbs={[{ label: "Stupus", to: "/" }, { label: "Privacy" }]}>
      <h1 className="text-2xl font-bold tracking-tight">Privacy Policy</h1>

      <Section title="What we collect">
        <Prose>
          <p>
            Nothing you type into a calculator. Marks, grades, credits and attendance
            figures are processed in your browser and never transmitted to a server or
            saved.
          </p>
          <p>
            We do not ask you to create an account, and we do not use advertising or
            tracking cookies.
          </p>
        </Prose>
      </Section>

      <Section title="Server logs">
        <Prose>
          <p>
            Our hosting provider records standard technical information for each request,
            such as the page requested, timestamp, browser type and IP address. This is
            used to keep the site running and secure.
          </p>
        </Prose>
      </Section>

      <Section title="Email">
        <Prose>
          <p>
            If you email us, we keep that message so we can reply. We do not add you to
            any mailing list.
          </p>
        </Prose>
      </Section>

      <Section title="Changes">
        <Prose>
          <p>
            If this policy changes, the updated version will be published on this page.
            Questions go to{" "}
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
