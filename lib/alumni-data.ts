import type { ContentBlock, LocalizedString } from "./home-data"

export type AlumniProfile = {
  id: string
  name: string
  achievement: LocalizedString
}

export const ALUMNI_HERO = {
  badge: { es: "Casa de los Saberes", en: "House of Knowledge" } satisfies LocalizedString,
  title: { es: "Ex Alumnos", en: "Alumni" } satisfies LocalizedString,
  subtitle: {
    es: "Nuestra mejor satisfacción es saber que los egresados del Colegio Modesta Bor logran sus metas profesionales.",
    en: "Our greatest satisfaction is knowing that Modesta Bor School graduates achieve their professional goals.",
  } satisfies LocalizedString,
}

export const ALUMNI_HERO_ACTIONS = [
  {
    id: "networks",
    label: { es: "Nuestras redes", en: "Our networks" },
    href: "/about-us/socials-networks",
    variant: "default" as const,
    external: false,
  },
  {
    id: "contact",
    label: { es: "Contactar", en: "Contact us" },
    href: "/contact",
    variant: "outline" as const,
    external: false,
  },
]

export const ALUMNI_INTRO: ContentBlock = {
  id: "intro",
  title: { es: "Celebramos sus triunfos", en: "We celebrate their achievements" },
  paragraphs: [
    {
      es: "Celebramos los triunfos deportivos, artísticos y académicos de nuestros egresados. Su trayectoria inspira a las nuevas generaciones de La Casa de los Saberes.",
      en: "We celebrate the sports, artistic and academic achievements of our alumni. Their path inspires new generations at The House of Knowledge.",
    },
  ],
}

export const ALUMNI_PROFILES: AlumniProfile[] = [
  {
    id: "blanca",
    name: "Blanca Romero",
    achievement: {
      es: "Abogada egresada de la Universidad Fermín Toro.",
      en: "Lawyer graduated from Fermín Toro University.",
    },
  },
  {
    id: "yerisbeth",
    name: "Yerisbeth Lee",
    achievement: {
      es: "Médico Cirujano de la UCLA.",
      en: "Surgeon from UCLA (Venezuela).",
    },
  },
  {
    id: "maria",
    name: "María Verónica Arrieta",
    achievement: {
      es: "Licenciada en Psicología (UNY).",
      en: "Psychology graduate (UNY).",
    },
  },
  {
    id: "laura",
    name: "Laura Toro",
    achievement: {
      es: "Ingeniería Mecánica (UFT).",
      en: "Mechanical Engineering (UFT).",
    },
  },
  {
    id: "alberto",
    name: "Alberto Arias",
    achievement: {
      es: "Universidad de la Sorbona, Francia. Intercambio universitario de Bard College, NYC.",
      en: "Sorbonne University, France. University exchange with Bard College, NYC.",
    },
  },
]
