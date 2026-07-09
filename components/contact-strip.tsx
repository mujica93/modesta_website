"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { CONTACT_INFO } from "@/lib/home-data"

export function ContactStrip() {
  const { lang } = useLang()

  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-foreground font-heading">
          {CONTACT_INFO.title[lang]}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          <li className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">{CONTACT_INFO.address[lang]}</p>
          </li>
          <li className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {CONTACT_INFO.phone}
            </a>
          </li>
          <li className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {CONTACT_INFO.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
