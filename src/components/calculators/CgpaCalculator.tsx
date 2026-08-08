import { useState } from "react";
import { CalcButton, CalcCard, ErrorSummary, Field, ResultPanel } from "../form";
import { cgpa, cgpaToPercentage, round, type ConversionRule } from "../../lib/calc";

interface Row {
  credits: string;
  sgpa: string;
}

export function CgpaCalculator({
  rule,
  ruleLabel,
}: {
  rule?: ConversionRule | undefined;
  ruleLabel?: string | undefined;
}) {
  const [rows, setRows] = useState<Row[]>([
    { credits: "", sgpa: "" },
    { credits: "", sgpa: "" },
  ]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  function update(i: number, patch: Partial<Row>) {
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
    setResult(null);
  }

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};

    rows.forEach((row, i) => {
      const c = row.credits.trim();
      const s = row.sgpa.trim();
      if (c === "") next[`c${i}`] = `Please enter the credits for Semester ${i + 1}.`;
      else if (!Number.isFinite(Number(c)) || Number(c) <= 0)
        next[`c${i}`] = `Credits for Semester ${i + 1} must be a number above 0.`;

      if (s === "") next[`s${i}`] = `Please enter the SGPA for Semester ${i + 1}.`;
      else if (!Number.isFinite(Number(s)))
        next[`s${i}`] = `SGPA for Semester ${i + 1} must be a number.`;
      else if (Number(s) < 0 || Number(s) > 10)
        next[`s${i}`] = `SGPA for Semester ${i + 1} must be between 0 and 10.`;
    });

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setResult(null);
      return;
    }

    const value = cgpa(
      rows.map((r) => ({ credits: Number(r.credits), points: Number(r.sgpa) })),
    );
    setResult(value);
  }

  return (
    <CalcCard>
      <ErrorSummary messages={Object.values(errors)} />
      <form onSubmit={calculate} noValidate>
        <div className="grid grid-cols-[1fr_auto_auto] items-end gap-x-3 gap-y-3">
          <span className="text-xs font-medium text-muted-foreground">Semester</span>
          <span className="text-xs font-medium text-muted-foreground">Credits</span>
          <span className="text-xs font-medium text-muted-foreground">SGPA</span>

          {rows.map((row, i) => (
            <Row3
              key={i}
              index={i}
              row={row}
              creditsError={errors[`c${i}`]}
              sgpaError={errors[`s${i}`]}
              onChange={(patch) => update(i, patch)}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <CalcButton>Calculate CGPA</CalcButton>
          <CalcButton
            type="button"
            variant="ghost"
            onClick={() => {
              setRows((r) => [...r, { credits: "", sgpa: "" }]);
              setResult(null);
            }}
          >
            Add semester
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

      {result !== null ? (
        <ResultPanel
          label="Your CGPA"
          value={round(result)}
          note={
            rule
              ? `That works out to ${round(cgpaToPercentage(result, rule), 2)}% using ${ruleLabel ?? rule.label}.`
              : `Across ${rows.length} semesters.`
          }
        />
      ) : null}
    </CalcCard>
  );
}

function Row3({
  index,
  row,
  creditsError,
  sgpaError,
  onChange,
}: {
  index: number;
  row: Row;
  creditsError?: string | undefined;
  sgpaError?: string | undefined;
  onChange: (patch: Partial<Row>) => void;
}) {
  return (
    <>
      <div className="self-center text-sm font-medium">Semester {index + 1}</div>
      <Field
        id={`sem-credits-${index}`}
        value={row.credits}
        onChange={(v) => onChange({ credits: v })}
        error={creditsError}
        width="xs"
        placeholder="24"
        ariaLabel={`Total credits for semester ${index + 1}`}
      />
      <Field
        id={`sem-sgpa-${index}`}
        value={row.sgpa}
        onChange={(v) => onChange({ sgpa: v })}
        error={sgpaError}
        width="xs"
        placeholder="8.5"
        ariaLabel={`SGPA for semester ${index + 1}`}
      />
    </>
  );
}
