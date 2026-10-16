"use client"

import { useLang } from "@/lib/i18n"
import {
  ABOUT_US_QUICK_LINKS,
} from "@/lib/about-us-data"
import { PageHero } from "@/components/page-hero"
import { SectionIndexCards } from "@/components/section-index-cards"
import { ContactStrip } from "@/components/contact-strip"

export function AboutUsIndexPage() {
  const { lang } = useLang()

  return (
    <>
      <PageHero
        badge={lang === "es" ? "Sobre nosotros" : "About us"}
        title={lang === "es" ? "El Colegio" : "The School"}
        subtitle={
          lang === "es"
            ? "Conoce la identidad, principios, servicios y convivencia que definen a la U.E. Colegio Modesta Bor."
            : "Discover the identity, principles, services and coexistence that define Modesta Bor School."
        }
        actions={[
          {
            label: lang === "es" ? "Misión y Visión" : "Mission and Vision",
            href: "/about-us/mission-vision",
            variant: "default",
          },
          {
            label: lang === "es" ? "Admisión" : "Admission",
            href: "/admission",
            variant: "outline",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <SectionIndexCards links={ABOUT_US_QUICK_LINKS} />
      </section>

      <ContactStrip />
    </>
  )
}
