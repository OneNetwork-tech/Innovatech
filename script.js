document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLi = document.querySelectorAll('.nav-links li');
    const langButtons = document.querySelectorAll('.lang-btn');

    // --- Translations Object ---
    const translations = {
        en: {
            siteTitle: "Innovatech Systems - Industrial Automation for SMEs",
            servicesPageTitle: "Services - Innovatech Systems",
            aboutPageTitle: "About Us - Innovatech Systems",
            contactPageTitle: "Contact - Innovatech Systems",
            navHome: "Home",
            navServices: "Services",
            navAbout: "About Us",
            navContact: "Contact",
            heroHeadline: "Smarter Automation for Swedish Industry.",
            heroSubheadline: "We provide \"right-sized\" automation solutions to help your SME thrive in the digital age. Boost efficiency, cut costs, and stay competitive.",
            ctaButton: "Start Your Automation Journey",
            servicesTitle: "Our Services",
            servicesIntro: "We offer a structured approach to automation, ensuring you get the highest return on your investment.",
            service1Title: "1. Process Evaluation & Automation Roadmap",
            service1Why: "To ensure maximum impact and ROI, we begin by understanding your unique challenges and opportunities.",
            keyActivities: "Key Activities",
            keyDeliverables: "Key Deliverables",
            s1act1: "On-Site Operational Analysis",
            s1act2: "Data Collection & Process Mapping",
            s1act3: "Identification of Automation Bottlenecks",
            s1act4: "Digital Twin Simulation",
            s1del1: "A Detailed Automation Roadmap Report",
            s1del2: "Clear ROI Projections",
            s1del3: "A Phased, Budget-Conscious Plan",
            s1del4: "Vendor-Agnostic Technology Recommendations",
            service2Title: "2. Turnkey Implementation & Systems Integration",
            service2Why: "A plan is only as good as its execution. We take full ownership of the project, turning your roadmap into a functioning reality.",
            s2act1: "Custom Electrical & Control Panel Design",
            s2act2: "PLC and Robot Programming",
            s2act3: "IoT Sensor Network Integration",
            s2act4: "Custom Software & HMI Development",
            s2del1: "A Fully Commissioned & Tested System",
            s2del2: "Complete Project Documentation",
            s2del3: "On-site Staff Training",
            service3Title: "3. Ongoing Support & Proactive Maintenance",
            service3Why: "Your investment is protected with our proactive support, ensuring maximum uptime and continuous improvement.",
            s3act1: "24/7 Remote System Monitoring",
            s3act2: "Scheduled Preventative Maintenance",
            s3act3: "Software Updates & Security Patching",
            s3act4: "Performance Analysis & Optimization",
            s3del1: "A Service Level Agreement (SLA)",
            s3del2: "Priority Access to Technical Support",
            s3del3: "Peace of Mind",
            approachTitle: "The Innovatech Method",
            approach1Title: "Partners, Not Suppliers",
            approach1Desc: "We integrate with your team to function as your dedicated automation department.",
            approach2Title: "Pragmatic & Right-Sized",
            approach2Desc: "We specialize in solutions for SMEs. We find the right tool for the job, not the most expensive one.",
            approach3Title: "Data-Driven & Transparent",
            approach3Desc: "We use simulations and clear data to prove a project's value before you commit.",
            ctaTitle: "Ready to Improve Your Efficiency?",
            ctaText: "Let's start with a no-obligation conversation about your operational challenges and goals.",
            ctaBtnText: "Book Your Free Consultation",
            aboutTitle: "About Innovatech Systems",
            aboutIntro: "We are a partnership of engineering and software expertise, dedicated to making advanced technology accessible for Swedish SMEs.",
            ourMissionTitle: "Our Mission",
            ourMissionText: "Our mission is to empower Sweden's small and medium-sized enterprises by demystifying industrial automation. We believe that smart, scalable technology is the key to competitiveness and sustainable growth. We act as your dedicated technology partner, translating complex challenges into practical, high-return solutions that drive real-world results.",
            ourStoryTitle: "Our Story",
            ourStoryText: "Founded in Gothenburg by a passionate electrical engineer and a skilled programmer, Innovatech Systems was born from a shared observation: while large corporations were reaping the benefits of Industry 4.0, the SMEs forming the backbone of our economy were being left behind. We combine hands-on industrial experience with cutting-edge software development to bridge this gap, offering the sophisticated, integrated solutions of a large firm with the agility, focus, and personal commitment of a local partner.",
            meetTheTeamTitle: "Meet The Team",
            aboutEEFounder: "Electrical Engineer & Founder",
            aboutEEDesc: "With a degree in Electrical Engineering and years of hands-on experience in industrial automation and IT, I bridge the gap between physical machinery and intelligent software. My focus is on designing robust, efficient systems that solve real-world problems.",
            aboutDevPartner: "Programmer & Partner",
            aboutDevDesc: "As a professional programmer, I build the software that brings our automation solutions to life. From custom dashboards and data analysis tools to seamless API integrations, I ensure our systems are not just powerful, but also intuitive and user-friendly.",
            contactTitle: "Get in Touch",
            contactIntro: "Ready to discuss your project? Fill out the form below or contact us directly. We look forward to hearing from you.",
            formName: "Name",
            formEmail: "Email",
            formCompany: "Company",
            formMessage: "Message",
            formSubmit: "Send Message",
            contactInfoTitle: "Contact Information",
            contactHoursTitle: "Business Hours",
            contactHoursDays: "Monday - Friday: 08:00 - 17:00",
            contactHoursWeekend: "Saturday - Sunday: Closed",
            footerRights: "All Rights Reserved."
        },
        sv: {
            siteTitle: "Innovatech Systems - Industriell Automation för SMF",
            servicesPageTitle: "Tjänster - Innovatech Systems",
            aboutPageTitle: "Om Oss - Innovatech Systems",
            contactPageTitle: "Kontakt - Innovatech Systems",
            navHome: "Hem",
            navServices: "Tjänster",
            navAbout: "Om Oss",
            navContact: "Kontakt",
            heroHeadline: "Smartare Automation för Svensk Industri.",
            heroSubheadline: "Vi erbjuder 'rätt anpassade' automationslösningar för att hjälpa ditt SMF att blomstra i den digitala tidsåldern. Öka effektiviteten, sänk kostnaderna och förbli konkurrenskraftig.",
            ctaButton: "Påbörja Din Automationsresa",
            servicesTitle: "Våra Tjänster",
            servicesIntro: "Vi erbjuder ett strukturerat tillvägagångssätt för automation, vilket säkerställer att du får högsta möjliga avkastning på din investering.",
            service1Title: "1. Processutvärdering & Färdplan",
            service1Why: "För att säkerställa maximal effekt och ROI, börjar vi med att förstå era unika utmaningar och möjligheter.",
            keyActivities: "Nyckelaktiviteter",
            keyDeliverables: "Nyckelleveranser",
            s1act1: "Operativ Analys på Plats",
            s1act2: "Datainsamling & Processkartläggning",
            s1act3: "Identifiering av Automationsflaskhalsar",
            s1act4: "Digital Tvilling-simulering",
            s1del1: "En Detaljerad Automationsfärdplan",
            s1del2: "Tydliga ROI-prognoser",
            s1del3: "En Fasad, Budgetmedveten Plan",
            s1del4: "Leverantörsoberoende Teknikrekommendationer",
            service2Title: "2. Nyckelfärdig Implementering & Systemintegration",
            service2Why: "En plan är bara så bra som dess genomförande. Vi tar fullt ägande av projektet och förvandlar er färdplan till en fungerande verklighet.",
            s2act1: "Design av Anpassade El- & Kontrollskåp",
            s2act2: "PLC- och Robotprogrammering",
            s2act3: "Integration av IoT-sensornätverk",
            s2act4: "Anpassad Mjukvara & HMI-utveckling",
            s2del1: "Ett Fullständigt Driftsatt & Testat System",
            s2del2: "Komplett Projektdokumentation",
            s2del3: "Personalutbildning på Plats",
            service3Title: "3. Löpande Support & Proaktivt Underhåll",
            service3Why: "Er investering skyddas med vår proaktiva support, vilket säkerställer maximal drifttid och kontinuerlig förbättring.",
            s3act1: "24/7 Fjärrövervakning av System",
            s3act2: "Schemalagt Förebyggande Underhåll",
            s3act3: "Mjukvaruuppdateringar & Säkerhetspatchar",
            s3act4: "Prestandaanalys & Optimering",
            s3del1: "Ett Serviceavtal (SLA)",
            s3del2: "Prioriterad Tillgång till Teknisk Support",
            s3del3: "Sinnesro",
            approachTitle: "Innovatech-metoden",
            approach1Title: "Partners, Inte Leverantörer",
            approach1Desc: "Vi integrerar med ert team för att fungera som er dedikerade automationsavdelning.",
            approach2Title: "Pragmatiska & Rätt Anpassade",
            approach2Desc: "Vi är specialiserade på lösningar för SMF. Vi hittar rätt verktyg för jobbet, inte det dyraste.",
            approach3Title: "Datadrivna & Transpareanta",
            approach3Desc: "Vi använder simuleringar och tydlig data för att bevisa ett projekts värde innan ni binder er.",
            ctaTitle: "Redo att Förbättra Er Effektivitet?",
            ctaText: "Låt oss börja med ett förutsättningslöst samtal om era operativa utmaningar och mål.",
            ctaBtnText: "Boka Din Kostnadsfria Konsultation",
            aboutTitle: "Om Innovatech Systems",
            aboutIntro: "Vi är ett partnerskap av ingenjörs- och mjukvaruexpertis, dedikerade till att göra avancerad teknologi tillgänglig för svenska SMF.",
            ourMissionTitle: "Vårt Uppdrag",
            ourMissionText: "Vårt uppdrag är att stärka Sveriges små och medelstora företag genom att avmystifiera industriell automation. Vi tror att smart, skalbar teknik är nyckeln till konkurrenskraft och hållbar tillväxt. Vi agerar som er dedikerade teknikpartner och översätter komplexa utmaningar till praktiska, högavkastande lösningar som driver verkliga resultat.",
            ourStoryTitle: "Vår Historia",
            ourStoryText: "Innovatech Systems grundades i Göteborg av en passionerad elektroingenjör och en skicklig programmerare, och föddes ur en gemensam observation: medan stora företag skördade frukterna av Industri 4.0, lämnades de SMF som utgör ryggraden i vår ekonomi på efterkälken. Vi kombinerar praktisk industriell erfarenhet med banbrytande mjukvaruutveckling för att överbrygga denna klyfta och erbjuda de sofistikerade, integrerade lösningarna från ett stort företag med flexibiliteten, fokuset och det personliga engagemanget från en lokal partner.",
            meetTheTeamTitle: "Möt Teamet",
            aboutEEFounder: "Elektroingenjör & Grundare",
            aboutEEDesc: "Med en examen i elektroteknik och mångårig praktisk erfarenhet inom industriell automation och IT, överbryggar jag klyftan mellan fysiska maskiner och intelligent mjukvara. Mitt fokus är att designa robusta, effektiva system som löser verkliga problem.",
            aboutDevPartner: "Programmerare & Partner",
            aboutDevDesc: "Som professionell programmerare bygger jag mjukvaran som väcker våra automationslösningar till liv. Från anpassade instrumentpaneler och dataanalysverktyg till sömlösa API-integrationer, ser jag till att våra system inte bara är kraftfulla, utan också intuitiva och användarvänliga.",
            contactTitle: "Kontakta Oss",
            contactIntro: "Redo att diskutera ditt projekt? Fyll i formuläret nedan eller kontakta oss direkt. Vi ser fram emot att höra från dig.",
            formName: "Namn",
            formEmail: "E-post",
            formCompany: "Företag",
            formMessage: "Meddelande",
            formSubmit: "Skicka Meddelande",
            contactInfoTitle: "Kontaktinformation",
            contactHoursTitle: "Öppettider",
            contactHoursDays: "Måndag - Fredag: 08:00 - 17:00",
            contactHoursWeekend: "Lördag - Söndag: Stängt",
            footerRights: "Alla rättigheter förbehållna."
        },
        fr: {
            siteTitle: "Innovatech Systems - Automatisation Industrielle pour PME",
            servicesPageTitle: "Services - Innovatech Systems",
            aboutPageTitle: "À Propos - Innovatech Systems",
            contactPageTitle: "Contact - Innovatech Systems",
            navHome: "Accueil",
            navServices: "Services",
            navAbout: "À Propos",
            navContact: "Contact",
            heroHeadline: "L'automatisation plus intelligente pour l'industrie suédoise.",
            heroSubheadline: "Nous fournissons des solutions d'automatisation « sur mesure » pour aider votre PME à prospérer à l'ère numérique. Augmentez l'efficacité, réduisez les coûts et restez compétitif.",
            ctaButton: "Commencez votre parcours d'automatisation",
            servicesTitle: "Nos Services",
            servicesIntro: "Nous offrons une approche structurée de l'automatisation, garantissant le meilleur retour sur votre investissement.",
            service1Title: "1. Évaluation des processus et feuille de route",
            service1Why: "Pour garantir un impact et un retour sur investissement maximaux, nous commençons par comprendre vos défis et opportunités uniques.",
            keyActivities: "Activités Clés",
            keyDeliverables: "Livrables Clés",
            s1act1: "Analyse Opérationnelle sur Site",
            s1act2: "Collecte de Données et Cartographie des Processus",
            s1act3: "Identification des Goulots d'Étranglement",
            s1act4: "Simulation par Jumeau Numérique",
            s1del1: "Un Rapport Détaillé de Feuille de Route",
            s1del2: "Projections Claires du ROI",
            s1del3: "Un Plan Phasé et Respectueux du Budget",
            s1del4: "Recommandations Technologiques Indépendantes",
            service2Title: "2. Mise en œuvre clé en main et intégration de systèmes",
            service2Why: "Un plan ne vaut que par son exécution. Nous prenons en charge l'ensemble du projet, transformant votre feuille de route en une réalité fonctionnelle.",
            s2act1: "Conception d'Armoires Électriques sur Mesure",
            s2act2: "Programmation d'Automates et de Robots",
            s2act3: "Intégration de Réseaux de Capteurs IoT",
            s2act4: "Développement de Logiciels et d'IHM",
            s2del1: "Un Système Entièrement Mis en Service et Testé",
            s2del2: "Documentation Complète du Projet",
            s2del3: "Formation du Personnel sur Site",
            service3Title: "3. Support continu et maintenance proactive",
            service3Why: "Votre investissement est protégé par notre support proactif, garantissant un temps de disponibilité maximal et une amélioration continue.",
            s3act1: "Surveillance à Distance 24/7 des Systèmes",
            s3act2: "Maintenance Préventive Planifiée",
            s3act3: "Mises à Jour Logicielles et de Sécurité",
            s3act4: "Analyse et Optimisation des Performances",
            s3del1: "Un Accord de Niveau de Service (SLA)",
            s3del2: "Accès Prioritaire au Support Technique",
            s3del3: "Tranquillité d'Esprit",
            approachTitle: "La Méthode Innovatech",
            approach1Title: "Partenaires, Pas Fournisseurs",
            approach1Desc: "Nous nous intégrons à votre équipe pour fonctionner comme votre département d'automatisation dédié.",
            approach2Title: "Pragmatique et sur Mesure",
            approach2Desc: "Nous sommes spécialisés dans les solutions pour PME. Nous trouvons le bon outil, pas le plus cher.",
            approach3Title: "Axé sur les Données et Transparent",
            approach3Desc: "Nous utilisons des simulations et des données claires pour prouver la valeur d'un projet avant que vous ne vous engagiez.",
            ctaTitle: "Prêt à Améliorer Votre Efficacité ?",
            ctaText: "Commençons par une conversation sans engagement sur vos défis et objectifs opérationnels.",
            ctaBtnText: "Réservez Votre Consultation Gratuite",
            aboutTitle: "À Propos d'Innovatech Systems",
            aboutIntro: "Nous sommes un partenariat d'expertise en ingénierie et logiciels, dédié à rendre la technologie de pointe accessible aux PME suédoises.",
            ourMissionTitle: "Notre Mission",
            ourMissionText: "Notre mission est de renforcer les petites et moyennes entreprises suédoises en démystifiant l'automatisation industrielle. Nous pensons qu'une technologie intelligente et évolutive est la clé de la compétitivité et de la croissance durable. Nous agissons en tant que votre partenaire technologique dédié, traduisant les défis complexes en solutions pratiques à haut rendement qui génèrent des résultats concrets.",
            ourStoryTitle: "Notre Histoire",
            ourStoryText: "Fondée à Göteborg par un ingénieur électricien passionné et un programmeur qualifié, Innovatech Systems est née d'une observation partagée : alors que les grandes entreprises récoltaient les bénéfices de l'Industrie 4.0, les PME qui constituent l'épine dorsale de notre économie étaient laissées pour compte. Nous combinons une expérience industrielle pratique avec un développement logiciel de pointe pour combler cette lacune, offrant les solutions sophistiquées et intégrées d'une grande entreprise avec l'agilité, la concentration et l'engagement personnel d'un partenaire local.",
            meetTheTeamTitle: "Rencontrez l'équipe",
            aboutEEFounder: "Ingénieur Électricien & Fondateur",
            aboutEEDesc: "Avec un diplôme en génie électrique et des années d'expérience en automatisation industrielle et en IT, je comble le fossé entre machines et logiciels intelligents.",
            aboutDevPartner: "Programmeur & Partenaire",
            aboutDevDesc: "En tant que programmeur, je construis le logiciel qui donne vie à nos solutions. Des tableaux de bord personnalisés aux intégrations d'API, je garantis des systèmes puissants et conviviaux.",
            contactTitle: "Nous Contacter",
            contactIntro: "Prêt à discuter de votre projet ? Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous avons hâte d'avoir de vos nouvelles.",
            formName: "Nom",
            formEmail: "E-mail",
            formCompany: "Entreprise",
            formMessage: "Message",
            formSubmit: "Envoyer le Message",
            contactInfoTitle: "Coordonnées",
            contactHoursTitle: "Heures d'Ouverture",
            contactHoursDays: "Lundi - Vendredi : 08:00 - 17:00",
            contactHoursWeekend: "Samedi - Dimanche : Fermé",
            footerRights: "Tous droits réservés."
        },
        es: {
            siteTitle: "Innovatech Systems - Automatización Industrial para PYMES",
            servicesPageTitle: "Servicios - Innovatech Systems",
            aboutPageTitle: "Sobre Nosotros - Innovatech Systems",
            contactPageTitle: "Contacto - Innovatech Systems",
            navHome: "Inicio",
            navServices: "Servicios",
            navAbout: "Sobre Nosotros",
            navContact: "Contacto",
            heroHeadline: "Automatización más inteligente para la industria sueca.",
            heroSubheadline: "Ofrecemos soluciones de automatización 'a medida' para ayudar a su PYME a prosperar en la era digital. Aumente la eficiencia, reduzca los costos y manténgase competitivo.",
            ctaButton: "Inicie su viaje de automatización",
            servicesTitle: "Nuestros Servicios",
            servicesIntro: "Ofrecemos un enfoque estructurado para la automatización, asegurando que obtenga el mayor retorno de su inversión.",
            service1Title: "1. Evaluación de Procesos y Hoja de Ruta",
            service1Why: "Para asegurar el máximo impacto y ROI, comenzamos por entender sus desafíos y oportunidades únicos.",
            keyActivities: "Actividades Clave",
            keyDeliverables: "Entregables Clave",
            s1act1: "Análisis Operativo in Situ",
            s1act2: "Recopilación de Datos y Mapeo de Procesos",
            s1act3: "Identificación de Cuellos de Botella",
            s1act4: "Simulación con Gemelo Digital",
            s1del1: "Un Informe Detallado de Hoja de Ruta",
            s1del2: "Proyecciones Claras de ROI",
            s1del3: "Un Plan por Fases y Ajustado al Presupuesto",
            s1del4: "Recomendaciones Tecnológicas Agnósticas",
            service2Title: "2. Implementación Llave en Mano e Integración de Sistemas",
            service2Why: "Un plan es tan bueno como su ejecución. Asumimos la propiedad total del proyecto, convirtiendo su hoja de ruta en una realidad funcional.",
            s2act1: "Diseño de Paneles de Control Eléctricos a Medida",
            s2act2: "Programación de PLC y Robots",
            s2act3: "Integración de Redes de Sensores IoT",
            s2act4: "Desarrollo de Software e HMI a Medida",
            s2del1: "Un Sistema Totalmente Comisionado y Probado",
            s2del2: "Documentación Completa del Proyecto",
            s2del3: "Capacitación del Personal in Situ",
            service3Title: "3. Soporte Continuo y Mantenimiento Proactivo",
            service3Why: "Su inversión está protegida con nuestro soporte proactivo, asegurando el máximo tiempo de actividad y una mejora continua.",
            s3act1: "Monitorización Remota de Sistemas 24/7",
            s3act2: "Mantenimiento Preventivo Programado",
            s3act3: "Actualizaciones de Software y Parches de Seguridad",
            s3act4: "Análisis y Optimización del Rendimiento",
            s3del1: "Un Acuerdo de Nivel de Servicio (SLA)",
            s3del2: "Acceso Prioritario al Soporte Técnico",
            s3del3: "Tranquilidad",
            approachTitle: "El Método Innovatech",
            approach1Title: "Socios, No Proveedores",
            approach1Desc: "Nos integramos con su equipo para funcionar como su departamento de automatización dedicado.",
            approach2Title: "Pragmático y a Medida",
            approach2Desc: "Nos especializamos en soluciones para PYMES. Encontramos la herramienta adecuada, no la más cara.",
            approach3Title: "Basado en Datos y Transparente",
            approach3Desc: "Usamos simulaciones y datos claros para demostrar el valor de un proyecto antes de que usted se comprometa.",
            ctaTitle: "¿Listo para Mejorar Su Eficiencia?",
            ctaText: "Comencemos con una conversación sin compromiso sobre sus desafíos y metas operativas.",
            ctaBtnText: "Reserve su Consulta Gratuita",
            aboutTitle: "Sobre Innovatech Systems",
            aboutIntro: "Somos una asociación de experiencia en ingeniería y software, dedicada a hacer que la tecnología avanzada sea accesible para las PYMES suecas.",
            ourMissionTitle: "Nuestra Misión",
            ourMissionText: "Nuestra misión es empoderar a las pequeñas y medianas empresas de Suecia desmitificando la automatización industrial. Creemos que la tecnología inteligente y escalable es la clave para la competitividad y el crecimiento sostenible. Actuamos como su socio tecnológico dedicado, traduciendo desafíos complejos en soluciones prácticas y de alto rendimiento que impulsan resultados del mundo real.",
            ourStoryTitle: "Nuestra Historia",
            ourStoryText: "Fundada en Gotemburgo por un apasionado ingeniero eléctrico y un hábil programador, Innovatech Systems nació de una observación compartida: mientras que las grandes corporaciones cosechaban los beneficios de la Industria 4.0, las PYMES que forman la columna vertebral de nuestra economía se estaban quedando atrás. Combinamos la experiencia industrial práctica con el desarrollo de software de vanguardia para cerrar esta brecha, ofreciendo las soluciones sofisticadas e integradas de una gran empresa con la agilidad, el enfoque y el compromiso personal de un socio local.",
            meetTheTeamTitle: "Conoce al Equipo",
            aboutEEFounder: "Ingeniero Eléctrico y Fundador",
            aboutEEDesc: "Con un título en Ingeniería Eléctrica y años de experiencia en automatización industrial y TI, cierro la brecha entre la maquinaria física y el software inteligente.",
            aboutDevPartner: "Programador y Socio",
            aboutDevDesc: "Como programador, construyo el software que da vida a nuestras soluciones. Desde paneles de control personalizados hasta integraciones de API, aseguro sistemas potentes y fáciles de usar.",
            contactTitle: "Ponerse en Contacto",
            contactIntro: "Listo para discutir su proyecto? Complete el formulario a continuación o contáctenos directamente. Esperamos con interés escuchar de usted.",
            formName: "Nombre",
            formEmail: "Correo Electrónico",
            formCompany: "Empresa",
            formMessage: "Mensaje",
            formSubmit: "Enviar Mensaje",
            contactInfoTitle: "Información de Contacto",
            contactHoursTitle: "Horario de Atención",
            contactHoursDays: "Lunes - Viernes: 08:00 - 17:00",
            contactHoursWeekend: "Sábado - Domingo: Cerrado",
            footerRights: "Todos los derechos reservados."
        }
    };

    // --- Language Switching Logic ---
    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang-set') === lang) {
                btn.classList.add('active');
            }
        });
        localStorage.setItem('preferredLanguage', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang-set');
            setLanguage(lang);
        });
    });

    // --- Auto-detect Language ---
    const detectLanguage = () => {
        const preferredLang = localStorage.getItem('preferredLanguage');
        if (preferredLang && translations[preferredLang]) {
            return preferredLang;
        }
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            return browserLang;
        }
        return 'en'; // Default to English
    };

    // --- Mobile Navigation Toggle ---
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLi.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Thank you! Your message has been sent.';
            successMessage.style.padding = '1rem';
            successMessage.style.backgroundColor = '#d4edda';
            successMessage.style.color = '#155724';
            successMessage.style.border = '1px solid #c3e6cb';
            successMessage.style.borderRadius = '8px';
            successMessage.style.marginTop = '1rem';
            successMessage.style.textAlign = 'center';
            contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
            contactForm.reset();
            setTimeout(() => {
                successMessage.style.transition = 'opacity 0.5s ease';
                successMessage.style.opacity = '0';
                setTimeout(() => successMessage.remove(), 500);
            }, 5000);
        });
    }

    // --- Initial Load ---
    const initialLang = detectLanguage();
    setLanguage(initialLang);
});
