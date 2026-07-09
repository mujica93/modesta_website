export type LevelId = "preescolar" | "primaria" | "bachillerato"

export type SupplyBlock = {
  title: { es: string; en: string }
  items: string[]
}

export type SubjectBlock = {
  subject: string
  items: string
}

export type Grade = {
  id: string
  level: LevelId
  name: { es: string; en: string }
  short: string
  /** Standard blocks (texts + supplies) used by preescolar and primaria */
  blocks?: SupplyBlock[]
  /** Subject-based table used by bachillerato */
  subjects?: SubjectBlock[]
  /** Optional extra notes specific to this grade */
  notes?: { es: string; en: string }[]
}

export const LEVELS: { id: LevelId; name: { es: string; en: string } }[] = [
  { id: "preescolar", name: { es: "Preescolar", en: "Preschool" } },
  { id: "primaria", name: { es: "Primaria", en: "Primary" } },
  { id: "bachillerato", name: { es: "Bachillerato", en: "High School" } },
]

export const GLOBAL_NOTE = {
  es: "Todos los textos y útiles escolares deben venir debidamente forrados e identificados. No pueden traer aparatos electrónicos ni objetos de valor. Los textos y útiles escolares son sugeridos, no de carácter obligatorio, según resolución del MPPE N° 555 G.O. N° 35751.",
  en: "All textbooks and school supplies must be properly covered and labeled. Students may not bring electronic devices or valuables. Textbooks and supplies are suggested, not mandatory, per MPPE Resolution No. 555 G.O. No. 35751.",
}

export const GRADES: Grade[] = [
  // ---------------- PREESCOLAR ----------------
  {
    id: "preescolar",
    level: "preescolar",
    short: "Pre",
    name: { es: "Preescolar (I, II y III nivel)", en: "Preschool (Levels I, II & III)" },
    blocks: [
      {
        title: { es: "Textos sugeridos — I nivel (Color Amarillo)", en: "Suggested texts — Level I (Yellow)" },
        items: [
          "Libro: Pasito a pasito 1 (Edit. Larense)",
          "Libro: Piruetas 1 (Edit. Santillana)",
          "1 Libreta doble línea",
          "1 Libreta cuadriculada",
          "2 Cuadernos de Dibujo para Inglés",
        ],
      },
      {
        title: { es: "Textos sugeridos — II nivel (Color Azul)", en: "Suggested texts — Level II (Blue)" },
        items: [
          "Libro: Pasito a pasito 2 (Edit. Larense)",
          "Libro: Piruetas 2 (Edit. Santillana)",
          "1 Libreta doble línea",
          "1 Libreta cuadriculada",
          "2 Cuadernos de Dibujo para Inglés",
          "Libro de lectura Mi Jardín",
        ],
      },
      {
        title: { es: "Textos sugeridos — III nivel (Color Rojo)", en: "Suggested texts — Level III (Red)" },
        items: [
          "Libro: Pasito a pasito 3 (Edit. Larense)",
          "Libro: Piruetas 3 (Edit. Santillana)",
          "1 Libreta doble línea",
          "1 Libreta cuadriculada",
          "2 Cuadernos de Dibujo para Inglés",
          "Libro de lectura Mi Jardín",
          "Libro de lectura Kikiriki",
        ],
      },
      {
        title: { es: "Útiles escolares y de aseo (igual para todos los niveles)", en: "School & hygiene supplies (same for all levels)" },
        items: [
          "03 pliegos de papel bond",
          "02 pliegos de papel crepé",
          "02 pliegos de papel araña",
          "1/2 resma de hojas blancas",
          "01 block de papel surtido",
          "01 pega grande de 250 mg",
          "01 cartulina escarchada",
          "01 caja de plastilina",
          "02 foamis normales",
          "02 foamis escarchados",
          "02 borras",
          "01 caja de lápices mongol",
          "01 caja de colores de 36 unidades (o 3 de 12 c/u)",
          "05 barras de silicón pequeñas",
          "02 silicón líquido medianos",
          "02 plastidedos",
          "02 pinceles (uno grueso y uno fino)",
          "02 bolígrafos negros",
          "01 marcador punta gruesa",
          "01 marcador extra fino negro, azul o rojo",
          "01 marcador de pizarra",
          "01 carpeta de liga (solo nuevo ingreso)",
          "01 sacapunta c/depósito de buena calidad",
          "½ metro de papel contact transparente",
          "01 pintura al frío blanca o negra",
          "01 pintura al frío de cualquier color",
          "1 paquete de paletas de helados naturales",
          "½ paquete de palitos de altura",
          "01 jabón de mano (no líquido)",
          "01 gel antibacterial grande",
          "01 alcohol de 250 ml",
          "50 vasos desechables",
          "01 paquete de servilletas",
          "04 rollos de papel higiénico",
          "01 juego didáctico de legos grandes",
          "01 pañito para limpiar",
          "01 paquete de ganchos de ropa de madera",
          "02 cajas de zapatos forradas con papel contact",
          "01 medicamento para la cruz roja (curitas, agua oxigenada, gasas, adhesivo, acetaminofén o crema para golpes)",
        ],
      },
    ],
    notes: [
      {
        es: "Las libretas, libros y cuadernos de dibujo deben venir forrados del color correspondiente a cada nivel (I nivel Amarillo, II nivel Azul, III nivel Rojo) y con márgenes de ambos lados del color de su preferencia.",
        en: "Notebooks, books and drawing pads must be covered in the color of each level (Level I Yellow, Level II Blue, Level III Red) with margins on both sides in the color of your choice.",
      },
      {
        es: "Las libretas, cuadernos de dibujo y libros deben venir identificados por dentro y no por fuera, ya que las maestras los identificarán por fuera.",
        en: "Notebooks, drawing pads and books must be labeled on the inside, not the outside — teachers will label the outside.",
      },
    ],
  },

  // ---------------- PRIMARIA ----------------
  {
    id: "1-grado",
    level: "primaria",
    short: "1°",
    name: { es: "1° Grado", en: "1st Grade" },
    blocks: [
      {
        title: { es: "Textos sugeridos", en: "Suggested texts" },
        items: [
          "Libro Mi Jardín (si se está iniciando en la lectura)",
          "Libro 1 Flor de Araguaney (si ya leen)",
          "Libro de Caligrafía 1 — DISUTEXTOS C.A.",
        ],
      },
      {
        title: { es: "Útiles sugeridos", en: "Suggested supplies" },
        items: [
          "1 Libreta cuadriculada (matemática)",
          "3 Libretas doble línea (Lengua, Sociales y Naturaleza)",
          "1 Cuaderno (Música e Inglés)",
          "¼ Resma de papel tamaño carta",
          "¼ Resma de papel ministro",
          "3 Sobres manila tamaño carta (identificados)",
          "1 Pega mediana",
          "1 Pega en barra",
          "1 Sacapuntas con depósito",
          "1 Borrador",
          "1 Block de cartulina de construcción",
          "1 Block de papel lustrillo",
          "1 Caja de lápices",
          "1 Caja de colores",
          "1 Silicón líquido mediano",
          "2 Barras de silicón fina",
          "1 Block de dibujo tamaño carta (Educación Estética)",
          "1 Tijera punta roma",
          "3 Pliegos de papel bond",
          "1 Rollo de tirro grande",
          "1 Marcador permanente punta gruesa",
          "1 Cartulina corrugada (cualquier color)",
          "Hojas blancas de reciclaje",
        ],
      },
    ],
  },
  {
    id: "2-grado",
    level: "primaria",
    short: "2°",
    name: { es: "2° Grado", en: "2nd Grade" },
    blocks: [
      {
        title: { es: "Textos sugeridos", en: "Suggested texts" },
        items: ["Nueva Tobogán Caligrafía 2° grado — Editorial Actualidad"],
      },
      {
        title: { es: "Útiles sugeridos", en: "Suggested supplies" },
        items: [
          "2 Libretas cuadriculadas",
          "6 Libretas doble línea",
          "1 Diccionario",
          "¼ Resma de papel tamaño carta",
          "¼ Resma de hojas ministro",
          "1 Caja de lápices",
          "1 Sacapuntas con depósito",
          "1 Borra blanca",
          "1 Pega en barra",
          "1 Pega líquida",
          "1 Silicón líquido",
          "2 Papel bond",
          "1 Block de construcción",
          "1 Block de papel lustrillo",
          "1 Pliego de papel crepé",
          "1 Caja de colores",
          "1 Juego geométrico pequeño",
          "3 Sobres manila tamaño carta",
          "1 Tijera punta roma",
          "1 Marcador permanente",
          "2 Foami (1 escarchado, 1 normal)",
          "1 Celoven",
          "1 Pintura al frío",
        ],
      },
    ],
  },
  {
    id: "3-grado",
    level: "primaria",
    short: "3°",
    name: { es: "3° Grado", en: "3rd Grade" },
    blocks: [
      {
        title: { es: "Textos sugeridos", en: "Suggested texts" },
        items: ["Nueva Tobogán Caligrafía 3° grado — Editorial Actualidad"],
      },
      {
        title: { es: "Útiles sugeridos", en: "Suggested supplies" },
        items: [
          "2 Libretas cuadriculadas",
          "5 Libretas doble línea",
          "¼ Resma de papel tamaño carta",
          "¼ Resma de hojas ministro",
          "1 Caja de lápices",
          "1 Sacapuntas con depósito",
          "1 Borrador",
          "2 Pliegos de papel bond",
          "3 Sobres manila tamaño carta",
          "1 Tijera punta roma",
          "1 Block de dibujo (Educación Estética)",
          "1 Caja de colores",
          "1 Juego geométrico",
          "1 Block de cartulina de construcción",
          "1 Block de papel lustrillo",
          "1 Compás",
          "1 Pintura al frío",
          "1 Pega blanca",
          "1 Cinta autoadhesiva",
          "1 Silicón",
          "2 Foami (1 liso, 1 brillante)",
          "Hojas blancas de reciclaje",
        ],
      },
    ],
  },
  {
    id: "4-grado",
    level: "primaria",
    short: "4°",
    name: { es: "4° Grado", en: "4th Grade" },
    blocks: [
      {
        title: { es: "Textos sugeridos", en: "Suggested texts" },
        items: ["Tú y Yo Lecto Escritura 4 — Cedeño"],
      },
      {
        title: { es: "Útiles sugeridos", en: "Suggested supplies" },
        items: [
          "1 Libreta cuadriculada",
          "2 Libretas doble línea (lenguaje y caligrafía)",
          "3 Libretas doble línea (sociales, ciencias naturales y estética)",
          "1 Block de dibujo tamaño carta",
          "2 Marcadores para pizarra acrílica (negro y azul)",
          "2 Marcadores permanentes",
          "1 Caja de lápices N° 2",
          "1 Goma de borrar",
          "1 Sacapuntas con depósito",
          "1 Tijera punta roma",
          "1 Pega de barra",
          "1 Compás",
          "1 Papel araña color rojo",
          "1 Silicón líquido mediano",
          "1 Juego geométrico",
          "3 Sobres manila amarillo",
        ],
      },
    ],
  },
  {
    id: "5-grado",
    level: "primaria",
    short: "5°",
    name: { es: "5° Grado", en: "5th Grade" },
    blocks: [
      {
        title: { es: "Textos sugeridos", en: "Suggested texts" },
        items: [
          "Tú y Yo Lecto Escritura 5 — Cedeño",
          "Diccionario Escolar Español",
          "Diccionario de Inglés-Español",
        ],
      },
      {
        title: { es: "Útiles sugeridos", en: "Suggested supplies" },
        items: [
          "1 Libreta cuadriculada para Matemática",
          "2 Libretas doble línea para Lenguaje y Vacuna ortográfica",
          "1 Libreta de una línea compartida para Historia y Geografía",
          "1 Libreta de una línea compartida para Ciudadanía y Estética",
          "1 Libreta de una línea compartida para Ciencia e Inglés",
          "1 Libreta de una línea compartida para Música y Correo",
          "1 Block de dibujo tamaño carta",
          "1 Marcador permanente",
          "1 Caja de lápices",
          "1 Goma de borrar",
          "1 Sacapuntas",
          "1 Tijera punta roma",
          "1 Pega pequeña líquida",
          "1 Compás",
          "1 Silicón líquido pequeño",
          "1 Juego geométrico",
          "3 Sobres manila amarillo identificados",
          "1 Caja de colores",
          "2 Barras de silicón",
          "1/2 Resma de papel tamaño carta",
          "1/2 Resma de papel ministro",
          "2 Pliegos de papel bond",
          "1 Block de papel lustrillo",
          "1 Block cartulina de construcción",
          "1 Pintura al frío",
          "Hojas blancas de reciclaje",
          "Vasos desechables y servilletas (opcional)",
          "Toallas húmedas como artículo personal",
        ],
      },
    ],
  },
  {
    id: "6-grado",
    level: "primaria",
    short: "6°",
    name: { es: "6° Grado", en: "6th Grade" },
    blocks: [
      {
        title: { es: "Textos sugeridos", en: "Suggested texts" },
        items: [
          "Viaje al centro de la tierra — Julio Verne",
          "Lecturas sugeridas por la docente (Aula virtual Classroom)",
        ],
      },
      {
        title: { es: "Útiles sugeridos", en: "Suggested supplies" },
        items: [
          "1 Libreta cuadriculada (Matemáticas)",
          "9 Libretas doble línea (lengua, ortografía, caligrafía, historia, ciudadanía, folclore, ciencias naturales, geografía, estética, inglés y música)",
          "1 Sacapuntas con depósito",
          "1 Borrador",
          "1 Caja de lápices",
          "1 Caja de colores",
          "1 Tijera punta roma",
          "1 Pega líquida",
          "½ Resma de papel tamaño carta",
          "½ Resma de papel ministro",
          "1 Juego geométrico",
          "Cinta autoadhesiva",
          "1 Block de construcción",
          "1 Block de papel lustrillo",
          "1 Silicón líquido",
          "Pliegos de papel bond",
          "1 Compás",
          "1 Marcador permanente de color",
          "1 Pintura al frío",
          "1 Crepé (cualquier color)",
          "Hojas de reciclaje",
        ],
      },
    ],
  },

  // ---------------- BACHILLERATO ----------------
  {
    id: "1-ano",
    level: "bachillerato",
    short: "1° Año",
    name: { es: "1° Año", en: "1st Year" },
    subjects: [
      { subject: "Castellano", items: "Diccionario Larousse o cualquier otro (OBLIGATORIO). Cuaderno de una raya. Lapiceros (tinta negra o azul). Hojas papel bond tamaño carta y de ministro para pruebas y talleres." },
      { subject: "Inglés", items: "1 Libreta de una raya. Recursos didácticos disponibles en Classroom." },
      { subject: "Matemática", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores y juego geométrico. Texto: cualquier autor." },
      { subject: "Ciencias Naturales", items: "1 libreta, bata de laboratorio, lápiz, sacapunta, borra, resaltador, colores. Libro de teoría y guía de prácticas de laboratorio. Yaditzha Irausquin, Editorial Actualidad." },
      { subject: "Geografía, Historia y Ciudadanía", items: "Geografía General 7° de José Vargas Ponce (Ed. Romor); Historia de Venezuela 7° de Antonio Gómez (Ed. Salesiana); Educación Familiar de Héctor Zamora; Constitución de la R.B.V. 1999 (Obligatorio); libreta de 1 raya, lápices de colores, hojas blancas y de ministro, juego geométrico." },
      { subject: "Educación Física", items: "1 Libreta de una raya, lápiz, sacapunta, borra, resaltador, colores. Uniforme obligatorio: franela blanca, mono deportivo azul marino." },
      { subject: "Arte y Patrimonio", items: "Cuaderno de una raya. Laminario de arte y patrimonio (Ed. Disutextos, autor Freddy Suárez). Colores y juego geométrico." },
      { subject: "Dibujo", items: "1 Cuaderno (mixto), block de 34.3 x 28 cm (sin rotular), juego de escuadras grandes (32 y 22 cm), lápices 3H y HB, compás de precisión (metal), borra blanca, borrona, pañito, sacapunta con depósito, tirro pequeño, carpeta con gancho (oficio)." },
      { subject: "Nociones Básicas de Oficina", items: "1 libreta de una raya. Recursos didácticos disponibles en Classroom." },
      { subject: "Herramientas TIC", items: "Dispositivo electrónico con acceso a internet (computador, tablet, teléfono, laptop)." },
    ],
  },
  {
    id: "2-ano",
    level: "bachillerato",
    short: "2° Año",
    name: { es: "2° Año", en: "2nd Year" },
    subjects: [
      { subject: "Castellano", items: "Texto de castellano segundo año (cualquier autor). Diccionario Larousse (OBLIGATORIO). Cuaderno de una raya, lapiceros azul o negro. Hojas de papel ministro y bond tamaño carta (obligatorio)." },
      { subject: "Inglés", items: "1 Libreta de una raya. Recursos didácticos disponibles en Classroom." },
      { subject: "Matemática", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores, juego geométrico. Texto: cualquier autor." },
      { subject: "Ciencias Biológicas y Educación para la Salud", items: "2 libretas, bata de laboratorio, lápiz, sacapunta, borra, resaltador, colores. Biología 2° de Yaditzha Irausquin (Ed. Actualidad) y Guía de Laboratorio de Educación para la Salud (Ed. Panapo)." },
      { subject: "Geografía, Historia y Ciudadanía", items: "Historia de Venezuela (Guillermo Morón, Ed. Santillana); Historia Universal 2° de Aureo Yépez Castillo (Ed. Larense); libreta de 1 raya, lápices de colores, hojas blancas y de ministro, colores y juego geométrico." },
      { subject: "Educación Física", items: "1 Libreta de una raya, lápiz, sacapunta, borra, resaltador, colores. Uniforme obligatorio: franela blanca, mono deportivo azul marino." },
      { subject: "Arte y Patrimonio", items: "Texto Arte y Patrimonio 2° de Freddy Suárez (Ed. Disutextos). Cuaderno de una raya, lapiceros, hojas de ministro y bond carta (obligatorio), colores, marcadores y juego geométrico." },
      { subject: "Dibujo", items: "1 Cuaderno (mixto), block de 34.3 x 28 cm (sin rotular), juego de escuadras grandes, lápices 3H y HB, compás de precisión (metal), borrona, escalímetro, plantillas curvas, borra blanca, pañito, sacapunta con depósito, tirro pequeño, carpeta con gancho (oficio)." },
      { subject: "Fundamentos de Contabilidad", items: "1 libreta de una raya. Recursos didácticos disponibles en Classroom." },
      { subject: "Herramientas TIC", items: "Dispositivo electrónico con acceso a internet (computador, tablet, teléfono, laptop)." },
    ],
  },
  {
    id: "3-ano",
    level: "bachillerato",
    short: "3° Año",
    name: { es: "3° Año", en: "3rd Year" },
    subjects: [
      { subject: "Castellano", items: "Texto de castellano tercer año (Ed. Actualidad, autora Maira Molina). Cuaderno de una raya y uno doble línea para caligrafía. Lapiceros negro o azul. Diccionario Larousse (OBLIGATORIO). Novela Cantaclaro de Rómulo Gallegos (OBLIGATORIA). Hojas de papel ministro (OBLIGATORIO)." },
      { subject: "Inglés", items: "1 Libreta de una raya. Recursos didácticos disponibles en Classroom." },
      { subject: "Matemática", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores, juego geométrico, calculadora científica. Texto: cualquier autor." },
      { subject: "Biología", items: "1 libreta, bata de laboratorio, lápiz, sacapunta, borra, resaltador, colores. Libro de Teoría y Práctica de Yaditzha Irausquin (Ed. Actualidad)." },
      { subject: "Geografía, Historia y Ciudadanía", items: "Geografía de Venezuela 9° de José Vargas Ponce (Ed. Romor) o José Ezio Serrano (Ed. Santillana); Cátedra Bolivariana 9° de Pablo Emilio García o Vinicio Romero Martínez; libreta de 1 raya, lápices de colores, hojas blancas y de ministro, juego geométrico, colores y plantilla del mapa de Venezuela." },
      { subject: "Educación Física", items: "1 Libreta de una raya, lápiz, sacapunta, borra, resaltador, colores. Uniforme obligatorio: franela blanca, mono deportivo azul marino." },
      { subject: "Química", items: "2 libretas de raya, lápiz, sacapuntas, colores, borra, resaltador, calculadora científica, tabla periódica, bata de laboratorio obligatoria. Texto obligatorio: María del Pilar Rodríguez, Freddy Suárez o José Rodríguez Petit (Ed. Actualidad)." },
      { subject: "Dibujo", items: "1 Cuaderno (mixto), block de 34.3 x 28 cm (sin rotular), juego de escuadras grandes, lápices 3H y HB, compás de precisión (metal), borra blanca, borrona, pañito, sacapunta con depósito, tirro pequeño, carpeta con gancho (oficio)." },
      { subject: "Contabilidad", items: "1 libreta de una raya. Cuadernos de contabilidad: 2, 3, 4 y 8 columnas. Recursos didácticos disponibles en Classroom." },
      { subject: "Física", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores, juego geométrico, calculadora científica, bata de laboratorio obligatoria. Física 9° de Ely Brett y William Suárez (DISCOLAR). Problemario de Física de E. Navarro (opcional)." },
    ],
  },
  {
    id: "4-ano",
    level: "bachillerato",
    short: "4° Año",
    name: { es: "4° Año", en: "4th Year" },
    subjects: [
      { subject: "Castellano", items: "Análisis Literario 4° de Iraima Albujas (Ed. Biosfera, OBLIGATORIO). Cuaderno de apuntes, lapiceros negro o azul, Diccionario Larousse (OBLIGATORIO). Hojas de papel ministro y bond carta (OBLIGATORIO)." },
      { subject: "Inglés", items: "1 Libreta de una raya. Recursos didácticos disponibles en Classroom." },
      { subject: "Matemática", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores, juego geométrico, calculadora científica. Texto: cualquier autor." },
      { subject: "Ciencias Biológicas", items: "1 libreta, bata de laboratorio (OBLIGATORIO), lápiz, sacapunta, borra, resaltador, colores. Libro de Teoría y Práctica (OBLIGATORIO) de Yaditzha Irausquin (Ed. Actualidad)." },
      { subject: "Geografía, Historia y Ciudadanía", items: "Lecciones de Historia Moderna y Contemporánea de Venezuela 4° de José Vargas Ponce (Ed. Romor) o Antonio Gómez Espinoza (Ed. Salesiana); Constitución R.B.V. 1999; libreta de una raya, lápices de colores, hojas blancas y de ministro, juego geométrico, colores. Texto de Psicología 4° (cualquier autor) y 1 cuaderno de una raya." },
      { subject: "Educación Física", items: "1 Libreta de una raya, lápiz, sacapunta, borra, resaltador, colores. Uniforme obligatorio: franela blanca, mono deportivo azul marino." },
      { subject: "Química", items: "1 libreta de raya, 1 carpeta con gancho o portafolio, lápiz, sacapuntas, colores, borra, resaltador, calculadora científica, tabla periódica, bata de laboratorio. Texto obligatorio: María del Pilar Rodríguez, Freddy Suárez, Daniel Requeijo o José Rodríguez Petit (Ed. Actualidad)." },
      { subject: "Dibujo", items: "1 Cuaderno (mixto), block de 34.3 x 28 cm (sin rotular), juego de escuadras grandes, lápices 3H y HB, compás de precisión (metal), escalímetro, plantillas curvas, borra blanca, pañito, sacapunta con depósito, tirro pequeño, carpeta con gancho (oficio), borrona." },
      { subject: "Formación para la Soberanía", items: "1 libreta de una raya. Constitución R.B.V. 1999 (Obligatorio). Recursos didácticos disponibles en Classroom." },
      { subject: "Física", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores, juego geométrico, calculadora científica, bata de laboratorio obligatoria. Física 4° de Ely Brett y William Suárez (DISCOLAR). Problemario de Física de E. Navarro (opcional)." },
    ],
  },
  {
    id: "5-ano",
    level: "bachillerato",
    short: "5° Año",
    name: { es: "5° Año", en: "5th Year" },
    subjects: [
      { subject: "Castellano y Literatura", items: "Análisis Literario 5° de Iraima Albujas (OBLIGATORIO). Cuaderno de una raya, lapiceros negro o azul, hojas de papel ministro (OBLIGATORIO). Diccionario Larousse (OBLIGATORIO). Novela María de Jorge Isaac." },
      { subject: "Inglés", items: "1 Libreta de una raya. Diccionario Bilingüe Cambridge Spanish-English o cualquier otro. Recursos didácticos disponibles en Classroom." },
      { subject: "Matemática", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores, juego geométrico, calculadora científica. Texto: cualquier autor." },
      { subject: "Ciencias Biológicas", items: "1 libreta, bata de laboratorio, lápiz, sacapunta, borra, resaltador, colores. Libro de Teoría y Práctica (OBLIGATORIO) de Yaditzha Irausquin (Ed. Actualidad)." },
      { subject: "Geografía, Historia y Ciudadanía", items: "Geografía Económica de Venezuela de Héctor Zamora (Ed. Colegial Bolivariana) o cualquier autor. Libreta de 1 raya, lápices de colores, hojas blancas y de ministro, juego geométrico, plantilla del mapa de Venezuela." },
      { subject: "Educación Física", items: "1 Libreta de una raya, lápiz, sacapunta, borra, resaltador, colores. Uniforme obligatorio: franela blanca, mono deportivo azul marino." },
      { subject: "Química", items: "1 libreta de raya, lápiz, sacapuntas, colores, borra, resaltador. Texto obligatorio: María del Pilar Rodríguez, Daniel Requeijo, Andrés Caballero y Froilán Ramos o José Rodríguez Petit." },
      { subject: "Ciencias de la Tierra", items: "1 libreta de una raya, lápiz, sacapuntas, colores, borra, resaltador. Texto: Daniel Requeijo, Cristian Cazzabonne o Héctor Zamora." },
      { subject: "Fundamentos de Soberanía", items: "1 libreta de una raya. Constitución R.B.V. 1999 (Obligatorio). Recursos didácticos disponibles en Classroom." },
      { subject: "Física", items: "1 libreta cuadriculada, lápiz, sacapunta, borra, resaltador, colores, juego geométrico, calculadora científica, bata de laboratorio obligatoria. Física 5° de Ely Brett y William Suárez (DISCOLAR). Problemario de Física de E. Navarro (opcional)." },
      { subject: "Introducción a la Agricultura", items: "1 libreta de una raya." },
    ],
  },
]

export const SALES_REPS = [
  { name: "Lanller Villa Pulido", phone: "0412-8654627", grades: "2° y 3° Grado" },
  { name: "Elimar Tesouro", phone: "0412-5203425", grades: "4° y 5° Grado" },
]
