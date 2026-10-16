"use client"

import { useLang } from "@/lib/i18n"
import {
  HOUSE_QUICK_LINKS,
  HOUSE_QUICK_LINKS_TITLE,
} from "@/lib/house-of-knowledge-data"
import {
  ALUMNI_HERO,
  ALUMNI_HERO_ACTIONS,
  ALUMNI_INTRO,
  ALUMNI_PROFILES,
} from "@/lib/alumni-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { ContentSection } from "@/components/content-section"
import { ContactStrip } from "@/components/contact-strip"

export function AlumniPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={ALUMNI_HERO.badge[lang]}
        title={ALUMNI_HERO.title[lang]}
        subtitle={ALUMNI_HERO.subtitle[lang]}
        actions={ALUMNI_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-6">
            <ContentSection block={ALUMNI_INTRO} variant="highlight" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {ALUMNI_PROFILES.map((profile) => (
                <li
                  key={profile.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-foreground font-heading">{profile.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {profile.achievement[lang]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <QuickLinksPanel title={HOUSE_QUICK_LINKS_TITLE} links={HOUSE_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
