"use client"

import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
  ABOUT_US_QUICK_LINKS_TITLE,
} from "@/lib/about-us-data"
import {
  CONVIVIALITY_FOOTNOTE,
  CONVIVIALITY_HERO,
  CONVIVIALITY_HERO_ACTIONS,
  CONVIVIALITY_INTRO_BLOCK,
  CONVIVIALITY_SECTIONS,
} from "@/lib/conviviality-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { MediaContentSection } from "@/components/media-content-section"
import { RegulationSectionCard } from "@/components/regulation-section-card"
import { ContactStrip } from "@/components/contact-strip"

export function ConvivialityManualPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={CONVIVIALITY_HERO.badge[lang]}
        title={CONVIVIALITY_HERO.title[lang]}
        subtitle={CONVIVIALITY_HERO.subtitle[lang]}
        actions={CONVIVIALITY_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-6">
            <MediaContentSection block={CONVIVIALITY_INTRO_BLOCK} variant="highlight" />

            {CONVIVIALITY_SECTIONS.map((section) => (
              <RegulationSectionCard key={section.id} section={section} />
            ))}

            <p className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-4 text-center text-sm italic text-muted-foreground">
              {CONVIVIALITY_FOOTNOTE[lang]}
            </p>
          </div>

          <QuickLinksPanel title={ABOUT_US_QUICK_LINKS_TITLE} links={ABOUT_US_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
