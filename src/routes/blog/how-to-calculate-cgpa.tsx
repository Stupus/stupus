import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/how-to-calculate-cgpa")({
  head: () => ({
    meta: [
      {
        title: "How to Calculate CGPA: Step-by-Step Guide",
      },
      {
        name: "description",
        content:
          "Learn how to calculate CGPA step by step using SGPA, semester credits, and a simple worked example.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://stupus.bond/blog/how-to-calculate-cgpa",
      },
    ],
  }),
  component: HowToCalculateCgpa,
});

function HowToCalculateCgpa() {
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
            How to Calculate CGPA
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Learn how to calculate your Cumulative Grade Point Average (CGPA)
            using your semester SGPAs and credits. This guide explains the
            formula, shows a complete example, and explains why credits matter.
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
                  CGPA combines your semester performance into one cumulative
                  value. When semesters have different credit totals, those
                  credits need to be taken into account.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* What is CGPA? */}
        <Section title="What is CGPA?">
          <p>
            CGPA stands for <strong>Cumulative Grade Point Average</strong>. It
            represents your overall academic performance across multiple
            semesters.
          </p>

          <p>
            While SGPA normally represents your performance in a particular
            semester, CGPA represents your cumulative performance across the
            semesters included in the calculation.
          </p>

          <Formula>
            CGPA = Σ (SGPA × Semester Credits) ÷ Σ Semester Credits
          </Formula>
        </Section>

        {/* Why credits matter */}
        <Section title="Why do credits matter when calculating CGPA?">
          <p>
            You might think that calculating CGPA simply means adding all your
            SGPAs and dividing by the number of semesters. That only works when
            the semesters have equal credit weight.
          </p>

          <p>
            If one semester has more credits than another, it contributes more
            to the overall CGPA. This is why the credit-weighted calculation is
            important.
          </p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-semibold text-blue-900">For example</p>

            <p className="mt-2 leading-7 text-blue-800">
              A semester containing 30 credits has more academic weight than a
              semester containing 20 credits. Treating both semesters as equal
              could give you a different result.
            </p>
          </div>
        </Section>

        {/* Formula */}
        <Section title="CGPA formula">
          <p>
            When your university calculates cumulative performance using
            semester credits, the general weighted formula is:
          </p>

          <Formula>
            CGPA = Σ (SGPA × Credits) ÷ Σ Credits
          </Formula>

          <p>In simple terms:</p>

          <ol className="list-decimal space-y-2 pl-6">
            <li>Multiply each semester&apos;s SGPA by its credits.</li>
            <li>Add all those values together.</li>
            <li>Add the credits from all semesters.</li>
            <li>Divide the first total by the second total.</li>
          </ol>

          <Note>
            Your university may publish its own CGPA calculation rules. For an
            official result, always follow the formula specified by your
            university.
          </Note>
        </Section>

        {/* Step by step */}
        <Section title="How to calculate CGPA step by step">
          <Step n="1" title="Collect your SGPA and credits">
            <p>
              First, collect the SGPA and total credits for every semester you
              want to include.
            </p>

            <Table
              headers={["Semester", "SGPA", "Credits"]}
              rows={[
                ["Semester 1", "8.2", "20"],
                ["Semester 2", "8.6", "22"],
                ["Semester 3", "8.4", "21"],
              ]}
            />
          </Step>

          <Step n="2" title="Multiply SGPA by semester credits">
            <p>
              Multiply the SGPA of each semester by the number of credits for
              that semester.
            </p>

            <Calc>
              {`Semester 1: 8.2 × 20 = 164
Semester 2: 8.6 × 22 = 189.2
Semester 3: 8.4 × 21 = 176.4`}
            </Calc>
          </Step>

          <Step n="3" title="Add the weighted values">
            <p>Add the three weighted values together.</p>

            <Calc>164 + 189.2 + 176.4 = 529.6</Calc>
          </Step>

          <Step n="4" title="Add the semester credits">
            <p>Now add all the semester credits.</p>

            <Calc>20 + 22 + 21 = 63</Calc>
          </Step>

          <Step n="5" title="Divide the totals">
            <p>
              Finally, divide the total weighted SGPA by the total number of
              credits.
            </p>

            <Calc>CGPA = 529.6 ÷ 63</Calc>

            <Result>CGPA = 8.41</Result>
          </Step>
        </Section>

        {/* Complete example */}
        <Section title="Complete CGPA calculation example">
          <p>
            Here is the entire calculation in one table:
          </p>

          <Table
            headers={["Semester", "SGPA", "Credits", "SGPA × Credits"]}
            rows={[
              ["1", "8.2", "20", "164"],
              ["2", "8.6", "22", "189.2"],
              ["3", "8.4", "21", "176.4"],
              ["Total", "—", "63", "529.6"],
            ]}
          />

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-semibold text-blue-900">
              Final calculation
            </p>

            <p className="mt-2 text-blue-800">
              529.6 ÷ 63 = <strong>8.41 CGPA</strong>
            </p>
          </div>
        </Section>

        {/* Why simple average can be wrong */}
        <Section title="Why can't I simply average my SGPAs?">
          <p>
            If every semester has exactly the same number of credits, a simple
            average may produce the same result as a credit-weighted
            calculation.
          </p>

          <p>
            But when the semester credit totals are different, simply averaging
            SGPAs treats every semester as equally important.
          </p>

          <Calc>
            (8.2 + 8.6 + 8.4) ÷ 3 = 8.40
          </Calc>

          <p>
            The credit-weighted example above gives <strong>8.41</strong>.
            Although the difference is small in this example, it shows why
            credits can matter.
          </p>
        </Section>

        {/* SGPA vs CGPA */}
        <Section title="CGPA vs SGPA">
          <Table
            headers={["SGPA", "CGPA"]}
            rows={[
              ["Usually represents one semester", "Represents cumulative performance"],
              ["Semester-level result", "Overall result across semesters"],
              ["Can be used to calculate cumulative performance", "Combines cumulative academic performance"],
            ]}
          />
        </Section>

        {/* If you only have grades */}
        <Section title="What if I only have subject grades?">
          <p>
            If you do not have your SGPA yet, you may need to calculate your
            semester SGPA first.
          </p>

          <p>
            This normally involves the grade points and credits assigned to
            individual subjects. Once you have the SGPA and relevant semester
            credits, you can use the CGPA calculation method described above.
          </p>

          <Note>
            The exact grade-to-point system can differ between universities, so
            use your university&apos;s official grading rules.
          </Note>
        </Section>

        {/* CGPA to percentage */}
        <Section title="Can CGPA be converted to percentage?">
          <p>
            Yes, CGPA can often be converted into a percentage, but the formula
            is not necessarily the same for every university.
          </p>

          <p>
            Some universities specify a particular multiplier or conversion
            formula. Always check your university&apos;s official conversion
            rule before using a percentage for an official purpose.
          </p>

          <a
            href="/blog/how-to-calculate-percentage-from-cgpa"
            className="inline-flex rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            Learn how to convert CGPA to percentage →
          </a>
        </Section>

        {/* Common mistakes */}
        <Section title="Common mistakes when calculating CGPA">
          <div className="space-y-4">
            <Mistake
              title="Simply averaging SGPAs"
              text="This can be incorrect when your semesters have different credit totals."
            />

            <Mistake
              title="Using the wrong semester credits"
              text="Make sure the credit total corresponds to the correct semester."
            />

            <Mistake
              title="Rounding too early"
              text="Keep enough decimal places during the calculation and round the final result according to your university's rules."
            />

            <Mistake
              title="Using another university's formula"
              text="Different universities can use different academic and grading rules."
            />
          </div>
        </Section>

        {/* Calculator */}
        <Section title="Calculate your CGPA with Stupus">
          <p>
            Now that you know how the calculation works, you can calculate your
            own result using the Stupus CGPA Calculator.
          </p>

          <p>
            Enter your semester information and use the calculator to quickly
            check your result.
          </p>
        </Section>

        <section className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-7 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Calculate your CGPA
          </h2>

          <p className="mt-2 text-slate-600">
            Calculate your cumulative grade point average with Stupus.
          </p>

          <a
            href="/cgpa-calculator"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Open CGPA Calculator
          </a>
        </section>

        {/* FAQ */}
        <Section title="Frequently asked questions">
          <Faq
            question="What is the basic CGPA formula?"
            answer="When semester credits are used for weighting, CGPA can be calculated by dividing the sum of (SGPA × semester credits) by the sum of semester credits."
          />

          <Faq
            question="Can I calculate CGPA from SGPA?"
            answer="Yes. If you know the SGPA and credit total for each semester, you can calculate cumulative performance using the appropriate weighted method."
          />

          <Faq
            question="Is CGPA the average of all SGPAs?"
            answer="Not always. If semester credits differ, a credit-weighted calculation may be required."
          />

          <Faq
            question="What is the CGPA of 8.5 SGPA?"
            answer="One semester's SGPA alone is not enough to determine cumulative CGPA. You need the relevant previous semester performance and credits."
          />

          <Faq
            question="Can I convert CGPA to percentage?"
            answer="Usually, yes, but the conversion formula depends on the university or institution. Check the official conversion rule before using the result."
          />
        </Section>
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
