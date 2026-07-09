"use client"

import { Info, Phone, User } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { GLOBAL_NOTE, SALES_REPS } from "@/lib/supplies-data"

export function InfoSection() {
  const { lang, t } = useLang()

  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        {/* Important note */}
        <div className="flex flex-col gap-3 rounded-2xl border border-primary/20 bg-card p-6">
          <div className="flex items-center gap-2 text-primary">
            <Info className="h-5 w-5" />
            <h2 className="text-lg font-semibold font-heading">{t("note.title")}</h2>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">{GLOBAL_NOTE[lang]}</p>
        </div>

        {/* Sales reps */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-foreground font-heading">{t("reps.title")}</h2>
            <p className="text-sm text-muted-foreground">{t("reps.subtitle")}</p>
          </div>
          <ul className="flex flex-col gap-3">
            {SALES_REPS.map((rep) => (
              <li
                key={rep.name}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{rep.name}</span>
                  <span className="text-xs text-muted-foreground">{rep.grades}</span>
                </div>
                <a
                  href={`tel:${rep.phone.replace(/-/g, "")}`}
                  className="ml-auto flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {rep.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
