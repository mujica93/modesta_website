"use client"

import Image from "next/image"
import { GraduationCap, Printer, ArrowDown } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import { GRADES, LEVELS } from "@/lib/supplies-data"

export function Hero() {

  const { t } = useLang()


  const currentYear = new Date().getFullYear()
  const previousYear = currentYear - 1
  const previousYearDigits = previousYear.toString()
  const year = `${previousYearDigits}-${currentYear.toString().slice(-2)}`

  const stats = [
    { value: String(GRADES.length), label: t("stats.grades") },
    { value: String(LEVELS.length), label: t("stats.levels") },
    { value: year, label: t("stats.year") },
  ]

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <GraduationCap className="h-3.5 w-3.5" />
            {t("hero.badge")}
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
            {t("hero.title")}
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#listas" className={buttonVariants({ size: "lg", className: "gap-2" })}>
              <ArrowDown className="h-4 w-4" />
              {t("hero.cta")}
            </a>
            <a
              href="#listas"
              onClick={() => setTimeout(() => window.print(), 100)}
              className={buttonVariants({ variant: "outline", size: "lg", className: "gap-2" })}
            >
              <Printer className="h-4 w-4" />
              {t("hero.print")}
            </a>
          </div>
          <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 text-xs text-muted-foreground">{s.label}</dt>
                <dd className="order-1 text-2xl font-bold text-foreground font-heading">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto flex max-w-sm items-center justify-center md:max-w-none">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <Image
              src="/images/emblema-modesta-bor.png"
              alt="Emblema de la U.E. Colegio Modesta Bor"
              width={320}
              height={320}
              className="h-auto w-full max-w-[280px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
