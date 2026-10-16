import type { ContentBlock, LocalizedString } from "./home-data"

export const PARTNERS_HERO = {
  badge: { es: "Casa de los Saberes", en: "House of Knowledge" } satisfies LocalizedString,
  title: { es: "Socios y Amigos", en: "Friends and Partners" } satisfies LocalizedString,
  subtitle: {
    es: "En la unión está la fuerza: alianzas estratégicas con organizaciones públicas y privadas para el bienestar de nuestros estudiantes.",
    en: "In unity there is strength: strategic alliances with public and private organizations for the well-being of our students.",
  } satisfies LocalizedString,
}

export const PARTNERS_HERO_ACTIONS = [
  {
    id: "services",
    label: { es: "Ver servicios", en: "View services" },
    href: "/about-us/services",
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

export const PARTNERS_INTRO: ContentBlock = {
  id: "intro",
  title: { es: "Alianzas estratégicas", en: "Strategic alliances" },
  paragraphs: [
    {
      es: "Nuestra institución lleva a cabo alianzas estratégicas con diferentes organizaciones públicas y privadas para el bienestar de nuestros estudiantes. En lo académico, cultural y deportivo, compartimos experiencias y saberes con profesionales de otras instituciones.",
      en: "Our institution builds strategic alliances with public and private organizations for our students' well-being. Academically, culturally and in sports, we share experiences and knowledge with professionals from other institutions.",
    },
  ],
}

export const PARTNERS_BLOCKS: ContentBlock[] = [
  {
    id: "upel",
    title: { es: "UPEL-IPB", en: "UPEL-IPB" },
    paragraphs: [
      {
        es: "Cada semestre recibimos estudiantes universitarios del último semestre de la Universidad Pedagógica Experimental Libertador – Instituto Pedagógico de Barquisimeto «Luis Beltrán Prieto Figueroa», quienes comparten sus saberes con nuestros estudiantes.",
        en: "Each semester we welcome final-semester university students from UPEL – Pedagogical Institute of Barquisimeto «Luis Beltrán Prieto Figueroa», who share their knowledge with our students.",
      },
    ],
  },
  {
    id: "fundela",
    title: { es: "FUNDELA", en: "FUNDELA" },
    paragraphs: [
      {
        es: "La Fundación para el Deporte del Estado Lara nos brinda instalaciones deportivas para actividades recreativas y formativas en atletismo, fútbol de salón, baloncesto y voleibol.",
        en: "The Lara State Sports Foundation provides sports facilities for recreational and formative activities in athletics, indoor soccer, basketball and volleyball.",
      },
    ],
  },
  {
    id: "fundaescucharte",
    title: { es: "FUNDAESCUCHARTE", en: "FUNDAESCUCHARTE" },
    paragraphs: [
      {
        es: "La Fundación EscuchArte, reconocida en Latinoamérica por sus propuestas lúdicas en la formación musical, es nuestro aliado para las innovaciones académicas en las artes, especialmente en educación musical.",
        en: "EscuchArte Foundation, recognized in Latin America for playful approaches to music education, is our partner for academic innovation in the arts, especially music education.",
      },
    ],
  },
  {
    id: "riom",
    title: { es: "RIOM", en: "RIOM" },
    paragraphs: [
      {
        es: "La Red Iberoamericana de Organizaciones Musicales es un ente no gubernamental que agrupa instituciones de Latinoamérica y España con el propósito de auspiciar actividades musicales.",
        en: "The Ibero-American Network of Musical Organizations is a non-governmental entity that brings together institutions from Latin America and Spain to support musical activities.",
      },
    ],
  },
]
