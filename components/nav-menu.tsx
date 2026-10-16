"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { getNavItems, type NavItem } from "@/lib/nav-items"
import { cn } from "@/lib/utils"

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimeout()
    setOpen(true)
  }

  const closeMenu = () => {
    clearCloseTimeout()
    timeoutRef.current = setTimeout(() => setOpen(false), 120)
  }

  useEffect(() => {
    return () => clearCloseTimeout()
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocusCapture={openMenu}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          closeMenu()
        }
      }}
    >
      <Link
        href={item.href}
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap",
          open
            ? "text-primary bg-accent/50"
            : "text-foreground hover:text-primary hover:bg-accent/50",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {item.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </Link>

      <div
        role="menu"
        className={cn(
          "absolute left-0 top-full z-50 pt-1 transition-all duration-150",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        )}
      >
        <div className="min-w-56 rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md">
          {item.submenu?.map((subitem) => (
            <Link
              key={subitem.label}
              href={subitem.href}
              role="menuitem"
              className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {subitem.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function NavMenu() {
  const { lang } = useLang()
  const items = getNavItems(lang)

  return (
    <nav className="hidden md:flex items-center gap-0.5">
      {items.map((item) => {
        if (item.submenu) {
          return <NavDropdown key={item.label} item={item} />
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors whitespace-nowrap"
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
