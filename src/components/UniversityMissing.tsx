export function UniversityMissing() {
  return (
    <div className="rounded-lg border border-dashed border-brand-border bg-brand-light px-4 py-3">
      <p className="text-sm font-medium text-foreground">
        Couldn&apos;t find your university?
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Email us at{" "}
        <a
          href="mailto:hello@stupus.bond"
          className="font-medium text-brand underline underline-offset-2"
        >
          hello@stupus.bond
        </a>{" "}
        and we&apos;ll add a page for it as soon as possible.
      </p>
    </div>
  );
}
