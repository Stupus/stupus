import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/blog/how-to-calculate-percentage-from-cgpa"
)({
  head: () => ({
    meta: [
      {
        title: "How to Calculate Percentage from CGPA",
      },
      {
        name: "description",
        content:
          "Learn how to calculate percentage from CGPA step by step with examples, formulas, and important conversion rules.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://stupus.bond/blog/how-to-calculate-percentage-from-cgpa",
      },
    ],
  }),
  component: HowToCalculatePercentageFromCgpa,
});

function HowToCalculatePercentageFromCgpa() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-8 sm:px-6 lg:py-12">
      <article>
        {/* Header */}
        <header className="mb-10">
          <a href="/" className="mb-8 inline-flex items-center gap-2">
            <img
              src="/assets/logo.webp"
              alt="Stupus"
              className="h-10 w-10 object-contain"
            />

            <span className="font-semibold text-[#2563eb]">Stupus</span>
          </a>

          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#2563eb]">
            Student Guide
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How to Calculate Percentage from CGPA
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Learn how to calculate percentage from CGPA using a simple
            step-by-step method. This guide explains the conversion formula,
            shows examples, and explains why the correct formula can depend on
            your university.
          </p>

          {/* Image / explanation card */}
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src="/assets/logo.webp"
                alt="Stupus"
                className="h-24 w-24 shrink-0 object-contain"
              />

              <div>
                <p className="font-semibold text-blue-900">
                  The basic idea
                </p>

                <p className="mt-2 leading-7 text-blue-800">
                  CGPA is usually represented on a grade-point scale, while
                  percentage is represented out of 100. To convert CGPA into a
                  percentage, you need to use the conversion formula specified
                  by your university or institution.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* How to calculate CGPA */}
        <Section title="First, know your CGPA">
          <p>
            Before converting CGPA into a percentage, you need to know your
            cumulative grade point average.
          </p>

          <p>
            If you are not sure how CGPA is calculated from your semester
            results, SGPA, and credits, you can read our complete guide first.
          </p>

          <a
            href="/blog/how-to-calculate-cgpa"
            className="inline-flex rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            Learn how to calculate CGPA →
          </a>
        </Section>

        {/* What is percentage? */}
        <Section title="What is percentage?">
          <p>
            Percentage is a way of expressing an academic result on a scale of
            100.
          </p>

          <p>
            For example, a percentage of 80% means that the result corresponds
            to 80 out of 100.
          </p>

          <p>
            CGPA and percentage use different scales, so a conversion formula
            is required when you want to express a CGPA as a percentage.
          </p>
        </Section>

        {/* What is CGPA? */}
        <Section title="What is CGPA?">
          <p>
            CGPA stands for <strong>Cumulative Grade Point Average</strong>. It
            represents your overall academic performance across the semesters
            included in your cumulative result.
          </p>

          <p>
            The CGPA scale can vary depending on the grading system used by
            your university. A common scale is 10 points, but not every
            institution necessarily uses the same scale.
          </p>
        </Section>

        {/* Formula */}
        <Section title="CGPA to percentage formula">
          <p>
            There is no single conversion formula that is officially correct
            for every university.
          </p>

          <p>
            If your university provides a conversion factor, the calculation
            generally follows this form:
          </p>

          <Formula>
            Percentage = CGPA × Conversion Factor
          </Formula>

          <p>
            For example, suppose your university specifies a conversion factor
            of 9.5. If your CGPA is 8.2:
          </p>

          <Calc>Percentage = 8.2 × 9.5 = 77.9%</Calc>

          <Note>
            The 9.5 factor in this example is only an example. Do not assume
            that 9.5 is the correct conversion factor for your university.
            Always check the official conversion rule.
          </Note>
        </Section>

        {/* Step by step */}
        <Section title="How to calculate percentage from CGPA step by step">
          <Step n="1" title="Find your CGPA">
            <p>
              First, find the CGPA shown on your marksheet, grade report, or
              calculated from your semester results.
            </p>

            <Result>Example CGPA = 8.5</Result>
          </Step>

          <Step n="2" title="Find your university's conversion formula">
            <p>
              Check your university's official academic regulations,
              examination guidelines, marksheet instructions, or other official
              documents.
            </p>

            <p>
              Suppose, for this example, that the university specifies a
              conversion factor of 9.5.
            </p>
          </Step>

          <Step n="3" title="Multiply your CGPA by the conversion factor">
            <p>
              Put your CGPA into the formula and multiply it by the factor
              specified by your university.
            </p>

            <Calc>8.5 × 9.5 = 80.75</Calc>
          </Step>

          <Step n="4" title="Add the percentage sign">
            <p>
              Since the result is being expressed as a percentage, the final
              value is:
            </p>

            <Result>80.75%</Result>
          </Step>
        </Section>

        {/* Complete example */}
        <Section title="Complete CGPA to percentage example">
          <p>
            Suppose a student has a CGPA of 8.4 and their university specifies
            that percentage should be calculated by multiplying CGPA by 9.5.
          </p>

          <Table
            headers={["Value", "Result"]}
            rows={[
              ["CGPA", "8.4"],
              ["Conversion factor", "9.5"],
              ["Calculation", "8.4 × 9.5"],
              ["Percentage", "79.80%"],
            ]}
          />

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-semibold text-blue-900">
              Final calculation
            </p>

            <p className="mt-2 text-blue-800">
              8.4 × 9.5 = <strong>79.80%</strong>
            </p>
          </div>
        </Section>

        {/* Examples */}
        <Section title="CGPA to percentage examples">
          <p>
            The following examples use a hypothetical conversion factor of
            9.5. They are provided to demonstrate the calculation method.
          </p>

          <Table
            headers={["CGPA", "Calculation", "Percentage"]}
            rows={[
              ["6.0", "6.0 × 9.5", "57.00%"],
              ["6.5", "6.5 × 9.5", "61.75%"],
              ["7.0", "7.0 × 9.5", "66.50%"],
              ["7.5", "7.5 × 9.5", "71.25%"],
              ["8.0", "8.0 × 9.5", "76.00%"],
              ["8.5", "8.5 × 9.5", "80.75%"],
              ["9.0", "9.0 × 9.5", "85.50%"],
              ["9.5", "9.5 × 9.5", "90.25%"],
            ]}
          />
        </Section>

        {/* Why 9.5 */}
        <Section title="Why do people use CGPA × 9.5?">
          <p>
            You may have seen the formula{" "}
            <strong>CGPA × 9.5</strong> on many websites and calculators.
          </p>

          <p>
            This conversion factor has been used in particular grading
            contexts, which is why it appears frequently in online
            explanations.
          </p>

          <p>
            However, you should not automatically apply it to every university.
            Universities can have their own grading and conversion rules.
          </p>

          <Note>
            If your university provides a specific CGPA-to-percentage formula,
            use that formula instead of assuming that CGPA × 9.5 applies to
            you.
          </Note>
        </Section>

        {/* University formula */}
        <Section title="Does every university use the same formula?">
          <p>
            No. The conversion method can vary between universities,
            institutions, and grading systems.
          </p>

          <p>
            Some institutions may use a fixed multiplier. Others may provide a
            different mathematical formula or a conversion table.
          </p>

          <p>
            This is especially important when your percentage is being used for
            an official application.
          </p>
        </Section>

        {/* Finding formula */}
        <Section title="How to find the correct conversion formula">
          <p>
            If you do not know which formula to use, check your university's
            official information first.
          </p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-semibold text-blue-900">
              Check these sources:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-blue-800">
              <li>Your marksheet or grade report</li>
              <li>Your university's academic regulations</li>
              <li>Examination or grading guidelines</li>
              <li>Official university documents</li>
              <li>Your examination or academic office</li>
            </ul>
          </div>
        </Section>

        {/* Official applications */}
        <Section title="Using CGPA percentage for official purposes">
          <p>
            If you are converting CGPA for college admission, scholarships,
            employment, competitive examinations, or another official
            application, be careful about which formula you use.
          </p>

          <p>
            The organization receiving your application may require a specific
            conversion method. If they provide instructions, follow those
            instructions instead of relying on a general online formula.
          </p>
        </Section>

        {/* Common mistakes */}
        <Section title="Common mistakes when converting CGPA to percentage">
          <div className="space-y-4">
            <Mistake
              title="Using CGPA × 9.5 automatically"
              text="The 9.5 factor is not a universal rule. Your university may use a different formula."
            />

            <Mistake
              title="Using another university's formula"
              text="A conversion method that works for one institution may not apply to another."
            />

            <Mistake
              title="Confusing SGPA and CGPA"
              text="SGPA generally represents a particular semester, while CGPA represents cumulative academic performance."
            />

            <Mistake
              title="Rounding too early"
              text="Keep the original CGPA precision during the calculation and round the final percentage according to the required rules."
            />
          </div>
        </Section>

        {/* CGPA vs percentage */}
        <Section title="CGPA vs percentage">
          <Table
            headers={["CGPA", "Percentage"]}
            rows={[
              ["Grade-point based", "Expressed on a scale of 100"],
              ["Usually cumulative", "Usually expressed as a percentage"],
              ["Uses a grading scale", "Uses a percentage scale"],
              [
                "Needs a conversion rule to become percentage",
                "Can be calculated using the applicable conversion rule",
              ],
            ]}
          />
        </Section>

        {/* What if formula isn't known */}
        <Section title="What if I don't know my university's formula?">
          <p>
            Do not simply choose a formula from a random calculator or website
            if you need the result for an official purpose.
          </p>

          <p>
            First, look for the conversion rule in your university's official
            documents. If you still cannot find it, contact the relevant
            examination or academic office.
          </p>
        </Section>

        {/* Calculator */}
        <Section title="Calculate CGPA to percentage with Stupus">
          <p>
            Once you know the correct conversion formula, you can use the
            Stupus CGPA to Percentage Calculator to perform the calculation
            quickly.
          </p>

          <p>
            You can use the calculator for a quick result while still
            understanding how the calculation works from this guide.
          </p>
        </Section>

        <section className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-7 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Convert your CGPA to percentage
          </h2>

          <p className="mt-2 text-slate-600">
            Calculate your percentage from CGPA with the Stupus calculator.
          </p>

          <a
            href="/cgpa-to-percentage"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Open CGPA to Percentage Calculator
          </a>
        </section>

        {/* FAQ */}
        <Section title="Frequently asked questions">
          <Faq
            question="How do I calculate percentage from CGPA?"
            answer="First find the conversion formula specified by your university. If the formula is percentage = CGPA × conversion factor, multiply your CGPA by that factor and express the result as a percentage."
          />

          <Faq
            question="Can I multiply CGPA by 9.5?"
            answer="Only if the applicable university or institution uses 9.5 as its conversion factor. It should not be assumed to be a universal formula."
          />

          <Faq
            question="What percentage is 8.5 CGPA?"
            answer="It depends on the conversion formula. For example, if the applicable factor is 9.5, then 8.5 × 9.5 = 80.75%."
          />

          <Faq
            question="Is CGPA the same as percentage?"
            answer="No. CGPA is a grade-point measure, while percentage is expressed out of 100. A conversion rule is required to convert between them."
          />

          <Faq
            question="Can I use an online CGPA to percentage calculator for an official application?"
            answer="You can use a calculator to perform the arithmetic, but make sure the formula used by the calculator matches the official conversion rule required by your university or the organization receiving your application."
          />
        </Section>

        {/* Transport back to CGPA guide */}
        <section className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Want to learn how to calculate CGPA?
          </h2>

          <p className="mt-2 leading-7 text-slate-600">
            Learn how to calculate CGPA from your semester SGPAs and credits
            with our step-by-step guide.
          </p>

          <a
            href="/blog/how-to-calculate-cgpa"
            className="mt-5 inline-flex rounded-lg border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            How to Calculate CGPA →
          </a>
        </section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

      <div className="mt-4 space-y-4 leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-blue-200 p-5">
      <div className="flex gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          {n}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>

          <div className="mt-2 space-y-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center text-lg font-semibold text-blue-900">
      {children}
    </div>
  );
}

function Calc({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-blue-200 bg-blue-50/30 p-4 text-sm leading-7 text-slate-800">
      <code>{children}</code>
    </pre>
  );
}

function Result({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center text-2xl font-bold text-blue-900">
      {children}
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-blue-900">
      {children}
    </div>
  );
}

function Mistake({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-blue-200 p-4">
      <h3 className="font-semibold text-slate-900">{title}</h3>

      <p className="mt-1 text-slate-600">{text}</p>
    </div>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-xl border border-blue-200 p-5">
      <h3 className="font-semibold text-slate-900">{question}</h3>

      <p className="mt-2 text-slate-600">{answer}</p>
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-blue-200">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-blue-200 bg-blue-50/30 text-left">
            {headers.map((header) => (
              <th
                key={header}
                className="p-3 font-semibold text-slate-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-blue-200 last:border-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="p-3 text-slate-600"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
