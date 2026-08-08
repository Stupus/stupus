import { useState } from "react";
import { CalcButton, CalcCard, ErrorSummary, Field, ResultPanel } from "../form";
import { percentage, round } from "../../lib/calc";

export function PercentageCalculator() {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    const o = Number(obtained);
    const t = Number(total);

    if (obtained.trim() === "") next["obtained"] = "Please enter the marks you scored.";
    else if (!Number.isFinite(o) || o < 0) next["obtained"] = "Marks scored must be 0 or more.";

    if (total.trim() === "") next["total"] = "Please enter the total marks.";
    else if (!Number.isFinite(t) || t <= 0) next["total"] = "Total marks must be greater than 0.";

    if (!next["obtained"] && !next["total"] && o > t)
      next["obtained"] = "Marks scored can't be more than the total marks.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setResult(null);
      return;
    }
    setResult(percentage(o, t));
  }

  return (
    <CalcCard>
      <ErrorSummary messages={Object.values(errors)} />
      <form onSubmit={calculate} noValidate className="flex flex-wrap items-start gap-4">
        <Field
          id="obtained"
          label="Marks scored"
          value={obtained}
          onChange={(v) => {
            setObtained(v);
            setResult(null);
          }}
          error={errors["obtained"]}
          width="sm"
          placeholder="428"
        />
        <Field
          id="total"
          label="Out of"
          value={total}
          onChange={(v) => {
            setTotal(v);
            setResult(null);
          }}
          error={errors["total"]}
          width="sm"
          placeholder="500"
        />
        <div className="flex w-full">
          <CalcButton>Calculate percentage</CalcButton>
        </div>
      </form>

      {result !== null ? (
        <ResultPanel
          label="Your percentage"
          value={`${round(result, 2)}%`}
          note={`${obtained} out of ${total} marks.`}
        />
      ) : null}
    </CalcCard>
  );
}
