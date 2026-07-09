"use client"

import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
  ABOUT_US_QUICK_LINKS_TITLE,
} from "@/lib/about-us-data"
import {
  SERVICES_BLOCKS,
  SERVICES_HERO,
  SERVICES_HERO_ACTIONS,
  SERVICES_INTRO_BLOCK,
} from "@/lib/services-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { MediaContentSection } from "@/components/media-content-section"
import { ContactStrip } from "@/components/contact-strip"

export function ServicesPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={SERVICES_HERO.badge[lang]}
        title={SERVICES_HERO.title[lang]}
        subtitle={SERVICES_HERO.subtitle[lang]}
        actions={SERVICES_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-6">
            <MediaContentSection block={SERVICES_INTRO_BLOCK} variant="highlight" />
            {SERVICES_BLOCKS.map((block) => (
              <MediaContentSection key={block.id} block={block} />
            ))}
          </div>
          <QuickLinksPanel title={ABOUT_US_QUICK_LINKS_TITLE} links={ABOUT_US_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
