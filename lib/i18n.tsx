"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "es" | "en"

type Dict = Record<string, { es: string; en: string }>

const DICT: Dict = {
  "site.school": { es: "U.E. Colegio Modesta Bor", en: "Modesta Bor School" },
  "site.tagline": { es: "La Casa de los Saberes", en: "The House of Knowledge" },
  "hero.badge": { es: "Año Escolar 2025 – 2026", en: "School Year 2025 – 2026" },
  "hero.title": { es: "Lista de Útiles Escolares", en: "School Supplies List" },
  "hero.subtitle": {
    es: "Consulta y descarga la lista de textos y útiles sugeridos para cada nivel y grado de nuestra institución.",
    en: "Browse and download the suggested textbooks and supplies for each level and grade of our institution.",
  },
  "hero.cta": { es: "Ver listas", en: "View lists" },
  "hero.print": { es: "Imprimir / PDF", en: "Print / PDF" },
  "search.placeholder": { es: "Buscar por grado o nivel...", en: "Search by grade or level..." },
  "filter.all": { es: "Todos", en: "All" },
  "list.empty": { es: "No se encontraron listas para tu búsqueda.", en: "No lists found for your search." },
  "list.texts": { es: "Textos", en: "Texts" },
  "list.supplies": { es: "Útiles", en: "Supplies" },
  "list.subject": { es: "Asignatura", en: "Subject" },
  "list.required": { es: "Útiles requeridos", en: "Required supplies" },
  "list.notes": { es: "Notas", en: "Notes" },
  "card.view": { es: "Ver lista completa", en: "View full list" },
  "card.items": { es: "elementos", en: "items" },
  "card.subjects": { es: "asignaturas", en: "subjects" },
  "note.title": { es: "Información importante", en: "Important information" },
  "reps.title": { es: "Ejecutivos de venta", en: "Sales representatives" },
  "reps.subtitle": { es: "Contacta para la adquisición de textos sugeridos.", en: "Contact us to purchase the suggested textbooks." },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
  "footer.made": { es: "Sitio web institucional", en: "Institutional website" },
  "theme.toggle": { es: "Cambiar tema", en: "Toggle theme" },
  "lang.toggle": { es: "Idioma", en: "Language" },
  "back.top": { es: "Volver arriba", en: "Back to top" },
  "stats.grades": { es: "Grados y años", en: "Grades & years" },
  "stats.levels": { es: "Niveles educativos", en: "Educational levels" },
  "stats.year": { es: "Período escolar", en: "School period" },
}

type LangContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null
    if (stored === "es" || stored === "en") setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") localStorage.setItem("lang", l)
  }

  const t = (key: string) => {
    const entry = DICT[key]
    if (!entry) return key
    return entry[lang]
  }

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
