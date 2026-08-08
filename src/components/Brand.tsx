import { useState } from "react";

/**
 * Stupus wordmark: compact WebP mark plus text, with a text-only fallback
 * if the image ever fails to load.
 */
export function BrandLogo({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`flex items-center gap-2 ${className}`}>
      {failed ? null : (
        <img
          src="/assets/logo.webp"
          alt=""
          width={28}
          height={28}
          decoding="async"
          fetchPriority="high"
          className="h-7 w-7 shrink-0"
          onError={() => setFailed(true)}
        />
      )}
      <span className="text-[1.3rem] font-bold tracking-tight text-brand">Stupus</span>
    </span>
  );
}

/**
 * University logo (compact .webp). Falls back to the university's
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
