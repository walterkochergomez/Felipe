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
        "date_exp1": "Mar 2026 - Actual",
        "date_exp2": "Ene 2026 - Mar 2026",
        "date_exp3": "Ago 2023 - Jul 2024",
        "date_exp4": "2021 - 2023",

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
        "exp_role2": "Práctica de estudios",
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
        "skill5": "Programación (Python, Java)",
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
        "status_current": "(En curso, desde Dic 2023)",
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
        "ufro_proy_detail_text": "La formulación y evaluación de proyectos es el puente entre una idea y una decisión de inversión fundamentada: permite anticipar riesgos y ordenar los criterios antes de comprometer recursos. Como ayudante de la sección práctica de esta asignatura, mi rol es acompañar a los equipos de estudiantes en ese recorrido completo. Diseño y conduzco talleres donde los alumnos estructuran proyectos desde el estudio de mercado hasta la evaluación económica, y trabajo con datos operativos para construir los casos y verificar la consistencia de los supuestos que ellos plantean. Además, elaboro material didáctico y guías de apoyo que traducen la metodología a un lenguaje aplicable a problemas reales. Esta experiencia ha fortalecido mi capacidad para explicar conceptos técnicos con claridad, evaluar propuestas con criterio y sostener el trabajo pedagógico de forma constante junto al equipo docente.",

        "muni_title": "Práctica: I. Municipalidad de Río Negro",
        "muni_subtitle": "Fomento productivo, fondos concursables y gestión de eventos",
        "muni_detail_text": "El fomento productivo municipal es donde la gestión pública se encuentra directamente con el emprendedor: de la calidad de esa asesoría depende que un proyecto local acceda o no a financiamiento. Durante mi práctica en la Ilustre Municipalidad de Río Negro asesoré a emprendedores y productores de la comuna en la formulación y postulación a fondos concursables, ayudándoles a ordenar su propuesta, justificar la inversión y cumplir con los requisitos formales de cada convocatoria. En paralelo asumí tareas de gestión logística y coordinación operativa en festivales y eventos comunales, además de la tramitación de permisos institucionales, lo que implicó articular plazos, proveedores y distintas unidades municipales. La experiencia me dio una visión concreta del funcionamiento del sector público, de la importancia de la trazabilidad administrativa y de cómo la planificación operativa determina el resultado final de una actividad con la comunidad.",

        "ufro_datos_title": "Ayudantía: Taller de Análisis de Datos",
        "ufro_datos_subtitle": "Material didáctico y guías para el análisis operacional",
        "ufro_datos_detail_text": "El análisis de datos deja de ser un ejercicio abstracto cuando se aplica a la operación real de una empresa: procesos, tiempos, inventarios y demanda. Como ayudante de este taller fui responsable del diseño y desarrollo del material didáctico y de las guías de apoyo práctico que los estudiantes utilizaron para el análisis operacional de datos. Ese trabajo consistió en construir ejercicios progresivos, preparar conjuntos de datos representativos y documentar los procedimientos paso a paso, de modo que cada alumno pudiera reproducir el análisis y entender el porqué de cada decisión metodológica. Preparar este material me obligó a dominar la materia con un nivel de detalle mayor al de un estudiante regular y consolidó mi manejo de herramientas de análisis, además de mi capacidad para estructurar contenido técnico de forma clara y ordenada.",

        "agricola_title": "Trabajo Agrícola de Temporada y Comercio Local",
        "agricola_subtitle": "Labores de campo y atención al público en Río Negro",
        "agricola_detail_text": "Antes y durante mis primeros años universitarios trabajé en labores agrícolas de temporada y en comercio local en Río Negro. En el ámbito agrícola participé en el manejo de cultivos y en el trabajo colaborativo propio de las faenas de campo, donde el ritmo lo marcan la temporada y la coordinación del equipo. En el comercio local me desempeñé en atención al público, reposición de productos y manejo básico de caja, con responsabilidad directa sobre el trato al cliente y el cuadre diario. Aunque no es una experiencia de ingeniería, fue la que me formó en disciplina operativa, puntualidad y trabajo en equipo bajo presión, y es el origen de mi interés por entender cómo se organizan los procesos productivos desde el terreno hacia arriba."
    },

    en: {
        // --- EXPERIENCE DATES ---
        "date_exp1": "Mar 2026 - Present",
        "date_exp2": "Jan 2026 - Mar 2026",
        "date_exp3": "Aug 2023 - Jul 2024",
        "date_exp4": "2021 - 2023",

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
        "exp_role2": "Internship",
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
        "skill5": "Programming (Python, Java)",
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
        "status_current": "(In progress, since Dec 2023)",
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
        "ufro_proy_detail_text": "Project formulation and appraisal is the bridge between an idea and a well-founded investment decision: it makes it possible to anticipate risk and set out the criteria before committing resources. As teaching assistant for the practical section of this course, my role is to guide student teams through that entire process. I design and run workshops in which students structure projects from market study through to economic appraisal, and I work with operational data to build the cases and check that the assumptions they put forward hold together. I also produce teaching materials and support guides that translate the methodology into language that applies to real problems. This experience has strengthened my ability to explain technical concepts clearly, assess proposals on their merits, and sustain steady pedagogical work alongside the teaching staff.",

        "muni_title": "Internship: Municipality of Río Negro",
        "muni_subtitle": "Productive development, public funding and event management",
        "muni_detail_text": "Municipal productive development is where public administration meets the entrepreneur directly: the quality of that advice determines whether a local project secures funding or not. During my internship at the Municipality of Río Negro I advised entrepreneurs and local producers on formulating and submitting applications to public funding programmes, helping them structure the proposal, justify the investment and meet the formal requirements of each call. In parallel I took on logistics and operational coordination for municipal festivals and events, along with processing institutional permits, which meant reconciling deadlines, suppliers and several municipal units. The experience gave me a concrete understanding of how the public sector works, of the importance of administrative traceability, and of how operational planning shapes the final outcome of an activity with the community.",

        "ufro_datos_title": "Teaching Assistant: Data Analysis Workshop",
        "ufro_datos_subtitle": "Teaching materials and guides for operational analysis",
        "ufro_datos_detail_text": "Data analysis stops being an abstract exercise once it is applied to a company's real operations: processes, cycle times, inventory and demand. As teaching assistant for this workshop I was responsible for designing and developing the teaching materials and practical support guides students used for operational data analysis. That work meant building exercises of increasing difficulty, preparing representative datasets and documenting procedures step by step, so that each student could reproduce the analysis and understand the reasoning behind every methodological decision. Preparing this material required me to master the subject in more detail than a regular student and consolidated both my command of analysis tools and my ability to structure technical content clearly.",

        "agricola_title": "Seasonal Agricultural Work and Local Retail",
        "agricola_subtitle": "Fieldwork and customer service in Río Negro",
        "agricola_detail_text": "Before and during my first years at university I worked in seasonal agricultural jobs and local retail in Río Negro. In the agricultural work I took part in crop handling and the collaborative fieldwork the season demands, where the pace is set by the harvest and by team coordination. In local retail I worked in customer service, stock replenishment and basic cash handling, with direct responsibility for how customers were treated and for balancing the till each day. It is not an engineering role, but it is where I learned operational discipline, punctuality and teamwork under pressure, and it is the origin of my interest in understanding how productive processes are organised from the ground up."
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
