import type { LocalizedString } from "./home-data"
import type { MediaContentBlock } from "./mission-vision-data"
import { Imgs } from "./imgs.enum"

export const OBJECTIVES_HERO = {
  badge: { es: "Sobre nosotros", en: "About us" } satisfies LocalizedString,
  title: { es: "Objetivos", en: "Objectives" } satisfies LocalizedString,
  subtitle: {
    es: "Las metas institucionales que orientan la formación integral de nuestros estudiantes y el quehacer educativo del colegio.",
    en: "The institutional goals that guide the comprehensive education of our students and the school's educational mission.",
  } satisfies LocalizedString,
}

export const OBJECTIVES_HERO_ACTIONS = [
  {
    id: "mission-vision",
    label: { es: "Misión y Visión", en: "Mission and Vision" },
    href: "/about-us/mission-vision",
    variant: "default" as const,
    external: false,
  },
  {
    id: "values",
    label: { es: "Ver valores", en: "View values" },
    href: "/about-us/values",
    variant: "outline" as const,
    external: false,
  },
]

export const OBJECTIVES_BLOCK: MediaContentBlock = {
  id: "main",
  title: { es: "Nuestros objetivos", en: "Our objectives" },
  paragraphs: [
    {
      es: "Fomentar el desarrollo integral condicionado por los valores, comprometidos por una sociedad libre, humanista y un enfoque ideario global.",
      en: "To foster comprehensive development grounded in values, committed to a free and humanistic society with a global ideological outlook.",
    },
    {
      es: "Enmarcado en la promoción, planificación y administración de un Centro Educacional a nivel de Básica, Media y Diversificada, de conformidad con las leyes educativas del país; con actividades integrales de tipo deportivo, cultural, técnica y de cualquier actividad científica o humanística.",
      en: "Framed within the promotion, planning and administration of an Educational Center at Basic, Middle and Diversified levels, in accordance with the country's education laws; with comprehensive activities of a sporting, cultural and technical nature, as well as any scientific or humanistic activity.",
    },
  ],
  image: Imgs.OBJECTIVES,
  imagePosition: "left",
}
