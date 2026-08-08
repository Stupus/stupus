import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export interface Crumb {
  label: string;
  to?: string;
}

export function Page({
  children,
  crumbs,
  themeStyle,
}: {
  children: ReactNode;
  crumbs?: Crumb[];
  themeStyle?: React.CSSProperties;
}) {
  return (
    <div className="flex min-h-screen flex-col" style={themeStyle}>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-5 pb-2">
        {crumbs && crumbs.length > 0 ? <Breadcrumbs crumbs={crumbs} /> : null}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        {crumbs.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {c.to ? (
              <Link to={c.to as never} className="hover:text-brand hover:underline">
                {c.label}
              </Link>
            ) : (
              <span className="text-foreground">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section className="mt-9" id={id}>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground [&_strong]:text-foreground">
      {children}
    </div>
  );
}
