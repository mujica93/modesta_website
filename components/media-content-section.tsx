"use client"

import Image from "next/image"
import { useLang } from "@/lib/i18n"
import type { MediaContentBlock } from "@/lib/mission-vision-data"
import { cn } from "@/lib/utils"

type MediaContentSectionProps = {
  block: MediaContentBlock
  variant?: "default" | "highlight"
}

export function MediaContentSection({ block, variant = "default" }: MediaContentSectionProps) {
  const { lang } = useLang()
  const imageFirst = block.imagePosition === "left"

  return (
    <article
      className={cn(
        "rounded-2xl border p-6 sm:p-8",
        variant === "highlight"
          ? "border-primary/20 bg-primary/5"
          : "border-border bg-card shadow-sm",
      )}
    >
      <div
        className={cn(
          "grid items-center gap-8",
          imageFirst ? "md:grid-cols-[minmax(140px,200px)_1fr]" : "md:grid-cols-[1fr_minmax(140px,200px)]",
        )}
      >
        <div className={cn("flex justify-center", !imageFirst && "md:order-2")}>
          <div className="rounded-2xl border border-border bg-background p-4 shadow-sm">
            <Image
              src={block.image}
              alt={block.title[lang]}
              width={200}
              height={260}
              className="h-auto w-full max-w-[200px] object-contain"
            />
          </div>
        </div>

        <div className={cn(!imageFirst && "md:order-1")}>
          <h2 className="text-xl font-semibold text-foreground font-heading">{block.title[lang]}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {block.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-pretty leading-relaxed text-muted-foreground">
                {paragraph[lang]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
