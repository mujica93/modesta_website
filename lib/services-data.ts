import type { LocalizedString } from "./home-data"
import type { MediaContentBlock } from "./mission-vision-data"
import { Imgs } from "./imgs.enum"

export const SERVICES_HERO = {
  badge: { es: "Sobre nosotros", en: "About us" } satisfies LocalizedString,
  title: { es: "Servicios", en: "Services" } satisfies LocalizedString,
  subtitle: {
    es: "Propuestas educativas integrales que combinan arte, deporte, idiomas y acompañamiento personalizado para nuestros estudiantes.",
    en: "Comprehensive educational offerings that combine arts, sports, languages and personalized support for our students.",
  } satisfies LocalizedString,
}

export const SERVICES_HERO_ACTIONS = [
  {
    id: "values",
    label: { es: "Ver valores", en: "View values" },
    href: "/about-us/values",
    variant: "default" as const,
    external: false,
  },
  {
    id: "admission",
    label: { es: "Admisión", en: "Admission" },
    href: "/admission",
    variant: "outline" as const,
    external: false,
  },
]

export const SERVICES_INTRO_BLOCK: MediaContentBlock = {
  id: "intro",
  title: { es: "Formación integral", en: "Comprehensive education" },
  paragraphs: [
    {
      es: "Innovar con propuestas educativas que nos permitan formar individuos integrales y de altos valores humanos. En el Colegio Modesta Bor se ofrecen actividades artísticas, musicales y deportivas.",
      en: "Innovating with educational proposals that allow us to form well-rounded individuals with strong human values. Modesta Bor School offers artistic, musical and sports activities.",
    },
    {
      es: "Además, la constante supervisión dentro y fuera del aula nos permite evaluar y entender el desarrollo académico de nuestros estudiantes.",
      en: "In addition, ongoing supervision inside and outside the classroom allows us to assess and understand our students' academic development.",
    },
  ],
  image: Imgs.SERVICES_INTRO,
  imagePosition: "left",
}

export const SERVICES_BLOCKS: MediaContentBlock[] = [
  {
    id: "music",
    title: { es: "Educación Musical", en: "Music Education" },
    paragraphs: [
      {
        es: "Conociendo lo importante que consiste la disciplina para el estudio, con la participación en actividades musicales pretendemos que nuestros estudiantes desarrollen aptitudes y habilidades artísticas que les permitan desarrollar su proceso cognitivo.",
        en: "Understanding how important discipline is for learning, through musical activities we aim for our students to develop artistic skills and abilities that support their cognitive development.",
      },
    ],
    image: Imgs.SERVICES_MUSIC,
    imagePosition: "right",
  },
  {
    id: "sports",
    title: { es: "Deporte", en: "Sports" },
    paragraphs: [
      {
        es: "Mente sana en cuerpo sano, premisa universal que practicamos con nuestros estudiantes. Desde Preescolar estimulamos a los más pequeños con actividades de desarrollo motriz, hasta el progreso en actividades competitivas en el nivel diversificado.",
        en: "A healthy mind in a healthy body — a universal principle we practice with our students. From preschool we encourage motor development activities for the youngest, through to competitive activities at the diversified level.",
      },
      {
        es: "Las actividades se ejecutan en el Polideportivo Aquilino Juares de Cabudare.",
        en: "Activities take place at the Aquilino Juares Sports Complex in Cabudare.",
      },
    ],
    image: Imgs.SERVICES_SPORTS,
    imagePosition: "left",
  },
  {
    id: "english",
    title: { es: "Inglés", en: "English" },
    paragraphs: [
      {
        es: "Desde que ingresan a nuestra institución, los estudiantes inician desde Preescolar la exploración del aprendizaje del idioma inglés, hasta el 5° año de diversificada donde este componente es indispensable en las diferentes asignaturas del pensum académico.",
        en: "From the moment they join our institution, students begin exploring English from preschool through fifth year of diversified education, where this component is essential across the academic curriculum.",
      },
      {
        es: "Contamos con personal especializado y un método innovador para el aprendizaje de un segundo idioma en los tiempos modernos.",
        en: "We have specialized staff and an innovative method for learning a second language in modern times.",
      },
    ],
    image: Imgs.SERVICES_ENGLISH,
    imagePosition: "right",
  },
  {
    id: "support",
    title: { es: "Atención Personalizada", en: "Personalized Support" },
    paragraphs: [
      {
        es: "Esencial para el rendimiento estudiantil. La comunicación entre padres, representantes y nuestro personal es muy importante para el bienestar y el progreso de los estudiantes.",
        en: "Essential for student performance. Communication between parents, guardians and our staff is very important for students' well-being and progress.",
      },
      {
        es: "Una vez se detecten acontecimientos relevantes, se activan protocolos de seguimiento y orientación con personal especializado y calificado.",
        en: "When relevant situations are identified, follow-up and guidance protocols are activated with specialized, qualified staff.",
      },
    ],
    image: Imgs.SERVICES_SUPPORT,
    imagePosition: "left",
  },
]
