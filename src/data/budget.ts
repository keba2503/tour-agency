export const budgetIntro =
  "Diseño y desarrollo de una plataforma web profesional de reservas de tours turísticos en Alicante, orientada a un guía turístico autónomo. La web tomará como referencia funcional y visual plataformas líderes del sector como Civitatis, adaptando la experiencia a un negocio local con identidad propia.";

export interface PhaseItem {
  text: string;
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  icon: string;
  color: string;
  items: PhaseItem[];
}

export const phases: Phase[] = [
  {
    id: "phase-1",
    number: 1,
    title: "Análisis y Planificación",
    icon: "clipboard",
    color: "from-blue-500 to-blue-600",
    items: [
      { text: "Reuniones de briefing y toma de requisitos" },
      { text: "Análisis funcional y documento de especificaciones" },
      { text: "Arquitectura de la información y mapa del sitio" },
      { text: "Selección de tecnologías y entorno de desarrollo" },
    ],
  },
  {
    id: "phase-2",
    number: 2,
    title: "Diseño UX/UI",
    icon: "palette",
    color: "from-violet-500 to-violet-600",
    items: [
      { text: "Wireframes de todas las páginas (mobile-first)" },
      { text: "Diseño visual en alta fidelidad" },
      { text: "Adaptación responsive: móvil, tablet y escritorio" },
      { text: "Prototipo interactivo y validación con cliente" },
    ],
  },
  {
    id: "phase-3",
    number: 3,
    title: "Desarrollo Frontend",
    icon: "code",
    color: "from-emerald-500 to-emerald-600",
    items: [
      { text: "Maquetación HTML/CSS responsive" },
      { text: "Página de inicio con slider de tours destacados" },
      { text: "Catálogo de tours con filtros y búsqueda" },
      { text: "Ficha individual de tour (galería, vídeo, descripción, mapa, reseñas)" },
      { text: "Páginas institucionales (Sobre mí, Contacto, FAQ)" },
      { text: "Animaciones, microinteracciones y optimización UX" },
    ],
  },
  {
    id: "phase-4",
    number: 4,
    title: "Backend y Sistema de Reservas",
    icon: "server",
    color: "from-amber-500 to-amber-600",
    items: [
      { text: "Panel de administración (gestión de tours, fechas y precios)" },
      { text: "Calendario de disponibilidad en tiempo real" },
      { text: "Motor de reservas (fecha, hora, personas, extras)" },
      { text: "Pasarela de pago online (Stripe / Redsys)" },
      { text: "Opción de pago completo o reserva con señal" },
      { text: "Emails automáticos (confirmación, recordatorio, cancelación)" },
      { text: "Gestión de reservas (listado, estados, exportación)" },
      { text: "Sistema de reseñas y valoraciones" },
    ],
  },
  {
    id: "phase-5",
    number: 5,
    title: "Multiidioma (ES / EN)",
    icon: "globe",
    color: "from-cyan-500 to-cyan-600",
    items: [
      { text: "Sistema completo de traducción español e inglés" },
      { text: "Traducción de toda la interfaz y textos del sistema" },
      { text: "Gestión de contenidos traducidos desde el panel" },
    ],
  },
  {
    id: "phase-6",
    number: 6,
    title: "SEO, Rendimiento y Lanzamiento",
    icon: "rocket",
    color: "from-rose-500 to-rose-600",
    items: [
      { text: "Optimización SEO completa (detalle en sección dedicada)" },
      { text: "Rendimiento optimizado (imágenes, caché, carga rápida)" },
      { text: "Configuración de hosting, SSL y dominio" },
      { text: "Testing en todos los navegadores y dispositivos" },
      { text: "Puesta en producción" },
    ],
  },
  {
    id: "phase-7",
    number: 7,
    title: "Formación y Documentación",
    icon: "book",
    color: "from-indigo-500 to-indigo-600",
    items: [
      { text: "Manual de usuario del panel de administración" },
      { text: "Sesión de formación personalizada por videollamada" },
    ],
  },
];

export interface SeoPoint {
  title: string;
  description: string;
}

export const seoExplanation = {
  intro:
    "Cuando alguien busca \"tours en Alicante\" o \"guía turístico Alicante\" en Google, queremos que tu web aparezca entre los primeros resultados. Para conseguirlo, trabajamos en lo que se llama SEO (Search Engine Optimization), que no es más que preparar tu web para que los buscadores la entiendan, la valoren y la muestren a las personas adecuadas.",
  points: [
    {
      title: "Que Google entienda de qué va tu web",
      description:
        "Cada página de tu web tendrá títulos, descripciones y etiquetas pensados para que Google sepa exactamente qué ofreces: tours en Alicante, experiencias gastronómicas, visitas culturales... Esto hace que cuando alguien busque esos términos, tu web aparezca como resultado relevante.",
    },
    {
      title: "Que tu web cargue rápido",
      description:
        "Google premia las webs rápidas. Optimizaremos las imágenes, el código y la estructura para que tu página cargue en menos de 2 segundos. Esto no solo mejora tu posición en Google, sino que tus visitantes no se irán por esperar demasiado.",
    },
    {
      title: "Que funcione perfecta en el móvil",
      description:
        "Más del 70% de los turistas buscan desde su teléfono. Tu web estará diseñada primero para móvil (mobile-first) y Google la indexará mejor por ello. Una web que no se ve bien en el móvil pierde posiciones automáticamente.",
    },
    {
      title: "Que Google muestre información rica de tu negocio",
      description:
        "Implementaremos datos estructurados (Schema Markup) para que Google muestre tu negocio con estrellas de valoración, precios, horarios y ubicación directamente en los resultados de búsqueda, sin que el usuario tenga que entrar a tu web. Esto multiplica los clics.",
    },
    {
      title: "Que cada tour tenga su propia página optimizada",
      description:
        "Cada tour tendrá su URL amigable (por ejemplo, tuweb.com/tours/castillo-santa-barbara) con contenido único, fotos optimizadas y toda la información que Google necesita para posicionarlo cuando alguien busque ese lugar o actividad.",
    },
    {
      title: "Que tu web esté conectada con Google",
      description:
        "Configuraremos Google Search Console y un mapa del sitio (sitemap) para que Google descubra y rastree todas tus páginas automáticamente. También integraremos Google Analytics para que puedas ver cuántas visitas recibes y de dónde vienen.",
    },
  ] as SeoPoint[],
  closing:
    "En resumen: tu web no solo será bonita y funcional, sino que estará preparada para competir en Google y atraer visitantes que buscan exactamente lo que tú ofreces.",
};

export interface TimelineItem {
  phase: string;
  duration: string;
  deliverable: string;
}

export const timeline: TimelineItem[] = [
  {
    phase: "Jornada 1",
    duration: "8 horas",
    deliverable: "Análisis, planificación y diseño UX/UI",
  },
  {
    phase: "Jornada 2",
    duration: "8 horas",
    deliverable: "Desarrollo frontend y maquetación completa",
  },
  {
    phase: "Jornada 3",
    duration: "8 horas",
    deliverable: "Backend, reservas y pasarela de pago",
  },
  {
    phase: "Jornada 4",
    duration: "8 horas",
    deliverable: "Multiidioma, SEO, testing y puesta en producción",
  },
];

export const includes = [
  "Diseño y desarrollo completo de la web según las fases descritas",
  "Hasta 2 rondas de revisión de diseño incluidas",
  "Carga inicial de contenido de hasta 10 tours",
  "Configuración de hosting, dominio y certificado SSL",
  "Manual de usuario y sesión de formación",
  "30 días de soporte técnico post-lanzamiento para incidencias",
];

export const excludes = [
  "Coste del hosting y dominio (estimado: 10-30 €/mes)",
  "Creación de contenido: textos, fotos profesionales y vídeos",
  "Traducción profesional de los contenidos de los tours",
  "Comisiones de la pasarela de pago (Stripe: ~1,4% + 0,25 € por transacción)",
  "Mantenimiento mensual posterior al periodo de soporte",
  "Desarrollo de app móvil nativa",
];
