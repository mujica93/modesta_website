"use client"

import { ExternalLink } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import type { SocialPlatform } from "@/lib/socials-networks-data"
import { cn } from "@/lib/utils"

type SocialPlatformCardProps = {
  platform: SocialPlatform
}

export function SocialPlatformCard({ platform }: SocialPlatformCardProps) {
  const { lang } = useLang()
  const Icon = platform.icon

  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border bg-gradient-to-br p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        platform.accentClass,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/80 text-primary shadow-sm">
          <Icon className="h-6 w-6" />
        </span>
        <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-foreground font-heading">{platform.name[lang]}</h3>
        <p className="text-sm font-medium text-primary">{platform.handle}</p>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{platform.description[lang]}</p>

      <span className={buttonVariants({ variant: "outline", className: "mt-auto w-fit gap-2 bg-background/60" })}>
        {platform.cta[lang]}
        <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </a>
  )
}
