import type { FaqItem } from "../components/Faq";

export interface ToolContent {
  h1: string;
  title: string;
  description: string;
  /** Lead paragraph under the H1. */
  intro: string;
  /** Body paragraphs rendered after the calculator. */
  body: string[];
  faqs: FaqItem[];
}

type UniversityContent = Record<string, ToolContent>;

export const universityContent: Record<string, UniversityContent> = {
  vtu: {
    "cgpa-calculator": {
      h1: "VTU CGPA Calculator",
      title: "VTU CGPA Calculator — Belagavi 10-point scale | Stupus",
      description:
        "Calculate your VTU CGPA from semester SGPAs and credits, and convert it with VTU's official (CGPA − 0.75) × 10 formula.",
      intro:
        "Enter the credits and SGPA of each VTU semester. The calculator uses the credit-weighted average VTU prints on its grade cards.",
      body: [
        "VTU results arrive one semester at a time as an SGPA. Your CGPA is the credit-weighted average of those SGPAs, so a heavy 26-credit semester moves it more than a light one. Third and fourth-year semesters with projects usually carry the most credits, which is why a strong final year can still lift a CGPA built on an average second year.",
        "VTU publishes the percentage conversion separately: (CGPA − 0.75) × 10, listed on the university's own CGPA formula page for the 2015, 2017 and 2018 schemes. A CGPA of 8.2 therefore reads as 74.5% on a VTU conversion certificate, not 82%.",
        "If you are on a newer scheme, the credit-weighted CGPA maths is unchanged, but confirm the percentage rule with your college before quoting it on a job or visa application.",
      ],
      faqs: [
        {
          q: "Does VTU count all semesters equally in CGPA?",
          a: "No. Each semester is weighted by its credits, so semesters with more credits pull the CGPA harder.",
        },
        {
          q: "What is the VTU CGPA to percentage formula?",
          a: "VTU's official standard formula is (CGPA − 0.75) × 10, published for the 2015, 2017 and 2018 schemes.",
        },
        {
          q: "Do backlogs affect my VTU CGPA?",
          a: "Yes, while they are pending. A failed subject carries 0 grade points but its credits still count, and your CGPA improves once you clear it and the revised grade is published.",
        },
        {
          q: "Is 8 CGPA good at VTU?",
          a: "It works out to 72.5% under VTU's formula, which clears the 60% and 70% cut-offs most campus recruiters set.",
        },
      ],
    },
    "sgpa-calculator": {
      h1: "VTU SGPA Calculator",
      title: "VTU SGPA Calculator — semester GPA from credits | Stupus",
      description:
        "Work out your VTU SGPA for one semester using subject credits and the VTU 10-point grade scale.",
      intro:
        "Add each subject of the semester with its credits and grade to get your VTU SGPA.",
      body: [
        "VTU's SGPA is the sum of credits times grade points, divided by the total credits registered that semester. Theory subjects usually carry 3 or 4 credits, labs 1 or 2, and internship or project work more — so grades in the big subjects decide most of the result.",
        "VTU's grade points run from O at 10 down to P at 4, with F carrying 0. A fail keeps its credits in the denominator, so one F in a 4-credit subject costs far more than a low grade in a 1-credit lab.",
      ],
      faqs: [
        {
          q: "Which grade points does VTU use?",
          a: "A 10-point scale: O is 10, A+ is 9, A is 8, B+ is 7, B is 6, C is 5, P is 4 and F is 0.",
        },
        {
          q: "Do lab subjects count towards VTU SGPA?",
          a: "Yes, with their own credits, usually 1 or 2 per lab.",
        },
        {
          q: "How is SGPA different from CGPA at VTU?",
          a: "SGPA covers one semester. CGPA combines every semester so far, weighted by credits.",
        },
      ],
    },
    "percentage-calculator": {
      h1: "VTU Percentage Calculator",
      title: "VTU CGPA to Percentage Calculator (−0.75 rule) | Stupus",
      description:
        "Convert your VTU CGPA into a percentage using VTU's official (CGPA − 0.75) × 10 formula, or convert back.",
      intro:
        "VTU uses its own conversion rule. Enter your CGPA to see the percentage a VTU conversion certificate would show.",
      body: [
        "The formula is fixed by the university rather than derived: percentage = (CGPA − 0.75) × 10. VTU publishes it for the 2015, 2017 and 2018 schemes on its official CGPA formula page.",
        "Because of the 0.75 deduction, every VTU percentage is 7.5 points lower than a plain CGPA × 10 conversion. Students often quote the higher number by mistake on application forms; recruiters who check the transcript will see the lower one.",
      ],
      faqs: [
        {
          q: "Why does VTU subtract 0.75?",
          a: "It is a fixed adjustment set in VTU's own conversion notice, not a calculation you can derive.",
        },
        {
          q: "What percentage is 9 CGPA in VTU?",
          a: "(9 − 0.75) × 10 = 82.5%.",
        },
        {
          q: "Does this formula apply to the 2021 and 2022 schemes?",
          a: "VTU publishes it for the 2015, 2017 and 2018 schemes. For newer schemes, confirm with your college or the examination section before using it officially.",
        },
      ],
    },
  },

  jntuh: {
    "cgpa-calculator": {
      h1: "JNTUH CGPA Calculator",
      title: "JNTUH CGPA Calculator — R18 regulations | Stupus",
      description:
        "Calculate your JNTUH CGPA from semester SGPAs and credits, following the R18 B.Tech academic regulations.",
      intro:
        "Enter each JNTUH semester's credits and SGPA. The maths follows the CGPA formula in the R18 B.Tech regulations.",
      body: [
        "JNTUH's R18 regulations define CGPA as the sum of credits times grade points across all registered semesters, divided by total credits. Practically, that means you can compute it from semester SGPAs as long as you weight each one by that semester's credits.",
        "One detail catches JNTUH students out: the percentage conversion in R18 is (final CGPA − 0.5) × 10, not the 0.75 rule used by VTU and JNTUK. A CGPA of 7.8 is 73% at JNTUH but would be 70.5% under the 0.75 rule.",
        "R22 regulations exist for newer batches. The credit-weighted CGPA formula is the same idea, but verify the conversion clause in your own regulation booklet before relying on it.",
      ],
      faqs: [
        {
          q: "What is the JNTUH CGPA to percentage formula?",
          a: "Under the R18 B.Tech regulations, percentage of marks = (final CGPA − 0.5) × 10.",
        },
        {
          q: "Does JNTUH include failed subjects in CGPA?",
          a: "Yes. An F carries 0 grade points while its credits stay in the total, so the CGPA is depressed until the backlog is cleared.",
        },
        {
          q: "Is the JNTUH formula the same as JNTUK's?",
          a: "No. JNTUH R18 uses a 0.5 deduction, while JNTUK regulations use 0.75.",
        },
        {
          q: "Which regulation applies to me?",
          a: "It is printed on your grade card and hall ticket — typically R18 for batches admitted from 2018, and R22 for recent batches.",
        },
      ],
    },
    "sgpa-calculator": {
      h1: "JNTUH SGPA Calculator",
      title: "JNTUH SGPA Calculator — R18 grade points | Stupus",
      description:
        "Calculate your JNTUH semester SGPA using the R18 absolute grading scale and subject credits.",
      intro:
        "Add each subject with its credits and letter grade to get the SGPA for one JNTUH semester.",
      body: [
        "JNTUH uses absolute grading: 90% and above is O with 10 points, 80–89 is A+ with 9, 70–79 is A with 8, 60–69 is B+ with 7, 50–59 is B with 6, 40–49 is C with 5, and below 40 is F with 0. Absent is recorded as Ab and also carries 0.",
        "SGPA is the credit-weighted average of those points for the semester. The minimum pass is a C grade, so a subject at 39% and one at 41% are only two marks apart but 5 grade points apart in the SGPA.",
      ],
      faqs: [
        {
          q: "What is the JNTUH pass mark?",
          a: "Under R18 you need a C grade — 40% aggregate in the subject with the required minimum in the end exam.",
        },
        {
          q: "What does Ab mean on a JNTUH result?",
          a: "Absent. It is treated as 0 grade points until you clear the subject.",
        },
        {
          q: "Does JNTUH round SGPA?",
          a: "Grade cards show SGPA to two decimals; this calculator matches that.",
        },
      ],
    },
    "percentage-calculator": {
      h1: "JNTUH Percentage Calculator",
      title: "JNTUH CGPA to Percentage — (CGPA − 0.5) × 10 | Stupus",
      description:
        "Convert JNTUH CGPA to percentage with the R18 rule, percentage of marks = (final CGPA − 0.5) × 10.",
      intro:
        "JNTUH's R18 regulations deduct 0.5, not 0.75. Enter your CGPA to get the correct percentage.",
      body: [
        "The R18 B.Tech academic regulations state percentage of marks = (final CGPA − 0.5) × 10. This is the figure to quote for placements, higher studies and government applications.",
        "Copying the 0.75 formula from a generic calculator would understate your percentage by 2.5 points — a real difference when an eligibility cut-off sits at 60% or 70%.",
      ],
      faqs: [
        {
          q: "What percentage is 8 CGPA in JNTUH?",
          a: "(8 − 0.5) × 10 = 75%.",
        },
        {
          q: "Can I use the 0.75 formula for JNTUH?",
          a: "No. That rule belongs to other universities; JNTUH R18 specifies 0.5.",
        },
        {
          q: "Does JNTUH issue a conversion certificate?",
          a: "The percentage follows from the regulation clause; the examination branch can issue documentation if an employer or university asks for it.",
        },
      ],
    },
  },

  jntuk: {
    "cgpa-calculator": {
      h1: "JNTUK CGPA Calculator",
      title: "JNTUK CGPA Calculator — Kakinada 10-point scale | Stupus",
      description:
        "Calculate your JNTUK CGPA from semester SGPAs and credits, and convert with the (CGPA − 0.75) × 10 rule.",
      intro:
        "Enter the credits and SGPA of each JNTUK semester to get your cumulative grade point average.",
      body: [
        "JNTUK computes CGPA as the credit-weighted average of your semester results across every registered semester. It is not a plain average of SGPAs, so semesters with more credits count for more.",
        "JNTUK's regulations give the equivalent percentage as (CGPA − 0.75) × 10 — the same rule VTU uses, and different from JNTUH's 0.5 deduction, even though the two JNTU universities share a name and a history.",
      ],
      faqs: [
        {
          q: "Is JNTUK CGPA calculated the same way as JNTUH?",
          a: "The credit-weighted CGPA maths is the same, but the percentage conversion differs: JNTUK uses 0.75 and JNTUH R18 uses 0.5.",
        },
        {
          q: "Do all JNTUK semesters have the same credits?",
          a: "No, and the difference matters. Enter each semester's actual credits rather than assuming they are equal.",
        },
        {
          q: "How do backlogs affect JNTUK CGPA?",
          a: "Failed credits count with 0 grade points until the subject is cleared and the revised grade appears.",
        },
      ],
    },
    "sgpa-calculator": {
      h1: "JNTUK SGPA Calculator",
      title: "JNTUK SGPA Calculator — semester grade point average | Stupus",
      description:
        "Calculate your JNTUK semester SGPA from subject credits and letter grades on the 10-point scale.",
      intro: "Add every subject of the semester with its credits and grade.",
      body: [
        "JNTUK's letter grades run O at 10 points, S at 9, A at 8, B at 7, C at 6, D at 5 as the pass grade, and F at 0. The letters differ from JNTUH's, so do not copy a grade table across from a sibling university.",
        "SGPA weights each subject by its credits, which means projects and major theory papers move the number far more than a single lab.",
      ],
      faqs: [
        {
          q: "What is the lowest passing grade at JNTUK?",
          a: "D, worth 5 grade points, corresponding to 40–49%.",
        },
        {
          q: "Why does JNTUK use S instead of A+?",
          a: "It is simply the letter set chosen in JNTUK's regulations; the grade point value of 9 is the same idea as A+ elsewhere.",
        },
        {
          q: "Should I confirm the grade table for my regulation?",
          a: "Yes. Grade letters vary between JNTUK regulation years, so check the booklet for your batch.",
        },
      ],
    },
    "percentage-calculator": {
      h1: "JNTUK Percentage Calculator",
      title: "JNTUK CGPA to Percentage Converter | Stupus",
      description:
        "Convert your JNTUK CGPA to a percentage using the (CGPA − 0.75) × 10 rule from JNTUK's regulations.",
      intro: "Enter your JNTUK CGPA to see the equivalent percentage of marks.",
      body: [
        "JNTUK's regulations state equivalent percentage = (CGPA − 0.75) × 10. A CGPA of 7.5 becomes 67.5%.",
        "Use this figure on application forms rather than a plain CGPA × 10 conversion, which does not match what your transcript implies.",
      ],
      faqs: [
        {
          q: "What percentage is 7 CGPA in JNTUK?",
          a: "(7 − 0.75) × 10 = 62.5%.",
        },
        {
          q: "Does JNTUK use the same rule as JNTUH?",
          a: "No. JNTUH R18 deducts 0.5; JNTUK deducts 0.75.",
        },
      ],
    },
  },

  "anna-university": {
    "cgpa-calculator": {
      h1: "Anna University CGPA Calculator",
      title: "Anna University CGPA Calculator — Regulation 2023 | Stupus",
      description:
        "Calculate your Anna University CGPA from semester GPAs and credits, following Regulation 2023.",
      intro:
        "Enter the credits and GPA of each semester to get your Anna University CGPA.",
      body: [
        "Anna University's Regulation 2023 defines GPA as the sum of credits times grade points divided by total credits, and CGPA the same way cumulatively across completed semesters.",
        "The percentage conversion is the friendliest of the major Indian technical universities: clause 21.10 sets percentage of marks = CGPA × 10, with no deduction. A CGPA of 8.4 is simply 84%.",
      ],
      faqs: [
        {
          q: "What is the Anna University CGPA to percentage formula?",
          a: "Regulation 2023 clause 21.10 gives percentage of marks = CGPA × 10.",
        },
        {
          q: "Does Anna University call it GPA or SGPA?",
          a: "The regulations use GPA for a single semester and CGPA cumulatively; many colleges still say SGPA informally.",
        },
        {
          q: "Do arrears affect CGPA?",
          a: "Yes. A U grade carries 0 points while its credits count, until you clear the arrear.",
        },
      ],
    },
    "sgpa-calculator": {
      h1: "Anna University GPA Calculator",
      title: "Anna University GPA Calculator — R2023 grade points | Stupus",
      description:
        "Calculate your Anna University semester GPA using the Regulation 2023 absolute grading scale.",
      intro:
        "Add each subject with its credits and grade to get your semester GPA.",
      body: [
        "Under Regulation 2023, S is the top grade at 10 points for 91–100 marks, then A+ at 9 for 81–90, A at 8 for 71–80, B+ at 7 for 61–70, B at 6 for 56–60, C at 5 for 50–55, and U at 0 below 50.",
        "The pass mark is 50%, higher than the 40% used by several other Indian universities — a subject at 48 is an arrear here even though it would pass elsewhere.",
        "Older regulations used O rather than S for the top grade. The arithmetic is identical; only the letter changed.",
      ],
      faqs: [
        {
          q: "What is the pass mark at Anna University?",
          a: "50% overall in the subject, which corresponds to grade C and 5 grade points under Regulation 2023.",
        },
        {
          q: "What does U mean on an Anna University result?",
          a: "Re-appearance — the subject was not cleared and carries 0 grade points.",
        },
        {
          q: "Is S the same as O?",
          a: "Yes in value. Regulation 2023 renamed the 10-point top grade from O to S.",
        },
      ],
    },
    "percentage-calculator": {
      h1: "Anna University Percentage Calculator",
      title: "Anna University CGPA to Percentage (CGPA × 10) | Stupus",
      description:
        "Convert Anna University CGPA to percentage using clause 21.10 of Regulation 2023: percentage = CGPA × 10.",
      intro: "Enter your CGPA to convert it with Anna University's own rule.",
      body: [
        "Regulation 2023 states percentage of marks = CGPA × 10. There is no deduction, so the conversion is a straight multiplication.",
        "This is the number Anna University uses on conversion documents, so it is the one to enter on placement and higher-studies forms.",
      ],
      faqs: [
        {
          q: "What percentage is 8.5 CGPA in Anna University?",
          a: "8.5 × 10 = 85%.",
        },
        {
          q: "Why is there no 0.75 deduction?",
          a: "Different universities publish different rules. Anna University's regulation specifies a plain × 10 conversion.",
        },
      ],
    },
  },

  aktu: {
    "cgpa-calculator": {
      h1: "AKTU CGPA Calculator",
      title: "AKTU CGPA Calculator — 10-point credit system | Stupus",
      description:
        "Calculate your AKTU (formerly UPTU) CGPA from semester SGPAs and credits on the 10-point scale.",
      intro:
        "Enter the credits and SGPA of each AKTU semester to get your cumulative grade point average.",
      body: [
        "AKTU reports results per semester as an SGPA on a 10-point credit-based scale. The CGPA is the credit-weighted average of those semesters, so semesters with more credits count for more.",
        "We could not verify an official AKTU ordinance fixing a single CGPA-to-percentage formula, so we do not state one on this page. Third-party sites disagree — some use CGPA × 10 and others (CGPA − 0.75) × 10. Check your grade card or your examination cell before quoting a percentage anywhere official.",
      ],
      faqs: [
        {
          q: "Is AKTU CGPA a simple average of SGPAs?",
          a: "No. Each semester is weighted by its credits.",
        },
        {
          q: "What is the AKTU CGPA to percentage formula?",
          a: "We could not confirm an official AKTU notice specifying one. Confirm with your college or examination cell rather than relying on a third-party figure.",
        },
        {
          q: "Does AKTU count carry-over papers in CGPA?",
          a: "A failed paper carries 0 grade points with its credits still counted until it is cleared.",
        },
      ],
    },
    "sgpa-calculator": {
      h1: "AKTU SGPA Calculator",
      title: "AKTU SGPA Calculator — semester grade point average | Stupus",
      description:
        "Calculate your AKTU semester SGPA from subject credits and grade points on the 10-point scale.",
      intro: "Add each subject with its credits and grade points for the semester.",
      body: [
        "AKTU's evaluation scheme is credit-based on a 10-point scale, with the top grade worth 10 points and a fail worth 0. SGPA is the credit-weighted average of the grade points you earned that semester.",
        "We could not confirm the exact grade letter table against an official AKTU ordinance, so use the grade points printed on your own grade card if they differ from the reference table below.",
      ],
      faqs: [
        {
          q: "How many credits is an AKTU semester?",
          a: "It varies by branch and year, usually in the low twenties. Use the total printed on your grade card.",
        },
        {
          q: "Are grade points on the AKTU grade card the ones to use?",
          a: "Yes — your grade card is the authoritative source for both credits and grade points.",
        },
      ],
    },
    "percentage-calculator": {
      h1: "AKTU Percentage Calculator",
      title: "AKTU CGPA to Percentage Converter | Stupus",
      description:
        "Convert AKTU CGPA to percentage. Pick the conversion rule your grade card or examination cell confirms.",
      intro:
        "AKTU students see two different conversion rules quoted online. Pick the one your university confirms rather than assuming.",
      body: [
        "We could not retrieve an official AKTU document fixing a single CGPA-to-percentage formula, so this page lets you choose. CGPA × 10 and (CGPA − 0.75) × 10 are the two rules commonly quoted, and they differ by 7.5 percentage points.",
        "Before writing a percentage on an application, check your grade card or ask your examination cell. Using the wrong rule can put you on the wrong side of a 60% or 70% eligibility cut-off.",
      ],
      faqs: [
        {
          q: "Which formula should AKTU students use?",
          a: "The one your grade card or examination cell states. We do not publish an unverified rule as if it were official.",
        },
        {
          q: "How big is the difference between the two rules?",
          a: "Exactly 7.5 percentage points, at any CGPA.",
        },
      ],
    },
  },
};

export function getToolContent(
  universitySlug: string,
  toolSlug: string,
): ToolContent | null {
  return universityContent[universitySlug]?.[toolSlug] ?? null;
}
