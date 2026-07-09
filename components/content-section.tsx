"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import { getYouTubeEmbedUrl } from "@/lib/youtube"
import type { ContentBlock } from "@/lib/home-data"

type ContentSectionProps = {
  block: ContentBlock
  variant?: "default" | "highlight"
}

export function ContentSection({ block, variant = "default" }: ContentSectionProps) {
  const { lang } = useLang()
  const embedUrl = block.youtubeLink ? getYouTubeEmbedUrl(block.youtubeLink) : null
  const image = block.image ? block.image : null
  return (
    <article
      className={
        variant === "highlight"
          ? "rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
          : "rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
      }
    >
      <h2 className="text-xl font-semibold text-foreground font-heading">{block.title[lang]}</h2>
      <div className="mt-4 flex flex-col gap-4">
        {block.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-pretty leading-relaxed text-muted-foreground">
            {paragraph[lang]}
          </p>
        ))}
      </div>
      {block.cta ? (
        <div className="mt-6">
          {block.cta.external ? (
            <a
              href={block.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", className: "gap-2" })}
            >
              {block.cta.label[lang]}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <Link href={block.cta.href} className={buttonVariants({ variant: "outline" })}>
              {block.cta.label[lang]}
            </Link>
          )}
        </div>
      ) : null}
      {embedUrl ? (
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-border">
          <iframe
            src={embedUrl}
            title={`YouTube: ${block.title[lang]}`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : null}
      {image ? (
        <div className="mt-6">
          <img src={image} alt={block.title[lang]} className="w-full h-auto" />
        </div>
      ) : null}
    </article>
  )
}
