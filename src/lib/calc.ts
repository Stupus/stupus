/**
 * Pure calculation helpers for Stupus.
 * No DOM access, no framework imports — safe to unit test and easy to correct.
 */

export interface WeightedItem {
  credits: number;
  points: number;
}

/** Credit-weighted average: sum(credits * points) / sum(credits). */
export function weightedAverage(items: WeightedItem[]): number | null {
  let totalCredits = 0;
  let totalPoints = 0;
  for (const item of items) {
    totalCredits += item.credits;
    totalPoints += item.credits * item.points;
  }
  if (totalCredits <= 0) return null;
  return totalPoints / totalCredits;
}

/** SGPA for one semester from its subjects. */
export const sgpa = weightedAverage;

/** CGPA across semesters, each weighted by that semester's total credits. */
export const cgpa = weightedAverage;

/** Round to a fixed number of decimals and return a string (no trailing rounding surprises). */
export function round(value: number, decimals = 2): string {
  return (Math.round(value * 10 ** decimals) / 10 ** decimals).toFixed(decimals);
}

/* ------------------------------------------------------------------ */
/* Percentage                                                          */
/* ------------------------------------------------------------------ */

export function percentage(obtained: number, total: number): number | null {
  if (total <= 0) return null;
  return (obtained / total) * 100;
}

/* ------------------------------------------------------------------ */
/* CGPA <-> percentage conversion                                      */
/* ------------------------------------------------------------------ */

export type ConversionRule =
  | { kind: "minus-0.75"; label: string }
  | { kind: "minus-0.5"; label: string }
  | { kind: "times-10"; label: string }
  | { kind: "custom"; label: string; factor: number; offset: number };

export const RULE_MINUS_075: ConversionRule = {
  kind: "minus-0.75",
  label: "(CGPA − 0.75) × 10",
};

export const RULE_MINUS_05: ConversionRule = {
  kind: "minus-0.5",
  label: "(CGPA − 0.5) × 10",
};

export const RULE_TIMES_10: ConversionRule = {
  kind: "times-10",
  label: "CGPA × 10",
};

export function cgpaToPercentage(value: number, rule: ConversionRule): number {
  switch (rule.kind) {
    case "minus-0.75":
      return (value - 0.75) * 10;
    case "minus-0.5":
      return (value - 0.5) * 10;
    case "times-10":
      return value * 10;
    case "custom":
      return (value - rule.offset) * rule.factor;
  }
}

export function percentageToCgpa(value: number, rule: ConversionRule): number {
  switch (rule.kind) {
    case "minus-0.75":
      return value / 10 + 0.75;
    case "minus-0.5":
      return value / 10 + 0.5;
    case "times-10":
      return value / 10;
    case "custom":
      return value / rule.factor + rule.offset;
  }
}

/* ------------------------------------------------------------------ */
/* Attendance                                                          */
/* ------------------------------------------------------------------ */

export interface AttendanceResult {
  current: number;
  /** Classes you can still miss and stay at or above the requirement. */
  canSkip: number;
  /** Consecutive classes you must attend to reach the requirement. */
  mustAttend: number;
  meetsRequirement: boolean;
}

export function attendance(
  attended: number,
  held: number,
  required: number,
): AttendanceResult | null {
  if (held <= 0 || attended > held) return null;
  const r = required / 100;
  const current = (attended / held) * 100;
  const meetsRequirement = current >= required;

  // How many more classes can be missed: attended / (held + x) >= r
  const canSkip = meetsRequirement && r > 0 ? Math.floor(attended / r - held) : 0;

  // How many consecutive classes must be attended: (attended + x) / (held + x) >= r
  const mustAttend =
    !meetsRequirement && r < 1 ? Math.ceil((r * held - attended) / (1 - r)) : 0;

  return {
    current,
    canSkip: Math.max(0, canSkip),
    mustAttend: Math.max(0, mustAttend),
    meetsRequirement,
  };
}
