import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/how-to-calculate-cgpa")({
  head: () => ({
    meta: [
      { title: "How to Calculate CGPA: Step-by-Step Guide" },
      {
        name: "description",
        content:
          "Learn how to calculate CGPA step by step using SGPA and semester credits, with a simple worked example.",
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
        <header className="mb-10">
          <a href="/" className="mb-8 inline-flex items-center gap-2">
            <img src="/assets/logo.webp" alt="Stupus" className="h-10 w-10 object-contain" />
          </a>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Student Guide</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How to Calculate CGPA</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Learn how to calculate your CGPA yourself using SGPA and semester credits, with a simple worked example.
          </p>
        </header>

        <Section title="What is CGPA?">
          <p>CGPA (Cumulative Grade Point Average) represents your academic performance across multiple semesters. When semester credits are considered, the calculation is weighted by the number of credits in each semester.</p>
          <Formula>CGPA = Σ (SGPA × Semester Credits) ÷ Σ Semester Credits</Formula>
        </Section>

        <Section title="How to Calculate CGPA Step by Step">
          <div className="space-y-5">
            <Step n="1" title="Collect your SGPA and semester credits">
              <p>Take the SGPA and total credits for each semester from your academic records.</p>
              <Table headers={["Semester", "SGPA", "Credits"]} rows={[
                ["Semester 1", "8.2", "20"], ["Semester 2", "8.6", "22"], ["Semester 3", "8.4", "21"]
              ]}/>
            </Step>
            <Step n="2" title="Multiply SGPA by semester credits">
              <Calc>8.2 × 20 = 164{"\n"}8.6 × 22 = 189.2{"\n"}8.4 × 21 = 176.4</Calc>
            </Step>
            <Step n="3" title="Add the weighted values">
              <Calc>164 + 189.2 + 176.4 = 529.6</Calc>
            </Step>
            <Step n="4" title="Add the semester credits">
              <Calc>20 + 22 + 21 = 63</Calc>
            </Step>
            <Step n="5" title="Divide the totals">
              <Calc>CGPA = 529.6 ÷ 63</Calc>
              <Result>CGPA = 8.41</Result>
            </Step>
          </div>
        </Section>

        <Section title="Complete Example">
          <p>Using the example above:</p>
          <Table headers={["Semester", "SGPA", "Credits", "SGPA × Credits"]} rows={[
            ["1", "8.2", "20", "164"], ["2", "8.6", "22", "189.2"], ["3", "8.4", "21", "176.4"], ["Totals", "", "", "529.6 / 63"]
          ]}/>
          <Result>Final CGPA: 8.41</Result>
        </Section>

        <Section title="Why You Shouldn't Simply Average Your SGPAs">
          <p>If your semesters have different credit totals, simply averaging the SGPAs does not give the same result as a credit-weighted calculation.</p>
          <Calc>(8.2 + 8.6 + 8.4) ÷ 3 = 8.40</Calc>
          <p>The weighted calculation gives <strong>8.41</strong> because the semesters do not all have the same number of credits.</p>
        </Section>

        <Section title="CGPA vs SGPA">
          <Table headers={["SGPA", "CGPA"]} rows={[
            ["One semester", "Multiple semesters"],
            ["Measures semester performance", "Measures cumulative performance"]
          ]}/>
        </Section>

        <Section title="Can I Calculate CGPA From SGPA?">
          <p>Yes. When your university's method uses semester credits, you can calculate CGPA from SGPA by weighting each SGPA by its semester credits and dividing by the total credits.</p>
          <Formula>CGPA = Σ (SGPA × Credits) ÷ Σ Credits</Formula>
          <Note>If all semesters have exactly the same number of credits, a simple average of the SGPAs produces the same result. Always follow your university's official calculation rules.</Note>
        </Section>

        <Section title="CGPA to Percentage">
          <p>There is no single percentage conversion formula that applies to every university. Universities can prescribe different conversion methods, so check your university's official rules before converting CGPA to percentage.</p>
        </Section>

        <section className="mt-12 rounded-2xl border bg-muted/40 p-6 text-center">
          <h2 className="text-2xl font-bold">Want to check your result instantly?</h2>
          <p className="mt-2 text-muted-foreground">Use the free Stupus CGPA Calculator.</p>
          <a href="/cgpa-calculator" className="mt-4 inline-flex rounded-lg bg-foreground px-5 py-3 font-semibold text-background">
            Calculate Your CGPA
          </a>
        </section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-12"><h2 className="text-2xl font-bold">{title}</h2><div className="mt-4 space-y-3 text-muted-foreground">{children}</div></section>;
}
function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return <div className="rounded-xl border p-5"><div className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">{n}</span><div className="min-w-0 flex-1"><h3 className="text-xl font-bold text-foreground">{title}</h3><div className="mt-2 space-y-3">{children}</div></div></div></div>;
}
function Formula({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border bg-muted/40 p-5 text-center text-lg font-semibold text-foreground">{children}</div>;
}
function Calc({ children }: { children: React.ReactNode }) {
  return <pre className="overflow-x-auto rounded-lg bg-muted/50 p-4 text-sm leading-7 text-foreground"><code>{children}</code></pre>;
}
function Result({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border bg-muted/40 p-5 text-center text-2xl font-bold text-foreground">{children}</div>;
}
function Note({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border bg-muted/40 p-5">{children}</div>;
}
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="overflow-x-auto rounded-xl border"><table className="w-full min-w-[480px] border-collapse text-sm"><thead><tr className="border-b bg-muted/40 text-left">{headers.map((h) => <th key={h} className="p-3">{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i} className="border-b last:border-0">{row.map((cell, j) => <td key={j} className="p-3">{cell}</td>)}</tr>)}</tbody></table></div>;
}
