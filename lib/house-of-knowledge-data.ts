import {
  Award,
  Building2,
  GraduationCap,
  Handshake,
  Images,
  Landmark,
} from "lucide-react"
import type { LocalizedString, QuickLink } from "./home-data"

export const HOUSE_QUICK_LINKS: QuickLink[] = [
  {
    id: "museum",
    label: { es: "Museo Virtual 2022", en: "Virtual Museum 2022" },
    href: "/house-of-knowledge/museum",
    icon: Landmark,
  },
  {
    id: "scholarships",
    label: { es: "Becas de Rendimiento", en: "Performance Scholarships" },
    href: "/house-of-knowledge/scholarships",
    icon: Award,
  },
  {
    id: "alumni",
    label: { es: "Ex Alumnos", en: "Alumni" },
    href: "/house-of-knowledge/alumni",
    icon: GraduationCap,
  },
  {
    id: "partners",
    label: { es: "Socios y Amigos", en: "Friends and Partners" },
    href: "/house-of-knowledge/partners",
    icon: Handshake,
  },
  {
    id: "perspectives",
    label: { es: "Perspectivas del Colegio", en: "School Perspectives" },
    href: "/house-of-knowledge/perspectives",
    icon: Building2,
  },
  {
    id: "gallery",
    label: { es: "Galería", en: "Gallery" },
    href: "/house-of-knowledge/gallery",
    icon: Images,
  },
]

export const HOUSE_QUICK_LINKS_TITLE = {
  es: "Casa de los Saberes",
  en: "House of Knowledge",
} satisfies LocalizedString

export const HOUSE_INDEX_HERO = {
  badge: { es: "Casa de los Saberes", en: "House of Knowledge" } satisfies LocalizedString,
  title: {
    es: "Espacios, logros y comunidad",
    en: "Spaces, achievements and community",
  } satisfies LocalizedString,
  subtitle: {
    es: "Conoce el museo virtual, las becas, los egresados, nuestros aliados, las instalaciones y la galería de momentos del colegio.",
    en: "Explore the virtual museum, scholarships, alumni, partners, facilities and the school's gallery of memorable moments.",
  } satisfies LocalizedString,
}
