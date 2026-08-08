import { useState } from "react";

/**
 * Stupus wordmark. Uses /assets/logo.png when present (added manually),
 * and falls back to a text wordmark until then.
 */
export function BrandLogo({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`text-[1.35rem] font-bold tracking-tight text-brand ${className}`}
      >
        Stupus
      </span>
    );
  }

  return (
    <img
      src="/assets/logo.png"
      alt="Stupus"
      width={132}
      height={32}
      className={`h-8 w-auto ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

/**
 * University logo (manually added .webp). Falls back to the university's
 * initials on an accent tile so cards never break.
 */
export function UniversityLogo({
  src,
  name,
  initials,
  size = 40,
}: {
  src: string;
  name: string;
  initials: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="flex shrink-0 items-center justify-center rounded-md bg-brand-light text-xs font-bold text-brand"
        style={{ width: size, height: size }}
      >
        {initials}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className="shrink-0 rounded-md object-contain"
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}
