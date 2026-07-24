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
      { name: 'Diseño Gráfico', subcategories: ['Branding', 'Editorial | Organizacional', 'Publicitario | Marketing Digital'] },
      { name: 'Fotografía', subcategories: ['Book', 'Mascotas', 'Eventos', 'Empresarial','Servicio', 'Producto'] },
      { name: 'Web', subcategories: ['Diseño y Desarrollo'] },
      { name: 'Social Media', subcategories: ['Community Management'] },
      { name: 'Producción Musical', subcategories: [] }
    ],
    projects: [
      {
        id: 1,
        title: 'Super USA TV',
        category: 'Diseño Gráfico',
        subcategory: 'Branding',
        image: "/images/sutv2.jpg",
        description: 'Identidad visual y creación de logotipo.',
        
        // --- NUEVOS CAMPOS / PÁGINA DETALLE ---
        longDescription: 'Para el canal Super USA TV, desarrollé una identidad visual completa y un sistema de branding moderno que refleja su enfoque dinámico y contemporáneo en la industria del entretenimiento y noticias. \n\nEl desafío principal fue crear un logotipo que se viera excelente tanto en las pantallas de transmisión como en formato digital para redes sociales y la plataforma web. El resultado fue una imagen corporativa robusta con un alto nivel de recordación.',
        client: 'Super USA TV',
        date: '2024-01', // Formato recomendado: AAAA-MM-DD para poder ordenar
        role: 'Diseñador Gráfico y Branding',
        externalLink: 'https://www.youtube.com/@superusatv',
        gallery: [
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
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
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
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
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
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
        
        // --- NUEVOS CAMPOS / PÁGINA DETALLE ---
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
          '/images/IMG_4867_EDIT.jpg',
          '/images/Andrea04.jpg',
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
          '/images/daru1.jpg',
          '/images/daru2.png',
          '/images/daru3.jpg',
   
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
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
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
        gallery: [
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
        ]
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
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
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
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
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
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
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
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
        ]
        // -------------------------------------------------------------
      },
      {
        id: 14,
        title: 'Prueba',
        category: 'Audiovisual',
        subcategory: 'Edición | Post',
        image: 'https://res.cloudinary.com/q1wjkl7g/video/upload/v1784849777/2023_LA62_CAS_MEDIOS_y1z4ov.mp4',
        videoFormat: 'vertical',
        longDescription: 'Edición integral de este teaser personal creado como tributo a mi mascota. Un proyecto cargado de emoción donde combiné el montaje rítmico con animaciones en motion graphics para crear una pieza visual dinámica, memorable y llena de significado.',
        gallery: [
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
        ]
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
    descriptionParagraph1: "Soy César Olaya, profesional multidisciplinario apasionado por crear contenido visual y auditivo de alto impacto. Mi enfoque único combina mis habilidades en producción, diseño y web para ofrecer soluciones integrales a mis clientes.",
    descriptionParagraph2: "Desde la conceptualización hasta la entrega final, me comprometo a superar las expectativas en cada proyecto, ya sea dando vida a una marca, capturando momentos irrepetibles o produciendo piezas que tengan impacto y recordación.",
    skillsTitle: "Áreas de Experiencia",
    skillsList: [
      'Adobe Creative Suite (Premiere, After Effects, Photoshop, Illustrator)',
      'Producción de Video & Motion Graphics',
      'Fotografía de Retrato, Producto y Eventos',
      'Identidad de Marca y Diseño de Logotipos',
      'Desarrollo Web (React, HTML/CSS)',
      'Gestión de Redes Sociales',
      'Producción Musical Urbana (Proximamente)'
    ],
    buttonText: "Ponte en Contacto"
  },

  // Sección: Contacto
  contact: {
    sectionTitle: "Hablemos sobre tu",
    sectionTitleHighlight: "Próximo Proyecto",
    sectionDescription: "Estoy listo para aportar mis habilidades multidisciplinarias a tu visión. Ponte en contacto para cotizaciones o colaboraciones.",
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
    description: "Creativo multidisciplinario enfocado en brindar soluciones visuales y auditivas de la más alta calidad.",
    linksTitle: "Enlaces",
    contactTitle: "Contacto",
    copyrightText: "El César Pro. Todos los derechos reservados."
  }
};
