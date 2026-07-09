"use client"

import Image from "next/image"
import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
  ABOUT_US_QUICK_LINKS_TITLE,
} from "@/lib/about-us-data"
import {
  FOOTPRINT_CONTENT_BLOCKS,
  FOOTPRINT_HERO,
  FOOTPRINT_HERO_ACTIONS,
} from "@/lib/footprint-modesta-bor-data"
import { Imgs } from "@/lib/imgs.enum"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { ContentSection } from "@/components/content-section"
import { ContactStrip } from "@/components/contact-strip"

export function FootprintModestaBorPage() {
  const { lang } = useLang()

  const [introBlock, ...restBlocks] = FOOTPRINT_CONTENT_BLOCKS

  return (
    <>
      <PageHero
        badge={FOOTPRINT_HERO.badge[lang]}
        title={FOOTPRINT_HERO.title[lang]}
        subtitle={FOOTPRINT_HERO.subtitle[lang]}
        actions={FOOTPRINT_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
          <div className="flex flex-col gap-8 items-center justify-center rounded-3xl border border-border bg-card p-8 shadow-sm inset-0 -z-10 w-full mx-auto mb-4">
            <Image
              src={Imgs.MODESTA_BOR}
              alt={FOOTPRINT_HERO.title[lang]}
              width={320}
              height={320}
              className="h-auto w-full max-w-[750px] object-contain"
              priority
            />
          </div>
        <div className="grid gap-8">
          <ContentSection block={introBlock} variant="highlight" />
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
