"use client"

import { useLang } from "@/lib/i18n"
import {
  HOUSE_QUICK_LINKS,
  HOUSE_QUICK_LINKS_TITLE,
} from "@/lib/house-of-knowledge-data"
import {
  PARTNERS_BLOCKS,
  PARTNERS_HERO,
  PARTNERS_HERO_ACTIONS,
  PARTNERS_INTRO,
} from "@/lib/partners-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { ContentSection } from "@/components/content-section"
import { ContactStrip } from "@/components/contact-strip"

export function PartnersPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={PARTNERS_HERO.badge[lang]}
        title={PARTNERS_HERO.title[lang]}
        subtitle={PARTNERS_HERO.subtitle[lang]}
        actions={PARTNERS_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-6">
            <ContentSection block={PARTNERS_INTRO} variant="highlight" />
            {PARTNERS_BLOCKS.map((block) => (
              <ContentSection key={block.id} block={block} />
            ))}
          </div>
          <QuickLinksPanel title={HOUSE_QUICK_LINKS_TITLE} links={HOUSE_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
