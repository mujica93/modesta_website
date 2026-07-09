"use client"

import { useLang } from "@/lib/i18n"
import type { ValueItem } from "@/lib/values-data"

type ValuesListProps = {
  items: ValueItem[]
}

export function ValuesList({ items }: ValuesListProps) {
  const { lang } = useLang()

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
        >
          <h3 className="font-semibold text-foreground font-heading">{item.name[lang]}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description[lang]}</p>
        </li>
      ))}
    </ul>
  )
}
