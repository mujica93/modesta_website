import type { LocalizedString } from "./home-data"
import { Imgs } from "./imgs.enum"

export type MediaContentBlock = {
  id: string
  title: LocalizedString
  paragraphs: LocalizedString[]
  image: string
  imagePosition: "left" | "right"
}

export const MISSION_VISION_HERO = {
  badge: { es: "Sobre nosotros", en: "About us" } satisfies LocalizedString,
  title: { es: "Misión y Visión", en: "Mission and Vision" } satisfies LocalizedString,
  subtitle: {
    es: "Los principios que guían la formación integral de nuestros estudiantes y la proyección institucional del colegio.",
    en: "The principles that guide the comprehensive education of our students and the institutional vision of the school.",
  } satisfies LocalizedString,
}

export const MISSION_VISION_HERO_ACTIONS = [
  {
    id: "footprint",
    label: { es: "La huella de Modesta Bor", en: "The Footprint of Modesta Bor" },
    href: "/about-us/footprint-modesta-bor",
    variant: "default" as const,
    external: false,
  },
  {
    id: "objectives",
    label: { es: "Ver objetivos", en: "View objectives" },
    href: "/about-us/objetives",
    variant: "outline" as const,
    external: false,
  },
]

export const MISSION_VISION_BLOCKS: MediaContentBlock[] = [
  {
    id: "mission",
    title: { es: "Misión", en: "Mission" },
    paragraphs: [
      {
        es: "Contribuir con el desarrollo integral de los estudiantes, en forma intelectual, afectiva, social, física, artística, espiritual y con el autodescubrimiento de los talentos especiales de cada uno. Contribuir además con el apoyo de la cultura venezolana y universal por medio de la formación de personas reflexivas, críticas y creativas, capaces de interactuar con el entorno social y natural incidiendo en su transformación y enriquecimiento.",
        en: "To contribute to the comprehensive development of students intellectually, emotionally, socially, physically, artistically, spiritually, and through the discovery of each student's special talents. To further support Venezuelan and universal culture by forming reflective, critical and creative individuals capable of interacting with the social and natural environment, influencing its transformation and enrichment.",
      },
    ],
    image: Imgs.MISSION,
    imagePosition: "right",
  },
  {
    id: "vision",
    title: { es: "Visión", en: "Vision" },
    paragraphs: [
      {
        es: "Visualizarse como una institución abierta, actualizada y de vanguardia que sirva de referencia positiva para la comunidad educativa nacional e internacional; que articule los elementos propios de una organización integrada, basada en el apoyo, el respeto y el aprovechamiento de las diferencias para lograr fines comunes, proyectando una clara excelencia académica y personal, promoviendo a través de todos sus miembros una activa participación y un genuino interés por el desarrollo humano de los estudiantes.",
        en: "To be envisioned as an open, up-to-date and forward-looking institution that serves as a positive reference for the national and international educational community; one that articulates the elements of an integrated organization based on support, respect and the use of differences to achieve common goals, projecting clear academic and personal excellence while promoting active participation and genuine interest in students' human development among all its members.",
      },
    ],
    image: Imgs.VISION,
    imagePosition: "left",
  },
]
