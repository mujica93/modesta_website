"use client"

import { useLang } from "@/lib/i18n"
import {
  HOUSE_QUICK_LINKS,
  HOUSE_QUICK_LINKS_TITLE,
} from "@/lib/house-of-knowledge-data"
import {
  PERSPECTIVES_HERO,
  PERSPECTIVES_HERO_ACTIONS,
  PERSPECTIVES_IMAGES,
  PERSPECTIVES_INTRO,
} from "@/lib/perspectives-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { ContentSection } from "@/components/content-section"
import { ImageGallery } from "@/components/image-gallery"
import { ContactStrip } from "@/components/contact-strip"

export function PerspectivesPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={PERSPECTIVES_HERO.badge[lang]}
        title={PERSPECTIVES_HERO.title[lang]}
        subtitle={PERSPECTIVES_HERO.subtitle[lang]}
        actions={PERSPECTIVES_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-6">
            <ContentSection block={PERSPECTIVES_INTRO} variant="highlight" />
            <ImageGallery images={PERSPECTIVES_IMAGES} />
          </div>
          <QuickLinksPanel title={HOUSE_QUICK_LINKS_TITLE} links={HOUSE_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
