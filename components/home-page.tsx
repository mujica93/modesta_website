"use client"

import { useLang } from "@/lib/i18n"
import {
  HOME_CONTENT_BLOCKS,
  HOME_HERO,
  HOME_HERO_ACTIONS,
  HOME_QUICK_LINKS,
} from "@/lib/home-data"
import { PageHero } from "@/components/page-hero"; 
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { ContentSection } from "@/components/content-section"
import { ContactStrip } from "@/components/contact-strip"

const QUICK_LINKS_TITLE = {
  es: "Accesos rápidos",
  en: "Quick links",
}

export function HomePage() {

  const { lang } = useLang()

  const [introBlock, ...restBlocks] = HOME_CONTENT_BLOCKS

  return (
    <>
      <PageHero
        badge={HOME_HERO.badge[lang]}
        title={HOME_HERO.title[lang]}
        subtitle={HOME_HERO.subtitle[lang]}
        actions={HOME_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external ?? false,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <ContentSection block={introBlock} variant="highlight" />
          <QuickLinksPanel title={QUICK_LINKS_TITLE} links={HOME_QUICK_LINKS} />
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
