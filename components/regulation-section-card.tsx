"use client"

import { useLang } from "@/lib/i18n"
import type { RegulationSection } from "@/lib/conviviality-data"

type RegulationSectionCardProps = {
  section: RegulationSection
  variant?: "default" | "highlight"
}

export function RegulationSectionCard({ section, variant = "default" }: RegulationSectionCardProps) {
  const { lang } = useLang()

  return (
    <article
      className={
        variant === "highlight"
          ? "rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
          : "rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
      }
    >
      <h2 className="text-xl font-semibold text-foreground font-heading">{section.title[lang]}</h2>
      <ol className="mt-6 flex flex-col gap-4">
        {section.items.map((item) => (
          <li key={item.id} className="flex gap-4">
            {item.number ? (
              <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                {item.number}
              </span>
            ) : null}
            <p className="pt-1 text-sm leading-relaxed text-muted-foreground">{item.text[lang]}</p>
          </li>
        ))}
      </ol>
    </article>
  )
}
