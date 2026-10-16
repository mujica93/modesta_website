"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import { getNavItems } from "@/lib/nav-items"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const items = getNavItems(lang)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? (lang === "es" ? "Cerrar menú" : "Close menu") : t("nav.menu")}
        aria-expanded={open}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {open ? (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto flex max-h-[calc(100vh-4rem)] max-w-6xl flex-col gap-1 overflow-y-auto px-4 py-4">
            {items.map((item) => {
              if (!item.submenu) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent/50 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )
              }

              const isExpanded = expanded === item.label

              return (
                <div key={item.label} className="rounded-md border border-border/70">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`${item.label} submenu`}
                      aria-expanded={isExpanded}
                      onClick={() => setExpanded(isExpanded ? null : item.label)}
                      className="px-3 py-2.5 text-muted-foreground hover:text-primary"
                    >
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")}
                      />
                    </button>
                  </div>
                  {isExpanded ? (
                    <div className="flex flex-col gap-0.5 border-t border-border/70 px-2 py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          onClick={() => setOpen(false)}
                          className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </nav>
        </div>
      ) : null}
    </div>
  )
}
