import { useState } from "react";
import { CalcButton, CalcCard, Field, ResultPanel, SelectField } from "../form";
import { round, sgpa } from "../../lib/calc";
import type { GradeRow } from "../../data/universities";

interface Row {
  credits: string;
  grade: string;
}

const DEFAULT_GRADES: GradeRow[] = [
  { grade: "O", points: 10 },
  { grade: "A+", points: 9 },
  { grade: "A", points: 8 },
  { grade: "B+", points: 7 },
  { grade: "B", points: 6 },
  { grade: "C", points: 5 },
  { grade: "P", points: 4 },
  { grade: "F", points: 0 },
];

function shortGrade(label: string) {
  return label.split(" ")[0] ?? label;
}

export function SgpaCalculator({
  grades,
  resultLabel = "Your SGPA",
}: {
  grades?: GradeRow[];
  resultLabel?: string;
}) {
  const table = (grades ?? DEFAULT_GRADES).map((g) => ({
    grade: shortGrade(g.grade),
    points: g.points,
  }));

  const defaultGrade = String(table[0]?.points ?? 10);
  const [rows, setRows] = useState<Row[]>([
    { credits: "", grade: defaultGrade },
    { credits: "", grade: defaultGrade },
    { credits: "", grade: defaultGrade },
  ]);
  const [errors, setErrors] = useState<Record<number, string>>({});
  const [result, setResult] = useState<{ sgpa: number; credits: number } | null>(null);

  function update(i: number, patch: Partial<Row>) {
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
    setResult(null);
  }

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Record<number, string> = {};
    let totalCredits = 0;

    rows.forEach((row, i) => {
      const value = row.credits.trim();
      if (value === "") {
        nextErrors[i] = `Please enter the credits for Subject ${i + 1}.`;
        return;
      }
      const credits = Number(value);
      if (!Number.isFinite(credits)) {
        nextErrors[i] = `Credits for Subject ${i + 1} must be a number.`;
        return;
      }
      if (credits <= 0) {
        nextErrors[i] = `Credits for Subject ${i + 1} must be greater than 0.`;
        return;
      }
      if (credits > 30) {
        nextErrors[i] = `Credits for Subject ${i + 1} look too high — check your marks card.`;
        return;
      }
      totalCredits += credits;
    });

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setResult(null);
      return;
    }

    const value = sgpa(
      rows.map((r) => ({ credits: Number(r.credits), points: Number(r.grade) })),
    );
    if (value === null) {
      setResult(null);
      return;
    }
    setResult({ sgpa: value, credits: totalCredits });
  }

  return (
    <CalcCard>
      <form onSubmit={calculate} noValidate>
        <div className="grid grid-cols-[1fr_auto_auto] items-end gap-x-3 gap-y-3">
          <span className="text-xs font-medium text-muted-foreground">Subject</span>
          <span className="text-xs font-medium text-muted-foreground">Credits</span>
          <span className="text-xs font-medium text-muted-foreground">Grade</span>

          {rows.map((row, i) => (
            <FragmentRow
              key={i}
              index={i}
              row={row}
              table={table}
              error={errors[i]}
              onChange={(patch) => update(i, patch)}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <CalcButton>Calculate SGPA</CalcButton>
          <CalcButton
            type="button"
            variant="ghost"
            onClick={() => {
              setRows((r) => [...r, { credits: "", grade: defaultGrade }]);
              setResult(null);
            }}
          >
            Add subject
          </CalcButton>
          {rows.length > 1 ? (
            <CalcButton
              type="button"
              variant="ghost"
              onClick={() => {
                setRows((r) => r.slice(0, -1));
                setErrors({});
                setResult(null);
              }}
            >
              Remove last
            </CalcButton>
          ) : null}
        </div>
      </form>

      {result ? (
        <ResultPanel
          label={resultLabel}
          value={round(result.sgpa)}
          note={`Based on ${rows.length} subjects and ${round(result.credits, 1)} total credits.`}
        />
      ) : null}
    </CalcCard>
  );
}

function FragmentRow({
  index,
  row,
  table,
  error,
  onChange,
}: {
  index: number;
  row: Row;
  table: { grade: string; points: number }[];
  error?: string | undefined;
  onChange: (patch: Partial<Row>) => void;
}) {
  return (
    <>
      <div className="self-center text-sm font-medium">Subject {index + 1}</div>
      <Field
        id={`credits-${index}`}
        value={row.credits}
        onChange={(v) => onChange({ credits: v })}
        error={error}
        width="xs"
        inputMode="decimal"
        placeholder="4"
        ariaLabel={`Credits for subject ${index + 1}`}
      />
      <SelectField
        id={`grade-${index}`}
        value={row.grade}
        onChange={(v) => onChange({ grade: v })}
        className="w-28"
        options={table.map((g) => ({
          value: String(g.points),
          label: `${g.grade} (${g.points})`,
        }))}
      />
    </>
  );
}
