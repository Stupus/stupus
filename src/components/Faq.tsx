export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <dl className="divide-y divide-border rounded-lg border border-border">
      {items.map((item) => (
        <div key={item.q} className="px-4 py-3">
          <dt className="text-sm font-semibold text-foreground">{item.q}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
