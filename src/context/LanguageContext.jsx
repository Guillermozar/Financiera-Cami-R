import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    preloader: {
      motto1: "Impulsamos tu presente.",
      motto2: "Construimos tu futuro."
    },
    common: {
      backToHome: "Volver al Inicio",
      cancelAndBack: "Cancelar y Volver",
      whatsappBtn: "Hablar por WhatsApp",
      whatsappCTA: "Solicitar Asesoría por WhatsApp",
      submit: "Enviar solicitud.",
      submitting: "Procesando...",
      success: "¡Solicitud Recibida!",
      error: "Error",
      contactFormBtn: "Completar Formulario de Contacto"
    },
    navbar: {
      about: "Quiénes Somos",
      credits: "Créditos",
      personal: "Créditos Personales",
      micro: "Créditos Microempresariales",
      documents: "Descuento de Documentos",
      contact: "Contacto"
    },
    hero: {
      title: "Impulsamos tu presente, construimos tu futuro.",
      subtitle: "En Orianza creemos que cada proyecto merece una oportunidad para crecer. Por eso ofrecemos soluciones financieras responsables, ágiles y pensadas para acompañarte en cada etapa.",
      languages: "Español • Alemán • Guaraní",
      communicationText: "Creemos que las mejores relaciones comienzan con una comunicación clara, cercana y transparente.",
      formTitle: "Solicitá tu crédito.",
      formSubtitle: "Completá tus datos y un asesor te contactará al instante.",
      fieldName: "Nombre y apellido",
      fieldPhone: "Número de teléfono",
      fieldProduct: "Tipo de solicitud",
      selectPrompt: "Seleccioná una opción",
      consent: "Autorizo a Orianza a contactarme y a realizar la consulta de mi perfil crediticio de conformidad con la Ley N° 6534/20 de Protección de Datos Personales en Paraguay.",
      successMessage: "¡Excelente! Tu solicitud ha sido registrada. Te estamos redirigiendo a WhatsApp para iniciar tu atención inmediata.",
      errors: {
        nameEmpty: "El nombre y apellido son obligatorios",
        nameShort: "Mínimo 5 caracteres para tu nombre completo",
        phoneEmpty: "El número de teléfono es obligatorio",
        phoneInvalid: "Ingresa un número válido (ej. 0981 123 456)",
        productEmpty: "Por favor selecciona el tipo de crédito/solicitud",
        consentRequired: "Debes aceptar la política de protección de datos personales"
      }
    },
    franjaDestacada: {
      text: "Impulsá tus proyectos con soluciones financieras de hasta G. 15.000.000 • Hasta 18 cuotas • Requisitos mínimos.",
      button: "Solicitar mi crédito"
    },
    porqueElegir: {
      title: "¿Por qué elegir Orianza?",
      cuotasTitle: "Cuotas accesibles",
      cuotasDesc: "Opciones de financiación adaptadas a tus posibilidades.",
      aprobacionTitle: "Aprobación rápida",
      aprobacionDesc: "Analizamos tu solicitud con agilidad y eficiencia.",
      requisitosTitle: "Requisitos simples",
      requisitosDesc: "Un proceso claro con la documentación necesaria.",
      atencionTitle: "Atención personalizada",
      atencionDesc: "Te acompañamos durante todo el proceso."
    },
    oportunidades: {
      title: "Creemos en las oportunidades",
      text: "En Orianza creemos que un crédito representa mucho más que un respaldo financiero. Representa la posibilidad de emprender, crecer, superar desafíos y hacer realidad nuevos proyectos. Nuestro compromiso es acompañar ese camino con responsabilidad, transparencia y la confianza que cada persona merece."
    },
    valores: {
      title: "Nuestros Valores",
      confianzaTitle: "Confianza",
      confianzaDesc: "Construimos relaciones duraderas y sólidas basadas en la honestidad y el respeto mutuo.",
      agilidadTitle: "Agilidad",
      agilidadDesc: "Respuestas rápidas y procesos simplificados para que no pierdas tiempo en alcanzar tus metas.",
      transparenciaTitle: "Transparencia",
      transparenciaDesc: "Condiciones claras y sin sorpresas para que decidas con total tranquilidad.",
      compromisoTitle: "Compromiso",
      compromisoDesc: "Te acompañamos de manera responsable y cercana en cada etapa de tu crecimiento."
    },
    quienesSomos: {
      title: "Quiénes Somos",
      subtitle: "Relaciones de confianza a largo plazo y enfoque humano.",
      historyTitle: "Nuestra historia",
      historyText: "Orianza nació con la convicción de que acceder a una solución financiera debe ser un proceso basado en la confianza, la transparencia y el compromiso. Fundada en 2026 en Bella Vista, Itapúa, Paraguay, Orianza continúa creciendo con el propósito de brindar soluciones financieras confiables y construir relaciones duraderas basadas en la confianza y el compromiso. Con una visión orientada al crecimiento y la mejora continua, trabajamos cada día para ofrecer un servicio profesional, responsable y cercano a quienes confían en nosotros.",
      solidezTitle: "Nuestra Solidez Legal y Transparencia",
      bcpTitle: "Regulado por el BCP",
      bcpText: "Orianza opera de manera legal y transparente, bajo la supervisión y regulación del Banco Central del Paraguay, garantizando la seguridad y cumplimiento normativo en todas nuestras operaciones."
    },
    creditosPersonales: {
      title: "Créditos Personales",
      subtitle: "Financiamiento a tu medida, sin complicaciones y con aprobación ágil.",
      desc: "Entendemos que hay momentos donde necesitás un respaldo financiero rápido para alcanzar tus metas personales, realizar reformas en tu hogar, cubrir gastos médicos o consolidar deudas. Nuestro proceso es humano, directo y transparente.",
      benefitsTitle: "Beneficios Clave",
      benefits: [
        "Aprobación rápida en menos de 24 horas hábiles.",
        "Tasas fijas y cuotas en Guaraníes durante todo el plazo.",
        "Atención y asesoramiento 100% personalizado.",
        "Requisitos mínimos y sin papeleos innecesarios.",
        "Sin penalizaciones por pagos anticipados o precancelación."
      ]
    },
    creditosMicro: {
      title: "Créditos Microempresariales",
      subtitle: "El impulso financiero que tu negocio necesita para seguir creciendo.",
      desc: "Apoyamos a los microempresarios y emprendedores de Paraguay. Sabemos que tu negocio es el motor de tu familia y del país, por eso te ofrecemos créditos flexibles para compra de mercaderías, maquinarias o capital de trabajo.",
      benefitsTitle: "Diseñado para tu Comercio",
      benefits: [
        "Financiamiento ágil adaptado al ciclo de ingresos de tu negocio.",
        "Requisitos simplificados para profesionales independientes y comercios.",
        "Desembolso directo para compra de materia prima o equipamiento.",
        "Asesores especializados que entienden tu realidad.",
        "Plazos cómodos para no asfixiar tu flujo de caja."
      ]
    },
    descuentoDocumentos: {
      title: "Descuento de Documentos",
      subtitle: "Convertí tus cheques y facturas por cobrar en liquidez inmediata.",
      desc: "No esperes 30, 60 o 90 días para cobrar tus facturas o cheques diferidos. En Orianza te anticipamos el efectivo que necesitas para mantener tu flujo de caja activo y seguir operando sin interrupciones.",
      benefitsTitle: "Ventajas de operar con nosotros",
      benefits: [
        "Liquidez inmediata para tu capital de trabajo diario.",
        "Tasas de descuento altamente competitivas.",
        "Proceso de calificación de emisores rápido y seguro.",
        "Atención personalizada y reserva absoluta en las operaciones.",
        "Optimización de tus ratios financieros al reducir cuentas por cobrar."
      ]
    },
    contacto: {
      title: "Hablemos de tu próximo proyecto",
      subtitle: "Atención en español, alemán y guaraní.",
      address: "Bella Vista, Itapúa – Paraguay",
      formTitle: "Envianos un mensaje",
      fieldName: "Nombre Completo *",
      fieldEmail: "Correo Electrónico *",
      fieldPhone: "Teléfono / WhatsApp *",
      fieldMessage: "Detalle de tu mensaje o consulta *",
      submitBtn: "Enviar Mensaje",
      officialWhatsapp: "WhatsApp Oficial",
      landline: "Teléfono Fijo",
      emailLabel: "Correo Electrónico",
      successTitle: "¡Mensaje Enviado!",
      successDesc: "Hemos recibido tu consulta. Un asesor de Orianza se pondrá en contacto contigo a la brevedad.",
      directChannels: "Canales Directos",
      hoursTitle: "Horario de Atención",
      hoursWeek: "Lunes a Viernes: 08:00 a 17:00 hs.",
      hoursSat: "Sábados: 08:00 a 12:00 hs.",
      errors: {
        name: "El nombre es obligatorio",
        email: "El correo electrónico es obligatorio",
        emailInvalid: "Ingresa un correo electrónico válido",
        phone: "El teléfono es obligatorio",
        message: "El mensaje no puede estar vacío"
      }
    },
    footer: {
      desc: "Construyendo relaciones de confianza a largo plazo a través de servicios financieros ágiles, transparentes y con un profundo enfoque humano.",
      legalId: "Identificación Legal",
      rights: "© 2026 Orianza S.A. Todos los derechos reservados.",
      bcpNotice: "Orianza S.A. opera bajo la supervisión y regulación del Banco Central del Paraguay (BCP).",
      links: {
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad"
      }
    },
    terminos: {
      title: "Términos y Condiciones de Uso",
      subtitle: "Por favor, lea atentamente las condiciones de uso de nuestra plataforma y servicios financieros.",
      lastUpdated: "Última actualización: 30 de Junio de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          text: "Al acceder y utilizar este sitio web y los servicios de Orianza S.A., usted acepta y se compromete a cumplir de manera obligatoria con los presentes Términos y Condiciones, así como con todas las leyes y regulaciones aplicables en la República del Paraguay."
        },
        {
          title: "2. Condiciones para Solicitud de Créditos",
          text: "Toda solicitud de crédito está sujeta a la aprobación de las políticas internas de crédito de Orianza S.A., análisis de capacidad de pago y perfil de riesgo. Las simulaciones u ofertas preliminares presentadas en el sitio web tienen un carácter meramente informativo y de ninguna manera representan un compromiso de desembolso obligatorio o una propuesta de contrato vinculante."
        },
        {
          title: "3. Consentimiento de Consulta de Datos",
          text: "De acuerdo con la Ley N° 6534/20 'De Protección de Datos Personales en Paraguay', al enviar un formulario de contacto o solicitud, el usuario autoriza expresamente a Orianza S.A. a recopilar, tratar y consultar sus antecedentes crediticios y de comportamiento de pago a través de burós de información autorizados."
        },
        {
          title: "4. Uso Correcto de la Plataforma",
          text: "El usuario se compromete a proveer información real, verídica y actualizada. El uso de identidades falsas o documentación fraudulenta anulará cualquier solicitud de inmediato y será reportado a las autoridades pertinentes según el Código Penal paraguayo."
        },
        {
          title: "5. Modificaciones de los Términos",
          text: "Orianza S.A. se reserva el derecho de modificar o actualizar estos términos en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar esta sección periódicamente."
        }
      ]
    },
    privacidad: {
      title: "Política de Privacidad",
      subtitle: "Nos tomamos muy en serio la seguridad y privacidad de sus datos personales. Conozca cómo tratamos su información.",
      lastUpdated: "Última actualización: 30 de Junio de 2026",
      sections: [
        {
          title: "1. Recopilación de Información",
          text: "Recopilamos información personal provista voluntariamente por usted en nuestros formularios, como nombre completo, número de teléfono, dirección de correo electrónico y detalles específicos relacionados con su solicitud financiera."
        },
        {
          title: "2. Finalidad del Tratamiento de Datos",
          text: "Utilizamos su información personal únicamente para: (a) Evaluar y procesar sus solicitudes de crédito; (b) Comunicarnos con usted para brindarle asesoramiento; (c) Cumplir con las normativas vigentes del Banco Central del Paraguay (BCP) y de la Secretaría de Prevención de Lavado de Dinero o Bienes (SEPRELAD)."
        },
        {
          title: "3. Protección y Confidencialidad",
          text: "Implementamos estrictas medidas de seguridad técnica y administrativa para evitar la pérdida, robo, uso indebido o alteración de sus datos. En cumplimiento con la Ley N° 6534/20, no compartiremos sus datos personales con terceros para fines comerciales o de marketing sin su consentimiento expreso."
        },
        {
          title: "4. Derechos del Titular de Datos",
          text: "Usted tiene derecho a solicitar el acceso, rectificación, actualización o supresión de sus datos personales. Para ejercer estos derechos, puede comunicarse directamente con nosotros a través de los canales oficiales de contacto provistos en este sitio."
        }
      ]
    }
  },
  en: {
    preloader: {
      motto1: "We boost your present.",
      motto2: "We build your future."
    },
    common: {
      backToHome: "Back to Home",
      cancelAndBack: "Cancel and Go Back",
      whatsappBtn: "Chat on WhatsApp",
      whatsappCTA: "Request WhatsApp Advisory",
      submit: "Send application.",
      submitting: "Processing...",
      success: "Application Received!",
      error: "Error",
      contactFormBtn: "Fill Out Contact Form"
    },
    navbar: {
      about: "About Us",
      credits: "Loans",
      personal: "Personal Loans",
      micro: "Micro-business Loans",
      documents: "Document Discounting",
      contact: "Contact"
    },
    hero: {
      title: "We boost your present, we build your future.",
      subtitle: "At Orianza, we believe every project deserves a chance to grow. That's why we offer responsible, agile financial solutions designed to support you at every stage.",
      languages: "Español • Alemán • Guaraní",
      communicationText: "We believe the best relationships start with clear, close, and transparent communication.",
      formTitle: "Apply for your credit.",
      formSubtitle: "Complete your details and an advisor will contact you instantly.",
      fieldName: "Full name",
      fieldPhone: "Phone number",
      fieldProduct: "Application type",
      selectPrompt: "Select an option",
      consent: "I authorize Orianza to contact me and check my credit profile in accordance with Law N° 6534/20 on the Protection of Personal Data in Paraguay.",
      successMessage: "Excellent! Your application has been registered. We are redirecting you to WhatsApp to start your immediate attention.",
      errors: {
        nameEmpty: "Full name is required",
        nameShort: "Minimum 5 characters for your full name",
        phoneEmpty: "Phone number is required",
        phoneInvalid: "Enter a valid phone number (e.g., 0981 123 456)",
        productEmpty: "Please select the application/credit type",
        consentRequired: "You must accept the personal data protection policy"
      }
    },
    franjaDestacada: {
      text: "Boost your projects with financial solutions of up to G. 15,000,000 • Up to 18 installments • Minimum requirements.",
      button: "Apply for my credit"
    },
    porqueElegir: {
      title: "Why choose Orianza?",
      cuotasTitle: "Affordable installments",
      cuotasDesc: "Financing options adapted to your possibilities.",
      aprobacionTitle: "Fast approval",
      aprobacionDesc: "We analyze your application with agility and efficiency.",
      requisitosTitle: "Simple requirements",
      requisitosDesc: "A clear process with the necessary documentation.",
      atencionTitle: "Personalized support",
      atencionDesc: "We accompany you throughout the entire process."
    },
    oportunidades: {
      title: "We believe in opportunities",
      text: "At Orianza, we believe a credit represents much more than financial backing. It represents the possibility of undertaking, growing, overcoming challenges, and making new projects a reality. Our commitment is to support that path with responsibility, transparency, and the trust that each person deserves."
    },
    valores: {
      title: "Our Values",
      confianzaTitle: "Trust",
      confianzaDesc: "We build long-term and solid relationships based on honesty and mutual respect.",
      agilidadTitle: "Agility",
      agilidadDesc: "Fast responses and simplified processes so you don't waste time reaching your goals.",
      transparenciaTitle: "Transparency",
      transparenciaDesc: "Clear conditions without surprises, allowing you to decide with total peace of mind.",
      compromisoTitle: "Commitment",
      compromisoDesc: "We accompany you in a responsible and close manner throughout every stage of your growth."
    },
    quienesSomos: {
      title: "About Us",
      subtitle: "Long-term relationships of trust and a human-centric focus.",
      historyTitle: "Our history",
      historyText: "Orianza was born with the conviction that accessing a financial solution should be a process based on trust, transparency, and commitment. Founded in 2026 in Bella Vista, Itapúa, Paraguay, Orianza continues to grow with the purpose of providing reliable financial solutions and building long-lasting relationships based on trust and commitment. With a vision oriented towards growth and continuous improvement, we work every day to offer a professional, responsible, and close service to those who trust us.",
      solidezTitle: "Our Legal Solidity & Transparency",
      bcpTitle: "Regulated by the BCP",
      bcpText: "Orianza operates legally and transparently under the supervision and regulation of the Central Bank of Paraguay (BCP), guaranteeing security and regulatory compliance in all our operations."
    },
    creditosPersonales: {
      title: "Personal Loans",
      subtitle: "Financing tailored to you, without complications and with agile approval.",
      desc: "We understand that there are times when you need quick financial support to achieve your personal goals, make home renovations, cover medical expenses, or consolidate debt. Our process is human, direct, and transparent.",
      benefitsTitle: "Key Benefits",
      benefits: [
        "Quick approval in less than 24 business hours.",
        "Fixed rates and installments in Guaraníes throughout the term.",
        "100% personalized attention and advice.",
        "Minimum requirements and no unnecessary paperwork.",
        "No penalties for early payments or pre-cancellation."
      ]
    },
    creditosMicro: {
      title: "Micro-business Loans",
      subtitle: "The financial boost your business needs to keep growing.",
      desc: "We support micro-entrepreneurs and business owners in Paraguay. We know your business is the engine of your family and the country, which is why we offer flexible credits for purchasing merchandise, machinery, or working capital.",
      benefitsTitle: "Designed for Your Business",
      benefits: [
        "Agile financing adapted to your business's revenue cycle.",
        "Simplified requirements for independent professionals and shops.",
        "Direct disbursement for purchasing raw materials or equipment.",
        "Specialized advisors who understand your reality.",
        "Comfortable terms to avoid suffocating your cash flow."
      ]
    },
    descuentoDocumentos: {
      title: "Document Discounting",
      subtitle: "Convert your checks and accounts receivable into immediate liquidity.",
      desc: "Don't wait 30, 60, or 90 days to collect on your invoices or deferred checks. At Orianza, we advance the cash you need to keep your cash flow active and continue operating without interruptions.",
      benefitsTitle: "Advantages of operating with us",
      benefits: [
        "Immediate liquidity for your daily working capital.",
        "Highly competitive discount rates.",
        "Fast and secure issuer qualification process.",
        "Personalized attention and absolute discretion in operations.",
        "Optimization of your financial ratios by reducing accounts receivable."
      ]
    },
    contacto: {
      title: "Let's talk about your next project",
      subtitle: "Support in Spanish, German, and Guaraní.",
      address: "Bella Vista, Itapúa – Paraguay",
      formTitle: "Send Us a Message",
      fieldName: "Full Name *",
      fieldEmail: "Email Address *",
      fieldPhone: "Phone / WhatsApp *",
      fieldMessage: "Details of your message or inquiry *",
      submitBtn: "Send Message",
      officialWhatsapp: "Official WhatsApp",
      landline: "Landline",
      emailLabel: "Email Address",
      successTitle: "Message Sent!",
      successDesc: "We have received your inquiry. An Orianza advisor will contact you shortly.",
      directChannels: "Direct Channels",
      hoursTitle: "Business Hours",
      hoursWeek: "Monday to Friday: 08:00 to 17:00 hs.",
      hoursSat: "Saturdays: 08:00 to 12:00 hs.",
      errors: {
        name: "Name is required",
        email: "Email is required",
        emailInvalid: "Enter a valid email address",
        phone: "Phone number is required",
        message: "Message cannot be empty"
      }
    },
    footer: {
      desc: "Building long-term relationships of trust through agile, transparent financial services with a deep human-centric focus.",
      legalId: "Legal Identification",
      rights: "© 2026 Orianza S.A. All rights reserved.",
      bcpNotice: "Orianza S.A. operates under the supervision and regulation of the Central Bank of Paraguay (BCP).",
      links: {
        terms: "Terms & Conditions",
        privacy: "Privacy Policy"
      }
    },
    terminos: {
      title: "Terms and Conditions of Use",
      subtitle: "Please read the terms and conditions of use for our platform and financial services carefully.",
      lastUpdated: "Last updated: June 30, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          text: "By accessing and using this website and the services of Orianza S.A., you accept and agree to be bound by these Terms and Conditions, as well as all applicable laws and regulations in the Republic of Paraguay."
        },
        {
          title: "2. Conditions for Loan Application",
          text: "All credit applications are subject to approval based on Orianza S.A.'s internal credit policies, payment capacity analysis, and risk profile. Any simulations or preliminary offers presented on the website are strictly informative and do not represent a commitment to disburse or a binding contract proposal."
        },
        {
          title: "3. Consent for Data Verification",
          text: "In accordance with Paraguayan Law N° 6534/20 'On Personal Data Protection', by submitting a contact or application form, the user expressly authorizes Orianza S.A. to collect, process, and query their credit history and payment behavior through authorized credit bureaus."
        },
        {
          title: "4. Proper Use of the Platform",
          text: "The user agrees to provide real, truthful, and updated information. The use of false identities or fraudulent documentation will cancel any application immediately and will be reported to the relevant authorities under the Paraguayan Penal Code."
        },
        {
          title: "5. Modifications of Terms",
          text: "Orianza S.A. reserves the right to modify or update these terms at any time without prior notice. It is the user's responsibility to check this section periodically."
        }
      ]
    },
    privacidad: {
      title: "Privacy Policy",
      subtitle: "We take the security and privacy of your personal data very seriously. Learn how we handle your information.",
      lastUpdated: "Last updated: June 30, 2026",
      sections: [
        {
          title: "1. Collection of Information",
          text: "We collect personal information voluntarily provided by you in our forms, such as full name, phone number, email address, and specific details related to your financial request."
        },
        {
          title: "2. Purpose of Data Processing",
          text: "We use your personal information solely to: (a) Evaluate and process your credit applications; (b) Communicate with you to provide advice; (c) Comply with the regulations of the Central Bank of Paraguay (BCP) and the Secretariat for the Prevention of Money or Asset Laundering (SEPRELAD)."
        },
        {
          title: "3. Protection and Confidentiality",
          text: "We implement strict technical and administrative security measures to prevent the loss, theft, misuse, or alteration of your data. In compliance with Law N° 6534/20, we will not share your personal data with third parties for commercial or marketing purposes without your express consent."
        },
        {
          title: "4. Data Subject Rights",
          text: "You have the right to request access, rectification, update, or deletion of your personal data. To exercise these rights, you may contact us directly through the official contact channels provided on this site."
        }
      ]
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es'); // 'es' | 'en'

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path; // Fallback to path key if missing
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
