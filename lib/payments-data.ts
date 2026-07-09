import { ClipboardList, CreditCard, MessageSquare, UserPlus } from "lucide-react"
import { Link } from "./links.enum"
import type { ContentBlock, LocalizedString, QuickLink } from "./home-data"

export const PAYMENTS_HERO = {
  badge: { es: "Pagos", en: "Payments" } satisfies LocalizedString,
  title: { es: "Reporte de Pagos", en: "Payment Report" } satisfies LocalizedString,
  subtitle: {
    es: "Utilice el formulario oficial para notificar sus pagos a la administración del colegio de forma rápida y segura.",
    en: "Use the official form to notify the school administration of your payments quickly and securely.",
  } satisfies LocalizedString,
}

export const PAYMENTS_HERO_ACTIONS = [
  {
    id: "report",
    label: { es: "Reportar pago", en: "Report payment" },
    href: Link.PAYMENT_REPORT,
    variant: "default" as const,
    external: true,
  },
  {
    id: "contact",
    label: { es: "Contactar administración", en: "Contact administration" },
    href: "/contact",
    variant: "outline" as const,
    external: false,
  },
]

export const PAYMENTS_QUICK_LINKS: QuickLink[] = [
  {
    id: "report",
    label: { es: "Formulario de reporte", en: "Payment report form" },
    href: Link.PAYMENT_REPORT,
    icon: CreditCard,
    external: true,
  },
  {
    id: "enrollment",
    label: { es: "Inscripciones", en: "Enrollment" },
    href: "/admission",
    icon: UserPlus,
  },
  {
    id: "supplies",
    label: { es: "Lista de útiles escolares", en: "School supplies list" },
    href: "/supplies",
    icon: ClipboardList,
  },
  {
    id: "interview",
    label: { es: "Solicitud de Entrevista", en: "Request Interview" },
    href: "/supplies/interview-request",
    icon: MessageSquare,
  },
]

export const PAYMENTS_CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "report",
    title: { es: "Cómo reportar su pago", en: "How to report your payment" },
    paragraphs: [
      {
        es: "Para reportar su pago, acceda al formulario en línea del colegio. Complete los datos solicitados y envíe la información correspondiente.",
        en: "To report your payment, access the school's online form. Fill in the requested details and submit the corresponding information.",
      },
    ],
    cta: {
      label: { es: "Abrir formulario de reporte", en: "Open payment report form" },
      href: Link.PAYMENT_REPORT,
      external: true,
    },
  },
  {
    id: "disclaimer",
    title: { es: "Información importante", en: "Important information" },
    paragraphs: [
      {
        es: "Recuerde que este reporte no es una factura fiscal. Sirve únicamente para que la administración del colegio registre y dé seguimiento a su pago.",
        en: "Please note that this report is not a tax invoice. It is only used so the school administration can record and track your payment.",
      },
    ],
  },
  {
    id: "support",
    title: { es: "¿Tiene alguna inquietud?", en: "Do you have any questions?" },
    paragraphs: [
      {
        es: "Cualquier inquietud puede comunicarse con la administración del colegio al teléfono 0251 263 2132 o a través de nuestra página de contacto.",
        en: "For any questions, please contact the school administration at 0251 263 2132 or through our contact page.",
      },
    ],
    cta: {
      label: { es: "Ir a contacto", en: "Go to contact" },
      href: "/contact",
    },
  },
]

export const PAYMENTS_QUICK_LINKS_TITLE = {
  es: "Enlaces relacionados",
  en: "Related links",
} satisfies LocalizedString
