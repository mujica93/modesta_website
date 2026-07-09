import type { LocalizedString } from "./home-data"
import type { MediaContentBlock } from "./mission-vision-data"
import { Imgs } from "./imgs.enum"

export type ValueItem = {
  id: string
  name: LocalizedString
  description: LocalizedString
}

export const VALUES_HERO = {
  badge: { es: "Sobre nosotros", en: "About us" } satisfies LocalizedString,
  title: { es: "Valores", en: "Values" } satisfies LocalizedString,
  subtitle: {
    es: "Los principios que promueve nuestro personal administrativo y docente en la comunidad estudiantil para el desarrollo humano.",
    en: "The principles promoted by our administrative and teaching staff in the student community for human development.",
  } satisfies LocalizedString,
}

export const VALUES_HERO_ACTIONS = [
  {
    id: "objectives",
    label: { es: "Ver objetivos", en: "View objectives" },
    href: "/about-us/objetives",
    variant: "default" as const,
    external: false,
  },
  {
    id: "services",
    label: { es: "Ver servicios", en: "View services" },
    href: "/about-us/services",
    variant: "outline" as const,
    external: false,
  },
]

export const VALUES_INTRO_BLOCK: MediaContentBlock = {
  id: "intro",
  title: { es: "Nuestros valores", en: "Our values" },
  paragraphs: [
    {
      es: "El Colegio cuenta con un personal calificado, tanto en el área administrativa como en la docencia, que promulgan en la comunidad estudiantil los valores más importantes para el desarrollo humano:",
      en: "The school has qualified staff in both administrative and teaching areas who promote the most important values for human development within the student community:",
    },
  ],
  image: Imgs.VALUES,
  imagePosition: "left",
}

export const VALUES_ITEMS: ValueItem[] = [
  {
    id: "honesty",
    name: { es: "Honestidad", en: "Honesty" },
    description: {
      es: "Comportamiento correcto del personal.",
      en: "Correct behavior of staff members.",
    },
  },
  {
    id: "commitment",
    name: { es: "Compromiso", en: "Commitment" },
    description: {
      es: "Identificación con la institución.",
      en: "Identification with the institution.",
    },
  },
  {
    id: "responsibility",
    name: { es: "Responsabilidad", en: "Responsibility" },
    description: {
      es: "Cumplimiento de las actividades asignadas.",
      en: "Fulfillment of assigned activities.",
    },
  },
  {
    id: "vocation",
    name: { es: "Vocación", en: "Vocation" },
    description: {
      es: "Amor al trabajo.",
      en: "Love for one's work.",
    },
  },
  {
    id: "teamwork",
    name: { es: "Trabajo en equipo", en: "Teamwork" },
    description: {
      es: "Denota la eficiencia de las funciones.",
      en: "Reflects the efficiency of shared functions.",
    },
  },
  {
    id: "solidarity",
    name: { es: "Solidaridad", en: "Solidarity" },
    description: {
      es: "Apoyo del docente hacia el estudiante.",
      en: "Teacher support toward the student.",
    },
  },
  {
    id: "loyalty",
    name: { es: "Fidelidad", en: "Loyalty" },
    description: {
      es: "Virtud de permanencia y constancia.",
      en: "A virtue of permanence and constancy.",
    },
  },
  {
    id: "companionship",
    name: { es: "Compañerismo", en: "Companionship" },
    description: {
      es: "Vínculo de solidaridad y apoyo entre personas que tienen objetivos comunes.",
      en: "A bond of solidarity and support among people who share common goals.",
    },
  },
  {
    id: "love",
    name: { es: "Amor", en: "Love" },
    description: {
      es: "Sentimiento de entrega por nuestro trabajo.",
      en: "A feeling of dedication to our work.",
    },
  },
  {
    id: "mystique",
    name: { es: "Mística", en: "Mystique" },
    description: {
      es: "Trabajo bajo el sentido de compromiso personal.",
      en: "Work carried out with a sense of personal commitment.",
    },
  },
  {
    id: "integrity",
    name: { es: "Honradez", en: "Integrity" },
    description: {
      es: "Virtud que hace que los seres humanos actúen con moral, rectitud y probidad.",
      en: "The virtue of acting with morality, rectitude and integrity.",
    },
  },
  {
    id: "decency",
    name: { es: "Decencia", en: "Decency" },
    description: {
      es: "Valor que hace que una persona esté consciente de su propia dignidad como ser humano, al mismo tiempo que valora igualmente a sus semejantes.",
      en: "The value of being aware of one's own dignity as a human being while equally valuing others.",
    },
  },
  {
    id: "belonging",
    name: { es: "Sentido de pertenencia", en: "Sense of belonging" },
    description: {
      es: "La comunidad educativa es el elemento dinámico de la institución. En ella se integran con sentido de familia a todas las personas que intervienen en la vida del colegio: entidad titular, alumnos/as, profesores/as, padres y madres, educadores, personal de administración y servicios, y la comunidad en general.",
      en: "The educational community is the dynamic element of the institution. Everyone involved in the life of the school is integrated as a family: the governing body, students, teachers, parents, educators, administrative and service staff, and the community at large.",
    },
  },
  {
    id: "educators",
    name: { es: "Animadores del proceso educativo", en: "Facilitators of the educational process" },
    description: {
      es: "Cada profesor/a está consciente de la importancia de su aporte para la buena marcha del proyecto educativo. Es el primer responsable de la calidad de los procesos pedagógicos, de su formación permanente y del resultado de la educación de sus alumnos.",
      en: "Each teacher is aware of the importance of their contribution to the success of the educational project. They are primarily responsible for the quality of pedagogical processes, their ongoing training and their students' educational outcomes.",
    },
  },
  {
    id: "shared-management",
    name: { es: "Gestión corresponsable", en: "Shared management" },
    description: {
      es: "La Unidad Educativa Colegio Modesta Bor se organiza bajo el criterio de responsabilidad compartida, de acuerdo con su propia identidad y la legislación vigente. Su modelo de gestión garantiza la mejor respuesta a las necesidades educativas de los alumnos y al bienestar de todas las personas.",
      en: "Modesta Bor Educational Unit is organized under the principle of shared responsibility, in accordance with its own identity and current legislation. Its management model ensures the best response to students' educational needs and the well-being of everyone involved.",
    },
  },
  {
    id: "teaching",
    name: { es: "Enseñanza", en: "Teaching" },
    description: {
      es: "Capacidad de transmitir conocimiento con mucha madurez.",
      en: "The ability to transmit knowledge with great maturity.",
    },
  },
  {
    id: "quality",
    name: { es: "Calidad", en: "Quality" },
    description: {
      es: "Buena enseñanza en el proceso del servicio, ya que contamos con un staff de docentes calificados.",
      en: "High-quality teaching throughout the service process, supported by a team of qualified educators.",
    },
  },
]
