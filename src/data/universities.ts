export interface UniversityTheme {
  primary: string;
  strong: string;
  light: string;
  border: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface GradeRow {
  grade: string;
  points: number;
}

export interface UniversityTool {
  /** "cgpa-calculator" etc. */
  slug: string;
  label: string;
}

export interface University {
  slug: string;
  name: string;
  shortName: string;
  initials: string;
  logo: string;
  state: string;
  aliases: string[];
  theme: UniversityTheme;
  /** Short, factual intro used on the hub page. */
  intro: string;
  /** Grading scheme note shown on tool pages. */
  scheme: string;
  grades: GradeRow[];
  /** Human label of the CGPA -> percentage rule, or null when not published. */
  percentageRule: "minus-0.75" | "minus-0.5" | "times-10" | null;
  percentageNote: string;
  /** Official regulation/notice the rules on this page come from. */
  source: { label: string; url: string } | null;
  tools: UniversityTool[];
}

export function themeStyle(t: UniversityTheme): React.CSSProperties {
  return {
    "--brand-primary": t.primary,
    "--brand-strong": t.strong,
    "--brand-light": t.light,
    "--brand-border": t.border,
    "--brand-gradient-start": t.gradientStart,
    "--brand-gradient-end": t.gradientEnd,
  } as React.CSSProperties;
}

const TEN_POINT: GradeRow[] = [
  { grade: "O (Outstanding)", points: 10 },
  { grade: "A+ (Excellent)", points: 9 },
  { grade: "A (Very Good)", points: 8 },
  { grade: "B+ (Good)", points: 7 },
  { grade: "B (Above Average)", points: 6 },
  { grade: "C (Average)", points: 5 },
  { grade: "P (Pass)", points: 4 },
  { grade: "F (Fail)", points: 0 },
];

export const universities: University[] = [
  {
    slug: "vtu",
    name: "Visvesvaraya Technological University",
    shortName: "VTU",
    initials: "VTU",
    logo: "/assets/universities/vtu.webp",
    state: "Karnataka",
    aliases: ["vtu", "visvesvaraya", "belagavi", "belgaum", "karnataka"],
    theme: {
      primary: "oklch(0.45 0.14 262)",
      strong: "oklch(0.39 0.14 262)",
      light: "oklch(0.962 0.018 262)",
      border: "oklch(0.89 0.04 262)",
      gradientStart: "oklch(0.982 0.01 262)",
      gradientEnd: "oklch(0.952 0.026 262)",
    },
    intro:
      "VTU is Karnataka's state technical university and affiliates most engineering colleges in the state. Its results are published as SGPA per semester and a CGPA across all semesters, on a 10-point scale.",
    scheme:
      "Applies to VTU's credit-based (CBCS) schemes. VTU publishes the percentage formula for the 2015, 2017 and 2018 schemes.",
    grades: TEN_POINT,
    percentageRule: "minus-0.75",
    percentageNote:
      "VTU's official standard formula is (CGPA − 0.75) × 10, published for the 2015, 2017 and 2018 schemes. If you are on a newer scheme, confirm with your college before using it on an application.",
    source: {
      label: "VTU — CGPA standard formula",
      url: "https://vtu.ac.in/cgpa-standard-formula/",
    },
    tools: [
      { slug: "cgpa-calculator", label: "CGPA Calculator" },
      { slug: "sgpa-calculator", label: "SGPA Calculator" },
      { slug: "percentage-calculator", label: "Percentage Calculator" },
    ],
  },
  {
    slug: "jntuh",
    name: "Jawaharlal Nehru Technological University Hyderabad",
    shortName: "JNTUH",
    initials: "JH",
    logo: "/assets/universities/jntuh.webp",
    state: "Telangana",
    aliases: ["jntuh", "jntu hyderabad", "hyderabad", "telangana", "jntu"],
    theme: {
      primary: "oklch(0.47 0.15 25)",
      strong: "oklch(0.41 0.15 25)",
      light: "oklch(0.965 0.017 25)",
      border: "oklch(0.9 0.04 25)",
      gradientStart: "oklch(0.984 0.009 25)",
      gradientEnd: "oklch(0.957 0.024 25)",
    },
    intro:
      "JNTUH is the technical university for Telangana. Under its R18 and later regulations, results are reported as SGPA per semester and CGPA across semesters on a 10-point scale.",
    scheme: "Based on the JNTUH R18 B.Tech regulations. Later regulations such as R22 may differ — check your own regulation booklet.",
    grades: [
      { grade: "O (Outstanding)", points: 10 },
      { grade: "A+ (Excellent)", points: 9 },
      { grade: "A (Very Good)", points: 8 },
      { grade: "B+ (Good)", points: 7 },
      { grade: "B (Above Average)", points: 6 },
      { grade: "C (Pass)", points: 5 },
      { grade: "F (Fail)", points: 0 },
      { grade: "Ab (Absent)", points: 0 },
    ],
    percentageRule: "minus-0.5",
    percentageNote:
      "JNTUH's R18 B.Tech regulations state: percentage of marks = (final CGPA − 0.5) × 10. Note this differs from the 0.75 rule other universities use.",
    source: {
      label: "JNTUH R18 B.Tech Academic Regulations",
      url: "https://jntuh.ac.in/uploads/academics/R18B.TECHAcademicRegulations2.pdf",
    },
    tools: [
      { slug: "cgpa-calculator", label: "CGPA Calculator" },
      { slug: "sgpa-calculator", label: "SGPA Calculator" },
      { slug: "percentage-calculator", label: "Percentage Calculator" },
    ],
  },
  {
    slug: "jntuk",
    name: "Jawaharlal Nehru Technological University Kakinada",
    shortName: "JNTUK",
    initials: "JK",
    logo: "/assets/universities/jntuk.webp",
    state: "Andhra Pradesh",
    aliases: ["jntuk", "jntu kakinada", "kakinada", "andhra"],
    theme: {
      primary: "oklch(0.45 0.1 195)",
      strong: "oklch(0.39 0.1 195)",
      light: "oklch(0.962 0.018 195)",
      border: "oklch(0.89 0.04 195)",
      gradientStart: "oklch(0.982 0.01 195)",
      gradientEnd: "oklch(0.952 0.026 195)",
    },
    intro:
      "JNTUK serves engineering colleges across Andhra Pradesh. Its credit-based regulations (R19, R20 and later) report SGPA per semester and CGPA across semesters on a 10-point scale.",
    scheme: "Based on JNTUK's credit-based regulations. Grade letters differ slightly between regulation years — check your own regulation booklet.",
    grades: [
      { grade: "O (Outstanding)", points: 10 },
      { grade: "S (Excellent)", points: 9 },
      { grade: "A (Very Good)", points: 8 },
      { grade: "B (Good)", points: 7 },
      { grade: "C (Fair)", points: 6 },
      { grade: "D (Pass)", points: 5 },
      { grade: "F (Fail)", points: 0 },
    ],
    percentageRule: "minus-0.75",
    percentageNote:
      "JNTUK regulations give the equivalent percentage of marks as (CGPA − 0.75) × 10.",
    source: {
      label: "JNTUK academic regulations (PDF)",
      url: "https://www.jntuk.edu.in/jntuk_uploads/home/7856881726828200480.pdf",
    },
    tools: [
      { slug: "cgpa-calculator", label: "CGPA Calculator" },
      { slug: "sgpa-calculator", label: "SGPA Calculator" },
      { slug: "percentage-calculator", label: "Percentage Calculator" },
    ],
  },
  {
    slug: "anna-university",
    name: "Anna University",
    shortName: "Anna University",
    initials: "AU",
    logo: "/assets/universities/anna-university.webp",
    state: "Tamil Nadu",
    aliases: ["anna", "anna university", "chennai", "tamil nadu", "au"],
    theme: {
      primary: "oklch(0.45 0.11 155)",
      strong: "oklch(0.39 0.11 155)",
      light: "oklch(0.962 0.018 155)",
      border: "oklch(0.89 0.04 155)",
      gradientStart: "oklch(0.982 0.01 155)",
      gradientEnd: "oklch(0.952 0.026 155)",
    },
    intro:
      "Anna University affiliates engineering colleges across Tamil Nadu. Results are published as GPA per semester and CGPA across semesters on a 10-point scale.",
    scheme:
      "Based on Anna University Regulation 2023 (Revision 1, 2024) for B.E./B.Tech. Older regulations used O instead of S as the top grade.",
    grades: [
      { grade: "S (Outstanding, 91–100)", points: 10 },
      { grade: "A+ (Excellent, 81–90)", points: 9 },
      { grade: "A (Very Good, 71–80)", points: 8 },
      { grade: "B+ (Good, 61–70)", points: 7 },
      { grade: "B (Average, 56–60)", points: 6 },
      { grade: "C (Satisfactory, 50–55)", points: 5 },
      { grade: "U (Re-appearance)", points: 0 },
    ],
    percentageRule: "times-10",
    percentageNote:
      "Clause 21.10 of Regulation 2023 gives percentage of marks = CGPA × 10.",
    source: {
      label: "Anna University B.E./B.Tech Regulation 2023 (Rev. 1, 2024)",
      url: "https://www.annauniv.edu/pdf/B.E%20-%20B.Tech%20Academic%20Regulations%202023%20(Revision%201,%202024).pdf",
    },
    tools: [
      { slug: "cgpa-calculator", label: "CGPA Calculator" },
      { slug: "sgpa-calculator", label: "GPA Calculator" },
      { slug: "percentage-calculator", label: "Percentage Calculator" },
    ],
  },
  {
    slug: "aktu",
    name: "Dr. A.P.J. Abdul Kalam Technical University",
    shortName: "AKTU",
    initials: "AK",
    logo: "/assets/universities/aktu.webp",
    state: "Uttar Pradesh",
    aliases: ["aktu", "uptu", "abdul kalam", "lucknow", "uttar pradesh"],
    theme: {
      primary: "oklch(0.52 0.14 55)",
      strong: "oklch(0.46 0.14 55)",
      light: "oklch(0.965 0.022 60)",
      border: "oklch(0.9 0.05 60)",
      gradientStart: "oklch(0.984 0.012 60)",
      gradientEnd: "oklch(0.957 0.03 60)",
    },
    intro:
      "AKTU (formerly UPTU) is the technical university for Uttar Pradesh. Semester results are reported as SGPA and CGPA on a 10-point credit-based scale.",
    scheme:
      "Based on AKTU's 10-point credit-based evaluation scheme. We could not verify the grade table against an official AKTU ordinance, so confirm the grade points on your own grade card.",
    grades: [
      { grade: "A++ (Outstanding)", points: 10 },
      { grade: "A+ (Excellent)", points: 9 },
      { grade: "A (Very Good)", points: 8 },
      { grade: "B+ (Good)", points: 7 },
      { grade: "B (Above Average)", points: 6 },
      { grade: "C (Average)", points: 5 },
      { grade: "P (Pass)", points: 4 },
      { grade: "F (Fail)", points: 0 },
    ],
    percentageRule: null,
    percentageNote:
      "We could not find an official AKTU notice fixing a single CGPA-to-percentage formula, so we don't state one here. Both CGPA × 10 and (CGPA − 0.75) × 10 are used by third-party sites — check your grade card or ask your examination cell before quoting a figure.",
    source: null,
    tools: [
      { slug: "cgpa-calculator", label: "CGPA Calculator" },
      { slug: "sgpa-calculator", label: "SGPA Calculator" },
      { slug: "percentage-calculator", label: "Percentage Calculator" },
    ],
  },
];

export function getUniversity(slug: string): University {
  const u = universities.find((x) => x.slug === slug);
  if (!u) throw new Error(`Unknown university: ${slug}`);
  return u;
}
