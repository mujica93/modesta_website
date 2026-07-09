import type { ContentBlock, LocalizedString } from "./home-data"

export const FOOTPRINT_HERO = {
  badge: { es: "Sobre nosotros", en: "About us" } satisfies LocalizedString,
  title: {
    es: "La huella de Modesta Bor",
    en: "The Footprint of Modesta Bor",
  } satisfies LocalizedString,
  subtitle: {
    es: "Conozca la vida y el legado musical de la compositora venezolana que inspira el nombre y la identidad de nuestra institución educativa.",
    en: "Discover the life and musical legacy of the Venezuelan composer who inspires the name and identity of our educational institution.",
  } satisfies LocalizedString,
}

export const FOOTPRINT_HERO_ACTIONS = [
  {
    id: "mission",
    label: { es: "Misión y Visión", en: "Mission and Vision" },
    href: "/about-us/mission-vision",
    variant: "default" as const,
    external: false,
  },
  {
    id: "about",
    label: { es: "Conocer el colegio", en: "About the school" },
    href: "/about-us",
    variant: "outline" as const,
    external: false,
  },
]

export const FOOTPRINT_CONTENT_BLOCKS: ContentBlock[] = [
  {
    id: "origins",
    title: { es: "Orígenes y formación", en: "Origins and training" },
    paragraphs: [
      {
        es: "Modesta Bor nació en Juangriego, Isla de Margarita, el 15 de junio de 1926. En su pueblo natal recibió las nociones elementales de Teoría y Solfeo con Luis Manuel Gutiérrez y de piano con Alicia Caraballo Reyes.",
        en: "Modesta Bor was born in Juangriego, Margarita Island, on June 15, 1926. In her hometown she received elementary training in Theory and Solfège with Luis Manuel Gutiérrez and piano with Alicia Caraballo Reyes.",
      },
      {
        es: "En 1942 viajó a Caracas para continuar sus estudios en la Escuela Superior de Música «José Ángel Lamas», donde cursó Teoría y Solfeo con María de Lourdes Rotundo; piano con Elena de Arrate; Historia de la Música y Estética con Juan Bautista Plaza; primer año de Armonía y Orquestación con Antonio Estévez; y segundo año de Armonía, Contrapunto, Fuga y Composición en la cátedra del Maestro Vicente Emilio Sojo.",
        en: "In 1942 she traveled to Caracas to continue her studies at the «José Ángel Lamas» Higher School of Music, where she studied Theory and Solfège with María de Lourdes Rotundo; piano with Elena de Arrate; Music History and Aesthetics with Juan Bautista Plaza; first-year Harmony and Orchestration with Antonio Estévez; and second-year Harmony, Counterpoint, Fugue and Composition under Master Vicente Emilio Sojo.",
      },
      {
        es: "En 1951 presentó el examen de su décimo año de piano; sin embargo, ese mismo año contrajo una grave enfermedad en ambas manos y piernas. Su dolencia no le permitió ofrecer el concierto de grado ni desarrollar su prometedora carrera como intérprete.",
        en: "In 1951 she took her tenth-year piano examination; however, that same year she contracted a serious illness affecting both her hands and legs. Her condition prevented her from giving her graduation concert or developing her promising career as a performer.",
      },
    ],
  },
  {
    id: "composer-title",
    title: { es: "Maestra compositora", en: "Master composer" },
    paragraphs: [
      {
        es: "Fue posteriormente, al regresar de Moscú, cuando le otorgaron el título de Profesora Ejecutante de Piano, a instancias de la Profesora Elena de Arrate.",
        en: "It was later, upon returning from Moscow, that she was awarded the title of Performing Piano Professor at the request of Professor Elena de Arrate.",
      },
      {
        es: "En julio de 1959, con la «Suite en tres movimientos» para Orquesta de Cámara, obtuvo de las manos de Vicente Emilio Sojo el título de Maestro Compositor. Paralelamente a sus estudios musicales, Modesta Bor dio inicio a una amplia actividad en los campos de la musicología y la docencia.",
        en: "In July 1959, with her «Suite in Three Movements» for Chamber Orchestra, she received the title of Master Composer from Vicente Emilio Sojo. Parallel to her musical studies, Modesta Bor began extensive work in musicology and teaching.",
      },
      {
        es: "Entre 1948 y 1951 trabajó en el Servicio de Investigaciones Folklóricas Nacionales como Jefa del Departamento de Musicología. Posteriormente ejerció la docencia musical en diferentes escuelas primarias y secundarias de la capital, llegando incluso a dirigir coros de niños de las Escuelas Municipales de Caracas.",
        en: "Between 1948 and 1951 she worked at the National Folklore Research Service as Head of the Musicology Department. She later taught music at various primary and secondary schools in the capital, even directing children's choirs at the Municipal Schools of Caracas.",
      },
    ],
  },
  {
    id: "moscow",
    title: { es: "Moscú y nueva etapa creativa", en: "Moscow and a new creative stage" },
    paragraphs: [
      {
        es: "Después de egresar de la Escuela de Música, se dedicó por completo a la composición y en 1960 viajó a Moscú con la idea de realizar estudios de postgrado en el Conservatorio Tchaikovsky. Después de escuchar una de sus obras en una audición privada, el afamado compositor Aram Jachaturián aceptó gustosamente a Modesta Bor en su cátedra de Composición.",
        en: "After graduating from the School of Music, she devoted herself entirely to composition and in 1960 traveled to Moscow to pursue postgraduate studies at the Tchaikovsky Conservatory. After hearing one of her works in a private audition, the renowned composer Aram Khachaturian gladly accepted Modesta Bor into his Composition class.",
      },
      {
        es: "En 1962 dio inicio a la composición de la premiada «Obertura» para Orquesta. Entre 1963 y 1964 se traslada a Lecherías, Estado Anzoátegui, para asumir la dirección del Coro de Niños de la Universidad de Oriente.",
        en: "In 1962 she began composing the award-winning «Overture» for Orchestra. Between 1963 and 1964 she moved to Lecherías, Anzoátegui State, to direct the Children's Choir of the University of the East.",
      },
      {
        es: "En 1964, nuevamente en Caracas, trabajó en el Instituto Nacional de Folklore y luego fue nombrada directora del Coro de Niños de la Escuela de Música «Juan Manuel Olivares», cargo que desempeñó durante 14 años.",
        en: "In 1964, back in Caracas, she worked at the National Folklore Institute and was then appointed director of the Children's Choir of the «Juan Manuel Olivares» School of Music, a position she held for 14 years.",
      },
    ],
  },
  {
    id: "ensembles",
    title: { es: "Arpegio, coros y docencia", en: "Arpegio, choirs and teaching" },
    paragraphs: [
      {
        es: "En 1966 fundó y dirigió el grupo vocal «Arpegio», conjunto de seis voces blancas con el cual divulgó las viejas melodías infantiles, la polifonía culta y la música popular y folklórica venezolana.",
        en: "In 1966 she founded and directed the vocal group «Arpegio», a six-voice ensemble through which she promoted old children's melodies, cultivated polyphony, and Venezuelan popular and folk music.",
      },
      {
        es: "Entre 1971 y 1973 dirigió la Coral de la CANTV, con la cual grabó dos discos de música coral venezolana e internacional. En 1973 se hace cargo de la Cátedra de Composición de la Escuela de Música «José Lorenzo Llamozas».",
        en: "Between 1971 and 1973 she directed the CANTV Choir, with which she recorded two albums of Venezuelan and international choral music. In 1973 she took charge of the Composition Chair at the «José Lorenzo Llamozas» School of Music.",
      },
      {
        es: "Simultáneamente, entre 1974 y 1989 trabajó como jefa del Departamento de Música de la Dirección de Cultura de la Universidad Central de Venezuela, donde realizó una encomiable labor en pro de la formación musical de la población estudiantil venezolana.",
        en: "At the same time, between 1974 and 1989 she served as head of the Music Department of the Culture Directorate at the Central University of Venezuela, where she carried out commendable work for the musical education of Venezuelan students.",
      },
    ],
  },
  {
    id: "international",
    title: { es: "Reconocimiento internacional", en: "International recognition" },
    paragraphs: [
      {
        es: "En 1982 fue invitada por la Unión de Escritores y Artistas de Cuba (UNEAC) para participar en el Primer Festival Internacional de Música Contemporánea de La Habana (1986), donde se interpretó el «Concierto para piano y Orquesta».",
        en: "In 1982 she was invited by the Union of Writers and Artists of Cuba (UNEAC) to participate in the First International Festival of Contemporary Music in Havana (1986), where her «Concerto for Piano and Orchestra» was performed.",
      },
      {
        es: "En 1990 se traslada a la ciudad de Mérida, donde prosigue con tenacidad su labor creativa, la cual alterna con la docencia, ofreciendo a los estudiantes de la Escuela de Música de la Universidad de Los Andes un Taller de Dirección de Coros Infantiles.",
        en: "In 1990 she moved to the city of Mérida, where she continued her creative work with perseverance, alternating it with teaching by offering the students of the University of the Andes School of Music a Children's Choir Conducting Workshop.",
      },
      {
        es: "En 1991 dicta un Taller de Armonía con la finalidad de crear en el futuro una Cátedra Estable de Composición.",
        en: "In 1991 she taught a Harmony Workshop with the aim of eventually establishing a permanent Composition Chair.",
      },
    ],
  },
  {
    id: "musical-language",
    title: { es: "Su lenguaje musical", en: "Her musical language" },
    paragraphs: [
      {
        es: "Las primeras obras de Modesta Bor están enmarcadas dentro del pensamiento de la Escuela Nacionalista venezolana. Ejemplos claros se observan en la «Suite Criolla» para Piano, en la «Suite para Orquesta de Cámara» y en la «Sonata para Viola y Piano».",
        en: "Modesta Bor's early works are framed within the thinking of the Venezuelan Nationalist School. Clear examples can be seen in the «Creole Suite» for Piano, the «Suite for Chamber Orchestra» and the «Sonata for Viola and Piano».",
      },
      {
        es: "En etapas posteriores sus obras buscan un lenguaje propio, contemporáneo, acorde con las nuevas tendencias. A partir de la década de los sesenta se trasluce la búsqueda de nuevas sonoridades en obras como el «Segundo Ciclo de Romanzas» para contralto y piano, la «Sonata para violín y piano» y sus obras corales «El Pescador de Anclas» y «Regreso al Mar».",
        en: "In later stages her works seek their own contemporary language in line with new trends. From the 1960s onward, the search for new sonorities emerges in works such as the «Second Cycle of Romances» for contralto and piano, the «Sonata for Violin and Piano» and her choral works «The Anchor Fisherman» and «Return to the Sea».",
      },
      {
        es: "La década de los setenta marca el inicio de una búsqueda hacia la atonalidad. La «Imitación Serial para Cuerdas» (1974), el tríptico coral «Manchas Sonoras» (1975), los siete «Sarcasmos» para piano (1978-1980), el «Prisma Sonoro» para cuatro voces mixtas (1980-1981), el «Concierto para piano y Orquesta» (1982-1983) y «Acuarelas» para Orquesta de Cuerdas (1986) son solo algunos ejemplos de sus obras atonales desligadas de la tendencia nacionalista.",
        en: "The 1970s mark the beginning of a move toward atonality. «Serial Imitation for Strings» (1974), the choral triptych «Sound Stains» (1975), the seven «Sarcasms» for piano (1978-1980), «Sonic Prism» for four mixed voices (1980-1981), the «Concerto for Piano and Orchestra» (1982-1983) and «Watercolors» for String Orchestra (1986) are just some examples of her atonal works detached from the nationalist trend.",
      },
    ],
  },
]
