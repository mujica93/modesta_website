"use client"

import { useLang } from "@/lib/i18n"
import {
  INTERVIEW_CONTENT_BLOCKS,
  INTERVIEW_HERO,
  INTERVIEW_HERO_ACTIONS,
} from "@/lib/admission-data"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { ContactStrip } from "@/components/contact-strip"

export function InterviewRequestPage() {
  const { lang } = useLang()
  const [intro, ...rest] = INTERVIEW_CONTENT_BLOCKS

  return (
    <>
      <PageHero
        badge={INTERVIEW_HERO.badge[lang]}
        title={INTERVIEW_HERO.title[lang]}
        subtitle={INTERVIEW_HERO.subtitle[lang]}
        actions={INTERVIEW_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="flex flex-col gap-6">
          <ContentSection block={intro} variant="highlight" />
          {rest.map((block) => (
            <ContentSection key={block.id} block={block} />
          ))}
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
