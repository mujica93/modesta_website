import type { LocalizedString } from "./home-data"
import type { GalleryImage } from "./perspectives-data"
import { Imgs } from "./imgs.enum"

export const GALLERY_HERO = {
  badge: { es: "Casa de los Saberes", en: "House of Knowledge" } satisfies LocalizedString,
  title: { es: "Galería", en: "Gallery" } satisfies LocalizedString,
  subtitle: {
    es: "Momentos de aprendizaje, arte, deporte y convivencia que reflejan la vida escolar del Colegio Modesta Bor.",
    en: "Moments of learning, art, sports and community life that reflect school life at Modesta Bor School.",
  } satisfies LocalizedString,
}

export const GALLERY_HERO_ACTIONS = [
  {
    id: "perspectives",
    label: { es: "Perspectivas del colegio", en: "School perspectives" },
    href: "/house-of-knowledge/perspectives",
    variant: "default" as const,
    external: false,
  },
  {
    id: "networks",
    label: { es: "Nuestras redes", en: "Our networks" },
    href: "/about-us/socials-networks",
    variant: "outline" as const,
    external: false,
  },
]

export type GallerySection = {
  id: string
  title: LocalizedString
  images: GalleryImage[]
}

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    id: "projects",
    title: {
      es: "Defensa de proyectos y vida académica",
      en: "Project defenses and academic life",
    },
    images: [
      {
        id: "g1",
        src: Imgs.GALLERY_1,
        alt: { es: "Momento escolar 1", en: "School moment 1" },
      },
      {
        id: "g2",
        src: Imgs.GALLERY_2,
        alt: { es: "Momento escolar 2", en: "School moment 2" },
      },
      {
        id: "g3",
        src: Imgs.GALLERY_3,
        alt: { es: "Momento escolar 3", en: "School moment 3" },
      },
    ],
  },
  {
    id: "arts",
    title: {
      es: "Música, artes y tradiciones",
      en: "Music, arts and traditions",
    },
    images: [
      {
        id: "g4",
        src: Imgs.GALLERY_4,
        alt: { es: "Actividades artísticas", en: "Artistic activities" },
      },
      {
        id: "g5",
        src: Imgs.GALLERY_5,
        alt: { es: "Cultivando tradiciones", en: "Cultivating traditions" },
      },
      {
        id: "g6",
        src: Imgs.GALLERY_6,
        alt: { es: "Trabajo en equipo", en: "Teamwork" },
      },
    ],
  },
]

export const GALLERY_HIGHLIGHTS: LocalizedString[] = [
  { es: "Un público élite", en: "An outstanding audience" },
  { es: "Enseñando las artes", en: "Teaching the arts" },
  { es: "Cultivando las tradiciones", en: "Cultivating traditions" },
  { es: "Promoviendo el trabajo en equipo", en: "Promoting teamwork" },
  { es: "La sistematización de la enseñanza", en: "Systematic teaching" },
]
