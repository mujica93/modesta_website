"use client"

import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
  ABOUT_US_QUICK_LINKS_TITLE,
} from "@/lib/about-us-data"
import {
  VALUES_HERO,
  VALUES_HERO_ACTIONS,
  VALUES_INTRO_BLOCK,
  VALUES_ITEMS,
} from "@/lib/values-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { MediaContentSection } from "@/components/media-content-section"
import { ValuesList } from "@/components/values-list"
import { ContactStrip } from "@/components/contact-strip"

export function ValuesPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={VALUES_HERO.badge[lang]}
        title={VALUES_HERO.title[lang]}
        subtitle={VALUES_HERO.subtitle[lang]}
        actions={VALUES_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-8">
            <MediaContentSection block={VALUES_INTRO_BLOCK} variant="highlight" />
            <ValuesList items={VALUES_ITEMS} />
          </div>
          <QuickLinksPanel title={ABOUT_US_QUICK_LINKS_TITLE} links={ABOUT_US_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
