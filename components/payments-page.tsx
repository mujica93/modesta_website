"use client"

import { useLang } from "@/lib/i18n"
import {
  PAYMENTS_CONTENT_BLOCKS,
  PAYMENTS_HERO,
  PAYMENTS_HERO_ACTIONS,
} from "@/lib/payments-data"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { ContactStrip } from "@/components/contact-strip"
import { Imgs } from "@/lib/imgs.enum"
import Image from "next/image"

export function PaymentsPage() {
  const { lang } = useLang()

  const [introBlock, ...restBlocks] = PAYMENTS_CONTENT_BLOCKS

  return (
    <>
      <PageHero
        badge={PAYMENTS_HERO.badge[lang]}
        title={PAYMENTS_HERO.title[lang]}
        subtitle={PAYMENTS_HERO.subtitle[lang]}
        actions={PAYMENTS_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <ContentSection block={introBlock} variant="highlight" />
          <div className="relative mx-auto flex max-w-sm items-center justify-center md:max-w-none">
            <div
              className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <Image
                src={Imgs.PAYMENT_REPORT}
                alt="Reporte de pago"
                width={320}
                height={320}
                className="h-auto w-full max-w-[220px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 md:pb-16">
        <div className="flex flex-col gap-6">
          {restBlocks.map((block) => (
            <ContentSection key={block.id} block={block} />
          ))}
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
