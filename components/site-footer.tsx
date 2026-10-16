"use client"

import Image from "next/image"
import Link from "next/link"
import { useLang } from "@/lib/i18n"
import { CONTACT_INFO } from "@/lib/home-data"

const FOOTER_LINKS = [
  { href: "/admission", label: { es: "Admisión", en: "Admission" } },
  { href: "/supplies", label: { es: "Útiles escolares", en: "School supplies" } },
  { href: "/index/payments", label: { es: "Pagos", en: "Payments" } },
  { href: "/contact", label: { es: "Contacto", en: "Contact" } },
  { href: "/about-us", label: { es: "Sobre nosotros", en: "About us" } },
  { href: "/house-of-knowledge", label: { es: "Casa de los Saberes", en: "House of Knowledge" } },
]

export function SiteFooter() {
  const { lang, t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
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
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-foreground font-heading">
            {lang === "es" ? "Enlaces" : "Links"}
          </h2>
          <ul className="flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-foreground font-heading">
            {CONTACT_INFO.title[lang]}
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>{CONTACT_INFO.address[lang]}</li>
            <li>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">
                {CONTACT_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
          {t("footer.made")} · © {year} {t("site.school")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
