"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import { NavMenu } from "@/components/nav-menu"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-1 px-1 sm:px-1">
        <a href="/index" className="flex items-center gap-3 pr-1">
          <Image
            src="/images/emblema-modesta-bor.png"
            alt="Emblema U.E. Colegio Modesta Bor"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-foreground sm:text-base font-heading">
              {t("site.school")}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">{t("site.tagline")}</span>
          </div>
        </a>

        <NavMenu />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label={t("lang.toggle")}
            className="gap-1.5 font-medium"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs uppercase">{lang === "es" ? "ES" : "EN"}</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={t("theme.toggle")}
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
