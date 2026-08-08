import type { ReactNode } from "react";

/** Compact labelled input sized to the value it expects. */
export function Field({
  id,
  label,
  value,
  onChange,
  error,
  width = "sm",
  inputMode = "decimal",
  placeholder,
  ariaLabel,
  suffix,
}: {
  id: string;
  label?: string | undefined;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  width?: "xs" | "sm" | "md" | "full" | undefined;
  inputMode?: "decimal" | "numeric" | "text" | undefined;
  placeholder?: string | undefined;
  ariaLabel?: string | undefined;
  suffix?: string | undefined;
}) {
  const widths = {
    xs: "w-16",
    sm: "w-24",
    md: "w-36",
    full: "w-full",
  } as const;

  return (
    <div className={width === "full" ? "w-full" : ""}>
      {label ? (
        <label htmlFor={id} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      ) : null}
      <div className="flex items-center gap-1.5">
        <input
          id={id}
          type="text"
          inputMode={inputMode}
          autoComplete="off"
          aria-label={ariaLabel ?? label}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${widths[width]} min-h-11 rounded-md border bg-background px-3 py-2 text-base tabular-nums transition-colors focus:border-brand focus-visible:outline-brand ${
            error ? "border-error" : "border-input"
          }`}
        />
        {suffix ? (
          <span aria-hidden="true" className="text-sm text-muted-foreground">
            {suffix}
          </span>
        ) : null}
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  error,
  className = "w-24",
}: {
  id: string;
  label?: string | undefined;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  error?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div>
      {label ? (
        <label htmlFor={id} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      ) : null}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        aria-invalid={error ? true : undefined}
        className={`${className} min-h-11 rounded-md border bg-background px-2 py-2 text-base transition-colors focus:border-brand ${
          error ? "border-error" : "border-input"
        }`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error ? (
        <p role="alert" className="mt-1 text-xs text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function CalcButton({
  children,
  type = "submit",
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-brand text-brand-foreground hover:bg-brand-strong"
      : "border border-input bg-background text-foreground hover:bg-surface";
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

/** Big, obvious result panel with the university/brand accent. */
export function ResultPanel({
  label,
  value,
  note,
  extra,
}: {
  label: string;
  value: string;
  note?: string | undefined;
  extra?: ReactNode;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mt-4 rounded-lg border border-brand-border bg-brand-light px-4 py-4 duration-150 animate-in fade-in"
    >
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-4xl font-bold tracking-tight text-brand tabular-nums">
        {value}
      </p>
      {note ? <p className="mt-1 text-sm text-muted-foreground">{note}</p> : null}
      {extra}
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <p role="alert" className="mt-3 text-sm text-error">
      {message}
    </p>
  );
}

export function CalcCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 sm:p-5">{children}</div>
  );
}
