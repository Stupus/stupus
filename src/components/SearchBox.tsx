import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { searchTools, type ToolEntry } from "../data/tools";

export function SearchBox({ autoFocusHint = true }: { autoFocusHint?: boolean }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapRef = useRef<HTMLDivElement>(null);

  const results: ToolEntry[] = query ? searchTools(query) : [];

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[active >= 0 ? active : 0];
      if (target) {
        setOpen(false);
        navigate({ to: target.to });
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={wrapRef} className="relative">
      <label htmlFor="tool-search" className="sr-only">
        Search for a student tool
      </label>
      <input
        id="tool-search"
        type="search"
        role="combobox"
        aria-expanded={open && results.length > 0}
        aria-controls="tool-search-results"
        aria-autocomplete="list"
        autoComplete="off"
        placeholder="Search for a tool — try “vtu cgpa”"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActive(-1);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className="min-h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base shadow-none transition-colors placeholder:text-muted-foreground focus:border-brand"
      />

      {open && query && (
        <ul
          id="tool-search-results"
          role="listbox"
          className="absolute z-20 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-card shadow-sm"
        >
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-muted-foreground">
              No tool matches “{query}”. Try “cgpa”, “attendance” or a university name.
            </li>
          ) : (
            results.map((r, i) => (
              <li key={r.to} role="option" aria-selected={i === active}>
                <Link
                  to={r.to}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setActive(i)}
                  className={`block border-b border-border px-4 py-3 last:border-0 ${
                    i === active ? "bg-brand-light" : "hover:bg-surface"
                  }`}
                >
                  <span className="block text-sm font-medium text-foreground">
                    {r.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {r.description}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}

      {autoFocusHint ? (
        <p className="mt-2 text-xs text-muted-foreground">
          Try “cgpa”, “attendance”, “jntuh sgpa” or “percentage to cgpa”.
        </p>
      ) : null}
    </div>
  );
}
