import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-base font-semibold text-foreground">Stupus</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Student tools, made simple.
        </p>

        <nav
          aria-label="Footer"
          className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm"
        >
          <FooterLink to="/tools">Tools</FooterLink>
          <FooterLink to="/universities">Universities</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/privacy">Privacy</FooterLink>
          <FooterLink to="/terms">Terms</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </nav>

        <p className="mt-6 text-xs text-muted-foreground">© 2026 Stupus</p>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-muted-foreground hover:text-brand hover:underline">
      {children}
    </Link>
  );
}
