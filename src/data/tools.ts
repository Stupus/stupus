import { universities } from "./universities";
import type { ToolIconName } from "../components/ToolIcon";

export interface ToolEntry {
  title: string;
  to: string;
  description: string;
  keywords: string[];
  university?: string;
  icon?: ToolIconName;
}


const generalTools: ToolEntry[] = [
  {
    title: "CGPA Calculator",
    to: "/cgpa-calculator",
    description: "Combine your semester SGPAs and credits into a CGPA.",
    keywords: ["cgpa", "cumulative", "grade point average", "overall gpa", "aggregate"],
    icon: "cgpa",
  },
  {
    title: "SGPA Calculator",
    to: "/sgpa-calculator",
    description: "Work out one semester's SGPA from subject credits and grades.",
    keywords: ["sgpa", "semester", "gpa", "grade points", "semester gpa"],
    icon: "sgpa",
  },
  {
    title: "Attendance Calculator",
    to: "/attendance-calculator",
    description: "See your attendance percentage and how many classes you can miss.",
    keywords: [
      "attendance",
      "bunk",
      "classes",
      "75 percent",
      "shortage",
      "condonation",
    ],
    icon: "attendance",
  },
  {
    title: "Percentage Calculator",
    to: "/percentage-calculator",
    description: "Turn marks out of a total into a percentage.",
    keywords: ["percentage", "marks", "percent", "score", "total marks"],
    icon: "percentage",
  },
  {
    title: "CGPA to Percentage Converter",
    to: "/gpa-converter",
    description: "Convert CGPA to percentage and back, using your university's rule.",
    keywords: [
      "gpa converter",
      "cgpa to percentage",
      "percentage to cgpa",
      "convert",
      "conversion",
    ],
    icon: "converter",
  },
];


const universityTools: ToolEntry[] = universities.flatMap((u) => [
  {
    title: `${u.shortName} Tools`,
    to: `/${u.slug}`,
    description: `All Stupus calculators for ${u.shortName} students.`,
    keywords: [...u.aliases, "tools", "calculator"],
    university: u.shortName,
  },
  ...u.tools.map((t) => ({
    title: `${u.shortName} ${t.label}`,
    to: `/${u.slug}/${t.slug}`,
    description: `${t.label} using ${u.shortName} rules.`,
    keywords: [...u.aliases, ...t.slug.split("-"), t.label.toLowerCase()],
    university: u.shortName,
  })),
]);

export const allTools: ToolEntry[] = [...generalTools, ...universityTools];

export const generalToolList = generalTools;

/** Tiny token-overlap search — no dependencies, runs instantly. */
export function searchTools(query: string, limit = 8): ToolEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = allTools.map((tool) => {
    const haystack = [tool.title, tool.description, ...tool.keywords]
      .join(" ")
      .toLowerCase();
    let score = 0;
    for (const token of tokens) {
      if (haystack.includes(token)) score += 2;
      if (tool.title.toLowerCase().includes(token)) score += 3;
      if (tool.title.toLowerCase().startsWith(token)) score += 1;
    }
    // Every token must match somewhere, so "vtu cgpa" beats plain "cgpa".
    const allMatched = tokens.every((t) => haystack.includes(t));
    return { tool, score: allMatched ? score + 4 : score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.title.length - b.tool.title.length)
    .slice(0, limit)
    .map((s) => s.tool);
}
