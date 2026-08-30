// Menú Hamburguesa para móviles (a prueba de fallos)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al clickear enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Animaciones al hacer scroll (Aparecer suavemente)
const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Seleccionar elementos para animar
document.querySelectorAll('h3, #sobre-mi p, .timeline-item, .skill-card, .lang-item, .academic-item, .other-exp-card, .contact-form form, .detail-section').forEach(el => {
    fadeInObserver.observe(el);
});

// Animación específica para las barras de idiomas
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.lang-bar-fill');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const languagesSection = document.querySelector('.languages');
if (languagesSection) {
    skillObserver.observe(languagesSection);
}

// Efecto del Navbar al hacer Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.nav-logo');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(217, 224, 229, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            if (logo) logo.style.display = 'block';
        } else {
            navbar.style.background = 'var(--bg-header)';
            navbar.style.boxShadow = 'none';
            if (window.innerWidth > 768 && logo) logo.style.display = 'none';
        }
    }
});

// --- SISTEMA MULTI-IDIOMA (ES / EN) ---
const translations = {
    es: {
        // --- FECHAS DE EXPERIENCIA ---
        // CAMBIAR AQUÍ: si una actividad finaliza, reemplaza "Actual" por el mes de término (ej. "Dic 2026")
        "date_exp1": "Mar 2026 - Jul 2026",
        "date_exp2": "Ene 2026 - Mar 2026",
        "date_exp3": "Ago 2026 - Dic 2026",
        "date_exp4": "2019 - 2025",

        // --- NAVEGACIÓN ---
        "nav_about": "Sobre Mí",
        "nav_exp": "Experiencia",
        "nav_skills": "Habilidades",
        "nav_edu": "Formación",
        "nav_other": "Otras Experiencias",
        "nav_contact": "Contacto",
        "nav_back": "Volver al Portafolio",

        // --- CABECERA Y SOBRE MÍ ---
        "header_subtitle": "ESTUDIANTE DE INGENIERÍA CIVIL INDUSTRIAL",
        "about_title": "Sobre Mí",
        "about_text": "Estudiante de penúltimo año de Ingeniería Civil Industrial con formación integral en gestión de procesos, evaluación de proyectos y análisis de datos. Cuento con experiencia práctica en el sector público en fomento productivo y formulación de proyectos, complementada con habilidades pedagógicas como ayudante universitario. Poseo formación en metodologías ágiles (Scrum), herramientas de productividad e integración de TICs, todo complementado por mi adaptabilidad y proactividad en entornos cambiantes y mi enfoque en la colaboración con equipos multidisciplinarios.",
        "btn_cv": "Descargar CV en PDF",

        // --- EXPERIENCIA ---
        "exp_title": "Experiencia Laboral",
        "exp_role1": "Ayudante de Formulación y Evaluación de Proyectos",
        "exp_desc1": "Desarrollo de talleres, análisis de datos operativos y creación de material didáctico.",
        "exp_role2": "Práctica Profesional - Área de Fomento Productivo",
        "exp_desc2": "Asesoría en postulación a fondos concursables y coordinación operativa de eventos comunales.",
        "exp_role3": "Ayudante de Taller de Análisis de Datos",
        "exp_desc3": "Diseño de material didáctico y guías de apoyo para el análisis operacional de datos.",
        "exp_role4": "Trabajo Agrícola de Temporada y Comercio Local",
        "exp_desc4": "Manejo de cultivos, atención al público, reposición de productos y manejo de caja.",

        // --- HABILIDADES ---
        "skills_title": "Habilidades Técnicas y Herramientas",
        "skill1": "Gestión de Procesos",
        "skill2": "Análisis de Datos",
        "skill3": "Formulación y Evaluación de Proyectos",
        "skill4": "Metodologías Ágiles (Scrum)",
        "skill5": "Programación (Python)",
        "skill6": "Microsoft Excel (Intermedio)",
        "skill7": "Google Workspace",
        "skill8": "Herramientas de IA y TICs",

        // --- IDIOMAS ---
        "lang_title": "Idiomas",
        "lang_es": "Español",
        "lang_en": "Inglés",
        "lang_level_native": "Nivel Nativo",
        "lang_level_med": "Nivel Medio (B1)",

        // --- FORMACIÓN ---
        "edu_title": "Datos Académicos",
        "edu_degree_industrial": "Ingeniería Civil Industrial",
        "status_current": "(En curso, desde Marzo 2022)",
        "edu_minor": "Minor en Análisis de Datos",
        "status_current_minor": "(En curso, desde Mar 2024)",
        "edu_sercotec": "Gestión y Metodologías Empresariales (2025)",
        "edu_coursera": "Competencias Digitales: Herramientas de Ofimática · Coursera, 50 hrs (2025)",
        "edu_santander": "Excel Básico a Intermedio · 8 hrs (2024)",
        "edu_google": "Inteligencia Artificial y Productividad (2024)",
        "edu_mit": "Introducción a la IA Generativa (2024 - 2025)",
        "btn_cert": "Ver Certificado",
        "cert_scrum": "Scrum para MiPEs",
        "cert_procesos": "Procesos Internos",
        "cert_personas": "Gestión de Personas",
        "cert_planificar": "Planificación de Negocios",
        "cert_tics": "Integración de TICs",

        // --- OTRAS EXPERIENCIAS ---
        "other_title": "Otras Experiencias",
        "other_t2": "Escuela de Venta para Emprendedores",
        "other_desc2": "Curso del Centro de Negocios SERCOTEC Villarrica, operado por la Universidad de La Frontera (Nov 2024).",
        "other_t5": "Prepárate para tu Futuro Profesional",
        "other_desc5": "Programa de empleabilidad de Alumni UFRO (18 horas): comunicación efectiva, liderazgo, gestión del tiempo, marca personal y preparación de entrevistas.",
        "other_t3": "AQUA365: Innovación por el Agua",
        "other_desc3": "Ciclo de charlas organizado por la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile e Ingeniería Sin Fronteras Chile (2025).",
        "other_t1": "Equidad de Género",
        "other_desc1": "Curso de Monitor de Equidad de Género (15 horas), Alumni UFRO.",
        "other_t4": "Voluntariado y Vida Universitaria",
        "other_desc4": "Programa PAAU \"Aprobando Ando\" (DDE), voluntariado de reparación de bicicletas en Campamento Suyai y UFRO Bike, y Campeonato Intercarreras de Vóleibol Mixto.",

        // --- CONTACTO Y PIE ---
        "contact_title": "Contacto",
        "contact_name_ph": "Tu nombre",
        "contact_email_ph": "Tu email",
        "contact_msg_ph": "Tu mensaje",
        "contact_btn": "Enviar Mensaje",
        "footer_rights": "Todos los derechos reservados.",
        "btn_more_info": "Más información",

        // --- MENSAJES DEL FORMULARIO ---
        "msg_success": "¡Mensaje enviado con éxito!",
        "msg_error": "Hubo un problema. Intenta de nuevo.",

        // --- PÁGINAS DE DETALLE ---
        "gallery_title": "Galería de Proyectos",

        "ufro_proy_title": "Ayudantía: Formulación y Evaluación de Proyectos",
        "ufro_proy_subtitle": "Talleres, análisis de datos operativos y material didáctico",
        "ufro_proy_detail_text": "Apoyo en la sección práctica de la asignatura mediante el diseño y conducción de talleres sobre formulación de proyectos. Apoyo a los estudiantes en el análisis de datos operativos para estudios de mercado y evaluación económica básica, además de la elaboración de guías de ejercicios prácticos.",

        "muni_title": "Práctica Profesional: I. Municipalidad de Río Negro",
        "muni_subtitle": "Área de Fomento Productivo",
        "muni_detail_text": "Asesoría a emprendedores y productores locales en la formulación y postulación a fondos concursables, apoyando en la revisión de requisitos y carpetas de presentación. Apoyo en la gestión logística, permisos institucionales y coordinación operativa de eventos y festivales comunales.",

        "ufro_datos_title": "Ayudantía: Taller de Análisis de Datos",
        "ufro_datos_subtitle": "Material didáctico y guías para el análisis operacional",
        "ufro_datos_detail_text": "Desarrollo de material didáctico y guías de apoyo práctico para el análisis operacional de datos. Elaboración de ejercicios paso a paso y preparación de conjuntos de datos para el trabajo de los estudiantes en clases.",

        "agricola_title": "Trabajo Agrícola de Temporada y Comercio Local",
        "agricola_subtitle": "Labores de campo y atención al público en Río Negro",
        "agricola_detail_text": "Apoyo en labores agrícolas de campo en manejo de cultivos y trabajo en equipo de temporada. En el comercio local, desempeño en atención al cliente, reposición de productos y manejo básico de caja."
    },

    en: {
        // --- EXPERIENCE DATES ---
        "date_exp1": "Mar 2026 - Jul 2026",
        "date_exp2": "Jan 2026 - Mar 2026",
        "date_exp3": "Aug 2026 - Dec 2026",
        "date_exp4": "2019 - 2025",

        // --- NAVIGATION ---
        "nav_about": "About Me",
        "nav_exp": "Experience",
        "nav_skills": "Skills",
        "nav_edu": "Education",
        "nav_other": "Other Experiences",
        "nav_contact": "Contact",
        "nav_back": "Back to Portfolio",

        // --- HEADER AND ABOUT ---
        "header_subtitle": "INDUSTRIAL ENGINEERING STUDENT",
        "about_title": "About Me",
        "about_text": "Penultimate-year Industrial Engineering student with well-rounded training in process management, project appraisal and data analysis. I have hands-on public-sector experience in productive development and project formulation, complemented by teaching skills as a university teaching assistant. I am trained in agile methodologies (Scrum), productivity tools and ICT integration, all supported by my adaptability and proactivity in changing environments and my focus on collaboration with multidisciplinary teams.",
        "btn_cv": "Download CV as PDF",

        // --- EXPERIENCE ---
        "exp_title": "Work Experience",
        "exp_role1": "Teaching Assistant, Project Formulation and Appraisal",
        "exp_desc1": "Running workshops, analysing operational data and creating teaching materials.",
        "exp_role2": "Professional Internship - Productive Development Unit",
        "exp_desc2": "Advising on applications to public funding programmes and operational coordination of municipal events.",
        "exp_role3": "Teaching Assistant, Data Analysis Workshop",
        "exp_desc3": "Design of teaching materials and practical guides for operational data analysis.",
        "exp_role4": "Seasonal Agricultural Work and Local Retail",
        "exp_desc4": "Crop handling, customer service, stock replenishment and basic cash handling.",

        // --- SKILLS ---
        "skills_title": "Technical Skills and Tools",
        "skill1": "Process Management",
        "skill2": "Data Analysis",
        "skill3": "Project Formulation and Appraisal",
        "skill4": "Agile Methodologies (Scrum)",
        "skill5": "Programming (Python)",
        "skill6": "Microsoft Excel (Intermediate)",
        "skill7": "Google Workspace",
        "skill8": "AI and ICT Tools",

        // --- LANGUAGES ---
        "lang_title": "Languages",
        "lang_es": "Spanish",
        "lang_en": "English",
        "lang_level_native": "Native",
        "lang_level_med": "Intermediate (B1)",

        // --- EDUCATION ---
        "edu_title": "Education",
        "edu_degree_industrial": "Industrial Engineering",
        "status_current": "(In progress, since March 2022)",
        "edu_minor": "Minor in Data Analysis",
        "status_current_minor": "(In progress, since Mar 2024)",
        "edu_sercotec": "Business Management and Methodologies (2025)",
        "edu_coursera": "Digital Skills: Office Software · Coursera, 50 hrs (2025)",
        "edu_santander": "Excel, Basic to Intermediate · 8 hrs (2024)",
        "edu_google": "Artificial Intelligence and Productivity (2024)",
        "edu_mit": "Introduction to Generative AI (2024 - 2025)",
        "btn_cert": "View Certificate",
        "cert_scrum": "Scrum for Small Businesses",
        "cert_procesos": "Internal Processes",
        "cert_personas": "People Management",
        "cert_planificar": "Business Planning",
        "cert_tics": "ICT Integration",

        // --- OTHER EXPERIENCES ---
        "other_title": "Other Experiences",
        "other_t2": "Sales School for Entrepreneurs",
        "other_desc2": "Course run by the SERCOTEC Villarrica Business Center, operated by Universidad de La Frontera (Nov 2024).",
        "other_t5": "Prepare for Your Professional Future",
        "other_desc5": "Alumni UFRO employability program (18 hours): effective communication, leadership, time management, personal branding and interview preparation.",
        "other_t3": "AQUA365: Innovation for Water",
        "other_desc3": "Talk series organized by the Faculty of Physical and Mathematical Sciences of Universidad de Chile and Ingeniería Sin Fronteras Chile (2025).",
        "other_t1": "Gender Equity",
        "other_desc1": "Gender Equity Facilitator course (15 hours), Alumni UFRO.",
        "other_t4": "Volunteering and University Life",
        "other_desc4": "PAAU \"Aprobando Ando\" programme (DDE), bicycle repair volunteering at Campamento Suyai and UFRO Bike, and the Inter-Faculty Mixed Volleyball Championship.",

        // --- CONTACT AND FOOTER ---
        "contact_title": "Contact",
        "contact_name_ph": "Your name",
        "contact_email_ph": "Your email",
        "contact_msg_ph": "Your message",
        "contact_btn": "Send Message",
        "footer_rights": "All rights reserved.",
        "btn_more_info": "More information",

        // --- FORM MESSAGES ---
        "msg_success": "Message sent successfully!",
        "msg_error": "Something went wrong. Please try again.",

        // --- DETAIL PAGES ---
        "gallery_title": "Project Gallery",

        "ufro_proy_title": "Teaching Assistant: Project Formulation and Appraisal",
        "ufro_proy_subtitle": "Workshops, operational data analysis and teaching materials",
        "ufro_proy_detail_text": "Support for the practical section of the course through the design and delivery of workshops on project formulation. Support for students in the analysis of operational data for market studies and basic economic appraisal, along with the preparation of practical exercise guides.",

        "muni_title": "Professional Internship: Municipality of Río Negro",
        "muni_subtitle": "Productive Development Unit",
        "muni_detail_text": "Advisory support for local entrepreneurs and producers on formulating and submitting applications to public funding programs, assisting with the review of requirements and application dossiers. Support in logistics management, institutional permits and operational coordination of municipal events and festivals.",

        "ufro_datos_title": "Teaching Assistant: Data Analysis Workshop",
        "ufro_datos_subtitle": "Teaching materials and guides for operational analysis",
        "ufro_datos_detail_text": "Development of teaching materials and practical support guides for operational data analysis. Preparation of step-by-step exercises and datasets for students to work with in class.",

        "agricola_title": "Seasonal Agricultural Work and Local Retail",
        "agricola_subtitle": "Fieldwork and customer service in Río Negro",
        "agricola_detail_text": "Support in agricultural fieldwork involving crop handling and seasonal teamwork. In local retail, work in customer service, stock replenishment and basic cash handling."
    }
};

// Formulario de Contacto con Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(contactForm);
        const currentLang = localStorage.getItem('preferredLanguage') || 'es';

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.setAttribute('data-key', 'msg_success');
                formStatus.textContent = translations[currentLang]['msg_success'];
                formStatus.style.display = "block";
                contactForm.reset();
            } else {
                formStatus.setAttribute('data-key', 'msg_error');
                formStatus.textContent = translations[currentLang]['msg_error'];
                formStatus.style.display = "block";
            }
        } catch (error) {
            formStatus.setAttribute('data-key', 'msg_error');
            formStatus.textContent = translations[currentLang]['msg_error'];
            formStatus.style.display = "block";
        }
    });
}

// Archivos de CV correspondientes a cada idioma
const cvFiles = {
    es: "curriculum_felipe_ojeda_es.pdf",
    en: "curriculum_felipe_ojeda_en.pdf"
};

function changeLanguage(lang) {
    // 1. Cambiar los textos normales
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.children.length === 0) {
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = element.innerHTML.replace(element.textContent.trim(), translations[lang][key]);
            }
        }
    });

    // 2. Cambiar los placeholders del formulario
    const placeholders = document.querySelectorAll('[data-placeholder-key]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // 3. Cambiar el archivo del CV a descargar (solo si existe el botón)
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = cvFiles[lang];
    }

    // 4. Actualizar el atributo lang del documento
    document.documentElement.setAttribute('lang', lang);

    // 5. Actualizar la clase "active" en los botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const currentBtn = document.getElementById('btn-' + lang);
    if (currentBtn) {
        currentBtn.classList.add('active');
    }

    // 6. Guardar preferencia en el navegador
    localStorage.setItem('preferredLanguage', lang);
}

// Inicializar idioma y año al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    let savedLang = localStorage.getItem('preferredLanguage') || 'es';
    if (!translations[savedLang]) {
        savedLang = 'es';
    }
    changeLanguage(savedLang);
});
