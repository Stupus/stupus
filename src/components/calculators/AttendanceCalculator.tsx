import { useState } from "react";
import { CalcButton, CalcCard, Field, ResultPanel } from "../form";
import { attendance, round } from "../../lib/calc";

export function AttendanceCalculator({ defaultRequired = "75" }: { defaultRequired?: string }) {
  const [attended, setAttended] = useState("");
  const [held, setHeld] = useState("");
  const [required, setRequired] = useState(defaultRequired);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ReturnType<typeof attendance>>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    const a = Number(attended);
    const h = Number(held);
    const r = Number(required);

    if (attended.trim() === "") next["attended"] = "Please enter how many classes you attended.";
    else if (!Number.isFinite(a) || a < 0)
      next["attended"] = "Classes attended must be 0 or more.";

    if (held.trim() === "") next["held"] = "Please enter how many classes were held.";
    else if (!Number.isFinite(h) || h <= 0)
      next["held"] = "Classes held must be greater than 0.";

    if (required.trim() === "") next["required"] = "Please enter the attendance you need.";
    else if (!Number.isFinite(r) || r <= 0 || r > 100)
      next["required"] = "Required attendance must be between 1 and 100.";

    if (!next["attended"] && !next["held"] && a > h)
      next["attended"] = "You can't attend more classes than were held.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setResult(null);
      return;
    }
    setResult(attendance(a, h, r));
  }

  return (
    <CalcCard>
      <form onSubmit={calculate} noValidate className="flex flex-wrap items-start gap-4">
        <Field
          id="attended"
          label="Classes attended"
          value={attended}
          onChange={(v) => {
            setAttended(v);
            setResult(null);
          }}
          error={errors["attended"]}
          width="sm"
          inputMode="numeric"
          placeholder="42"
        />
        <Field
          id="held"
          label="Classes held"
          value={held}
          onChange={(v) => {
            setHeld(v);
            setResult(null);
          }}
          error={errors["held"]}
          width="sm"
          inputMode="numeric"
          placeholder="60"
        />
        <Field
          id="required"
          label="Attendance needed"
          value={required}
          onChange={(v) => {
            setRequired(v);
            setResult(null);
          }}
          error={errors["required"]}
          width="xs"
          inputMode="numeric"
          suffix="%"
        />
        <div className="flex w-full">
          <CalcButton>Calculate attendance</CalcButton>
        </div>
      </form>

      {result ? (
        <ResultPanel
          label="Your attendance"
          value={`${round(result.current, 2)}%`}
          note={
            result.meetsRequirement
              ? `You are above ${required}%. You can miss ${result.canSkip} more ${result.canSkip === 1 ? "class" : "classes"} and stay there.`
              : `You are below ${required}%. Attend the next ${result.mustAttend} ${result.mustAttend === 1 ? "class" : "classes"} without missing any to reach it.`
          }
        />
      ) : null}
    </CalcCard>
  );
}
