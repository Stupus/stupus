import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function RelatedLinks({
  title = "Related tools",
  links,
}: {
  title?: string;
  links: { to: string; label: string; params?: Record<string, string> }[];
}) {
  return (
    <section className="mt-9">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.to + (l.params ? JSON.stringify(l.params) : "")}>
            <Link
              to={l.to as never}
              params={l.params as never}
              className="inline-block rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:border-brand-border hover:bg-brand-light hover:text-brand"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ToolIntro({
  h1,
  children,
}: {
  h1: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold tracking-tight">{h1}</h1>
      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

export function Formula({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-brand-border bg-brand-light px-3 py-2 text-sm font-medium text-foreground">
      {children}
    </p>
  );
}

export function GradeTable({
  rows,
}: {
  rows: { grade: string; points: number }[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-sm">
        <caption className="sr-only">Grade to grade point mapping</caption>
        <thead className="bg-surface">
          <tr>
            <th scope="col" className="px-4 py-2 text-left font-semibold">
              Grade
            </th>
            <th scope="col" className="px-4 py-2 text-right font-semibold">
              Grade points
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.grade} className="border-t border-border">
              <td className="px-4 py-2">{r.grade}</td>
              <td className="px-4 py-2 text-right tabular-nums">{r.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** BreadcrumbList JSON-LD for inner pages. Paths are site-relative. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path,
    })),
  };
}
