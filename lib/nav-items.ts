import { getSchoolYearLabel } from "./school-year"

export type NavItem = {
  label: string
  href: string
  submenu?: { label: string; href: string }[]
}

export function getNavItems(lang: "es" | "en"): NavItem[] {
  const schoolYear = getSchoolYearLabel()

  const items: Record<"es" | "en", NavItem[]> = {
    es: [
      {
        label: "Inicio",
        href: "/",
        submenu: [{ label: "Pagos", href: "/index/payments" }],
      },
      {
        label: "Útiles Escolares",
        href: "/supplies",
        submenu: [
          { label: `Año Escolar ${schoolYear}`, href: "/supplies" },
          { label: "Solicitar Entrevista", href: "/supplies/interview-request" },
        ],
      },
      {
        label: "Sobre nosotros",
        href: "/about-us",
        submenu: [
          { label: "La huella de Modesta Bor", href: "/about-us/footprint-modesta-bor" },
          { label: "Misión y Visión", href: "/about-us/mission-vision" },
          { label: "Objetivos", href: "/about-us/objetives" },
          { label: "Valores", href: "/about-us/values" },
          { label: "Servicios", href: "/about-us/services" },
          { label: "Manual de Convivencia", href: "/about-us/conviviality" },
          { label: "Nuestras Redes", href: "/about-us/socials-networks" },
        ],
      },
      { label: "Admisión", href: "/admission" },
      {
        label: "Casa de los Saberes",
        href: "/house-of-knowledge",
        submenu: [
          { label: "Museo Virtual 2022", href: "/house-of-knowledge/museum" },
          { label: "Becas de Rendimiento", href: "/house-of-knowledge/scholarships" },
          { label: "Ex Alumnos", href: "/house-of-knowledge/alumni" },
          { label: "Socios y Amigos", href: "/house-of-knowledge/partners" },
          { label: "Perspectivas del Colegio", href: "/house-of-knowledge/perspectives" },
          { label: "Galería", href: "/house-of-knowledge/gallery" },
        ],
      },
      { label: "Contacto", href: "/contact" },
    ],
    en: [
      {
        label: "Home",
        href: "/",
        submenu: [{ label: "Payments", href: "/index/payments" }],
      },
      {
        label: "School Supplies",
        href: "/supplies",
        submenu: [
          { label: `School Year ${schoolYear}`, href: "/supplies" },
          { label: "Request Interview", href: "/supplies/interview-request" },
        ],
      },
      {
        label: "About us",
        href: "/about-us",
        submenu: [
          { label: "The Footprint of Modesta Bor", href: "/about-us/footprint-modesta-bor" },
          { label: "Mission and Vision", href: "/about-us/mission-vision" },
          { label: "Objectives", href: "/about-us/objetives" },
          { label: "Values", href: "/about-us/values" },
          { label: "Services", href: "/about-us/services" },
          { label: "Conviviality Manual", href: "/about-us/conviviality" },
          { label: "Our Networks", href: "/about-us/socials-networks" },
        ],
      },
      { label: "Admission", href: "/admission" },
      {
        label: "House of Knowledge",
        href: "/house-of-knowledge",
        submenu: [
          { label: "Virtual Museum 2022", href: "/house-of-knowledge/museum" },
          { label: "Performance Scholarships", href: "/house-of-knowledge/scholarships" },
          { label: "Alumni", href: "/house-of-knowledge/alumni" },
          { label: "Friends and Partners", href: "/house-of-knowledge/partners" },
          { label: "School Perspectives", href: "/house-of-knowledge/perspectives" },
          { label: "Gallery", href: "/house-of-knowledge/gallery" },
        ],
      },
      { label: "Contact", href: "/contact" },
    ],
  }

  return items[lang]
}
