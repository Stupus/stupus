import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { universities } from "../data/universities";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/tools/",
          "/universities/",
          "/cgpa-calculator/",
          "/sgpa-calculator/",
          "/attendance-calculator/",
          "/percentage-calculator/",
          "/gpa-converter/",
          "/about/",
          "/contact/",
          "/privacy/",
          "/terms/",
          ...universities.flatMap((u) => [
            `/${u.slug}/`,
            ...u.tools.map((t) => `/${u.slug}/${t.slug}/`),
          ]),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n  </url>`),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
