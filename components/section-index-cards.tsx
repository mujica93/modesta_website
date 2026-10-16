"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLang } from "@/lib/i18n"
import type { QuickLink } from "@/lib/home-data"

type SectionIndexCardsProps = {
  links: QuickLink[]
}

export function SectionIndexCards({ links }: SectionIndexCardsProps) {
  const { lang } = useLang()

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.id}
            href={link.href}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-foreground font-heading">{link.label[lang]}</h3>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
