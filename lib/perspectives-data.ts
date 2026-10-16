import type { ContentBlock, LocalizedString } from "./home-data"
import { Imgs } from "./imgs.enum"

export type GalleryImage = {
  id: string
  src: string
  alt: LocalizedString
}

export const PERSPECTIVES_HERO = {
  badge: { es: "Casa de los Saberes", en: "House of Knowledge" } satisfies LocalizedString,
  title: { es: "Perspectivas del Colegio", en: "School Perspectives" } satisfies LocalizedString,
  subtitle: {
    es: "Con el empeño de ofrecer instalaciones adecuadas para la comodidad de estudiantes y personal, mejoramos y mantenemos periódicamente nuestra planta física.",
    en: "Committed to offering suitable facilities for students and staff, we continuously improve and maintain our campus.",
  } satisfies LocalizedString,
}

export const PERSPECTIVES_HERO_ACTIONS = [
  {
    id: "gallery",
    label: { es: "Ver galería", en: "View gallery" },
    href: "/house-of-knowledge/gallery",
    variant: "default" as const,
    external: false,
  },
  {
    id: "admission",
    label: { es: "Admisión", en: "Admission" },
    href: "/admission",
    variant: "outline" as const,
    external: false,
  },
]

export const PERSPECTIVES_INTRO: ContentBlock = {
  id: "intro",
  title: { es: "La Casa de los Saberes", en: "The House of Knowledge" },
  paragraphs: [
    {
      es: "Nos avocamos a mejorar y dar mantenimiento periódico a nuestra planta física, para ofrecer espacios adecuados al aprendizaje, el deporte, el arte y la vida escolar diaria.",
      en: "We continuously improve and maintain our facilities to provide suitable spaces for learning, sports, arts and daily school life.",
    },
  ],
}

export const PERSPECTIVES_IMAGES: GalleryImage[] = [
  {
    id: "p1",
    src: Imgs.PERSPECTIVES_1,
    alt: { es: "Instalaciones del colegio", en: "School facilities" },
  },
  {
    id: "p2",
    src: Imgs.PERSPECTIVES_2,
    alt: { es: "Espacios institucionales", en: "Campus spaces" },
  },
  {
    id: "p3",
    src: Imgs.PERSPECTIVES_3,
    alt: { es: "Áreas del plantel", en: "School areas" },
  },
  {
    id: "p4",
    src: Imgs.PERSPECTIVES_4,
    alt: { es: "Ambiente escolar", en: "School environment" },
  },
]
