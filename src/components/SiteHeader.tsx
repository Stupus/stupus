import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./Brand";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Stupus home">
          <BrandLogo />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          <HeaderLink to="/tools">Tools</HeaderLink>
          <HeaderLink to="/universities">Universities</HeaderLink>
        </nav>
      </div>
    </header>
  );
}

function HeaderLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-md px-3 py-2 font-medium text-muted-foreground transition-colors hover:bg-brand-light hover:text-brand"
      activeProps={{ className: "bg-brand-light text-brand" }}
    >
      {children}
    </Link>
  );
}
