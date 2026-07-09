import {
  BookOpen,
  Eye,
  Heart,
  Megaphone,
  Share2,
  Target,
  User,
} from "lucide-react"
import type { LocalizedString, QuickLink } from "./home-data"

export const ABOUT_US_QUICK_LINKS: QuickLink[] = [
  {
    id: "footprint",
    label: { es: "La huella de Modesta Bor", en: "The Footprint of Modesta Bor" },
    href: "/about-us/footprint-modesta-bor",
    icon: User,
  },
  {
    id: "mission-vision",
    label: { es: "Misión y Visión", en: "Mission and Vision" },
    href: "/about-us/mission-vision",
    icon: Eye,
  },
  {
    id: "objectives",
    label: { es: "Objetivos", en: "Objectives" },
    href: "/about-us/objetives",
    icon: Target,
  },
  {
    id: "values",
    label: { es: "Valores", en: "Values" },
    href: "/about-us/values",
    icon: Heart,
  },
  {
    id: "services",
    label: { es: "Servicios", en: "Services" },
    href: "/about-us/services",
    icon: Megaphone,
  },
  {
    id: "conviviality",
    label: { es: "Manual de Convivencia", en: "Conviviality Manual" },
    href: "/about-us/conviviality",
    icon: BookOpen,
  },
  {
    id: "networks",
    label: { es: "Nuestras Redes", en: "Our Networks" },
    href: "/about-us/socials-networks",
    icon: Share2,
  },
]

export const ABOUT_US_QUICK_LINKS_TITLE = {
  es: "El Colegio",
  en: "The School",
} satisfies LocalizedString
