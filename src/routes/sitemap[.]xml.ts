import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { universities } from "../data/universities";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; priority: string }[] = [
          { path: "/", priority: "1.0" },
          { path: "/tools/", priority: "0.9" },
          { path: "/universities/", priority: "0.9" },
          { path: "/cgpa-calculator/", priority: "0.9" },
          { path: "/sgpa-calculator/", priority: "0.9" },
          { path: "/attendance-calculator/", priority: "0.9" },
          { path: "/percentage-calculator/", priority: "0.9" },
          { path: "/gpa-converter/", priority: "0.9" },
          { path: "/about/", priority: "0.4" },
          { path: "/contact/", priority: "0.4" },
          { path: "/privacy/", priority: "0.2" },
          { path: "/terms/", priority: "0.2" },
          ...universities.flatMap((u) => [
            { path: `/${u.slug}/`, priority: "0.8" },
            ...u.tools.map((t) => ({
              path: `/${u.slug}/${t.slug}/`,
              priority: "0.7",
            })),
          ]),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>monthly</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
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
