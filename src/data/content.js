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
    heroImage: "https://media.licdn.com/dms/image/v2/D4E03AQFNcD8BrQnKXw/profile-displayphoto-crop_800_800/B4EZyhEZX5KcAM-/0/1772228815723?e=1774483200&v=beta&t=ZLiu54K9MOerJLMBqzCFTYC6In8Ww-vGLK99vZZ-xr0", // <- Puede ser un texto o un link (ej. https://...)
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
        description: 'Especialista en género urbano, creación de instrumentales y producción sonora completa bajo el sello La G2 Music.',
        iconName: 'Music'
      }
    ]
  },

  // Sección: Portafolio
  portfolio: {
    sectionTitle: "Trabajos",
    sectionTitleHighlight: "Destacados",
    sectionDescription: "Una selección de mis mejores proyectos creativos.",
    categories: ['All', 'Audiovisual', 'Diseño Gráfico', 'Fotografía', 'Música'],
    projects: [
      {
        id: 1,
        title: 'Super USA TV',
        category: 'Diseño Gráfico',
        image: 'logo-brand',
        description: 'Identidad visual y logotipo corporativo.',
        
        // --- NUEVOS CAMPOS OPCIONALES PARA LA PÁGINA DE DETALLE ---
        longDescription: 'Para la cadena de televisión Super USA TV, desarrollé una identidad visual completa y un sistema de branding moderno que refleja su enfoque dinámico y contemporáneo en la industria del entretenimiento y noticias. \n\nEl desafío principal fue crear un logotipo que se viera excelente tanto en las pantallas de transmisión como en formato digital para redes sociales y la plataforma web. El resultado fue una imagen corporativa robusta con un alto nivel de recordación.',
        client: 'Canal Super USA TV',
        date: '2023-10-15', // Formato recomendado: AAAA-MM-DD para poder ordenar
        displayDate: 'Octubre 2023', // Fecha formateada para mostrar en los detalles (opcional)
        role: 'Director de Arte & Diseñador Gráfico',
        externalLink: 'https://example.com/superusatv',
        gallery: [
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop'
        ]
        // -------------------------------------------------------------
      },
      {
        id: 2,
        title: 'Rodando con Jefferson',
        category: 'Audiovisual',
        image: 'https://www.youtube.com/watch?v=aF_fXdMbCn0',
        description: 'Producción de Podcast completo.',
        date: '2023-11-20',
        // Ejemplo de descripción larga simple:
        longDescription: 'Servicio integral de producción, grabación a múltiples cámaras y post-producción de audio y video para el podcast "Rodando con Jefferson". Entregando episodios de alta calidad listos para distribución multiplataforma.',
        role: 'Productor Audiovisual',
        gallery: [
           'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Ejemplo de video en galería
        ]
      },
      {
        id: 3,
        title: 'La G2 Music',
        category: 'Música',
        image: 'https://www.youtube.com/watch?v=7hJ00483eN4',
        date: '2024-01-10',
        description: 'Producción de instrumentales urbanas.'
      },
      {
        id: 4,
        title: 'Kim\'s New York Pizza',
        category: 'Diseño Gráfico',
        image: 'brand-pizza',
        date: '2023-05-12',
        description: 'Logotipo y branding comercial.'
      },
      {
        id: 5,
        title: 'Retratos Corporativos',
        category: 'Fotografía',
        image: 'photo-corp',
        date: '2022-09-05',
        description: 'Sesión fotográfica para ejecutivos.'
      },
      {
        id: 6,
        title: 'CODECTI Foro',
        category: 'Audiovisual',
        image: 'event-video',
        date: '2023-08-22',
        description: 'Cobertura audiovisual de evento tech.'
      },
      {
        id: 7,
        title: 'Proyecto Cesar',
        category: 'Diseño Gráfico',
        image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        date: '2024-01-10',
        description: 'Producción de instrumentales urbanas.'
      },
      {
        id: 8,
        title: 'Proyecto Cesar',
        category: 'Diseño Gráfico',
        image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        date: '2024-01-10',
        description: 'Producción de instrumentales urbanas.'
      },
      {
        id: 9,
        title: 'Proyecto Cesar',
        category: 'Diseño Gráfico',
        image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        date: '2024-01-10',
        description: 'Producción de instrumentales urbanas.'
      },
      {
        id: 10,
        title: 'Proyecto Cesar',
        category: 'Diseño Gráfico',
        image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        date: '2024-01-10',
        description: 'Producción de instrumentales urbanas.'
      },
      {
        id: 11,
        title: 'Proyecto Cesar',
        category: 'Diseño Gráfico',
        image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        date: '2024-01-10',
        description: 'Producción de instrumentales urbanas.'
      },
      {
        id: 12,
        title: 'Proyecto Cesar',
        category: 'Diseño Gráfico',
        image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        date: '2024-01-10',
        description: 'Producción de instrumentales urbanas.'
      }
    ]
  },

  // Sección: Sobre Mí (Perfil)
  about: {
    aboutImage: "PERFIL", // <- Puede ser un texto o un link (ej. https://...)
    badgeYears: "+5",
    badgeText: "Años de\nExperiencia",
    sectionTitle: "Detrás del",
    sectionTitleHighlight: "Lente y Creatividad",
    descriptionParagraph1: "Soy El César Pro, un profesional multidisciplinario apasionado por crear contenido visual y auditivo de alto impacto. Mi enfoque único combina mis habilidades en producción, diseño y música para ofrecer soluciones integrales a mis clientes.",
    descriptionParagraph2: "Desde la conceptualización hasta la entrega final, me comprometo a superar las expectativas en cada proyecto, ya sea dando vida a una marca, capturando momentos irrepetibles o produciendo el próximo hit urbano bajo el sello La G2 Music.",
    skillsTitle: "Áreas de Experiencia",
    skillsList: [
      'Adobe Creative Suite (Premiere, After Effects, Photoshop, Illustrator)',
      'Producción de Video & Motion Graphics',
      'Fotografía de Retrato, Producto y Eventos',
      'Identidad de Marca y Diseño de Logotipos',
      'Desarrollo Web (React, HTML/CSS)',
      'Gestión de Redes Sociales',
      'Producción Musical Urbana (La G2 Music)'
    ],
    buttonText: "Ponte en Contacto"
  },

  // Sección: Contacto
  contact: {
    sectionTitle: "Hablemos sobre tu",
    sectionTitleHighlight: "Próximo Proyecto",
    sectionDescription: "Estoy listo para aportar mis habilidades multidisciplinarias a tu visión. Ponte en contacto para cotizaciones o colaboraciones.",
    phoneLabel: "WhatsApp / Teléfono",
    phoneNumber: "+57 321 7594770",
    phoneLink: "tel:+573217594770",
    emailLabel: "Email",
    emailAddress: "elcesarpro@example.com",
    instagramLabel: "Instagram",
    instagramHandle: "@elcesarpro",
    instagramLink: "https://www.instagram.com/elcesarpro",
    locationLabel: "Ubicación",
    locationText: "Colombia",
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
