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
          "Learn how to calculate percentage from CGPA, understand common conversion formulas, and find out why the correct formula depends on your university.",
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
            Want to convert your CGPA into a percentage? The calculation is
            straightforward once you know your university&apos;s conversion
            rule. This guide explains the process, common formulas, examples,
            and important things to check before using the result.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src="/assets/logo.webp"
                alt="Stupus"
                className="h-24 w-24 shrink-0 object-contain"
              />

              <div>
                <p className="font-semibold text-blue-900">
                  The important part
                </p>

                <p className="mt-2 leading-7 text-blue-800">
                  There is no single CGPA-to-percentage formula that applies to
                  every university. Always check the conversion rule specified
                  by your university before using the result for an official
                  purpose.
                </p>
              </div>
            </div>
          </div>
        </header>

        <Section title="What is CGPA?">
          <p>
            CGPA stands for{" "}
            <strong>Cumulative Grade Point Average</strong>. It represents your
            overall academic performance across the semesters included in your
            cumulative result.
          </p>

          <p>
            A CGPA is normally expressed on a grade-point scale such as 10.00,
            although the scale can differ between institutions.
          </p>
        </Section>

        <Section title="What does percentage mean?">
          <p>
            Percentage expresses a result on a scale of 100. For example, a
            result of 82% means 82 out of every 100 percentage points.
          </p>

          <p>
            CGPA and percentage are different ways of representing academic
            performance, so converting between them requires a conversion rule.
          </p>
        </Section>

        <Section title="Can you calculate percentage directly from CGPA?">
          <p>
            Yes, but you need to know the conversion formula used by your
            university or institution.
          </p>

          <p>
            Some institutions publish a direct multiplier, while others use a
            formula involving a constant or a different grading-system
            conversion. Because of this, you should not assume that one formula
            works everywhere.
          </p>

          <Note>
            <strong>For official applications:</strong> use the conversion
            formula stated on your university&apos;s official documents,
            marksheet, regulations, or certificate whenever one is provided.
          </Note>
        </Section>

        <Section title="The basic conversion method">
          <p>
            If your university gives you a formula in the form of a multiplier,
            the calculation is simply:
          </p>

          <Formula>Percentage = CGPA × Conversion Factor</Formula>

          <p>
            For example, if an institution specifically states that percentage
            is calculated by multiplying CGPA by 9.5, then a CGPA of 8.2 would
            be:
          </p>

          <Calc>8.2 × 9.5 = 77.9%</Calc>

          <p>
            This example demonstrates the method only. You should use 9.5 only
            when your university actually specifies that conversion factor.
          </p>
        </Section>

        <Section title="Step-by-step example">
          <Step n="1" title="Find your CGPA">
            <p>
              Start with the CGPA shown on your result or calculated from your
              semesters. For this example:
            </p>

            <Result>CGPA = 8.5</Result>
          </Step>

          <Step n="2" title="Find your university's conversion formula">
            <p>
              Check your university&apos;s official rules to find the factor or
              formula it uses to convert CGPA into percentage.
            </p>

            <p>
              For an example only, suppose the university specifies a factor of
              9.5.
            </p>
          </Step>

          <Step n="3" title="Apply the formula">
            <Calc>Percentage = 8.5 × 9.5</Calc>
          </Step>

          <Step n="4" title="Calculate the result">
            <Result>Percentage = 80.75%</Result>
          </Step>
        </Section>

        <Section title="Why you should not blindly use CGPA × 9.5">
          <p>
            You may see the formula <strong>CGPA × 9.5</strong> frequently
            online. However, that does not mean it is the official formula for
            every university.
          </p>

          <p>
            Different institutions can use different grading systems and
            conversion rules. Using a formula from another university could
            therefore give you an incorrect percentage.
          </p>

          <p>
            If you are submitting your percentage for admission, a scholarship,
            employment, an application form, or another official purpose, use
            the conversion method required by the institution receiving the
            result.
          </p>
        </Section>

        <Section title="CGPA to percentage examples">
          <p>
            The table below shows examples using a hypothetical conversion
            factor of 9.5. These values are examples, not a universal
            conversion table.
          </p>

          <Table
            headers={["CGPA", "Example calculation", "Example percentage"]}
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

        <Section title="How to find the correct formula for your university">
          <p>
            If you are unsure about the conversion, do not guess. Look for the
            official conversion rule in your university&apos;s academic
            regulations, examination guidelines, marksheet instructions, or
            certificate.
          </p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-semibold text-blue-900">
              A useful checklist
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-blue-800">
              <li>Check your university&apos;s official website.</li>
              <li>
                Check your examination regulations or academic handbook.
              </li>
              <li>
                Check instructions printed on your marksheet or certificate.
              </li>
              <li>
                Ask your examination or academic office if the rule is unclear.
              </li>
            </ul>
          </div>
        </Section>

        <Section title="What if my university does not provide a formula?">
          <p>
            Do not automatically choose a formula from a random calculator
            website. Conversion rules are institution-specific, so the safest
            option is to confirm the method with your university or the
            organization requesting the percentage.
          </p>
        </Section>

        <Section title="Is CGPA the same as percentage?">
          <p>
            No. CGPA is a grade-point measure, while percentage is expressed on
            a scale of 100. A conversion formula is needed to translate one
            into the other.
          </p>

          <Table
            headers={["CGPA", "Percentage"]}
            rows={[
              ["Grade-point based", "100-point based"],
              ["Usually cumulative", "Usually expressed out of 100"],
              [
                "Conversion depends on institution",
                "Conversion depends on institution",
              ],
            ]}
          />
        </Section>

        <Section title="Common mistakes when converting CGPA">
          <div className="space-y-4">
            <Mistake
              title="Using the first formula you find online"
              text="A formula that is correct for one university may not be correct for another."
            />

            <Mistake
              title="Confusing CGPA with SGPA"
              text="SGPA normally represents one semester, while CGPA represents cumulative performance."
            />

            <Mistake
              title="Rounding too early"
              text="Keep the original CGPA precision during the calculation and round the final percentage according to the required rules."
            />

            <Mistake
              title="Using an unofficial conversion for an official application"
              text="If an organization specifies a conversion method, follow that method instead of choosing your own."
            />
          </div>
        </Section>

        <Section title="How Stupus can help">
          <p>
            If you already know your CGPA and your university&apos;s conversion
            method, the Stupus CGPA to Percentage Calculator can save you from
            doing the arithmetic manually.
          </p>

          <p>
            This guide explains the calculation so you can understand where the
            result comes from instead of treating the calculator as a black
            box.
          </p>
        </Section>

        <Section title="Frequently asked questions">
          <Faq
            question="What is the formula to convert CGPA to percentage?"
            answer="There is no single universal formula. Use the conversion formula specified by your university. If your university provides a multiplier, the calculation is percentage = CGPA × conversion factor."
          />

          <Faq
            question="Can I use CGPA × 9.5 for every university?"
            answer="No. Use 9.5 only when the relevant university or institution specifies that factor."
          />

          <Faq
            question="What percentage is 8.5 CGPA?"
            answer="It depends on the conversion rule. For example, with a hypothetical 9.5 factor, 8.5 × 9.5 = 80.75%, but another university may produce a different result."
          />

          <Faq
            question="Should I use the converted percentage on an official form?"
            answer="Use the method required by the university, employer, admissions office, or other organization requesting the percentage."
          />
        </Section>

        <section className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-7 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Convert your CGPA to percentage
          </h2>

          <p className="mt-2 text-slate-600">
            Use the Stupus calculator for a quick calculation.
          </p>

          <a
            href="/cgpa-to-percentage"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            CGPA to Percentage Calculator
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
