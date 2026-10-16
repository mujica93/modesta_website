"use client"

import Link from "next/link"
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import {
  CONTACT_CHANNELS,
  CONTACT_HERO,
  CONTACT_HERO_ACTIONS,
  CONTACT_QUICK_ACTIONS,
} from "@/lib/contact-data"
import { PageHero } from "@/components/page-hero"
import { ContactStrip } from "@/components/contact-strip"

const CHANNEL_ICONS = {
  address: MapPin,
  phone: Phone,
  email: Mail,
} as const

export function ContactPageView() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={CONTACT_HERO.badge[lang]}
        title={CONTACT_HERO.title[lang]}
        subtitle={CONTACT_HERO.subtitle[lang]}
        actions={CONTACT_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = CHANNEL_ICONS[channel.id as keyof typeof CHANNEL_ICONS]
            return (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="font-semibold text-foreground font-heading">{channel.title[lang]}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{channel.value[lang]}</p>
              </a>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-foreground font-heading">
            {lang === "es" ? "Accesos útiles" : "Useful links"}
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {CONTACT_QUICK_ACTIONS.map((action) =>
              action.external ? (
                <a
                  key={action.id}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", className: "gap-2" })}
                >
                  {action.label[lang]}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  key={action.id}
                  href={action.href}
                  className={buttonVariants({ variant: "outline" })}
                >
                  {action.label[lang]}
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
