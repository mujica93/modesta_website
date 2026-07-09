import type { ComponentType, SVGProps } from "react"
import { InstagramIcon, YoutubeIcon } from "@/components/social-icons"
import { Link } from "./links.enum"
import type { LocalizedString } from "./home-data"

export type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>

export type SocialPlatform = {
  id: string
  name: LocalizedString
  handle: string
  description: LocalizedString
  href: string
  cta: LocalizedString
  icon: SocialIcon
  accentClass: string
}

export const SOCIALS_HERO = {
  badge: { es: "Sobre nosotros", en: "About us" } satisfies LocalizedString,
  title: { es: "Nuestras Redes", en: "Our Networks" } satisfies LocalizedString,
  subtitle: {
    es: "Síguenos en nuestras redes sociales para conocer la vida escolar, los logros de nuestros estudiantes y las novedades del colegio.",
    en: "Follow us on social media to learn about school life, student achievements and the latest news from our school.",
  } satisfies LocalizedString,
}

export const SOCIALS_HERO_ACTIONS = [
  {
    id: "instagram",
    label: { es: "Seguir en Instagram", en: "Follow on Instagram" },
    href: Link.INSTAGRAM,
    variant: "default" as const,
    external: true,
  },
  {
    id: "youtube",
    label: { es: "Ver canal de YouTube", en: "Watch YouTube channel" },
    href: Link.YOUTUBE_CHANNEL,
    variant: "outline" as const,
    external: true,
  },
]

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "instagram",
    name: { es: "Instagram", en: "Instagram" },
    handle: "@uecolegiomodestabor",
    description: {
      es: "Fotos, historias y momentos destacados de la comunidad educativa del colegio.",
      en: "Photos, stories and highlights from the school's educational community.",
    },
    href: Link.INSTAGRAM,
    cta: { es: "Visitar perfil", en: "Visit profile" },
    icon: InstagramIcon,
    accentClass: "from-pink-500/10 to-purple-500/10 border-pink-500/20",
  },
  {
    id: "youtube",
    name: { es: "YouTube", en: "YouTube" },
    handle: "@UEColegioModestaBor",
    description: {
      es: "Videos institucionales, proyectos educativos y contenido audiovisual del colegio.",
      en: "Institutional videos, educational projects and audiovisual content from the school.",
    },
    href: Link.YOUTUBE_CHANNEL,
    cta: { es: "Suscribirse al canal", en: "Subscribe to channel" },
    icon: YoutubeIcon,
    accentClass: "from-red-500/10 to-orange-500/10 border-red-500/20",
  },
]

export const SOCIALS_FEATURED_VIDEO = {
  title: { es: "La Casa del Aprendizaje y el Saber", en: "The House of Learning and Knowledge" },
  description: {
    es: "Conoce más sobre nuestra propuesta educativa a través de nuestro canal oficial en YouTube.",
    en: "Learn more about our educational approach through our official YouTube channel.",
  },
  url: Link.YOUTUBE_FEATURED,
} satisfies {
  title: LocalizedString
  description: LocalizedString
  url: string
}

export const SOCIALS_INSTAGRAM_HIGHLIGHT = {
  title: { es: "Destacado en Instagram", en: "Instagram highlight" },
  quote: {
    es: "Dos generaciones de nuestro colegio: Yerilee, a un paso de graduarse de médico cirujano, egresada de nuestra II promoción, y Sebastián Angulo, egresado de preescolar. ¡Felicidades a todos nuestros alumnos y exalumnos de la U.E. Colegio Modesta Bor!",
    en: "Two generations of our school: Yerilee, about to graduate as a surgeon from our second graduating class, and Sebastián Angulo, a preschool graduate. Congratulations to all our current students and alumni at Modesta Bor School!",
  },
  hashtags: "#GeneracionRelevo #Futuro #generacion",
  postUrl: "https://www.instagram.com/p/BzJqOuGAbJ8/",
  cta: { es: "Ver publicación", en: "View post" },
} satisfies {
  title: LocalizedString
  quote: LocalizedString
  hashtags: string
  postUrl: string
  cta: LocalizedString
}
