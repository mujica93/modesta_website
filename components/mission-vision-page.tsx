"use client"

import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
  ABOUT_US_QUICK_LINKS_TITLE,
} from "@/lib/about-us-data"
import {
  MISSION_VISION_BLOCKS,
  MISSION_VISION_HERO,
  MISSION_VISION_HERO_ACTIONS,
} from "@/lib/mission-vision-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { MediaContentSection } from "@/components/media-content-section"
import { ContactStrip } from "@/components/contact-strip"

export function MissionVisionPage() {
  const { lang } = useLang()

  const [missionBlock, visionBlock] = MISSION_VISION_BLOCKS

  return (
    <>
      <PageHero
        badge={MISSION_VISION_HERO.badge[lang]}
        title={MISSION_VISION_HERO.title[lang]}
        subtitle={MISSION_VISION_HERO.subtitle[lang]}
        actions={MISSION_VISION_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-6">
            <MediaContentSection block={missionBlock} variant="highlight" />
            <MediaContentSection block={visionBlock} />
          </div>
          <QuickLinksPanel title={ABOUT_US_QUICK_LINKS_TITLE} links={ABOUT_US_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
