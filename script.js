document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLi = document.querySelectorAll('.nav-links li');
    const langButtons = document.querySelectorAll('.lang-btn');

    // --- Translations Object ---
    const translations = {
        en: {
            siteTitle: "Innovatech Systems - Industrial Automation for SMEs",
            navHome: "Home",
            navServices: "Services",
            navAbout: "About Us",
            navContact: "Contact",
            heroHeadline: "Smarter Automation for Swedish Industry.",
            heroSubheadline: "We provide \"right-sized\" automation solutions to help your SME thrive in the digital age. Boost efficiency, cut costs, and stay competitive.",
            ctaButton: "Start Your Automation Journey",
            servicesTitle: "Our Services",
            servicesIntro: "We offer a structured approach to automation, ensuring you get the highest return on your investment.",
            service1Title: "1. Process Evaluation & Roadmap",
            service1Desc: "We analyze your current operations to identify the most impactful automation opportunities. You receive a clear, actionable roadmap for digital transformation.",
            service2Title: "2. Turnkey Implementation",
            service2Desc: "From custom control panels and PLC programming to integrating IoT sensors and robotics, we design and implement your tailored automation solution from start to finish.",
            service3Title: "3. Support & Maintenance",
            service3Desc: "We ensure your systems run smoothly with retainer-based service contracts. This includes ongoing support, software updates, and preventative maintenance.",
            aboutTitle: "About Innovatech Systems",
            aboutIntro: "We are a partnership of engineering and software expertise, dedicated to making advanced technology accessible for Swedish SMEs.",
            aboutEEFounder: "Electrical Engineer & Founder",
            aboutEEDesc: "With a degree in Electrical Engineering and years of hands-on experience in industrial automation and IT, I bridge the gap between physical machinery and intelligent software. My focus is on designing robust, efficient systems that solve real-world problems.",
            aboutDevPartner: "Programmer & Partner",
            aboutDevDesc: "As a professional programmer, I build the software that brings our automation solutions to life. From custom dashboards and data analysis tools to seamless API integrations, I ensure our systems are not just powerful, but also intuitive and user-friendly.",
            contactTitle: "Get in Touch",
            contactIntro: "Ready to discuss your project? Fill out the form below or contact us directly.",
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
            service1Desc: "Vi analyserar er nuvarande verksamhet för att identifiera de mest effektfulla automationsmöjligheterna. Ni får en tydlig, handlingskraftig färdplan för digital transformation.",
            service2Title: "2. Nyckelfärdig Implementering",
            service2Desc: "Från anpassade kontrollpaneler och PLC-programmering till integrering av IoT-sensorer och robotik, designar och implementerar vi er skräddarsydda automationslösning från start till mål.",
            service3Title: "3. Support & Underhåll",
            service3Desc: "Vi ser till att era system fungerar smidigt med tjänsteavtal på retainer-basis. Detta inkluderar löpande support, mjukvaruuppdateringar och förebyggande underhåll.",
            aboutTitle: "Om Innovatech Systems",
            aboutIntro: "Vi är ett partnerskap av ingenjörs- och mjukvaruexpertis, dedikerade till att göra avancerad teknologi tillgänglig för svenska SMF.",
            aboutEEFounder: "Elektroingenjör & Grundare",
            aboutEEDesc: "Med en examen i elektroteknik och mångårig praktisk erfarenhet inom industriell automation och IT, överbryggar jag klyftan mellan fysiska maskiner och intelligent mjukvara. Mitt fokus är att designa robusta, effektiva system som löser verkliga problem.",
            aboutDevPartner: "Programmerare & Partner",
            aboutDevDesc: "Som professionell programmerare bygger jag mjukvaran som väcker våra automationslösningar till liv. Från anpassade instrumentpaneler och dataanalysverktyg till sömlösa API-integrationer, ser jag till att våra system inte bara är kraftfulla, utan också intuitiva och användarvänliga.",
            contactTitle: "Kontakta Oss",
            contactIntro: "Redo att diskutera ditt projekt? Fyll i formuläret nedan eller kontakta oss direkt.",
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
            service1Desc: "Nous analysons vos opérations actuelles pour identifier les opportunités d'automatisation les plus percutantes. Vous recevez une feuille de route claire et exploitable pour la transformation numérique.",
            service2Title: "2. Mise en œuvre clé en main",
            service2Desc: "Des panneaux de contrôle personnalisés et de la programmation d'automates à l'intégration de capteurs IoT et de la robotique, nous concevons votre solution sur mesure.",
            service3Title: "3. Support et Maintenance",
            service3Desc: "Nous assurons le bon fonctionnement de vos systèmes avec des contrats de service. Cela inclut un support continu, des mises à jour logicielles et une maintenance préventive.",
            aboutTitle: "À Propos d'Innovatech Systems",
            aboutIntro: "Nous sommes un partenariat d'expertise en ingénierie et logiciels, dédié à rendre la technologie de pointe accessible aux PME suédoises.",
            aboutEEFounder: "Ingénieur Électricien & Fondateur",
            aboutEEDesc: "Avec un diplôme en génie électrique et des années d'expérience en automatisation industrielle et en IT, je comble le fossé entre machines et logiciels intelligents.",
            aboutDevPartner: "Programmeur & Partenaire",
            aboutDevDesc: "En tant que programmeur, je construis le logiciel qui donne vie à nos solutions. Des tableaux de bord personnalisés aux intégrations d'API, je garantis des systèmes puissants et conviviaux.",
            contactTitle: "Nous Contacter",
            contactIntro: "Prêt à discuter de votre projet ? Remplissez le formulaire ci-dessous ou contactez-nous directement.",
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
            service1Desc: "Analizamos sus operaciones actuales para identificar las oportunidades de automatización de mayor impacto. Recibirá una hoja de ruta clara y procesable para la transformación digital.",
            service2Title: "2. Implementación Llave en Mano",
            service2Desc: "Desde paneles de control personalizados y programación de PLC hasta la integración de sensores IoT y robótica, diseñamos e implementamos su solución a medida.",
            service3Title: "3. Soporte y Mantenimiento",
            service3Desc: "Aseguramos que sus sistemas funcionen sin problemas con contratos de servicio. Esto incluye soporte continuo, actualizaciones de software y mantenimiento preventivo.",
            aboutTitle: "Sobre Innovatech Systems",
            aboutIntro: "Somos una asociación de experiencia en ingeniería y software, dedicada a hacer que la tecnología avanzada sea accesible para las PYMES suecas.",
            aboutEEFounder: "Ingeniero Eléctrico y Fundador",
            aboutEEDesc: "Con un título en Ingeniería Eléctrica y años de experiencia en automatización industrial y TI, cierro la brecha entre la maquinaria física y el software inteligente.",
            aboutDevPartner: "Programador y Socio",
            aboutDevDesc: "Como programador, construyo el software que da vida a nuestras soluciones. Desde paneles de control personalizados hasta integraciones de API, aseguro sistemas potentes y fáciles de usar.",
            contactTitle: "Ponerse en Contacto",
            contactIntro: "¿Listo para discutir su proyecto? Complete el formulario a continuación o contáctenos directamente.",
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
                // Handle special cases like the title tag
                if (element.tagName === 'TITLE') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        // Update the lang attribute of the html tag
        document.documentElement.lang = lang;

        // Update active button style
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang-set') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Store user preference
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

    // --- Page Navigation Logic ---
    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        const activePage = document.querySelector(pageId);
        if (activePage) {
            activePage.classList.add('active');
            window.scrollTo(0, 0);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href');
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`a[href="${pageId}"]`).forEach(activeLink => {
                activeLink.classList.add('active');
            });
            showPage(pageId);
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLi.forEach(link => link.style.animation = '');
            }
        });
    });

    // --- Handle CTA button click ---
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href');
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`a[href="${pageId}"]`).forEach(l => l.classList.add('active'));
            showPage(pageId);
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
    showPage('#home');
    document.querySelector('a[href="#home"]').classList.add('active');
    const initialLang = detectLanguage();
    setLanguage(initialLang);
});
