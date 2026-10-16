"use client"

import { useLang } from "@/lib/i18n"
import {
  HOUSE_QUICK_LINKS,
  HOUSE_QUICK_LINKS_TITLE,
} from "@/lib/house-of-knowledge-data"
import {
  GALLERY_HERO,
  GALLERY_HERO_ACTIONS,
  GALLERY_HIGHLIGHTS,
  GALLERY_SECTIONS,
} from "@/lib/gallery-data"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { ImageGallery } from "@/components/image-gallery"
import { ContactStrip } from "@/components/contact-strip"

export function GalleryPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={GALLERY_HERO.badge[lang]}
        title={GALLERY_HERO.title[lang]}
        subtitle={GALLERY_HERO.subtitle[lang]}
        actions={GALLERY_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-10">
            <ul className="flex flex-wrap gap-2">
              {GALLERY_HIGHLIGHTS.map((item) => (
                <li
                  key={item.es}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  {item[lang]}
                </li>
              ))}
            </ul>

            {GALLERY_SECTIONS.map((section) => (
              <div key={section.id} className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-foreground font-heading">
                  {section.title[lang]}
                </h2>
                <ImageGallery images={section.images} />
              </div>
            ))}
          </div>
          <QuickLinksPanel title={HOUSE_QUICK_LINKS_TITLE} links={HOUSE_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
