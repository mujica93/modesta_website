"use client"

import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
  ABOUT_US_QUICK_LINKS_TITLE,
} from "@/lib/about-us-data"
import {
  OBJECTIVES_BLOCK,
  OBJECTIVES_HERO,
  OBJECTIVES_HERO_ACTIONS,
} from "@/lib/objectives-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { MediaContentSection } from "@/components/media-content-section"
import { ContactStrip } from "@/components/contact-strip"

export function ObjectivesPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={OBJECTIVES_HERO.badge[lang]}
        title={OBJECTIVES_HERO.title[lang]}
        subtitle={OBJECTIVES_HERO.subtitle[lang]}
        actions={OBJECTIVES_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <MediaContentSection block={OBJECTIVES_BLOCK} variant="highlight" />
          <QuickLinksPanel title={ABOUT_US_QUICK_LINKS_TITLE} links={ABOUT_US_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
