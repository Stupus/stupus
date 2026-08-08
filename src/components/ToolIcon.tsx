/**
 * Inline SVG tool icons. No image files, no icon fonts, no emojis —
 * they inherit `currentColor` and cost zero network requests.
 */

export type ToolIconName =
  | "cgpa"
  | "sgpa"
  | "attendance"
  | "percentage"
  | "converter";

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
  focusable: "false" as const,
};

function Cgpa() {
  return (
    <svg {...common}>
      {/* Graduation cap over a rising average */}
      <path d="M2.5 8.5 12 4.5l9.5 4L12 12.5 2.5 8.5Z" />
      <path d="M6.5 10.2v4.4c0 1.6 2.5 2.9 5.5 2.9s5.5-1.3 5.5-2.9v-4.4" />
      <path d="M21.5 8.5v5" />
    </svg>
  );
}

function Sgpa() {
  return (
    <svg {...common}>
      {/* One semester: subject rows adding up */}
      <path d="M4 5h16" />
      <path d="M4 10h11" />
      <path d="M4 15h7" />
      <path d="M4 20h13" />
      <circle cx="19" cy="16" r="3.2" />
    </svg>
  );
}

function Attendance() {
  return (
    <svg {...common}>
      {/* Calendar with a present-day tick */}
      <rect x="3.25" y="5" width="17.5" height="15.5" rx="2.5" />
      <path d="M3.25 10h17.5" />
      <path d="M8 3.25V6M16 3.25V6" />
      <path d="m8.75 15 2.25 2.25 4-4.25" />
    </svg>
  );
}

function Percentage() {
  return (
    <svg {...common}>
      {/* Percent sign */}
      <circle cx="7.25" cy="7.25" r="3" />
      <circle cx="16.75" cy="16.75" r="3" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

function Converter() {
  return (
    <svg {...common}>
      {/* Two-way conversion between scales */}
      <path d="M4 8.5h13" />
      <path d="m14 5.5 3 3-3 3" />
      <path d="M20 15.5H7" />
      <path d="m10 12.5-3 3 3 3" />
    </svg>
  );
}

const registry: Record<ToolIconName, () => React.ReactElement> = {
  cgpa: Cgpa,
  sgpa: Sgpa,
  attendance: Attendance,
  percentage: Percentage,
  converter: Converter,
};

export function ToolIcon({
  name,
  size = 22,
  className = "",
}: {
  name: ToolIconName;
  size?: number;
  className?: string;
}) {
  const Glyph = registry[name];
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center text-brand [&>svg]:h-full [&>svg]:w-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Glyph />
    </span>
  );
}

/** Brand-tinted tile used on list rows and cards. */
export function ToolIconTile({
  name,
  size = 38,
}: {
  name: ToolIconName;
  size?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-md border border-brand-border bg-brand-light"
      style={{ width: size, height: size }}
    >
      <ToolIcon name={name} size={Math.round(size * 0.58)} />
    </span>
  );
}
