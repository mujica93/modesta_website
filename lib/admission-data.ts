import type { ContentBlock, LocalizedString } from "./home-data"
import { Link } from "./links.enum"

export const ADMISSION_HERO = {
  badge: { es: "Admisión", en: "Admission" } satisfies LocalizedString,
  title: {
    es: "Proceso de admisión",
    en: "Admission process",
  } satisfies LocalizedString,
  subtitle: {
    es: "El proceso de admisión en el Colegio Modesta Bor requiere el cumplimiento de una serie de pasos previos a la acreditación como miembro de nuestra comunidad estudiantil.",
    en: "Admission to Modesta Bor School requires completing a series of steps before becoming a member of our student community.",
  } satisfies LocalizedString,
}

export const ADMISSION_HERO_ACTIONS = [
  {
    id: "interview",
    label: { es: "Solicitar entrevista", en: "Request interview" },
    href: "/supplies/interview-request",
    variant: "default" as const,
    external: false,
  },
  {
    id: "contact",
    label: { es: "Contactar al colegio", en: "Contact the school" },
    href: "/contact",
    variant: "outline" as const,
    external: false,
  },
]

export type AdmissionStep = {
  id: string
  number: string
  title: LocalizedString
  description: LocalizedString
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    id: "interview",
    number: "1",
    title: { es: "Solicitud de entrevista", en: "Interview request" },
    description: {
      es: "Complete el formulario en línea de solicitud de entrevista. Nuestro equipo se pondrá en contacto para coordinar la cita.",
      en: "Complete the online interview request form. Our team will contact you to schedule an appointment.",
    },
  },
  {
    id: "meeting",
    number: "2",
    title: { es: "Entrevista familiar", en: "Family interview" },
    description: {
      es: "Participe en la entrevista con el personal del colegio para conocer la propuesta educativa y las expectativas de la familia.",
      en: "Take part in an interview with school staff to learn about our educational approach and the family's expectations.",
    },
  },
  {
    id: "documents",
    number: "3",
    title: { es: "Documentación e inscripción", en: "Documents and enrollment" },
    description: {
      es: "Una vez aceptado el ingreso, complete el proceso de inscripción con la documentación requerida por la institución.",
      en: "Once admission is accepted, complete enrollment with the documentation required by the institution.",
    },
  },
  {
    id: "welcome",
    number: "4",
    title: { es: "Bienvenida a la comunidad", en: "Welcome to the community" },
    description: {
      es: "El estudiante se incorpora a la comunidad educativa del Colegio Modesta Bor, La Casa de los Saberes.",
      en: "The student joins the educational community of Modesta Bor School, The House of Knowledge.",
    },
  },
]

export const ADMISSION_CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "overview",
    title: { es: "Ingreso a la institución", en: "Joining the institution" },
    paragraphs: [
      {
        es: "El proceso de admisión en el Colegio Modesta Bor requiere el cumplimiento de una serie de pasos previos a la acreditación como miembro de la comunidad estudiantil de nuestra institución.",
        en: "Admission to Modesta Bor School requires completing a series of steps before becoming an accredited member of our student community.",
      },
      {
        es: "Nos preocupamos por el bienestar y la formación integral para que cada alumno sea un ciudadano excepcional.",
        en: "We care about well-being and comprehensive education so that every student becomes an exceptional citizen.",
      },
    ],
    cta: {
      label: { es: "Solicitar entrevista", en: "Request interview" },
      href: "/supplies/interview-request",
    },
  },
  {
    id: "support",
    title: { es: "¿Necesita orientación?", en: "Need guidance?" },
    paragraphs: [
      {
        es: "Puede comunicarse con la administración del colegio al teléfono 0251 263 2132 o escribir a pcuecmodestabor@gmail.com.",
        en: "You can contact school administration at 0251 263 2132 or email pcuecmodestabor@gmail.com.",
      },
    ],
    cta: {
      label: { es: "Ir a contacto", en: "Go to contact" },
      href: "/contact",
    },
  },
]

export const INTERVIEW_HERO = {
  badge: { es: "Admisión", en: "Admission" } satisfies LocalizedString,
  title: {
    es: "Solicitud de entrevista",
    en: "Interview request",
  } satisfies LocalizedString,
  subtitle: {
    es: "Complete el formulario oficial para iniciar el proceso de selección e inscripción. Nos pondremos en contacto con usted.",
    en: "Complete the official form to begin the selection and enrollment process. We will get in touch with you.",
  } satisfies LocalizedString,
}

export const INTERVIEW_HERO_ACTIONS = [
  {
    id: "form",
    label: { es: "Abrir formulario", en: "Open form" },
    href: Link.INTERVIEW_REQUEST,
    variant: "default" as const,
    external: true,
  },
  {
    id: "admission",
    label: { es: "Ver proceso de admisión", en: "View admission process" },
    href: "/admission",
    variant: "outline" as const,
    external: false,
  },
]

export const INTERVIEW_CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "how",
    title: { es: "Cómo solicitar la entrevista", en: "How to request an interview" },
    paragraphs: [
      {
        es: "Utilice el formulario en línea del colegio. Complete los datos solicitados y envíe la información. Nuestro equipo revisará la solicitud y le contactará para coordinar la entrevista.",
        en: "Use the school's online form. Fill in the requested details and submit the information. Our team will review the request and contact you to schedule the interview.",
      },
    ],
    cta: {
      label: { es: "Completar solicitud", en: "Complete request" },
      href: Link.INTERVIEW_REQUEST,
      external: true,
    },
  },
  {
    id: "note",
    title: { es: "Información importante", en: "Important information" },
    paragraphs: [
      {
        es: "La solicitud de entrevista es el primer paso del proceso de admisión. No garantiza cupo automáticamente; el ingreso se confirma tras la evaluación y los pasos institucionales correspondientes.",
        en: "The interview request is the first step in the admission process. It does not automatically guarantee a place; enrollment is confirmed after evaluation and the corresponding institutional steps.",
      },
    ],
  },
]
