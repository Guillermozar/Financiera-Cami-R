import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    common: {
      backToHome: "Volver al Inicio",
      cancelAndBack: "Cancelar y Volver",
      understood: "Entendido",
      close: "Cerrar",
      submitting: "Procesando solicitud...",
      submit: "Enviar Solicitud",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      requiredField: "Este campo es obligatorio",
      success: "Éxito",
      error: "Error"
    },
    navbar: {
      products: "Productos",
      simulators: "Simuladores",
      security: "Seguridad",
      support: "Soporte",
      simulateNow: "Simular Ahora"
    },
    invitation: {
      badge: "Presentación Exclusiva",
      heading: "Una invitación reservada a quienes valoran el tiempo, la solidez y la reserva.",
      paragraph: "Descubra un estándar superior donde el capital se encuentra con la distinción y el impulso estratégico. Le damos la bienvenida a nuestra plataforma de servicios crediticios y de inversión de alta gama.",
      cta: "Acceder al Portal"
    },
    hero: {
      hub: "Orianza Digital Hub",
      title: "¿Qué deseas hacer hoy?",
      subtitle: "Bienvenido a tu portal financiero digital. Selecciona una de nuestras opciones rápidas para simular, solicitar o explorar servicios.",
      btnLoanTitle: "Simular Crédito",
      btnLoanDesc: "Calculá tu cuota mensual estimada y plazos en un par de clics.",
      btnLoanBadge: "Más Solicitado",
      btnSavingsTitle: "Simular Ahorro",
      btnSavingsDesc: "Proyectá tus ganancias con nuestra tasa del 7.5% anual.",
      btnProductsTitle: "Nuestros Productos",
      btnProductsDesc: "Explorá tarjetas de crédito digital premium y préstamos a medida.",
      btnApplyTitle: "Solicitud de Crédito",
      btnApplyDesc: "Completá tus datos para una pre-aprobación en minutos.",
      btnApplyBadge: "Express",
      btnTipsTitle: "Consejos Financieros",
      btnTipsDesc: "Fundamentos clave de ahorro e inversión inteligente para multiplicar tu capital.",
      btnSecurityTitle: "Portal de Seguridad",
      btnSecurityDesc: "Conocé cómo protegemos tu cuenta con encriptación AES-256.",
      btnSupportTitle: "Atención al Cliente",
      btnSupportDesc: "Portal de reclamos, preguntas frecuentes y asistencia oficial."
    },
    productCards: {
      title: "Soluciones a tu medida",
      subtitle: "Diseñamos productos financieros con las tasas más competitivas del mercado y transparencia total en cada contrato.",
      digitalAccounts: "Cuentas Digitales",
      digitalAccountsDesc: "Apertura en minutos solo con tu Cédula. Sin costos de mantenimiento ni saldos mínimos requeridos.",
      digitalAccountsBtn: "Solicitar Cuenta",
      digitalAccountsBenefits: ['Transferencias SIPAP 24/7', 'Tarjeta Mastercard Debit', 'Control de gastos en App'],
      savingsPlan: "Ahorro Programado",
      savingsPlanDesc: "Haz que tu dinero trabaje para ti con rendimientos del 7.5% anual en Paraguay. Planifica tus metas de ahorro a mediano y largo plazo.",
      savingsPlanBtn: "Simular Ahorro",
      savingsPlanBenefits: ['Tasa de interés fija de 7.5%', 'Capitalización mensual', 'Depósito mensual automatizado'],
      credits: "Créditos al Toque",
      creditsDesc: "Aprobación inmediata mediante análisis de datos en tiempo real. Desembolso directo a tu cuenta bancaria.",
      creditsBtn: "Simular Crédito",
      creditsBenefits: ['Tasa fija en Guaraníes', 'Hasta 48 cuotas mensuales', 'Sin penalización por precancelar'],
      recommended: "Recomendado"
    },
    securitySection: {
      title: "Tu seguridad es nuestra mayor inversión.",
      desc: "Implementamos protocolos avanzados y cumplimos con altos estándares de seguridad para que operes con total tranquilidad.",
      btn: "Ver Políticas de Seguridad",
      badge: "Sistema Certificado Activo",
      features: [
        {
          title: "Protección SIPAP con OTP",
          desc: "Validación obligatoria mediante código dinámico para cada transferencia realizada, garantizando que solo tú tengas el control."
        },
        {
          title: "Revocación de Débitos",
          desc: "Puedes suspender o cancelar cualquier débito automático desde tu App de forma gratuita y en un clic."
        },
        {
          title: "Prevención de Fraudes",
          desc: "Monitoreo activo 24/7 y canal exclusivo de denuncias para proteger tu identidad y tus activos financieros."
        }
      ],
      specs: [
        'Cifrado de grado militar AES-256', 
        'Validación biométrica facial', 
        'Infraestructura redundante en nube'
      ]
    },
    footer: {
      desc: "Innovación financiera y transparencia total para todos los paraguayos. Accede a tu crédito 100% online y de forma segura.",
      transparency: "Transparencia",
      support: "Atención",
      legalId: "Identificación Legal",
      rights: "© 2026 Orianza. Todos los derechos reservados.",
      links: {
        tarifario: "Tarifario de Comisiones",
        contratos: "Contratos de Adhesión",
        privacidad: "Política de Privacidad",
        seguridad: "Seguridad Informática",
        reclamos: "Portal de Reclamos",
        faqs: "Preguntas Frecuentes",
        educacion: "Educación Financiera",
        sedeco: "SEDECO: Defensa al Consumidor"
      },
      laws: [
        "Ley 4868/13 de Comercio Electrónico",
        "Ley 1334 de Defensa al Consumidor"
      ]
    },
    loanSimulator: {
      title: "Simulador de Crédito",
      desc: "Calculá tu cuota mensual estimada bajo el sistema de amortización francés, incluyendo gastos e impuestos vigentes en Paraguay.",
      labelAmount: "¿Cuánto dinero necesitas?",
      labelTerm: "Plazo de pago preferido",
      rateNotice: "Tasa anual fija del 17.5% sujeta a aprobación crediticia.",
      estimatedPayment: "Cuota mensual estimada",
      viewBreakdown: "Ver desglose de la cuota estimada",
      breakdown: {
        purePayment: "Cuota Pura (Capital + Interés):",
        interest: "- Interés estimado 1ra cuota:",
        iva: "IVA s/ Intereses (10%):",
        insurance: "Seguro de Vida Deudor (0.08%):",
        adminFee: "Gastos Administrativos:",
        total: "Total Cuota Mensual Estimada:"
      },
      cta: "Solicitar este crédito"
    },
    savingsSimulator: {
      title: "Simulador de Ahorro Programado",
      desc: "Visualizá el crecimiento de tus fondos mes a mes con nuestra tasa de interés del 7.5% anual con capitalización mensual.",
      labelDeposit: "Ahorro Mensual",
      labelTerm: "Plazo del Plan de Ahorro",
      estimatedReturn: "Recibirás al vencimiento",
      recap: {
        deposits: "Aportes:",
        interest: "+ Interés (7.5%):"
      },
      chartTitle: "Proyección de Crecimiento",
      chartNotice: "7.5% Tasa Fija",
      cta: "Comenzar este ahorro"
    },
    productsPage: {
      title: "Nuestras Soluciones Financieras",
      desc: "Diseñamos productos digitales transparentes, con las mejores tasas y sin cargos ocultos para impulsar tus planes.",
      categories: {
        all: "Todos los productos",
        cuentas: "Cuentas Digitales",
        ahorros: "Ahorro Programado",
        creditos: "Créditos Personales"
      },
      recommended: "Recomendado",
      comparisonTitle: "Comparativa de Servicios",
      list: {
        cuentas: {
          title: "Cuenta Digital Premium",
          description: "Apertura en minutos de forma 100% online. Una cuenta sin comisiones ni montos mínimos de apertura, diseñada para tu día a día.",
          features: [
            "Transferencias SIPAP gratuitas 24/7",
            "Tarjeta de Débito Mastercard física y digital",
            "Control total de gastos en tiempo real",
            "Retiros sin tarjeta en cajeros aliados"
          ],
          cta: "Solicitar Cuenta"
        },
        ahorros: {
          title: "Ahorro Programado Orianza",
          description: "Haz crecer tus ahorros de forma segura. Define un monto mensual y acumula rendimientos competitivos del 7.5% de tasa pasiva.",
          features: [
            "Tasa fija del 7.5% nominal anual",
            "Capitalización de intereses mensual",
            "Débito automático de tu ahorro programado",
            "Aportes extras permitidos en cualquier momento"
          ],
          cta: "Simular Ahorro"
        },
        creditos: {
          title: "Crédito al Toque",
          description: "El financiamiento que necesitas, al instante. Análisis crediticio digital sin papeleos con desembolso inmediato a tu cuenta.",
          features: [
            "Tasas fijas en Guaraníes",
            "Plazos cómodos de 6 a 48 meses",
            "Sin comisiones por cancelación anticipada",
            "Aprobación mediante perfil biométrico digital"
          ],
          cta: "Simular Crédito"
        }
      },
      table: {
        feature: "Característica",
        digital: "Cuenta Digital",
        savings: "Ahorro Programado",
        credits: "Crédito al Toque",
        maintenance: "Costo de Mantenimiento",
        maintenanceVal: "Gs. 0 (Gratuito)",
        rate: "Tasa Efectiva Anual (TEA)",
        rateSavingsVal: "7.5% Pasiva (a tu favor)",
        rateCreditsVal: "17.5% Activa (fija)",
        terms: "Plazos de contratación",
        termsDigitalVal: "Indefinido",
        requirements: "Requisitos de Ingreso",
        requirementsVal: "Cédula vigente",
        requirementsCreditsVal: "Cédula + Perfil biométrico",
        channel: "Canal de Solicitud",
        channelDigitalVal: "App Móvil 100% digital",
        channelVal: "App Móvil / Web Hub"
      }
    },
    securityPage: {
      title: "Seguridad e Infraestructura",
      desc: "Nuestra prioridad absoluta es proteger tus fondos e información personal. Conocé las tecnologías y protocolos que implementamos día a día.",
      measures: [
        {
          title: "Cifrado Militar AES-256",
          desc: "Toda la información personal y financiera transferida entre tu dispositivo y nuestros servidores viaja cifrada con el estándar avanzado AES-256 bits, imposibilitando intercepciones de terceros."
        },
        {
          title: "Validación OTP en Transferencias",
          desc: "Implementamos códigos dinámicos (OTP - One Time Password) para autorizar movimientos bancarios de salida. Un token único que se genera en tu dispositivo garantiza que solo tú puedas mover capital."
        },
        {
          title: "Reconocimiento Biométrico",
          desc: "Nuestra aplicación móvil se integra nativamente con FaceID y TouchID. De esta forma, el acceso a tu cuenta requiere una verificación física intransferible para resguardo ante pérdidas de celular."
        },
        {
          title: "Infraestructura Redundante en Nube",
          desc: "Operamos servidores replicados geográficamente y con tolerancia a fallas. Tu historial y saldos están respaldados automáticamente minuto a minuto en bases de datos blindadas."
        }
      ],
      checklistTitle: "Auditoría de Seguridad Personal",
      checklistDesc: "La seguridad depende de ambos. Evaluá tu nivel de protección marcando las buenas prácticas que ya aplicás:",
      scoreLabel: "Nivel de Seguridad:",
      scoreLevels: {
        0: "Inseguro",
        1: "Bajo",
        2: "Medio",
        3: "Bueno",
        4: "¡Excelente!"
      },
      checklistItems: {
        otpTitle: "No comparto contraseñas ni OTP",
        otpDesc: "Jamás comparto códigos SMS, tokens ni contraseñas con nadie.",
        passwordTitle: "Contraseña Fuerte & Única",
        passwordDesc: "Utilizo una clave exclusiva que no uso en otras redes sociales.",
        urlTitle: "Verifico URLs e Indicadores",
        urlDesc: "Siempre corroboro ingresar a la URL oficial y con candado de seguridad.",
        biometricsTitle: "Uso FaceID / TouchID",
        biometricsDesc: "Tengo activa la validación física en mi celular para ingresar a la App."
      },
      trustNotice: "Tus ahorros programados en Orianza cuentan con tasas de interés respaldadas y firmadas por contrato de adhesión, garantizando la rentabilidad pactada desde el primer día."
    },
    supportPage: {
      title: "Atención al Cliente",
      desc: "¿Tienes alguna consulta, sugerencia o reclamo? Ponte en contacto con nuestro equipo o explora las preguntas frecuentes.",
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          q: "¿Cuáles son los requisitos para solicitar un crédito?",
          a: "Sólo necesitas contar con tu Cédula de Identidad paraguaya vigente y ser mayor de 18 años. Nuestro análisis es 100% digital e inmediato a través de tu perfil biométrico en la App."
        },
        {
          q: "¿Cómo se abonan los intereses del Ahorro Programado?",
          a: "Los intereses se capitalizan de forma mensual a una tasa nominal del 7.5% anual en Guaraníes. Verás reflejado el rendimiento directamente en tu balance al finalizar cada mes calendario."
        },
        {
          q: "¿Tiene algún costo el mantenimiento de la Cuenta Digital?",
          a: "Ninguno. La apertura y el mantenimiento de tu Cuenta Digital Orianza son completamente gratuitos. No exigimos saldos mínimos ni penalizaciones por inactividad."
        },
        {
          q: "¿Cómo puedo realizar depósitos en mi cuenta?",
          a: "Puedes fonear tu cuenta mediante transferencias SIPAP (24/7) desde cualquier entidad financiera del Paraguay, o realizando depósitos en efectivo en las redes de cobranza habilitadas."
        }
      ],
      sedecoTitle: "Defensa al Consumidor",
      sedecoName: "SEDECO: Secretaría de Defensa del Consumidor",
      sedecoDesc: "Por cualquier disconformidad con el servicio, puedes formalizar tu reclamo en el Portal de SEDECO de forma gratuita.",
      sedecoBtn: "Visitar SEDECO",
      directChannels: "Canales Directos",
      hoursTitle: "Horario de Atención",
      hoursWeek: "Lunes a Viernes: 08:00 a 17:00 hs.",
      hoursSat: "Sábados: 08:00 a 12:00 hs.",
      formTitle: "Envíanos un Mensaje",
      formName: "Nombre Completo *",
      formEmail: "Email de Contacto *",
      formSubject: "Motivo del Contacto",
      formMessage: "Detalle de tu Mensaje *",
      subjects: {
        consulta: "Consulta General",
        reclamo: "Reclamo Formal (Defensa al Consumidor)",
        sugerencia: "Sugerencia o Felicitación",
        soporte: "Soporte Técnico en la App"
      },
      errors: {
        name: "El nombre es obligatorio",
        email: "El correo electrónico es obligatorio",
        emailInvalid: "Ingresa un correo electrónico válido",
        message: "El mensaje no puede estar vacío"
      },
      successTitle: "¡Mensaje Enviado!",
      successDesc: "Recibimos tu ticket de soporte. Un asesor de Orianza te responderá vía correo electrónico en las próximas 24 horas hábiles.",
      successBtn: "Enviar otro ticket"
    },
    applicationPage: {
      title: "Completá tus datos",
      desc: "Ingresá tu información tal cual aparece en tu Cédula de Identidad.",
      step1: "Datos Personales",
      step2: "Perfil Financiero",
      step3: "Finalizar Evaluación",
      next: "Siguiente Paso",
      backStep: "Volver al Paso 1",
      cancel: "Cancelar y Volver",
      nameLabel: "Nombre y Apellido *",
      ciLabel: "Cédula de Identidad *",
      whatsappLabel: "Número de WhatsApp *",
      employmentLabel: "Tipo de Empleo",
      employmentOptions: {
        asalariado: "Asalariado / Dependiente",
        independiente: "Profesional Independiente",
        comerciante: "Comerciante / Empresa propia",
        jubilado: "Jubilado"
      },
      incomeLabel: "Rango de Ingresos Mensuales (Gs.)",
      incomeOptions: {
        less3: "Menos de Gs. 3.000.000",
        bracket1: "Gs. 3.000.000 - Gs. 5.000.000",
        bracket2: "Gs. 5.000.000 - Gs. 10.000.000",
        bracket3: "Gs. 10.000.000 - Gs. 20.000.000",
        more20: "Más de Gs. 20.000.000"
      },
      legalText: "Autorizo a evaluar mi perfil crediticio conforme a la Ley N° 6534/20 de Protección de Datos Personales en Paraguay.",
      disclaimer: "Tus datos serán tratados conforme a la Ley N° 6534/20 de Protección de Datos Personales en Paraguay.",
      evaluating: "Evaluando tu solicitud...",
      evaluatingDesc: "Analizando perfil financiero en tiempo real. Esto tomará sólo unos segundos.",
      successTitle: "¡Solicitud Procesada!",
      successDescLoan: "¡Tu perfil califica! Hemos pre-aprobado tu solicitud. Un asesor se pondrá en contacto contigo vía WhatsApp en los próximos minutos para validar tus comprobantes.",
      successDescSavings: "¡Excelente elección! Hemos recibido tus datos y procedemos a la pre-apertura de tu cuenta de ahorro programado. Te contactaremos vía WhatsApp para coordinar el primer depósito.",
      recapLoan: "Resumen del Préstamo:",
      recapSavings: "Resumen de Ahorro:",
      recapAmount: "Monto Solicitado:",
      recapTerm: "Plazo de Amortización:",
      recapRate: "Tasa Nominal (TIN):",
      recapPayment: "Cuota Mensual Estimada:",
      recapDeposit: "Depósito Mensual:",
      recapTermSavings: "Plazo del Ahorro:",
      recapMaturity: "Total estimado al Vencimiento:",
      returnHub: "Volver al Hub Digital",
      errorTitle: "Inconveniente técnico",
      errorDesc: "No pudimos establecer conexión para pre-evaluar tu solicitud. Intenta nuevamente en unos momentos.",
      retry: "Reintentar",
      exit: "Salir",
      errors: {
        nameEmpty: "El nombre y apellido son obligatorios",
        nameShort: "Mínimo 5 caracteres para nombre completo",
        nameSpace: "Ingresa nombre y apellido separados por espacio",
        ciEmpty: "La Cédula de Identidad es obligatoria",
        ciInvalid: "Ingresa una Cédula válida (de 6 a 8 dígitos)",
        whatsappEmpty: "El número de WhatsApp es obligatorio",
        whatsappInvalid: "Ingresa un celular válido (ej. 0981 123 456)",
        terms: "Debes aceptar la política de protección de datos personales"
      }
    },
    financialTipsPage: {
      title: "Educación y Consejos Financieros",
      desc: "Tomar decisiones informadas es la base de la libertad financiera. Descubrí cómo estructurar tus finanzas personales y multiplicar tu capital de forma inteligente.",
      foundationLabel: "El Fundamento:",
      actionLabel: "Cómo aplicarlo en Orianza:",
      tips: [
        {
          title: "1. Vencé a la inflación con ahorro activo",
          foundation: "Guardar el dinero 'bajo el colchón' o en cuentas corrientes que no pagan intereses garantiza la pérdida de su poder adquisitivo. En Paraguay, la inflación anual erosiona el valor del guaraní constantemente.",
          actionPlan: "La forma más inteligente de proteger tu liquidez es colocarla en un instrumento que devengue intereses diariamente. Al abrir una Cuenta Digital o activar un Ahorro Programado Orianza, tu capital trabaja para vos con una tasa competitiva que mitiga el efecto inflacionario y mantiene intacta tu capacidad de compra.",
          ctaText: "Ver opciones de Ahorro"
        },
        {
          title: "2. Automatizá la regla del 50/30/20",
          foundation: "Una de las metodologías financieras más sólidas y recomendadas por expertos mundiales consiste en distribuir tus ingresos mensuales de la siguiente forma: 50% para necesidades básicas, 30% para deseos personales y un 20% directo al ahorro o inversión.",
          actionPlan: "El mayor obstáculo para ahorrar es la disciplina manual. Orianza te permite automatizar este proceso: podés configurar un débito automático mensual hacia tu plan de Ahorro Programado. Así, ese 20% recomendado se invierte de forma inmediata antes de que puedas gastarlo, acumulando una rentabilidad garantizada del 7.5% anual.",
          ctaText: "Simular Plan de Ahorro"
        },
        {
          title: "3. Aprovechá el poder del interés compuesto",
          foundation: "Albert Einstein definió al interés compuesto como la octava maravilla del mundo. Consiste en acumular los intereses generados a tu capital inicial para que, en el siguiente período, los nuevos intereses se calculen sobre un monto mayor. Esto crea un crecimiento exponencial en el mediano y largo plazo.",
          actionPlan: "En Orianza, los intereses de tu Ahorro Programado se capitalizan mensualmente. Esto significa que cada mes ganás intereses sobre los aportes acumulados más los intereses del mes anterior. Simular un plan a 24 o 36 meses te permitirá visualizar cómo este efecto acelera el crecimiento de tus metas comparado con bancos tradicionales.",
          ctaText: "Ir al Simulador de Ahorro"
        }
      ]
    }
  },
  en: {
    common: {
      backToHome: "Back to Home",
      cancelAndBack: "Cancel and Go Back",
      understood: "Understood",
      close: "Close",
      submitting: "Processing application...",
      submit: "Submit Application",
      send: "Send Message",
      sending: "Sending...",
      requiredField: "This field is required",
      success: "Success",
      error: "Error"
    },
    navbar: {
      products: "Products",
      simulators: "Simulators",
      security: "Security",
      support: "Support",
      simulateNow: "Simulate Now"
    },
    invitation: {
      badge: "Exclusive Presentation",
      heading: "An invitation reserved for those who value time, solidity, and discretion.",
      paragraph: "Discover a higher standard where capital meets distinction and strategic drive. We welcome you to our high-end credit and investment services platform.",
      cta: "Access the Portal"
    },
    hero: {
      hub: "Orianza Digital Hub",
      title: "What do you want to do today?",
      subtitle: "Welcome to your digital financial portal. Select one of our quick options to simulate, apply, or explore services.",
      btnLoanTitle: "Simulate Credit",
      btnLoanDesc: "Calculate your estimated monthly payment and terms in a few clicks.",
      btnLoanBadge: "Most Requested",
      btnSavingsTitle: "Simulate Savings",
      btnSavingsDesc: "Project your earnings with our 7.5% annual rate.",
      btnProductsTitle: "Our Products",
      btnProductsDesc: "Explore premium digital credit cards and tailored loans.",
      btnApplyTitle: "Credit Application",
      btnApplyDesc: "Complete your details for a pre-approval in minutes.",
      btnApplyBadge: "Express",
      btnTipsTitle: "Financial Advice",
      btnTipsDesc: "Key principles of smart saving and investment to multiply your capital.",
      btnSecurityTitle: "Security Portal",
      btnSecurityDesc: "Learn how we protect your account with AES-256 encryption.",
      btnSupportTitle: "Customer Service",
      btnSupportDesc: "Claims portal, frequently asked questions, and official assistance."
    },
    productCards: {
      title: "Solutions tailored to you",
      subtitle: "We design financial products with the most competitive market rates and complete transparency in every contract.",
      digitalAccounts: "Digital Accounts",
      digitalAccountsDesc: "Open in minutes using only your ID. No maintenance fees or minimum opening deposit required.",
      digitalAccountsBtn: "Request Account",
      digitalAccountsBenefits: ['24/7 SIPAP Transfers', 'Mastercard Debit Card', 'In-App expense tracking'],
      savingsPlan: "Programmed Savings",
      savingsPlanDesc: "Make your money work for you with 7.5% annual returns in Paraguay. Plan your medium and long-term savings goals.",
      savingsPlanBtn: "Simulate Savings",
      savingsPlanBenefits: ['7.5% fixed interest rate', 'Monthly capitalization', 'Automated monthly deposit'],
      credits: "Instant Credits",
      creditsDesc: "Immediate approval through real-time data analysis. Direct payout to your bank account.",
      creditsBtn: "Simulate Credit",
      creditsBenefits: ['Fixed rate in Guaraníes', 'Up to 48 monthly installments', 'No prepayment penalty'],
      recommended: "Recommended"
    },
    securitySection: {
      title: "Your security is our greatest investment.",
      desc: "We implement advanced protocols and strictly comply with high safety standards so you can operate with total peace of mind.",
      btn: "View Security Policies",
      badge: "Active Certified System",
      features: [
        {
          title: "SIPAP Protection with OTP",
          desc: "Mandatory validation via dynamic code for each outgoing transfer, ensuring that only you are in control."
        },
        {
          title: "Debit Revocation",
          desc: "You can suspend or cancel any automatic debit from your App for free and in a single click."
        },
        {
          title: "Fraud Prevention",
          desc: "24/7 active monitoring and exclusive reporting channel to protect your identity and financial assets."
        }
      ],
      specs: [
        'Military-grade AES-256 encryption', 
        'Facial biometric validation', 
        'Redundant cloud infrastructure'
      ]
    },
    footer: {
      desc: "Financial innovation and total transparency for all Paraguayans. Access your credit 100% online and securely.",
      transparency: "Transparency",
      support: "Support",
      legalId: "Legal Identification",
      rights: "© 2026 Orianza. All rights reserved.",
      links: {
        tarifario: "Fee Schedule",
        contratos: "Adhesion Contracts",
        privacidad: "Privacy Policy",
        security: "Information Security",
        reclamos: "Claims Portal",
        faqs: "Frequently Asked Questions",
        educacion: "Financial Education",
        sedeco: "SEDECO: Consumer Protection"
      },
      laws: [
        "E-Commerce Law N° 4868/13",
        "Consumer Protection Law N° 1334"
      ]
    },
    loanSimulator: {
      title: "Credit Simulator",
      desc: "Calculate your estimated monthly installment under the French amortization system, including current taxes and fees in Paraguay.",
      labelAmount: "How much money do you need?",
      labelTerm: "Preferred repayment term",
      rateNotice: "Fixed annual rate of 17.5% subject to credit approval.",
      estimatedPayment: "Estimated monthly installment",
      viewBreakdown: "View estimated installment breakdown",
      breakdown: {
        purePayment: "Base Installment (Principal + Interest):",
        interest: "- Estimated 1st installment interest:",
        iva: "VAT on Interest (10%):",
        insurance: "Life Debtor Insurance (0.08%):",
        adminFee: "Administrative Expenses:",
        total: "Total Estimated Monthly Installment:"
      },
      cta: "Apply for this loan"
    },
    savingsSimulator: {
      title: "Programmed Savings Simulator",
      desc: "Project your funds' growth month by month with our 7.5% annual interest rate with monthly capitalization.",
      labelDeposit: "Monthly Savings",
      labelTerm: "Savings Plan Term",
      estimatedReturn: "You will receive at maturity",
      recap: {
        deposits: "Total Deposits:",
        interest: "+ Interest (7.5%):"
      },
      chartTitle: "Growth Projection",
      chartNotice: "7.5% Fixed Rate",
      cta: "Start this savings plan"
    },
    productsPage: {
      title: "Our Financial Solutions",
      desc: "We design transparent digital products with the best rates and no hidden fees to support your plans.",
      categories: {
        all: "All products",
        cuentas: "Digital Accounts",
        ahorros: "Programmed Savings",
        creditos: "Personal Loans"
      },
      recommended: "Recommended",
      comparisonTitle: "Service Comparison",
      list: {
        cuentas: {
          title: "Premium Digital Account",
          description: "Open in minutes, 100% online. An account with no commissions or minimum opening balances, designed for your day-to-day.",
          features: [
            "Free 24/7 SIPAP transfers",
            "Physical and digital Mastercard debit card",
            "Total control of expenses in real time",
            "Cardless withdrawals at allied ATMs"
          ],
          cta: "Request Account"
        },
        ahorros: {
          title: "Orianza Programmed Savings",
          description: "Grow your savings safely. Set a monthly amount and accumulate competitive returns with a 7.5% interest rate.",
          features: [
            "7.5% nominal annual fixed rate",
            "Monthly interest capitalization",
            "Automatic debit for your programmed savings",
            "Extra deposits allowed at any time"
          ],
          cta: "Simulate Savings"
        },
        creditos: {
          title: "Instant Loan",
          description: "The financing you need, instantly. Paperless digital credit check with immediate disbursement to your account.",
          features: [
            "Fixed rates in Guaraníes",
            "Comfortable terms from 6 to 48 months",
            "No early cancellation fees",
            "Approval via digital biometric profile"
          ],
          cta: "Simulate Credit"
        }
      },
      table: {
        feature: "Feature",
        digital: "Digital Account",
        savings: "Programmed Savings",
        credits: "Instant Loan",
        maintenance: "Maintenance Cost",
        maintenanceVal: "Gs. 0 (Free)",
        rate: "Annual Effective Rate (AER)",
        rateSavingsVal: "7.5% Passive (in your favor)",
        rateCreditsVal: "17.5% Active (fixed)",
        terms: "Contract Terms",
        termsDigitalVal: "Indefinite",
        requirements: "Entry Requirements",
        requirementsVal: "Valid ID",
        requirementsCreditsVal: "Valid ID + Biometric Profile",
        channel: "Application Channel",
        channelDigitalVal: "100% digital Mobile App",
        channelVal: "Mobile App / Web Hub"
      }
    },
    securityPage: {
      title: "Security & Infrastructure",
      desc: "Our absolute priority is protecting your funds and personal information. Learn about the technologies and protocols we implement daily.",
      measures: [
        {
          title: "Military-Grade AES-256 Encryption",
          desc: "All personal and financial information transferred between your device and our servers travels encrypted with the advanced AES-256 bit standard, preventing third-party interception."
        },
        {
          title: "OTP Validation in Transfers",
          desc: "We implement dynamic codes (OTP - One Time Password) to authorize outgoing transactions. A unique token generated on your device ensures only you can move capital."
        },
        {
          title: "Biometric Recognition",
          desc: "Our mobile app integrates natively with FaceID and TouchID. Accessing your account requires physical verification, keeping your funds safe if you lose your phone."
        },
        {
          title: "Redundant Cloud Infrastructure",
          desc: "We operate geographically replicated, fault-tolerant servers. Your history and balances are automatically backed up minute-by-minute in armored databases."
        }
      ],
      checklistTitle: "Personal Security Audit",
      checklistDesc: "Security depends on both of us. Assess your protection level by checking the best practices you already apply:",
      scoreLabel: "Security Level:",
      scoreLevels: {
        0: "Insecure",
        1: "Low",
        2: "Medium",
        3: "Good",
        4: "Excellent!"
      },
      checklistItems: {
        otpTitle: "I do not share passwords or OTPs",
        otpDesc: "I never share SMS codes, tokens, or passwords with anyone.",
        passwordTitle: "Strong & Unique Password",
        passwordDesc: "I use a unique password that I do not reuse on social media networks.",
        urlTitle: "I verify URLs and Security Marks",
        urlDesc: "I always verify the official URL and lock symbol in the address bar.",
        biometricsTitle: "I use FaceID / TouchID",
        biometricsDesc: "I have biometric validation enabled on my phone to open the App."
      },
      trustNotice: "Your programmed savings in Orianza feature interest rates backed and signed by adhesion contract, guaranteeing the agreed profitability from day one."
    },
    supportPage: {
      title: "Customer Support",
      desc: "Do you have any questions, suggestions, or claims? Reach out to our team or explore the frequently asked questions.",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "What are the requirements to request credit?",
          a: "You only need your valid Paraguayan Identity Card and be over 18 years old. Our analysis is 100% digital and immediate via your biometric profile in the App."
        },
        {
          q: "How are the interest payments for Programmed Savings paid out?",
          a: "Interest is capitalized monthly at a nominal rate of 7.5% annual in Guaraníes. You will see the yield reflected directly in your balance at the end of each calendar month."
        },
        {
          q: "Is there any maintenance cost for the Digital Account?",
          a: "None. The opening and maintenance of your Orianza Digital Account are completely free. We do not require minimum balances or charge inactivity fees."
        },
        {
          q: "How can I make deposits to my account?",
          a: "You can fund your account via SIPAP transfers (24/7) from any financial institution in Paraguay, or by making cash deposits at enabled payment networks."
        }
      ],
      sedecoTitle: "Consumer Protection",
      sedecoName: "SEDECO: Secretary of Consumer Protection",
      sedecoDesc: "For any disagreement with the service, you can formalize your claim in the SEDECO Portal free of charge.",
      sedecoBtn: "Visit SEDECO",
      directChannels: "Direct Channels",
      hoursTitle: "Customer Hours",
      hoursWeek: "Monday to Friday: 08:00 to 17:00 hs.",
      hoursSat: "Saturdays: 08:00 to 12:00 hs.",
      formTitle: "Send Us a Message",
      formName: "Full Name *",
      formEmail: "Contact Email *",
      formSubject: "Reason for Contact",
      formMessage: "Message Details *",
      subjects: {
        consulta: "General Inquiry",
        reclamo: "Formal Claim (Consumer Protection)",
        sugerencia: "Suggestion or Compliment",
        soporte: "Technical App Support"
      },
      errors: {
        name: "Name is required",
        email: "Email is required",
        emailInvalid: "Enter a valid email address",
        message: "Message cannot be empty"
      },
      successTitle: "Message Sent!",
      successDesc: "We received your support ticket. An Orianza advisor will reply to you via email within the next 24 business hours.",
      successBtn: "Send another ticket"
    },
    applicationPage: {
      title: "Complete your details",
      desc: "Enter your information exactly as it appears on your Identity Card.",
      step1: "Personal Details",
      step2: "Financial Profile",
      step3: "Finish Evaluation",
      next: "Next Step",
      backStep: "Back to Step 1",
      cancel: "Cancel and Go Back",
      nameLabel: "Full Name *",
      ciLabel: "Identity Card (CI) *",
      whatsappLabel: "WhatsApp Number *",
      employmentLabel: "Employment Type",
      employmentOptions: {
        asalariado: "Salaried / Employed",
        independiente: "Independent Professional",
        comerciante: "Merchant / Self-employed",
        jubilado: "Retired"
      },
      incomeLabel: "Monthly Income Range (Gs.)",
      incomeOptions: {
        less3: "Less than Gs. 3.000.000",
        bracket1: "Gs. 3.000.000 - Gs. 5.000.000",
        bracket2: "Gs. 5.000.000 - Gs. 10.000.000",
        bracket3: "Gs. 10.000.000 - Gs. 20.000.000",
        more20: "More than Gs. 20.000.000"
      },
      legalText: "I authorize the evaluation of my credit profile in accordance with Law N° 6534/20 on the Protection of Personal Data in Paraguay.",
      disclaimer: "Your data will be treated in accordance with Law N° 6534/20 on the Protection of Personal Data in Paraguay.",
      evaluating: "Evaluating your request...",
      evaluatingDesc: "Analyzing financial profile in real-time. This will take only a few seconds.",
      successTitle: "Request Processed!",
      successDescLoan: "Your profile qualifies! We have pre-approved your request. An advisor will contact you via WhatsApp in the next few minutes to validate your income documents.",
      successDescSavings: "Excellent choice! We have received your details and are proceeding with the pre-opening of your programmed savings account. We will contact you via WhatsApp to coordinate the first deposit.",
      recapLoan: "Loan Summary:",
      recapSavings: "Savings Summary:",
      recapAmount: "Requested Amount:",
      recapTerm: "Amortization Term:",
      recapRate: "Nominal Rate (TIN):",
      recapPayment: "Estimated Monthly Installment:",
      recapDeposit: "Monthly Deposit:",
      recapTermSavings: "Savings Term:",
      recapMaturity: "Estimated Payout at Maturity:",
      returnHub: "Return to Digital Hub",
      errorTitle: "Technical issue",
      errorDesc: "We could not establish a connection to pre-evaluate your request. Please try again in a few moments.",
      retry: "Retry",
      exit: "Exit",
      errors: {
        nameEmpty: "Full name is required",
        nameShort: "Minimum 5 characters for full name",
        nameSpace: "Enter name and surname separated by a space",
        ciEmpty: "Identity Card is required",
        ciInvalid: "Enter a valid ID card (6 to 8 digits)",
        whatsappEmpty: "WhatsApp number is required",
        whatsappInvalid: "Enter a valid mobile number (e.g. 0981 123 456)",
        terms: "You must accept the personal data protection policy"
      }
    },
    financialTipsPage: {
      title: "Financial Education & Advice",
      desc: "Making informed decisions is the basis of financial freedom. Discover how to structure your personal finances and multiply your capital smartly.",
      foundationLabel: "The Foundation:",
      actionLabel: "How to apply it at Orianza:",
      tips: [
        {
          title: "1. Beat inflation with active savings",
          foundation: "Keeping money 'under the mattress' or in checking accounts that pay no interest guarantees the loss of purchasing power. In Paraguay, annual inflation constantly erodes the value of the Guaraní.",
          actionPlan: "The smartest way to protect your liquidity is to place it in an interest-bearing instrument. By opening a Digital Account or activating an Orianza Programmed Savings, your capital works for you with a competitive rate that mitigates inflation and keeps your buying power intact.",
          ctaText: "View Savings Options"
        },
        {
          title: "2. Automate the 50/30/20 rule",
          foundation: "One of the most robust financial methodologies recommended by global experts is to distribute your monthly income as follows: 50% for basic needs, 30% for personal wants, and 20% directly into savings or investment.",
          actionPlan: "The biggest obstacle to saving is manual discipline. Orianza lets you automate this: you can set up a monthly automatic debit to your Programmed Savings plan. Thus, the recommended 20% is invested immediately before you can spend it, accumulating a guaranteed yield of 7.5% per year.",
          ctaText: "Simulate Savings Plan"
        },
        {
          title: "3. Harness the power of compound interest",
          foundation: "Albert Einstein defined compound interest as the eighth wonder of the world. It consists of accumulating generated interest on your initial capital so that, in the next period, new interest is calculated on a larger amount. This creates exponential growth in the medium and long term.",
          actionPlan: "At Orianza, interest on your Programmed Savings capitalizes monthly. This means that every month you earn interest on your accumulated contributions plus the interest from the previous month. Simulating a 24 or 36-month plan will let you see how this effect accelerates your goals compared to traditional banks.",
          ctaText: "Go to Savings Simulator"
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

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
