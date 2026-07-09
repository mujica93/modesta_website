"use client"

import { ExternalLink } from "lucide-react"
import { InstagramIcon } from "@/components/social-icons"
import { buttonVariants } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
  ABOUT_US_QUICK_LINKS_TITLE,
} from "@/lib/about-us-data"
import {
  SOCIAL_PLATFORMS,
  SOCIALS_FEATURED_VIDEO,
  SOCIALS_HERO,
  SOCIALS_HERO_ACTIONS,
  SOCIALS_INSTAGRAM_HIGHLIGHT,
} from "@/lib/socials-networks-data"
import { getYouTubeEmbedUrl } from "@/lib/youtube"
import { PageHero } from "@/components/page-hero"
import { QuickLinksPanel } from "@/components/quick-links-panel"
import { SocialPlatformCard } from "@/components/social-platform-card"
import { ContactStrip } from "@/components/contact-strip"

export function SocialsNetworksPage() {
  const { lang } = useLang()
  const videoEmbedUrl = getYouTubeEmbedUrl(SOCIALS_FEATURED_VIDEO.url)

  return (
    <>
      <PageHero
        badge={SOCIALS_HERO.badge[lang]}
        title={SOCIALS_HERO.title[lang]}
        subtitle={SOCIALS_HERO.subtitle[lang]}
        actions={SOCIALS_HERO_ACTIONS.map((action) => ({
          label: action.label[lang],
          href: action.href,
          variant: action.variant,
          external: action.external,
        }))}
        showEmblem={false}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="flex flex-col gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {SOCIAL_PLATFORMS.map((platform) => (
                <SocialPlatformCard key={platform.id} platform={platform} />
              ))}
            </div>

            {videoEmbedUrl ? (
              <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-foreground font-heading">
                    {SOCIALS_FEATURED_VIDEO.title[lang]}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {SOCIALS_FEATURED_VIDEO.description[lang]}
                  </p>
                </div>
                <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-border">
                  <iframe
                    src={videoEmbedUrl}
                    title={SOCIALS_FEATURED_VIDEO.title[lang]}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </article>
            ) : null}

            <article className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-purple-500/5 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-pink-600 shadow-sm">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-semibold text-foreground font-heading">
                  {SOCIALS_INSTAGRAM_HIGHLIGHT.title[lang]}
                </h2>
              </div>
              <blockquote className="mt-4 border-l-4 border-pink-500/40 pl-4 text-pretty leading-relaxed text-muted-foreground">
                {SOCIALS_INSTAGRAM_HIGHLIGHT.quote[lang]}
              </blockquote>
              <p className="mt-3 text-sm font-medium text-primary">
                {SOCIALS_INSTAGRAM_HIGHLIGHT.hashtags}
              </p>
              <div className="mt-6">
                <a
                  href={SOCIALS_INSTAGRAM_HIGHLIGHT.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", className: "gap-2 bg-background/60" })}
                >
                  {SOCIALS_INSTAGRAM_HIGHLIGHT.cta[lang]}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>

          <QuickLinksPanel title={ABOUT_US_QUICK_LINKS_TITLE} links={ABOUT_US_QUICK_LINKS} />
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
