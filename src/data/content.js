// Este archivo contiene todo el texto y la información del portafolio.
// Puedes editar los textos aquí fácilmente sin tocar el código de diseño.

export const contentData = {
  // Configuración General
  siteName: "EL CÉSAR PRO",
  
  // Sección: Navegación
  navLinks: [
    { name: 'Home', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ],

  // Sección: Hero (Inicio)
  hero: {
    badgeText: "Disponible para nuevos proyectos",
    titleLine1: "Creativo",
    titleLine2Highlight: "Multidisciplinario",
    description: "Especializado en Producción Audiovisual, Fotografía, Diseño Gráfico y Desarrollo Web. Transformando ideas en experiencias visuales excepcionales.",
    primaryButtonText: "Ver Trabajos",
    secondaryButtonText: "Mis Servicios",
    heroImage: "/images/07POST-ECP.jpg", // <- Puede ser un texto o un link (ej. https://...)
  },

  // Sección: Servicios
  services: {
    sectionTitle: "Mis",
    sectionTitleHighlight: "Servicios",
    sectionDescription: "Soluciones creativas integrales para materializar tu visión.",
    list: [
      {
        id: 1,
        title: 'Producción Audiovisual',
        description: 'Videoclips, podcasts, motion graphics, animación 2D y cobertura de eventos con la más alta calidad visual.',
        iconName: 'Video' // No cambies iconName amenos que sepas el nombre en Lucide React
      },
      {
        id: 2,
        title: 'Fotografía',
        description: 'Books profesionales, fotografía de producto, cobertura de eventos y retratos corporativos.',
        iconName: 'Camera'
      },
      {
        id: 3,
        title: 'Diseño Gráfico',
        description: 'Creación de identidades visuales, logotipos y material gráfico que destaca tu marca.',
        iconName: 'PenTool'
      },
      {
        id: 4,
        title: 'Diseño Web',
        description: 'Desarrollo de sitios web modernos, responsivos y optimizados para brindar la mejor experiencia de usuario.',
        iconName: 'Layout'
      },
      {
        id: 5,
        title: 'Social Media',
        description: 'Gestión de redes sociales, estrategias de crecimiento y creación de contenido atractivo para tu audiencia.',
        iconName: 'MonitorSmartphone'
      },
      {
        id: 6,
        title: 'Producción Musical',
        description: 'Proximamente',
        iconName: 'Music'
      }
    
    ]
  },

  // Sección: Portafolio
  portfolio: {
    sectionTitle: "Portafolio |",
    sectionTitleHighlight: "Proyectos",
    sectionDescription: "Una selección de mis mejores proyectos creativos, recopilando más de 9 años de experiencia.",
    categories: [
      { name: 'All', subcategories: [] },
      { name: 'Audiovisual', subcategories: ['Videoclips','Edición | Post', 'Contenido Digital', 'Eventos', 'Corporativo', 'Comercial'] },
      { name: 'Diseño Gráfico', subcategories: ['Branding', 'Editorial | Organizacional', 'Publicidad | Marketing Digital'] },
      { name: 'Fotografía', subcategories: ['Book', 'Mascotas', 'Eventos', 'Empresarial','Servicio', 'Producto'] },
      { name: 'Web', subcategories: ['Diseño y Desarrollo'] },
      { name: 'Social Media', subcategories: ['Community Management'] },
      { name: 'Producción Musical', subcategories: ['Producción Musical'] }
    ],
    projects: [
      {
        id: 1,
        title: 'Branding e Identidad Visual',
        category: 'Diseño Gráfico',
        subcategory: 'Branding',
        image: "/images/LOGO0A.jpg",
        description: 'Conceptualización, diseño y estructura de marca',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Desarrollo el sistema visual completo de tu empresa: desde la creación del logotipo (imagotipo, isotipo o marca tipográfica), hasta la selección de paletas cromáticas, tipografía corporativa y elementos gráficos secundarios. Diseño las aplicaciones de marca (mockups) y elaboro manuales de identidad detallados para garantizar que tu marca se comunique con coherencia, personalidad y el más alto nivel estético en cualquier soporte impreso o digital.',
        client: 'Multiples clientes',
        date: '2025-12', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Diseñador Gráfico y Branding',
        externalLink: 'https://www.youtube.com/@superusatv',
        gallery: [
          '/images/LOGO1A.jpg',
          '/images/LOGO2A.jpg',
          '/images/LOGO3A.jpg',
          '/images/LOGO12A.jpg',
          '/images/LOGO4A.jpg',
          '/images/LOGO5A.jpg',
          '/images/LOGO6A.jpg',
          '/images/LOGO7A.jpg',
          '/images/LOGO8A.jpg',
          '/images/LOGO9A.jpg',
          '/images/LOGO10A.jpg',
          '/images/LOGO11A.jpg',

        ]
        // -------------------------------------------------------------
      },
      {
        id: 2,
        title: 'Rodando con Jefferson Herrera CAP 1',
        category: 'Audiovisual',
        subcategory: 'Contenido Digital',
        image: 'https://www.youtube.com/watch?v=aF_fXdMbCn0',
        description: 'Post-producción de podcast.',
        date: '2024-06',
        longDescription: 'Servicio integral de producción, grabación a múltiples cámaras y post-producción de audio y video para el podcast "Rodando con Jefferson Herrera". Experiencia en proyectos de alta calidad listos para distribución multiplataforma.',
        role: 'Edición y post-producción audiovisual',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 3,
        title: 'Rodando con Jefferson Herrera CAP 2',
        category: 'Audiovisual',
        subcategory: 'Contenido Digital',
        image: 'https://youtu.be/bCPXZVuO-Jg?si=2c2QGKAQ2oz4JRxa',
        description: 'Post-producción de podcast.',
        date: '2024-08',
        longDescription: 'Servicio integral de producción, grabación a múltiples cámaras y post-producción de audio y video para el podcast "Rodando con Jefferson Herrera". Experiencia en proyectos de alta calidad listos para distribución multiplataforma.',
        role: 'Edición y post-producción audiovisual',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 4,
        title: 'Pets',
        category: 'Fotografía',
        subcategory: 'Mascotas',
        image: "/images/WISIN03.jpg",
        description: 'Book de Mascotas',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Book Pet: Sesiones especiales dedicadas a capturar el carácter y ternura de tu compañero. Edición profesional y un entorno cómodo adaptado al ritmo de cada sesión.',
        client: '',
        date: '2019-03', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Fotografía y Post-producción',
        externalLink: '',
        gallery: [
          '/images/WISIN01.jpg',
          '/images/WISIN02.jpg',
          '/images/WISIN06.jpg',
          '/images/LUPE01.jpg',
          '/images/LUPE05.jpg',
          '/images/LUPE06.jpg'
        ]
        // -------------------------------------------------------------
      },
      {
        id: 5,
        title: 'Book',
        category: 'Fotografía',
        subcategory: 'Book',
        image: "/images/JULIA04.jpg",
        description: 'Personal & Marca.',
        
        // --- NUEVOS CAMPOS / PÁGINA DETALLE ---
        longDescription: 'Personal & Marca: Portafolios de modelaje, retratos artísticos e imagen profesional. Sesiones personalizadas que reflejan tu estilo y personalidad, con edición profesional para resaltar lo mejor de cada toma.',
        client: '',
        date: '2020-05', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Fotografía y Post-producción',
        externalLink: '',
        gallery: [
          '/images/JULIA02.jpg',
          '/images/JULIA04.jpg',
          '/images/JULIA05.jpg',
          '/images/KAREN01.jpg',
          '/images/KARPE03.jpg',
          '/images/Aleja01.jpg',
          '/images/LEO01.jpg',
          '/images/JEFFER01.jpg',
          '/images/EMMA_1M_03.jpg'
          
        ]
        // -------------------------------------------------------------
      },
      {
        id: 6,
        title: 'Harold Matos Construction',
        category: 'Web',
        subcategory: 'Diseño y Desarrollo',
        image: "/images/Haroldmatos1.jpg",
        description: 'Diseño responsive y desarrollo web.',
        
        // --- NUEVOS CAMPOS / PÁGINA DETALLE ---
        longDescription: 'Diseñé espacio web moderno, rápido y adaptable a cualquier dispositivo (responsive). El proceso respalda una construcción sólida que garantiza un rendimiento óptimo en todas las plataformas. Construyo desde páginas de presentación y portafolios personales hasta sitios corporativos o landing pages.',
        client: '',
        date: '2023-06', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Diseño Web y Desarrollo multimedia',
        externalLink: 'https://haroldmatosconstruction.com/',
        gallery: [
          '/images/HMC1.png',
          '/images/HMC2.png',
          '/images/HMC3.png',
   
        ]
        // -------------------------------------------------------------
      },
      {
        id: 7,
        title: 'Darumashi',
        category: 'Social Media',
        subcategory: 'Community Management',
        image: "/images/darumashi1.jpg",
        description: 'Manejo y administración de redes sociales.',
        
        // --- NUEVOS CAMPOS / PÁGINA DETALLE ---
        longDescription: 'Soy el encargado de la gestión estratégica de redes sociales para conectar la marca con audiencia ideal. Soy el responsable de la planificación de contenido, redacción (copywriting), programación de publicaciones y atención a la comunidad, creando una identidad digital sólida.',
        client: 'Darumashi',
        date: '2026-03', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Community Manager',
        externalLink: 'https://www.instagram.com/darumashi.co/',
        gallery: [
          '/images/DARU4.jpg',
          '/images/DARU10.jpg',
          '/images/DARU11.jpg',
   
        ]
        // -------------------------------------------------------------
      },
      {
        id: 8,
        title: 'Mientes | La 62 Music',
        category: 'Audiovisual',
        subcategory: 'Videoclips',
        image: 'https://www.youtube.com/watch?v=9MH61rOr-Bc',
        description: 'Dirección y edición de videoclip musical.',
        date: '2023-08',
        longDescription: 'Dirección creativa, rodaje y montaje completo para el sencillo oficial de La 62 (Dmelody DMD & Eskiel). Desarrollo de propuesta visual, dirección en set, iluminación y postproducción rítmica con corrección de color para potenciar la narrativa y el impacto emocional del tema.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 9,
        title: 'La Onza de Creepy | Dmelody DMD',
        category: 'Audiovisual',
        subcategory: 'Videoclips',
        image: 'https://www.youtube.com/watch?v=EILeuT0JSag',
        description: 'Edición de videoclip musical.',
        date: '2022-10',
        longDescription: 'Edición y Montaje: Participación en la edición y postproducción del videoclip. Trabajo centrado en el ritmo de corte, flujo narrativo y apoyo en la estructura visual de la canción.',
        gallery: []
        // -------------------------------------------------------------
      },
      {
        id: 10,
        title: 'Bella | Keynova',
        category: 'Audiovisual',
        subcategory: 'Videoclips',
        image: 'https://www.youtube.com/watch?v=VVwdxQYfpM0',
        description: 'Dirección y edición de videoclip musical.',
        date: '2016-10',
        longDescription: 'Creación y dirección visual del lyric video oficial. Desarrollo de concepto, animación de texto y montaje dinámico sincronizado con el beat, logrando una pieza visual envolvente y estética.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 11,
        title: 'Vida Suave | Keynova ft. Junior Jein, Son de AK',
        category: 'Audiovisual',
        subcategory: 'Videoclips',
        image: 'https://www.youtube.com/watch?v=AL09VKmwsQQ',
        description: 'Edición de videoclip musical.',
        date: '2013-11',
        longDescription: 'Ensamble y montaje dinámico del videoclip oficial para este destacado junte del Pacífico. Trabajo enfocado en el ritmo de corte, la fluidez entre tomas de los artistas y la alineación precisa del material audiovisual con el groove y la energía de la canción.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 12,
        title: 'Tu De Mi',
        category: 'Audiovisual',
        subcategory: 'Videoclips',
        image: 'https://www.youtube.com/watch?v=Xe5i0PqKg10',
        description: 'Dirección y edición de videoclip musical.',
        date: '2012-06',
        longDescription: 'Ensamble y montaje dinámico del videoclip oficial para este destacado junte del Pacífico. Trabajo enfocado en el ritmo de corte, la fluidez entre tomas de los artistas y la alineación precisa del material audiovisual con el groove y la energía de la canción.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 13,
        title: 'Wisin x 100pre',
        category: 'Audiovisual',
        subcategory: 'Edición | Post',
        image: 'https://youtu.be/zbLE6niQmYQ?si=aI4Fcx3yfaqlJ4oE',
        description: 'Edición, animación 2d | motion graphics',
        date: '2023-02',
        longDescription: 'Edición integral de este teaser personal creado como tributo a mi mascota. Un proyecto cargado de emoción donde combiné el montaje rítmico con animaciones en motion graphics para crear una pieza visual dinámica, memorable y llena de significado.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 14,
        title: 'Cindy Ávila Show | La 62 Music',
        category: 'Audiovisual',
        subcategory: 'Edición | Post',
        image: 'https://res.cloudinary.com/q1wjkl7g/video/upload/v1784849777/2023_LA62_CAS_MEDIOS_y1z4ov.mp4',
        description: 'Edición, animación 2d | motion graphics',
        date: '2023-10',
        videoFormat: 'vertical',
        longDescription: 'Gestión y postproducción de esta pieza promocional para la gira de medios de La 62. Trabajo enfocado en la edición comercial tipo promo y un montaje ágil diseñado para promover la agrupación en plataformas y medios.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 15,
        title: 'Salome 15th Birthday',
        category: 'Audiovisual',
        subcategory: 'Edición | Post',
        image: 'https://youtu.be/qDqNaUkBHWw',
        description: 'Edición, animación 2d | motion graphics',
        date: '2026-04',
        longDescription: 'Edición integral, animación de imágenes 2D e integración del contenido para formar una pieza audiovisual completa. Trabajo enfocado en la narrativa visual, ritmo de corte y la creación de una experiencia envolvente para el espectador.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 16,
        title: 'WEIV PRO services',
        category: 'Audiovisual',
        subcategory: 'Edición | Post',
        image: 'https://res.cloudinary.com/q1wjkl7g/video/upload/v1784862398/WP_post_services_kpsoha.mp4',
        description: 'Edición, animación 2d | motion graphics',
        date: '2026-01',
        videoFormat: 'vertical',
        longDescription: 'Creación completa de postproducción para esta pieza comercial de agencia. Integración de animaciones tipográficas (kinetic typography), efectos visuales, stock footage y un montaje de ritmo acelerado diseñado para pautas digitales.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 17,
        title: 'Jimmy Groomer',
        category: 'Audiovisual',
        subcategory: 'Edición | Post',
        image: 'https://youtu.be/4yBYs1l8Y6s',
        description: 'Edición, animación 2d | motion graphics',
        date: '2024-02',
        longDescription: 'Cobertura audiovisual en vivo y postproducción de este evento. Un trabajo enfocado en capturar los mejores momentos, la energía del público y los detalles clave del show.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 18,
        title: '#UnidosporlaVIDA | RUPIV',
        category: 'Audiovisual',
        subcategory: 'Edición | Post',
        image: 'https://youtu.be/ajkGTO9LaH4?si=fsqDxeKY1K_fozK3',
        description: 'Edición, animación 2d | motion graphics',
        date: '2020-05',
        longDescription: 'Producción ejecutiva y logística para la pieza audiovisual de cierre y agradecimiento de la campaña «#UnidosporlaVIDA». Trabajo centrado en la dirección operativa, gestión de recursos técnicos y articulación del equipo audiovisual para entregar un mensaje emotivo, humano y con una factura técnica impecable de alto valor social.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 19,
        title: 'Preview | Mientes La 62 Music',
        category: 'Audiovisual',
        subcategory: 'Contenido Digital',
        image: 'https://youtu.be/8Qy_ftRHAKs',
        description: 'Teaser promocional para redes sociales.',
        date: '2023-07',
        longDescription: 'Edición del video de expectativa para el lanzamiento del sencillo en redes sociales. Un proyecto enfocado en la construcción de tensión narrativa, cortes rápidos al ritmo del beat y un diseño visual atractivo pensado para generar alto impacto, engagement y anticipación en la audiencia previa al estreno.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 20,
        title: 'Cindy Avila Show | Paola Jara',
        category: 'Audiovisual',
        subcategory: 'Contenido Digital',
        image: 'https://www.youtube.com/watch?v=hamv3HPG9fQ',
        description: 'Post-producción de podcast.',
        date: '2017-06',
        longDescription: 'Proceso completo de postproducción para este episodio del show. Trabajo centrado en el armado y dinamismo multicámara, limpieza de audio, ritmo fluido en la conversación e inserción de elementos gráficos que enriquecen la experiencia del espectador sin perder la naturalidad de la entrevista.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 21,
        title: 'América de Cali | Teaser',
        category: 'Audiovisual',
        subcategory: 'Contenido Digital',
        image: 'https://www.youtube.com/watch?v=mbB13OKCUjE',
        description: 'Teaser promocional para redes sociales.',
        date: '2016-11',
        longDescription: 'Proceso completo de postproducción para este episodio del show. Trabajo centrado en el armado y dinamismo multicámara, limpieza de audio, ritmo fluido en la conversación e inserción de elementos gráficos que enriquecen la experiencia del espectador sin perder la naturalidad de la entrevista.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 22,
        title: 'Darumashi services',
        category: 'Audiovisual',
        subcategory: 'Contenido Digital',
        image: 'https://res.cloudinary.com/q1wjkl7g/video/upload/v1784865233/Promo_Darumashi_nfvd8g.mp4',
        description: 'Promoción de producto para redes sociales.',
        date: '2026-05',
        videoFormat: 'vertical',
        longDescription: 'Edición comercial enfocada en la promoción de producto para plataformas y redes sociales. Trabajo de montaje ágil, diseño de sonido dinámico, corrección de color y elementos gráficos diseñados para captar la atención de inmediato y destacar el atractivo de la marca.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 23,
        title: 'Fiesta Blanca | Bailatino',
        category: 'Audiovisual',
        subcategory: 'Eventos',
        image: 'https://www.youtube.com/watch?v=pNLytBTN3HI',
        description: 'Cubrimiento de eventos y edición de video.',
        date: '2018-10',
        longDescription: 'Cubrimiento audiovisual en vivo y postproducción de la «Fiesta Blanca». Trabajo centrado en la captura de la atmósfera, los momentos clave y la interacción del público, combinado con un montaje rítmico y corrección de color enfocada en realzar la estética del evento.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 24,
        title: 'Backstage | Gianni Garetti',
        category: 'Audiovisual',
        subcategory: 'Eventos',
        image: 'https://www.youtube.com/watch?v=hZ30HGdOo3k',
        description: 'Cubrimiento de eventos y edición de video.',
        date: '2018-11',
        longDescription: 'Producción audiovisual integral para la marca Gianni Garetti. Manejo completo de rodaje en set, iluminación, captura de detalles de producto y un proceso de postproducción enfocado en el ritmo, la estética de la marca y la edición comercial para pautas digitales.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 25,
        title: 'Darumashi experiences',
        category: 'Audiovisual',
        subcategory: 'Eventos',
        image: 'https://res.cloudinary.com/q1wjkl7g/video/upload/v1785168925/Darumashi_Experiences_jpplsn.mp4',
        description: 'Cobertura de evento gastronómico.',
        date: '2025-11',
        videoFormat: 'vertical',
        longDescription: 'Cobertura y postproducción enfocada en la experiencia gastronómica de la marca. Un trabajo de cámara y montaje centrado en los detalles visuales de la cocina, la preparación de platillos y el ambiente del evento.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 26,
        title: 'Feria Internacional del Libro Universitario 2021',
        category: 'Audiovisual',
        subcategory: 'Corporativo',
        image: 'https://www.youtube.com/watch?v=JtdJeNGah6c',
        description: 'Edición y Animación 2D',
        date: '2021-09',
        longDescription: 'Postproducción y desarrollo de animación 2D para la Universidad Santiago de Cali. Un proyecto enfocado en la estructuración de un relato institucional claro, limpio y dinámico, integrando gráficos animados (motion graphics 2D) para reforzar los mensajes clave de la marca y mantener una estética académica y moderna.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 27,
        title: 'Campaña interna USC COVID',
        category: 'Audiovisual',
        subcategory: 'Corporativo',
        image: 'https://www.youtube.com/watch?v=-O_UgsXGJXM',
        description: 'Edición y Postproducción de Motion Graphics.',
        date: '2021-09',
        longDescription: 'Desarrollo, animación y postproducción visual de gráfica en movimiento 2D. Proyecto enfocado en la fluidez del movimiento, la sincronización de ritmos visuales (sound design y timing) y la creación de composiciones dinámicas ideales para explicativos, branding e identidad de marca.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 28,
        title: 'Los 4 del Deporte | SUPER USA TV',
        category: 'Audiovisual',
        subcategory: 'Comercial',
        image: 'https://youtu.be/cQOcEeHCUOs?si=9PbgYjpPv8qSQu7-',
        description: 'Edición, Montaje y Postproducción.',
        date: '2024-10',
        longDescription: 'Postproducción integral para este programa deportivo internacional de emisión digital y TV. Trabajo centrado en el ensamblaje multicámara de corresponsales globales, sincronización de audio/video, inserción de pautas comerciales, gráficos e identidad visual del show',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 29,
        title: 'Carpa La Octava | Feria de Cali 2022',
        category: 'Audiovisual',
        subcategory: 'Comercial',
        image: 'https://www.youtube.com/watch?v=DnkJKMJ1PWw',
        description: 'Edición, Montaje y Postproducción.',
        date: '2024-10',
        longDescription: 'Creación visual y postproducción promocional para la Carpa La Octava en la Feria de Cali. Trabajo enfocado en el montaje dinámico, diseño de títulos animados en motion graphics, ritmo festivo y efectos visuales de alto impacto diseñados para pautas comerciales y redes sociales.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 30,
        title: '1er Foro Nacional de Consejos Departamentales deCTI',
        category: 'Audiovisual',
        subcategory: 'Corporativo',
        image: 'https://youtu.be/z1wA7Byu93c?si=MScjReOr02NBr8DI',
        description: 'Edición, Montaje y Motion Graphics 2D.',
        date: '2019-07',
        longDescription: 'postproducción enfocada en la integración de edición de video y animación gráfica 2D. Trabajo centrado en el diseño de elementos ilustrados en movimiento, títulos dinámicos y un flujo narrativo limpio, ideal para contenido explicativo, publicitario o de marca.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 31,
        title: 'Dra. Andrea Reyes',
        category: 'Audiovisual',
        subcategory: 'Comercial',
        image: 'https://www.youtube.com/watch?v=ofJRd0hjJEs',
        description: 'Edición, Montaje y Motion Graphics 2D.',
        date: '2018-11',
        longDescription: 'Postproducción comercial para la Dra. Andrea Reyes. Proyecto enfocado en destacar la propuesta de valor de sus productos y servicios médicos a través de una edición fluida, corrección de color pulida y animación gráfica (motion graphics) que refuerza la información clave de forma clara, estética y sofisticada.',
        gallery: [
        ]
        // -------------------------------------------------------------
      },
      {
        id: 32,
        title: 'Eventos | Cobertura',
        category: 'Fotografía',
        subcategory: 'Eventos',
        image: "/images/MATRI08.jpg",
        description: 'Cobertura fotográfica de eventos y momentos especiales.',
        date: '2022-10',
        // --- PÁGINA DETALLE ---
        longDescription: 'Registro fotográfico profesional enfocado en capturar la narrativa visual, la atmósfera y la energía de cada evento. Un servicio centrado en documentar momentos clave, reacciones espontáneas del público y detalles de producción, entregando imágenes de alto impacto estético listas para piezas de prensa, memoria institucional y contenido de valor para redes sociales.',
        client: '',
        role: 'Fotografía y Post-producción',
        externalLink: '',
        gallery: [
          '/images/FORO1.jpg',
          '/images/FORO2.jpg',
          '/images/FORO3.jpg',
          '/images/FORO4.jpg',
          '/images/FORO5.jpg',
          '/images/FORO6.jpg',
          '/images/MATRI03.jpg',
          '/images/MATRI08.jpg',
          '/images/MATRI09.jpg',
        ]
        // -------------------------------------------------------------
      },
      {
        id: 33,
        title: 'Corporativa | Institucional',
        category: 'Fotografía',
        subcategory: 'Empresarial',
        image: "/images/RUPIV1.jpg",
        description: 'Fotografía corporativa e institucional para empresas y organizaciones.',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Registro fotográfico profesional enfocado en retratar la identidad, los valores y la infraestructura de empresas y organizaciones. Un servicio centrado en headshots ejecutivos, ambiente laboral, procesos operativos e instalaciones, proyectando una imagen de marca sólida, humana y de alto nivel visual',
        client: '',
        date: '2022-11', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Fotografía y Post-producción',
        externalLink: '',
        gallery: [
          '/images/RUPIV1.jpg',
          '/images/RUPIV2.jpg',
          '/images/RUPIV3.jpg',
          '/images/RUPIV4.jpg',
          '/images/RUPIV5.jpg',
          '/images/RUPIV6.jpg',
          '/images/RUPIV7.jpg',
          '/images/RUPIV8.jpg',
          '/images/RUPIV9.jpg',
        ]
        // -------------------------------------------------------------
      },
      {
        id: 34,
        title: 'Producto | Publicidad',
        category: 'Fotografía',
        subcategory: 'Producto',
        image: "/images/DARU2.png",
        description: 'Fotografía de producto y publicidad de alto impacto visual.',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Creación de imágenes de alto impacto visual diseñadas para resaltar la calidad, texturas, formas y detalles de tus productos. Iluminación y composición de nivel publicitario pensadas para impulsar las ventas en catálogos, e-commerce y redes sociales.',
        client: '',
        date: '2026-06', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Fotografía y Post-producción',
        externalLink: '',
        gallery: [
          '/images/DARU1.png',
          '/images/DARU2.png',
          '/images/DARU3.jpg',
          '/images/DARU4.jpg',
          '/images/DARU5.jpg',
          '/images/DARU6.jpg',
          '/images/DARU7.png',
          '/images/DARU8.png',
          '/images/DARU9.png',
        ]
        // -------------------------------------------------------------
      },
      {
        id: 35,
        title: 'Servicios',
        category: 'Fotografía',
        subcategory: 'Servicios',
        image: "/images/REY1.jpg",
        description: 'Fotografía de servicios profesionales',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Registro visual enfocado en humanizar y dinamizar ofertas intangibles. Capturamos la experiencia, los procesos y la atención al cliente de forma limpia y atractiva, transmitiendo confianza e impacto profesional para impulsar tus ventas en medios digitales y publicitarios.',
        client: '',
        date: '2024-05', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Fotografía y Post-producción',
        externalLink: '',
        gallery: [
          '/images/REY1.jpg',
          '/images/REY2.jpg',
          '/images/REY3.jpg',
          '/images/DRA1.jpg',
          '/images/DRA2.jpg',
          '/images/DRA3.jpg',
        ]
        // -------------------------------------------------------------
      },
      {
        id: 36,
        title: 'Diseño Editorial | Publicaciones',
        category: 'Diseño Gráfico',
        subcategory: 'Editorial | Organizacional',
        image: "/images/RP4.png",
        description: 'Composición, Maquetación & Publicaciones',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Desarrollo el sistema visual completo de tu empresa: desde la creación del logotipo (imagotipo, isotipo o marca tipográfica), hasta la selección de paletas cromáticas, tipografía corporativa y elementos gráficos secundarios. Diseño las aplicaciones de marca (mockups) y elaboro manuales de identidad detallados para garantizar que tu marca se comunique con coherencia, personalidad y el más alto nivel estético en cualquier soporte impreso o digital.',
        client: 'Multiples clientes',
        date: '2025-06', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Diseñador Gráfico con enfoque en Branding, Identidad Corporativa y Editorial',
        externalLink: 'https://www.instagram.com/elcesarpro',
        gallery: [
          { type: 'pdf', url: '/pdfs/1RUPIV.pdf', image: '/images/RP1.jpg', label: 'INFORME DE GESTIÓN' },
          { type: 'pdf', url: '/pdfs/2RUPIV.pdf', image: '/images/RP2.jpg', label: 'REVISTA DIGITAL' },
          { type: 'pdf', url: '/pdfs/3RUPIV.pdf', image: '/images/RP3.jpg', label: 'CONVOCATORIA' },
          { type: 'pdf', url: '/pdfs/4CS.pdf', image: '/images/CS1.jpg', label: 'BROCHURE' },
          { type: 'pdf', url: '/pdfs/5CS.pdf', image: '/images/CS2.jpg', label: 'BROCHURE' },
          { type: 'pdf', url: '/pdfs/6SA.pdf', image: '/images/SA1.jpg', label: 'BROCHURE' },
        ]
        // -------------------------------------------------------------
      },
      {
        id: 37,
        title: 'Publicitario | Marketing Digital',
        category: 'Diseño Gráfico',
        subcategory: 'Publicidad | Marketing Digital',
        image: "/images/POST1.jpg",
        description: 'Comunicación Visual Estratégica & Piezas Publicitarias.',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Creación de piezas gráficas de alto impacto visual diseñadas específicamente para captar la atención, comunicar de forma ágil e impulsar la conversión en medios comerciales y plataformas digitales. Esta área combina el diseño gráfico con los principios del marketing visual para desarrollar campañas publicitarias integrales, piezas para redes sociales (posts, historias, carruseles), banners de e-commerce, material POP, pasacalles, vallas y piezas para pauta digital (ads).',
        client: 'Multiples clientes',
        date: '2026-01', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Diseñador Gráfico y Branding',
        externalLink: 'https://www.instagram.com/elcesarpro',
        gallery: [
          '/images/POST1.jpg',
          '/images/POST2.png',
          '/images/POST3.png',
          '/images/POST4.png',
          '/images/POST5.png',
          '/images/POST6.png',
          '/images/POST7.png',
          '/images/POST8.jpg',
          '/images/POST9.jpg',
          '/images/POST10.jpg',
          '/images/POST11.jpg',
          '/images/POST12.jpg',
          '/images/POST13.jpg',
          '/images/POST14.jpg',
          '/images/POST15.jpg',
          '/images/POST16.jpg',
          '/images/POST17.jpg',
          '/images/POST18.jpg',
          '/images/POST19.jpg',
          '/images/POST20.jpg',
          '/images/POST21.jpg',
        ]
        // -------------------------------------------------------------
      },
      {
        id: 38,
        title: 'Producción Musical',
        category: 'Producción Musical',
        subcategory: 'Servicios de Producción Musical',
        image: "/images/07POST-ECP.jpg",
        description: 'Producción musical, mezcla y masterización de audio profesional.',
        
        // --- PÁGINA DETALLE ---
        longDescription: 'Seré el responsable de llevar una idea sonora desde su concepto inicial hasta la pieza máster final de calidad comercial. Ejecutaré producciones musicales adaptadas a proyectos artísticos, publicidad, piezas audiovisuales e identidad sonora de marca (sonic branding).',
        client: '',
        date: '2024-05', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Productor Musical',
        externalLink: 'https://www.instagram.com/elcesarpro',
        gallery: []
        // -------------------------------------------------------------
      },
    ]
  },

  // Sección: Sobre Mí (Perfil)
  about: {
    aboutImage: "/images/img-ec.jpg",
    badgeYears: "+9",
    badgeText: "Años de\nExperiencia",
    sectionTitle: "Un poco más sobre",
    sectionTitleHighlight: "ECP",
    descriptionParagraph1: "Soy César Olaya, profesional multidisciplinario apasionado por crear contenido de alto impacto. Mi enfoque combina habilidades en producción, diseño y web para ofrecer soluciones integrales a mis clientes.",
    descriptionParagraph2: "Desde la conceptualización hasta la entrega final, me comprometo a entregar lo mejor de mi en cada proyecto, ya sea dando vida a una marca, capturando momentos irrepetibles o produciendo piezas que tengan impacto y recordación.",
    skillsTitle: "Áreas de Experiencia",
    skillsList: [
      'Adobe Creative Suite (Premiere, After Effects, Photoshop, Illustrator)',
      'Producción de video & Motion Graphics',
      'Fotografía de retrato, producto y eventos',
      'Identidad de marca, diseño editorial y publicitario',
      'Desarrollo web (React, HTML/CSS)',
      'Gestión de redes sociales',
      'Producción musical completa (Proximamente)'
    ],
    buttonText: "Ponte en Contacto"
  },

  // Sección: Contacto
  contact: {
    sectionTitle: "Hablemos sobre tu",
    sectionTitleHighlight: "Próximo Proyecto",
    sectionDescription: "Estoy listo para aportar mis habilidades multidisciplinarias a tu idea, empresa o proyecto. Ponte en contacto para cotizaciones o colaboraciones.",
    phoneLabel: "WhatsApp",
    phoneNumber: "+57 321 7594770",
    phoneLink: "tel:+573217594770",
    emailLabel: "Email",
    emailAddress: "elcesar.tv@gmail.com",
    instagramLabel: "Instagram",
    instagramHandle: "@elcesarpro",
    instagramLink: "https://www.instagram.com/elcesarpro",
    locationLabel: "Ubicación",
    locationText: "Cali | Colombia",
    formButtonText: "Enviar Mensaje"
  },

  // Footer
  footer: {
    description: "Comunicador social multidisciplinario enfocado en producir contenido innovador, creativo y de alto impacto.",
    linksTitle: "Enlaces",
    contactTitle: "Contacto",
    copyrightText: "El César Pro. Todos los derechos reservados."
  }
};
