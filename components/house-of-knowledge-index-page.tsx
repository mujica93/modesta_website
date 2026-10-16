"use client"

import { useLang } from "@/lib/i18n"
import {
  HOUSE_INDEX_HERO,
  HOUSE_QUICK_LINKS,
} from "@/lib/house-of-knowledge-data"
import { PageHero } from "@/components/page-hero"
import { SectionIndexCards } from "@/components/section-index-cards"
import { ContactStrip } from "@/components/contact-strip"

export function HouseOfKnowledgeIndexPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={HOUSE_INDEX_HERO.badge[lang]}
        title={HOUSE_INDEX_HERO.title[lang]}
        subtitle={HOUSE_INDEX_HERO.subtitle[lang]}
        actions={[
          {
            label: lang === "es" ? "Ver galería" : "View gallery",
            href: "/house-of-knowledge/gallery",
            variant: "default",
          },
          {
            label: lang === "es" ? "Becas" : "Scholarships",
            href: "/house-of-knowledge/scholarships",
            variant: "outline",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <SectionIndexCards links={HOUSE_QUICK_LINKS} />
      </section>

      <ContactStrip />
    </>
  )
}
