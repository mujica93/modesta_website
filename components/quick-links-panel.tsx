"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLang } from "@/lib/i18n"
import type { QuickLink } from "@/lib/home-data"

type QuickLinksPanelProps = {
  title: { es: string; en: string }
  links: QuickLink[]
}

export function QuickLinksPanel({ title, links }: QuickLinksPanelProps) {
  const { lang } = useLang()

  return (
    <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-foreground font-heading">{title[lang]}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <li key={link.id}>
              {
                link.external ?  
              (<a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/20 hover:bg-primary/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1">{link.label[lang]}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>):(<Link
                    href={link.href}
                    className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/20 hover:bg-primary/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1">{link.label[lang]}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link> 
                )
              } 
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
