"use client"

import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

type HeroAction = {
  label: string
  href: string
  variant?: "default" | "outline"
  external?: boolean
}

type PageHeroProps = {
  badge?: string
  title: string
  subtitle?: string
  actions?: HeroAction[]
  showEmblem?: boolean
  id?: string
}

export function PageHero({
  badge,
  title,
  subtitle,
  actions = [],
  showEmblem = true,
  id = "inicio",
}: PageHeroProps) {
  return (
    <section id={id} className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="flex flex-col gap-6">
          {badge ? (
            <span className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {badge}
            </span>
          ) : null}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{subtitle}</p>
          ) : null}
          {actions.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {actions.map((action) =>
                action.external ? (
                  <a
                    key={action.href}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: action.variant ?? "default",
                      size: "lg",
                    })}
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={buttonVariants({
                      variant: action.variant ?? "default",
                      size: "lg",
                    })}
                  >
                    {action.label}
                  </Link>
                ),
              )}
            </div>
          ) : null}
        </div>

        {showEmblem ? (
          <div className="relative mx-auto flex max-w-sm items-center justify-center md:max-w-none">
            <div
              className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <Image
                src="/images/emblema-modesta-bor.png"
                alt=""
                width={320}
                height={320}
                className="h-auto w-full max-w-[280px] object-contain"
                priority
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
