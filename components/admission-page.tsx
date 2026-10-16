"use client"

import Image from "next/image"
import { useLang } from "@/lib/i18n"
import {
  ADMISSION_CONTENT_BLOCKS,
  ADMISSION_HERO,
  ADMISSION_HERO_ACTIONS,
  ADMISSION_STEPS,
} from "@/lib/admission-data"
import { Imgs } from "@/lib/imgs.enum"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { AdmissionSteps } from "@/components/admission-steps"
import { ContactStrip } from "@/components/contact-strip"

export function AdmissionPage() {
  const { lang } = useLang()
  const [intro, ...rest] = ADMISSION_CONTENT_BLOCKS

  return (
    <>
      <PageHero
        badge={ADMISSION_HERO.badge[lang]}
        title={ADMISSION_HERO.title[lang]}
        subtitle={ADMISSION_HERO.subtitle[lang]}
        actions={ADMISSION_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <ContentSection block={intro} variant="highlight" />
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <Image
              src={Imgs.ADMISSION}
              alt={ADMISSION_HERO.title[lang]}
              width={320}
              height={320}
              className="mx-auto h-auto w-full max-w-[220px] object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-foreground font-heading">
            {lang === "es" ? "Pasos del proceso" : "Process steps"}
          </h2>
          <AdmissionSteps steps={ADMISSION_STEPS} />
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {rest.map((block) => (
            <ContentSection key={block.id} block={block} />
          ))}
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
