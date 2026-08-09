const BASE_URL = "https://stupus.bond";

type SitemapEntry = {
  loc: string;
  priority: string;
  lastmod?: string;
};

const SITEMAP_ENTRIES: SitemapEntry[] = [
  { loc: "/", priority: "1.0" },
  { loc: "/tools", priority: "1.0" },
  { loc: "/universities", priority: "1.0" },
  { loc: "/vtu", priority: "1.0" },
  { loc: "/jntuh", priority: "1.0" },
  { loc: "/jntuk", priority: "1.0" },
  { loc: "/anna-university", priority: "1.0" },
  { loc: "/aktu", priority: "1.0" },
  { loc: "/cgpa-calculator", priority: "1.0" },
  { loc: "/sgpa-calculator", priority: "1.0" },
  { loc: "/attendance-calculator", priority: "1.0" },
  { loc: "/percentage-calculator", priority: "1.0" },
  { loc: "/gpa-converter", priority: "1.0" },
  { loc: "/about", priority: "1.0" },
  { loc: "/privacy", priority: "1.0" },
  { loc: "/terms", priority: "1.0" },
  { loc: "/contact", priority: "1.0" },
  { loc: "/vtu/cgpa-calculator", priority: "0.8" },
  { loc: "/vtu/sgpa-calculator", priority: "0.8" },
  { loc: "/vtu/percentage-calculator", priority: "0.8" },
  { loc: "/jntuh/cgpa-calculator", priority: "0.8" },
  { loc: "/jntuh/sgpa-calculator", priority: "0.8" },
  { loc: "/jntuh/percentage-calculator", priority: "0.8" },
  { loc: "/jntuk/cgpa-calculator", priority: "0.8" },
  { loc: "/jntuk/sgpa-calculator", priority: "0.8" },
  { loc: "/jntuk/percentage-calculator", priority: "0.8" },
  { loc: "/anna-university/cgpa-calculator", priority: "0.8" },
  { loc: "/anna-university/sgpa-calculator", priority: "0.8" },
  { loc: "/anna-university/percentage-calculator", priority: "0.8" },
  { loc: "/aktu/cgpa-calculator", priority: "0.8" },
  { loc: "/aktu/sgpa-calculator", priority: "0.8" },
  { loc: "/aktu/percentage-calculator", priority: "0.8" },
  { loc: "/blog/how-to-calculate-cgpa", priority: "0.7" },
];

function escapeXml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildSitemapXml() {
  const generatedAt = "2026-08-09T09:41:02+00:00";
  const urlBlocks = SITEMAP_ENTRIES.map((entry) => {
    const loc = escapeXml(BASE_URL + entry.loc);
    const lm = escapeXml(entry.lastmod ?? generatedAt);
    const priority = escapeXml(entry.priority);

    return "  <url>\n" +
      "    <loc>" + loc + "</loc>\n" +
      "    <lastmod>" + lm + "</lastmod>\n" +
      "    <priority>" + priority + "</priority>\n" +
      "  </url>";
  }).join("\n");

  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" +
    urlBlocks + "\n" +
    "</urlset>\n";
}

export async function GET() {
  return new Response(buildSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export default {
  GET,
};
