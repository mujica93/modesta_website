import type { LocalizedString } from "./home-data"
import { CONTACT_INFO } from "./home-data"
import { Link } from "./links.enum"

export const CONTACT_HERO = {
  badge: { es: "Contacto", en: "Contact" } satisfies LocalizedString,
  title: {
    es: "Estamos para atenderle",
    en: "We are here to help",
  } satisfies LocalizedString,
  subtitle: {
    es: "Comuníquese con la administración del colegio para consultas sobre admisión, pagos, útiles escolares o información general.",
    en: "Contact school administration for questions about admission, payments, school supplies or general information.",
  } satisfies LocalizedString,
}

export const CONTACT_HERO_ACTIONS = [
  {
    id: "call",
    label: { es: "Llamar ahora", en: "Call now" },
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    variant: "default" as const,
    external: true,
  },
  {
    id: "email",
    label: { es: "Enviar correo", en: "Send email" },
    href: `mailto:${CONTACT_INFO.email}`,
    variant: "outline" as const,
    external: true,
  },
]

export const CONTACT_CHANNELS = [
  {
    id: "address",
    title: { es: "Dirección", en: "Address" } satisfies LocalizedString,
    value: CONTACT_INFO.address,
    href: "https://maps.google.com/?q=Calle+3+esquina+Av.+2,+Urb.+La+Mata,+Cabudare,+Lara,+Venezuela",
    external: true,
  },
  {
    id: "phone",
    title: { es: "Teléfono", en: "Phone" } satisfies LocalizedString,
    value: { es: CONTACT_INFO.phone, en: CONTACT_INFO.phone } satisfies LocalizedString,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    external: true,
  },
  {
    id: "email",
    title: { es: "Correo electrónico", en: "Email" } satisfies LocalizedString,
    value: { es: CONTACT_INFO.email, en: CONTACT_INFO.email } satisfies LocalizedString,
    href: `mailto:${CONTACT_INFO.email}`,
    external: true,
  },
]

export const CONTACT_QUICK_ACTIONS = [
  {
    id: "interview",
    label: { es: "Solicitud de entrevista", en: "Interview request" },
    href: "/supplies/interview-request",
  },
  {
    id: "payments",
    label: { es: "Reporte de pagos", en: "Payment report" },
    href: "/index/payments",
  },
  {
    id: "instagram",
    label: { es: "Instagram", en: "Instagram" },
    href: Link.INSTAGRAM,
    external: true,
  },
  {
    id: "youtube",
    label: { es: "YouTube", en: "YouTube" },
    href: Link.YOUTUBE_CHANNEL,
    external: true,
  },
]
