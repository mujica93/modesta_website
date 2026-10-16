import type { ContentBlock, LocalizedString } from "./home-data"
import { Link } from "./links.enum"

export const MUSEUM_HERO = {
  badge: { es: "Casa de los Saberes", en: "House of Knowledge" } satisfies LocalizedString,
  title: { es: "Museo Virtual 2022", en: "Virtual Museum 2022" } satisfies LocalizedString,
  subtitle: {
    es: "Proyecto de 1° Año, clase de Arte y Patrimonio: una experiencia formativa que une investigación, creatividad y patrimonio cultural.",
    en: "A 1st-year Art and Heritage class project: a formative experience that connects research, creativity and cultural heritage.",
  } satisfies LocalizedString,
}

export const MUSEUM_HERO_ACTIONS = [
  {
    id: "youtube",
    label: { es: "Ver en YouTube", en: "Watch on YouTube" },
    href: Link.YOUTUBE_CHANNEL,
    variant: "default" as const,
    external: true,
  },
  {
    id: "gallery",
    label: { es: "Ver galería", en: "View gallery" },
    href: "/house-of-knowledge/gallery",
    variant: "outline" as const,
    external: false,
  },
]

export const MUSEUM_CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "about",
    title: { es: "Arte y Patrimonio", en: "Art and Heritage" },
    paragraphs: [
      {
        es: "El Museo Virtual 2022 fue desarrollado por estudiantes de 1° Año en la clase de Arte y Patrimonio, como espacio para investigar, crear y compartir saberes culturales.",
        en: "The 2022 Virtual Museum was developed by 1st-year students in the Art and Heritage class as a space to research, create and share cultural knowledge.",
      },
    ],
    youtubeLink: Link.DIGITAL_MUSEUM,
  },
  {
    id: "authors",
    title: { es: "Estudiantes participantes", en: "Participating students" },
    paragraphs: [
      {
        es: "Clara Guerrero, Agustín Donado, Jenifer Matos, Verónica Suárez, Agustín Palma, Gabriela Natera, María Clara Guerrero, Gabriel Campos y Miguel LaCruz.",
        en: "Clara Guerrero, Agustín Donado, Jenifer Matos, Verónica Suárez, Agustín Palma, Gabriela Natera, María Clara Guerrero, Gabriel Campos and Miguel LaCruz.",
      },
    ],
  },
]
