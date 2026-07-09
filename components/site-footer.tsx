"use client"

import Image from "next/image"
import { useLang } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <Image
          src="/images/emblema-modesta-bor.png"
          alt="Emblema U.E. Colegio Modesta Bor"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-contain"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-foreground font-heading">{t("site.school")}</span>
          <span className="text-sm text-muted-foreground">{t("site.tagline")}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {t("footer.made")} · © {year} {t("site.school")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
