import type { ContentBlock, LocalizedString } from "./home-data"

export const SCHOLARSHIPS_HERO = {
  badge: { es: "Casa de los Saberes", en: "House of Knowledge" } satisfies LocalizedString,
  title: { es: "Becas de Rendimiento", en: "Performance Scholarships" } satisfies LocalizedString,
  subtitle: {
    es: "Reconocemos el esfuerzo académico, deportivo y artístico de nuestros alumnos con beneficios anuales para la comunidad estudiantil.",
    en: "We recognize academic, sports and artistic effort among our students with annual benefits for the school community.",
  } satisfies LocalizedString,
}

export const SCHOLARSHIPS_HERO_ACTIONS = [
  {
    id: "admission",
    label: { es: "Proceso de admisión", en: "Admission process" },
    href: "/admission",
    variant: "default" as const,
    external: false,
  },
  {
    id: "contact",
    label: { es: "Consultar", en: "Inquire" },
    href: "/contact",
    variant: "outline" as const,
    external: false,
  },
]

export const SCHOLARSHIPS_CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "recognition",
    title: { es: "Reconocimiento al esfuerzo", en: "Recognizing effort" },
    paragraphs: [
      {
        es: "El Colegio Modesta Bor reconoce el esfuerzo académico, deportivo y artístico de sus alumnos. Cada año escolar beneficia a estudiantes de la comunidad, deportistas y con alto índice académico.",
        en: "Modesta Bor School recognizes academic, sports and artistic effort among its students. Each school year it supports community students, athletes and those with high academic performance.",
      },
    ],
  },
  {
    id: "areas",
    title: { es: "Ámbitos de reconocimiento", en: "Areas of recognition" },
    paragraphs: [
      {
        es: "Las becas y reconocimientos impulsan la excelencia académica, el compromiso deportivo y la participación artística, fortaleciendo la formación integral de la comunidad educativa.",
        en: "Scholarships and recognition promote academic excellence, sports commitment and artistic participation, strengthening the comprehensive education of the school community.",
      },
    ],
  },
  {
    id: "info",
    title: { es: "Más información", en: "More information" },
    paragraphs: [
      {
        es: "Para conocer requisitos y disponibilidad del período escolar vigente, comuníquese con la administración del colegio.",
        en: "To learn about requirements and availability for the current school year, contact school administration.",
      },
    ],
    cta: {
      label: { es: "Ir a contacto", en: "Go to contact" },
      href: "/contact",
    },
  },
]
