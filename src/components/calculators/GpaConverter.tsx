import { useState } from "react";
import { CalcButton, CalcCard, ErrorSummary, Field, ResultPanel, SelectField } from "../form";
import {
  RULE_MINUS_075,
  RULE_TIMES_10,
  cgpaToPercentage,
  percentageToCgpa,
  round,
  type ConversionRule,
} from "../../lib/calc";

const RULES: Record<string, ConversionRule> = {
  "minus-0.75": RULE_MINUS_075,
  "times-10": RULE_TIMES_10,
};

export function GpaConverter({
  fixedRule,
  fixedRuleName,
}: {
  fixedRule?: ConversionRule | undefined;
  fixedRuleName?: string | undefined;
}) {
  const [direction, setDirection] = useState<"to-percent" | "to-cgpa">("to-percent");
  const [ruleKey, setRuleKey] = useState("minus-0.75");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const rule = fixedRule ?? RULES[ruleKey] ?? RULE_MINUS_075;
  const toPercent = direction === "to-percent";

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const n = Number(value);
    if (value.trim() === "") {
      setError(toPercent ? "Please enter your CGPA." : "Please enter your percentage.");
      setResult(null);
      return;
    }
    if (!Number.isFinite(n)) {
      setError("Please enter a number.");
      setResult(null);
      return;
    }
    if (toPercent && (n < 0 || n > 10)) {
      setError("CGPA must be between 0 and 10.");
      setResult(null);
      return;
    }
    if (!toPercent && (n < 0 || n > 100)) {
      setError("Percentage must be between 0 and 100.");
      setResult(null);
      return;
    }
    setError("");
    setResult(toPercent ? cgpaToPercentage(n, rule) : percentageToCgpa(n, rule));
  }

  return (
    <CalcCard>
      <ErrorSummary messages={error ? [error] : []} />
      <form onSubmit={calculate} noValidate className="flex flex-wrap items-start gap-4">
        <SelectField
          id="direction"
          label="Convert"
          value={direction}
          onChange={(v) => {
            setDirection(v as "to-percent" | "to-cgpa");
            setResult(null);
            setError("");
          }}
          className="w-52"
          options={[
            { value: "to-percent", label: "CGPA → Percentage" },
            { value: "to-cgpa", label: "Percentage → CGPA" },
          ]}
        />

        {!fixedRule ? (
          <SelectField
            id="rule"
            label="Formula"
            value={ruleKey}
            onChange={(v) => {
              setRuleKey(v);
              setResult(null);
            }}
            className="w-52"
            options={[
              { value: "minus-0.75", label: "(CGPA − 0.75) × 10" },
              { value: "times-10", label: "CGPA × 10" },
            ]}
          />
        ) : null}

        <Field
          id="convert-value"
          label={toPercent ? "Your CGPA" : "Your percentage"}
          value={value}
          onChange={(v) => {
            setValue(v);
            setResult(null);
          }}
          error={error || undefined}
          width="sm"
          placeholder={toPercent ? "8.42" : "76.7"}
          suffix={toPercent ? undefined : "%"}
        />

        <div className="flex w-full">
          <CalcButton>Convert</CalcButton>
        </div>
      </form>

      {result !== null ? (
        <ResultPanel
          label={toPercent ? "Equivalent percentage" : "Equivalent CGPA"}
          value={toPercent ? `${round(result, 2)}%` : round(result, 2)}
          note={`Using ${fixedRuleName ?? rule.label}.`}
        />
      ) : null}
    </CalcCard>
  );
}
