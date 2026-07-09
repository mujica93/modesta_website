import type { LucideIcon } from "lucide-react"
import {
  BookOpen,
  ClipboardList,
  CreditCard,
  GraduationCap,
  MessageSquare,
  UserPlus,
} from "lucide-react"

import { Link } from "./links.enum"
import { Imgs } from "./imgs.enum"

export type LocalizedString = { es: string; en: string }

export type QuickLink = {
  id: string
  label: LocalizedString
  href: string
  icon: LucideIcon,
  external?: boolean
}

export type ContentBlock = {
  id: string
  title: LocalizedString
  paragraphs: LocalizedString[]
  cta?: {
    label: LocalizedString
    href: string
    external?: boolean
  },
  youtubeLink?: string,
  image?: string
}

export const HOME_HERO = {
  badge: { es: "La Casa de los Saberes", en: "The House of Knowledge" } satisfies LocalizedString,
  title: {
    es: "Unidad Educativa Colegio Modesta Bor",
    en: "Modesta Bor Educational Unit",
  } satisfies LocalizedString,
  subtitle: {
    es: "Contribuir con el desarrollo integral de los estudiantes en forma intelectual, afectiva, social, física, artística, espiritual y con el autodescubrimiento de los talentos especiales de cada uno.",
    en: "Contributing to the comprehensive development of students intellectually, emotionally, socially, physically, artistically, spiritually, and through the discovery of each student's special talents.",
  } satisfies LocalizedString,
}

export const HOME_HERO_ACTIONS = [
  {
    id: "interview",
    label: { es: "Solicitud de Entrevista", en: "Request Interview" },
    href: Link.INTERVIEW_REQUEST,
    variant: "default" as const,
    external: true
  },
  {
    id: "payments",
    label: { es: "Reporte de Pagos", en: "Payment Report" },
    href: Link.PAYMENT_REPORT,
    variant: "outline" as const,
    external: true
  },
]

export const HOME_QUICK_LINKS: QuickLink[] = [
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
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfuhXww4ANlA0j8kMAaFB4b_N0FuJvzjn57WQP4UEw_fvnCYg/viewform",
    external: true,
    icon: MessageSquare,
  },
  {
    id: "tutoring",
    label: { es: "Programa Asesorías Académicas", en: "Academic Advising Program" },
    href: "/about-us/services",
    icon: GraduationCap,
  },
  {
    id: "payments",
    label: { es: "Reporte de Pago", en: "Payment Report" },
    href: Link.PAYMENT_REPORT,
    external: true,
    icon: CreditCard,
  },
]

export const HOME_CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "philosophy",
    title: { es: "Formación integral", en: "Comprehensive education" },
    paragraphs: [
      {
        es: "La educación consiste en dar herramientas y técnicas a los seres humanos para convivir socialmente. Se orienta a la transformación del potencial humano que caracteriza a un ser integral, proponiendo una formación sistemática que promueve un desarrollo pleno condicionado por valores, permitiendo construir, desconstruir y reconstruir el entorno en un lugar donde cada persona pueda vivir dignamente.",
        en: "Education provides people with tools and techniques for social coexistence. It focuses on transforming human potential into integral development through systematic training grounded in values, enabling students to build, deconstruct, and rebuild their environment so everyone can live with dignity.",
      },
    ],
  },
  {
    id: "hybrid-model",
    title: { es: "Enseñanza mixta", en: "Blended learning" },
    paragraphs: [
      {
        es: "En la adaptación a los esquemas disruptivos actuales, la U.E. Colegio Modesta Bor ha desarrollado un proceso de enseñanza y aprendizaje en formato mixto: virtual y presencial, con actividades formativas sincrónicas y asincrónicas que permiten al alumnado aprovechar los recursos pedagógicos y tecnológicos de los nuevos tiempos, con tutelaje presencial y virtual según las necesidades del estudiante y con estrictas medidas de bioseguridad.",
        en: "Adapting to today's disruptive educational models, Modesta Bor School has developed a blended learning process combining in-person and virtual instruction with synchronous and asynchronous activities, allowing students to benefit from modern pedagogical and technological resources with tailored support and strict biosecurity measures.",
      },
    ],
    youtubeLink: Link.VACATIONS_2024,
  },
  {
    id: "enrollment",
    title: {
      es: "Inscripciones año escolar",
      en: "School year enrollment",
    },
    paragraphs: [
      {
        es: "Nos alistamos para recibir a nuevos estudiantes. Ya abrimos el proceso de selección e inscripción. Solicite su entrevista completando el formulario y le contactaremos. Nos preocupamos por el bienestar y la formación integral para que cada alumno sea un ciudadano excepcional.",
        en: "We are preparing to welcome new students. The selection and enrollment process is now open. Request an interview by completing the form and we will contact you. We are committed to the well-being and comprehensive education of every student.",
      },
    ],
    cta: {
      label: { es: "Solicitar entrevista", en: "Request interview" },
      href: Link.INTERVIEW_REQUEST,
      external: true, 
    },
    image: Imgs.MODESTA_BOR_INSCRIPTIONS,
  },
  {
    id: "tutoring",
    title: { es: "Programa de Asesorías Académicas", en: "Academic Advising Program" },
    paragraphs: [
      {
        es: "La U.E. Colegio Modesta Bor ofrece, para todos los interesados en mejorar y prepararse para los nuevos niveles, su Programa de Asesorías Académicas, dirigido por profesionales especialistas con clases personalizadas. Este programa está abierto para niños, niñas y jóvenes de cualquier institución educativa.",
        en: "Modesta Bor School offers an Academic Advising Program for anyone looking to improve and prepare for new grade levels, led by specialist professionals with personalized classes. The program is open to children and young people from any educational institution.",
      },
      {
        es: "Para más detalles: 0251 – 263.21.32.",
        en: "For more details: 0251 – 263.21.32.",
      },
    ],
    cta: {
      label: { es: "Conocer servicios", en: "View services" },
      href: "/about-us/services",
      external: false,
    },
    image: Imgs.MODESTA_BOR_ADVISORY,
  },
  {
    id: "projects",
    title: { es: "Proyectos Educativos", en: "Educational Projects" },
    paragraphs: [
      {
        es: "Cumpliendo con lo establecido en el Artículo 13 de la Ley de Educación, nuestros estudiantes del 5° Año de Bachillerato presentaron extraordinariamente sus proyectos. Visita nuestro canal de YouTube para conocer estas propuestas.",
        en: "In compliance with Article 13 of the Education Law, our fifth-year high school students successfully presented their projects. Visit our YouTube channel to explore these proposals.",
      },
    ],
    cta: {
      label: { es: "Ver en YouTube", en: "Watch on YouTube" },
      href: "https://www.youtube.com/@UEColegioModestaBor",
      external: true,
    },
    image: Imgs.EDUCATIVE_PROJECT,
  },
  {
    id: "classrooms",
    title: { es: "Aulas complementarias", en: "Complementary classrooms" },
    paragraphs: [
      {
        es: "Nuestras aulas complementarias están diseñadas para potenciar el desarrollo integral de cada alumno. Promovemos el trabajo en equipo, fomentamos el respeto por los demás y enseñamos la importancia de cuidar el medio ambiente a través del arte y el deporte.",
        en: "Our complementary classrooms are designed to strengthen each student's integral development. We promote teamwork, foster respect for others, and teach the importance of caring for the environment through art and sports.",
      },
    ],
    youtubeLink: Link.DIGITAL_MUSEUM,
  },
  {
    id: "playful-learning",
    title: { es: "Aprendizaje lúdico", en: "Playful learning" },
    paragraphs: [
      {
        es: "El aprendizaje lúdico es parte de las premisas del Colegio Modesta Bor. Por ello, promovemos el desarrollo de destrezas y habilidades en el uso de herramientas tecnológicas en nuestros estudiantes.",
        en: "Playful learning is one of the core principles of Modesta Bor School. We therefore encourage the development of skills in using technological tools among our students.",
      },
    ],
  },
]

export const CONTACT_INFO = {
  title: { es: "Contacto", en: "Contact" } satisfies LocalizedString,
  address: {
    es: "Calle 3 esquina Av. 2, Urb. La Mata, Cabudare. Edo. Lara, Venezuela",
    en: "Calle 3 corner Av. 2, Urb. La Mata, Cabudare, Lara State, Venezuela",
  } satisfies LocalizedString,
  phone: "0251 263 2132",
  email: "pcuecmodestabor@gmail.com",
}
