export const siteConfig = {
  brand: {
    name: 'NovaMédica',
    slogan: 'ATENCIÓN INTEGRAL · MIAMI, FL',
  },
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Equipo Médico', href: '#equipo' },
    { label: 'Instalaciones', href: '#instalaciones' },
    { label: 'Contacto', href: '#contacto' }
  ],
  hero: {
    content: {
      heading: 'Tu salud en manos de especialistas de primer nivel.',
      description: 'Ofrecemos atención médica preventiva y especializada con equipos de última generación y un enfoque humano centrado en tu bienestar en el corazón de Miami.',
      actions: [
        { label: 'Agendar Cita', primary: true, href: '#contacto' },
        { label: 'Portal del Paciente', primary: false, href: '#portal' }
      ],
      metrics: [
        { value: '25+', label: 'Especialidades' },
        { value: '15k+', label: 'Pacientes' },
        { value: '24/7', label: 'Urgencias' }
      ],
      image: {
        url: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=85&w=1200',
        alt: 'Equipo médico de NovaMédica',
        caption: 'Brickell Medical Center · Miami'
      }
    }
  },
  contact: {
    socialLinks: [
      { name: 'LinkedIn', icon: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com' },
    ]
  },
  footer: {
    copyrightLabel: 'Todos los derechos reservados.',
    developerText: 'Desarrollado por',
    developerName: 'luisjcm',
    developerUrl: 'https://luisjcm.com',
    legalLinks: [
      { label: 'Política de Privacidad HIPAA', href: '/privacidad' },
      { label: 'Términos de Servicio', href: '/terminos' },
    ]
  },
  accessibility: {
    navigationLabel: 'Navegación principal',
  }
};