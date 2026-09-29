export const siteConfig = {
  brand: {
    name: 'lex.',
    slogan: 'FIRMA LEGAL CORPORATIVA · MADRID, ESPAÑA',
  },
  hero: {
    heading: 'Claridad legal para decisiones complejas.',
    description: 'Asesoría jurídica especializada en derecho corporativo, civil y protección patrimonial. Defendemos tus intereses con la máxima rigurosidad y discreción.',
    actions: [
      { label: 'Nuestros servicios', href: '#servicios', primary: true },
      { label: 'Agendar consulta', href: '#contacto', primary: false }
    ],
    metrics: [
      { value: '15+', label: 'años de trayectoria' },
      { value: '98%', label: 'resoluciones favorables' },
      { value: '500+', label: 'clientes corporativos' },
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1200',
      alt: 'Sala de juntas corporativa',
      badge: 'Derecho Corporativo',
      caption: 'Paseo de la Castellana · Madrid',
      price: '' 
    }
  },
  properties: {
    copy: {
      eyebrow: 'ÁREAS DE PRÁCTICA',
      heading: 'Especialidades de la Firma',
      description: 'Brindamos representación legal del más alto nivel en áreas críticas para el desarrollo y protección de su patrimonio corporativo.'
    },
    properties: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=85&w=800',
        title: 'Derecho Corporativo',
        location: 'Consultoría y Litigio',
        price: '', // Dejamos vacío el precio para la firma legal
        features: ['Contratos', 'Fusiones', 'Auditorías']
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=85&w=800',
        title: 'Protección Patrimonial',
        location: 'Civil y Mercantil',
        price: '',
        features: ['Fideicomisos', 'Sucesiones', 'Litigios']
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=800',
        title: 'Propiedad Intelectual',
        location: 'Registro y Defensa',
        price: '',
        features: ['Marcas', 'Patentes', 'Derechos de Autor']
      }
    ]
  },
  team: {
    copy: {
      eyebrow: 'NUESTRO EQUIPO',
      heading: 'Socios Fundadores',
      description: 'Juristas de primer nivel con décadas de experiencia combinada en litigios complejos y estructuración corporativa.'
    },
    members: [
      {
        id: 1,
        name: 'Arturo Mendoza',
        role: 'Socio Principal - Litigios',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=85&w=800',
        bio: 'Especialista en derecho penal corporativo y defensa patrimonial.'
      },
      {
        id: 2,
        name: 'Elena Rostova',
        role: 'Socia - Fusiones y Adquisiciones',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=85&w=800',
        bio: 'Líder del área de derecho internacional y contratos transfronterizos.'
      },
      {
        id: 3,
        name: 'Carlos Villalobos',
        role: 'Socio - Propiedad Intelectual',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=85&w=800',
        bio: 'Experto en registro de patentes y protección de activos intangibles.'
      }
    ]
  },
  successCases: {
    copy: {
      eyebrow: 'CASOS DE ÉXITO',
      heading: 'Resultados que Hablan por Sí Solos',
      description: 'Un historial comprobado de victorias estratégicas y transacciones históricas en los sectores más exigentes.'
    },
    cases: [
      {
        id: 1,
        title: 'Fusión Transfronteriza',
        sector: 'Sector Energético',
        metric: '$500M+',
        description: 'Asesoría integral en la adquisición de activos energéticos, sorteando complejos obstáculos regulatorios internacionales.'
      },
      {
        id: 2,
        title: 'Defensa Antimonopolio',
        sector: 'Tecnología',
        metric: 'Absolución Total',
        description: 'Representación exitosa ante tribunales mercantiles, desestimando acusaciones de prácticas anticompetitivas.'
      },
      {
        id: 3,
        title: 'Reestructuración Patrimonial',
        sector: 'Grupo Familiar',
        metric: 'Protección Total',
        description: 'Diseño y ejecución de estructuras fiduciarias complejas para asegurar la transición generacional de activos empresariales.'
      }
    ]
  },
  navigation: [
    { label: 'Áreas de Práctica', href: '#servicios' },
    { label: 'El Equipo', href: '#equipo' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'Contacto', href: '#contacto' },
  ],
  contact: {
    copy: {
      eyebrow: 'CONTACTO',
      heading: 'Agende una Consulta Privada',
      description: 'Nuestro equipo está a su disposición para evaluar su caso con la estricta confidencialidad que requiere el ámbito corporativo europeo e internacional.'
    },
    info: {
      address: 'Paseo de la Castellana 89, Planta 15. 28046 Madrid, España.',
      phone: '+34 91 555 0199',
      email: 'madrid@lex-corporate.com'
    },
    socialLinks: [
      { name: 'LinkedIn', icon: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com' },
    ]
  },
  footer: {
    copyrightLabel: 'Todos los derechos reservados.',
    developerText: 'Desarrollado por',
    developerName: 'luisjcm',
    developerUrl: 'https://luisjcm.com',
    legalLinks: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Términos de Servicio', href: '/terminos' },
    ]
  },
  accessibility: {
    navigationLabel: 'Navegación principal',
  }
}