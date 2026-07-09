import type { LocalizedString } from "./home-data"
import type { MediaContentBlock } from "./mission-vision-data"
import { Imgs } from "./imgs.enum"

export type RegulationItem = {
  id: string
  number?: string
  text: LocalizedString
}

export type RegulationSection = {
  id: string
  title: LocalizedString
  items: RegulationItem[]
}

export const CONVIVIALITY_HERO = {
  badge: { es: "Sobre nosotros", en: "About us" } satisfies LocalizedString,
  title: { es: "Manual de Convivencia", en: "Conviviality Manual" } satisfies LocalizedString,
  subtitle: {
    es: "Derechos, deberes, garantías y responsabilidades que rigen el buen convivir en nuestra institución educativa.",
    en: "Rights, duties, guarantees and responsibilities that govern good coexistence in our educational institution.",
  } satisfies LocalizedString,
}

export const CONVIVIALITY_HERO_ACTIONS = [
  {
    id: "values",
    label: { es: "Ver valores", en: "View values" },
    href: "/about-us/values",
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

export const CONVIVIALITY_INTRO_BLOCK: MediaContentBlock = {
  id: "intro",
  title: { es: "Convivencia escolar", en: "School coexistence" },
  paragraphs: [
    {
      es: "Nuestra comunidad está normada por derechos, deberes, garantías y responsabilidades para todos los miembros que la conforman: estudiantes, docentes, personal obrero y administrativo, padres y representantes; que rigen el buen convivir en nuestra institución.",
      en: "Our community is governed by rights, duties, guarantees and responsibilities for all its members: students, teachers, maintenance and administrative staff, parents and guardians; rules that ensure good coexistence in our institution.",
    },
  ],
  image: Imgs.CONVIVIALITY,
  imagePosition: "left",
}

const item = (id: string, number: string, es: string, en: string): RegulationItem => ({
  id,
  number,
  text: { es, en },
})

export const STUDENT_RIGHTS_SECTION: RegulationSection = {
  id: "student-rights",
  title: {
    es: "Derechos y garantías de las y los estudiantes",
    en: "Rights and guarantees of students",
  },
  items: [
    item("sr-1", "1", "Contar con las oportunidades y servicios educativos que le conduzcan a una formación integral de acuerdo a los ideales de la Constitución de la República Bolivariana de Venezuela, Ley Orgánica de Educación, Ley Orgánica para la Protección del Niño, Niña y el Adolescente y Derechos Universales, en condiciones de libertad y dignidad.", "To have access to educational opportunities and services leading to comprehensive training in accordance with the ideals of the Constitution of the Bolivarian Republic of Venezuela, the Organic Education Law, the Organic Law for the Protection of Children and Adolescents and Universal Rights, under conditions of freedom and dignity."),
    item("sr-2", "2", "Ser orientados en sus problemas personales, académicos y en su conducta personal.", "To receive guidance on personal, academic and behavioral matters."),
    item("sr-3", "3", "Participar en su propia formación y la de sus compañeros de estudios a través de los programas y eventos llevados a cabo por la Organización Estudiantil.", "To participate in their own education and that of their classmates through programs and events organized by the Student Organization."),
    item("sr-4", "4", "Participar activamente en las actividades extraescolares, socioculturales, deportivas y recreativas organizadas en el plantel.", "To actively participate in extracurricular, sociocultural, sports and recreational activities organized at the school."),
    item("sr-5", "5", "Recibir atención educativa durante ciento ochenta (180) días hábiles como mínimo y participar en el desarrollo de la totalidad de los objetivos programáticos previstos para cada área o asignatura.", "To receive educational attention for a minimum of one hundred eighty (180) school days and participate in the full development of programmatic objectives for each subject area."),
    item("sr-6", "6", "Recibir una formación científica, humanística, deportiva, recreativa, artística y para el trabajo, que los capacite para la vida social, el trabajo productivo y la prosecución de estudios.", "To receive scientific, humanistic, sports, recreational, artistic and vocational training that prepares them for social life, productive work and further studies."),
    item("sr-7", "7", "Elegir y ser elegidos como vocero o vocera de sección.", "To elect and be elected as class spokesperson."),
    item("sr-8", "8", "Ser respetados por sus educadores.", "To be respected by their educators."),
    item("sr-9", "9", "Al descanso, recreación, esparcimiento, deporte y juegos en las horas señaladas.", "To rest, recreate, enjoy leisure, sports and games during designated hours."),
    item("sr-10", "10", "Defender sus derechos por sí mismo.", "To defend their own rights."),
    item("sr-11", "11", "Conocer, en cuanto les concierne, lo relativo al régimen de evaluación.", "To know, as it concerns them, the evaluation system."),
    item("sr-12", "12", "Recibir reconocimiento por su actuación estudiantil.", "To receive recognition for their student performance."),
    item("sr-13", "13", "Expresar libremente su opinión.", "To freely express their opinion."),
    item("sr-14", "14", "Solicitar un pase de entrada para la segunda hora de la mañana o tarde, si por algún motivo ha perdido la primera hora de clases.", "To request a late-entry pass for the second morning or afternoon period if they missed the first class hour for any reason."),
    item("sr-15", "15", "Conocer el resultado de sus evaluaciones y recibir sus trabajos y pruebas cuidadosamente corregidas en un lapso no mayor de cinco (5) días hábiles.", "To know their evaluation results and receive carefully graded assignments and tests within no more than five (5) school days."),
    item("sr-16", "16", "Tener un máximo de tres (3) pases de entrada por retardo en cada lapso. Al exceder el número no se permitirá la entrada a clase y se notificará al representante.", "To have a maximum of three (3) late-entry passes per term. Exceeding this limit will result in denial of class entry and notification to the guardian."),
    item("sr-17", "17", "Recibir boletines informativos periódicos, constancias de estudio y de notas, siempre que esté solvente en la mensualidad.", "To receive periodic report cards, enrollment certificates and grade certificates, provided tuition is up to date."),
    item("sr-18", "18", "Mantener su inscripción siempre que cumpla con los requisitos y disposiciones del ordenamiento jurídico y el presente reglamento interno, salvo el tiempo que haya sido sancionado por expulsión.", "To maintain enrollment as long as they meet the requirements and provisions of the legal framework and this internal regulation, except when sanctioned with expulsion."),
  ],
}

export const PARENT_RIGHTS_SECTION: RegulationSection = {
  id: "parent-rights",
  title: {
    es: "Derechos y garantías de padres, madres, representantes o responsables",
    en: "Rights and guarantees of parents, guardians or responsible parties",
  },
  items: [
    item("pr-1", "1", "Recibir un trato cortés y respetuoso de parte de todo el personal docente, directivo, administrativo y obrero del plantel.", "To receive courteous and respectful treatment from all teaching, administrative, management and maintenance staff."),
    item("pr-2", "2", "Ser informado oportunamente o cuando así lo solicite sobre la actuación y rendimiento de su representado.", "To be promptly informed, or upon request, about their ward's behavior and performance."),
    item("pr-3", "3", "Participar activa y plenamente en el proceso educativo de su representado.", "To actively and fully participate in their ward's educational process."),
    item("pr-4", "4", "Expresar su opinión e informar en forma respetuosa, ya sea oralmente o por escrito.", "To express their opinion and provide information respectfully, orally or in writing."),
    item("pr-5", "5", "Ser atendido por las autoridades del plantel con respeto y cordialidad.", "To be attended by school authorities with respect and cordiality."),
    item("pr-6", "6", "Velar por el respeto de los derechos de los representantes.", "To ensure respect for the rights of guardians."),
    item("pr-7", "7", "Postularse y ser elegido mediante sufragio para participar en cualquier comité del Consejo Educativo.", "To run for and be elected by vote to participate in any Educational Council committee."),
    item("pr-8", "8", "Solicitar la inscripción de su representado en el plantel.", "To request enrollment of their ward at the school."),
    item("pr-9", "9", "Que sus hijos reciban una educación integral de la más alta calidad.", "For their children to receive the highest quality comprehensive education."),
    item("pr-10", "10", "Ser informados por la administración del plantel sobre la estructura de costos a solicitud de parte interesada.", "To be informed by school administration about the cost structure upon request."),
    item("pr-11", "11", "Defender los derechos e intereses de sus representados.", "To defend the rights and interests of their wards."),
    item("pr-12", "12", "Todos los demás que se establezcan en las normas legales y reglamentarias vigentes.", "All others established in current legal and regulatory provisions."),
  ],
}

export const STUDENT_DUTIES_SECTION: RegulationSection = {
  id: "student-duties",
  title: {
    es: "Deberes y responsabilidades de las y los estudiantes",
    en: "Duties and responsibilities of students",
  },
  items: [
    item("sd-1", "1", "Asistir diaria y puntualmente a las actividades educativas del plantel. Las actividades escolares comienzan cada día a las 7:00 a.m. En caso de diez (10) minutos de retardo, el educando solicitará en la coordinación un pase para poder entrar a clases.", "Attend school activities daily and on time. School activities begin each day at 7:00 a.m. After ten (10) minutes of lateness, the student must request a pass from coordination to enter class."),
    item("sd-2", "2", "Mantener una actitud de respeto con el personal docente, administrativo, obrero del plantel, con sus compañeros y cualquier otra persona presente en la institución.", "Maintain a respectful attitude toward teaching, administrative and maintenance staff, classmates and anyone else present at the institution."),
    item("sd-3", "3", "Cumplir con todos los deberes establecidos en la LOPNNA, LOE y su Reglamento General, como los aquí señalados.", "Comply with all duties established in the LOPNNA, the Organic Education Law and its General Regulations, as well as those stated here."),
    item("sd-4", "4", "Participar en el Acto Cívico, cantar y escuchar el Himno Nacional al inicio de las actividades diarias y respetar la Bandera Nacional.", "Participate in the Civic Act, sing and listen to the National Anthem at the start of daily activities and respect the National Flag."),
    item("sd-5", "5", "Cuidar la presencia personal, orden y aseo de sus útiles escolares y guardar las reglas de higiene y pulcritud.", "Take care of personal appearance, order and cleanliness of school supplies and follow hygiene rules."),
    item("sd-6", "6", "Abstenerse de usar una apariencia personal extravagante e impropia, conforme a las normas de uniforme y presentación personal del plantel.", "Refrain from extravagant or improper personal appearance, in accordance with school uniform and grooming rules."),
    item("sd-7", "7", "Cumplir con los útiles necesarios requeridos por los docentes para el desarrollo de las actividades escolares.", "Have all supplies required by teachers for school activities."),
    item("sd-8", "8", "Cumplir responsablemente la función de semanero.", "Responsibly fulfill duties as weekly class monitor."),
    item("sd-9", "9", "Ser responsables del año de estudio en el que se han inscrito, debiendo lograr la excelencia académica a base de esfuerzos y dedicación.", "Take responsibility for their enrolled grade level, striving for academic excellence through effort and dedication."),
    item("sd-10", "10", "Asumir la responsabilidad de su aprendizaje y actuación estudiantil en el cumplimiento de actividades prescritas en los programas oficiales.", "Take responsibility for their learning and student conduct in completing activities prescribed in official programs."),
    item("sd-11", "11", "Cumplir con el horario asignado por el docente para la aplicación de cualquier evaluación.", "Comply with the schedule assigned by the teacher for any assessment."),
    item("sd-12", "12", "Mantener la atención y la disposición al trabajo durante la actividad de clase, sin conversaciones ni acciones ajenas a la asignatura.", "Maintain attention and willingness to work during class, without conversations or actions unrelated to the subject."),
    item("sd-13", "13", "Cumplir con las disposiciones del Reglamento Interno del Plantel y las Normas de Convivencia Estudiantil.", "Comply with the school's Internal Regulations and Student Coexistence Rules."),
    item("sd-14", "14", "Portar el uniforme reglamentario con el distintivo que lo acredita como estudiante regular del plantel, incluyendo la bata blanca maga larga identificada para laboratorio.", "Wear the official uniform with the badge identifying them as a regular student, including the labeled long white lab coat for laboratory work."),
    item("sd-15", "15", "Permanecer en su pupitre en orden y silencio cuando termine una prueba antes del tiempo asignado.", "Remain quietly at their desk when finishing a test before the allotted time."),
    item("sd-16", "16", "Mantener una actitud honesta en las actividades de evaluación; de lo contrario el docente anulará la misma.", "Maintain honest conduct during assessments; otherwise the teacher will annul the evaluation."),
    item("sd-17", "17", "Permanecer en el plantel durante el horario de clases. Para ausentarse, el padre o la madre deberán solicitar permiso de salida a la Subdirección o Coordinación.", "Remain on school grounds during class hours. To leave, parents must request an exit permit from the Deputy Director or Coordination office."),
    item("sd-18", "18", "Abstenerse de utilizar vocabulario obsceno, gritar en áreas no permitidas, adoptar posturas inadecuadas y ser bruscos en aulas y pasillos.", "Refrain from obscene language, shouting in restricted areas, inappropriate postures and rough behavior in classrooms and hallways."),
    item("sd-19", "19", "Permanecer en el patio durante los recesos; no podrán estar en pasillos, oficinas, laboratorio ni aulas sin autorización.", "Stay in the courtyard during recess; they may not be in hallways, offices, laboratories or classrooms without authorization."),
    item("sd-20", "20", "Asistir a los actos programados por la Dirección del Plantel y concurrir a los actos públicos que dispongan las autoridades escolares.", "Attend events scheduled by school management and public events arranged by school authorities."),
    item("sd-21", "21", "Contribuir al mejoramiento, conservación, limpieza y mantenimiento del local, mobiliario y demás bienes del ámbito escolar.", "Contribute to the improvement, preservation, cleaning and maintenance of facilities, furniture and other school property."),
    item("sd-22", "22", "No traer al plantel material que entorpezca el normal desarrollo de las actividades escolares (celulares, artefactos tecnológicos, juguetes, objetos de valor, etc.).", "Not bring items that disrupt normal school activities (cell phones, electronic devices, toys, valuables, etc.)."),
    item("sd-23", "23", "No consumir chicles, cigarrillos, derivados del tabaco ni bebidas alcohólicas dentro del plantel.", "Not chew gum, smoke, use tobacco products or consume alcoholic beverages on school grounds."),
    item("sd-24", "24", "Dirigirse inmediatamente al aula después del toque del timbre al finalizar cada receso.", "Go directly to class after the bell at the end of each recess."),
    item("sd-25", "25", "Abstenerse de hacer manifestaciones sentimentales reñidas con la moral y las buenas costumbres, dentro y fuera de la institución, máxime si llevan uniforme.", "Refrain from displays of affection inconsistent with morality and good customs, inside and outside the institution, especially when wearing uniform."),
    item("sd-26", "26", "Cumplir los deberes estipulados en el Artículo 93 de la LOPNNA, incluyendo honrar la patria, respetar el ordenamiento jurídico, respetar los derechos ajenos, obedecer a padres y representantes, ejercer sus derechos, cumplir obligaciones educativas, respetar la diversidad y conservar el medio ambiente.", "Comply with duties stipulated in Article 93 of the LOPNNA, including honoring the homeland, respecting the legal framework, respecting others' rights, obeying parents and guardians, exercising their rights, fulfilling educational obligations, respecting diversity and preserving the environment."),
  ],
}

export const PARENT_DUTIES_SECTION: RegulationSection = {
  id: "parent-duties",
  title: {
    es: "Deberes y responsabilidades de padres, madres, representantes o responsables",
    en: "Duties and responsibilities of parents, guardians or responsible parties",
  },
  items: [
    item("pd-1", "1", "Comprometerse a cumplir y hacer cumplir a su(s) representado(s) las normas del manual de convivencia escolar, la Ley Orgánica de Educación y su Reglamento General.", "Commit to complying with and ensuring their ward(s) comply with the school coexistence manual, the Organic Education Law and its General Regulations."),
    item("pd-2", "2", "Cancelar puntualmente los pagos correspondientes de matrículas y mensualidades acordados en la estructura de costos.", "Pay enrollment fees and monthly tuition on time as agreed in the cost structure."),
    item("pd-3", "3", "Respetar y dirigirse de forma adecuada al personal docente, directivo, administrativo y obrero del plantel.", "Respect and address teaching, management, administrative and maintenance staff appropriately."),
    item("pd-4", "4", "Aceptar las correcciones aplicadas a su representado cuando incurra en peleas, inmoralidades, indisciplinas, inasistencias o bajo rendimiento.", "Accept corrective measures applied to their ward when involved in fights, misconduct, indiscipline, absences or poor performance."),
    item("pd-5", "5", "Retirar trimestralmente el boletín para estar informado sobre el rendimiento de su representado. El no retirarlo acarreará cita al CPNNA.", "Pick up the report card quarterly to stay informed about their ward's performance. Failure to do so will result in referral to the Child Protection Council."),
    item("pd-6", "6", "Acudir al colegio en caso de citación de cualquiera de las dependencias del plantel.", "Attend the school when summoned by any school office."),
    item("pd-7", "7", "Respetar los horarios de consulta de los maestros y profesores. No interrumpir la clase ni permanecer en los alrededores de las aulas.", "Respect teachers' consultation hours. Do not interrupt class or remain near classrooms."),
    item("pd-8", "8", "Evitar pedir autorizaciones para sacar estudiantes de clase antes del término del horario escolar, excepto en casos realmente urgentes.", "Avoid requesting early dismissal except in truly urgent cases approved by coordination."),
    item("pd-9", "9", "Participar activamente en el Taller de Escuela para Padres para capacitarse y asegurar la formación integral de sus hijos en el ámbito familiar.", "Actively participate in the Parents' School Workshop to ensure comprehensive family education."),
    item("pd-10", "10", "Colaborar en todas las actividades que realice la escuela en beneficio de su representado.", "Collaborate in all school activities that benefit their ward."),
    item("pd-11", "11", "Dotar a su representado de todos los útiles necesarios para el trabajo escolar.", "Provide their ward with all necessary school supplies."),
    item("pd-12", "12", "Ser miembro activo del Consejo Educativo.", "Be an active member of the Educational Council."),
    item("pd-13", "13", "Asistir a las reuniones pertinentes al grado o curso de su representado.", "Attend meetings relevant to their ward's grade or course."),
    item("pd-14", "14", "Estar atentos a las tareas y otras actividades asignadas a su representado y orientarlos en las mismas.", "Pay attention to assignments and activities given to their ward and guide them accordingly."),
    item("pd-15", "15", "Enviar a su representado todos los días a clases.", "Send their ward to school every day."),
    item("pd-16", "16", "Informar oportunamente a los docentes los motivos por los cuales su representado no puede asistir a clases.", "Promptly inform teachers of reasons why their ward cannot attend class."),
    item("pd-17", "17", "Ser responsable por los daños y perjuicios ocasionados por su representado a los bienes del plantel.", "Be responsible for damage caused by their ward to school property."),
    item("pd-18", "18", "Revisar diariamente el auto control diario de clase de su representado.", "Review their ward's daily class self-control record daily."),
    item("pd-19", "19", "Plantear a los docentes observaciones e intercambiar opiniones acerca de sus representados.", "Share observations and exchange opinions with teachers about their wards."),
    item("pd-20", "20", "Velar porque sus representados usen el traje escolar de acuerdo a las regulaciones pertinentes.", "Ensure their wards wear the school uniform according to applicable regulations."),
  ],
}

export const CONVIVIALITY_SECTIONS: RegulationSection[] = [
  STUDENT_RIGHTS_SECTION,
  PARENT_RIGHTS_SECTION,
  STUDENT_DUTIES_SECTION,
  PARENT_DUTIES_SECTION,
]

export const CONVIVIALITY_FOOTNOTE = {
  es: "Extracto tomado de los Acuerdos de Convivencia Escolar y Comunitaria que rige el funcionamiento de la Unidad Educativa Colegio Modesta Bor.",
  en: "Excerpt taken from the School and Community Coexistence Agreements governing the operation of Modesta Bor Educational Unit.",
} satisfies LocalizedString
