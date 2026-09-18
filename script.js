const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const year = document.getElementById('year');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.cursor-glow');
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

year.textContent = new Date().getFullYear();

const translations = {
  en: {
    nav_about: "About", nav_expertise: "Expertise", nav_projects: "Projects", nav_experience: "Experience", nav_contact: "Contact", hero_eyebrow: "DATA SCIENCE × BUSINESS", hero_role: "Data Scientist | Supply Chain & Procurement Analytics", hero_text: "Combining data science with more than a decade of supply chain and procurement leadership to transform business data into actionable decisions.", hero_projects: "View projects", download_cv: "Download CV", about_eyebrow: "ABOUT ME", about_heading: "Business experience<br>meets <em>data science.</em>", about_text_1: "I am an Industrial Engineer and Data Scientist with professional experience in Supply Chain, Procurement and operational management.",
    about_text_2: "My career combines analytical thinking with management experience. I enjoy turning complex information into clear insights that support better decisions, efficiency and measurable business impact.",
    about_text_3: "My recent Data Science training strengthened my capabilities in Python, SQL, exploratory data analysis, machine learning and predictive modeling.", expertise_eyebrow: "EXPERTISE", expertise_heading: "Two disciplines.<br><em>One business mindset.</em>", projects_eyebrow: "FEATURED TECHNICAL PROJECTS", projects_heading: "End-to-end solutions with<br><em>business context.</em>", projects_subtitle: "Data Science projects that connect technical analysis with real business questions.", zuber_title: "Ride-Sharing Analysis – Zuber", zuber_description: "Analyzed ride-sharing data to identify patterns in passenger preferences and evaluate the impact of external factors on trips.", technical_solution: "Technical Solution", zuber_bullet_1: "Collected and prepared data using SQL, web scraping and Python.", zuber_bullet_2: "Explored patterns to understand passenger preferences and external factors affecting trips.", results_label: "Results:", zuber_result: "Produced a structured exploratory analysis to support data-driven interpretation of ride-sharing activity.", supply_title: "Supply Chain Analytics: Demand Forecasting & Inventory Optimization",

    stat_supply: "Years in<br>Supply Chain",
    stat_management: "Years in<br>Management",
    stat_inventory: "MDP inventory<br>reduction",
    stat_material: "TM/day material<br>flow experience",

    expertise_ds_title: "Data Science",
    expertise_ds_text: "From data preparation to predictive models and evaluation.",
    expertise_sc_title: "Supply Chain",
    expertise_sc_text: "Operational understanding developed through years of management.",

    expertise_ba_title: "Business Analytics",
    expertise_ba_text: "Connecting analytical outputs with practical business decisions.",
    expertise_lead_title: "Leadership",
    expertise_lead_text: "Cross-functional coordination, negotiation and operational excellence.",

    tag_machine_learning: "Machine Learning",
    tag_procurement: "Procurement",
    tag_inventory: "Inventory",
    tag_supplier_management: "Supplier Management",
    tag_data_visualization: "Data Visualization",
    tag_automation: "Automation",
    tag_process_optimization: "Process Optimization",
    tag_negotiation: "Negotiation",
    tag_team_management: "Team Management",
    tag_stakeholders: "Stakeholders",
    tag_continuous_improvement: "Continuous Improvement",

    supply_description: "This project was especially meaningful to me because it gave me the opportunity to combine my professional experience in Supply Chain and Procurement with Data Science. I was excited to transform familiar supply chain challenges into an end-to-end analytical project and explore how data can support better inventory and sourcing decisions.",
    supply_bullet_1: "Built an end-to-end analytical workflow combining ABC-XYZ segmentation, demand forecasting, safety stock, reorder points, supplier reliability and historical stockout analysis.",
    supply_bullet_2: "Developed a Power BI dashboard to translate the analytical results into inventory actions, working-capital opportunities and supplier-development priorities.",
    supply_result: "Identified approximately $2.45M in potential working capital opportunity while also detecting $1.21M in inventory below the policy benchmark, helping distinguish where inventory could be reviewed for reduction and where additional protection may be required.", view_project: "View Project", churn_title: "Customer Churn Prediction – Interconnect Telecom", churn_description: "Built a predictive machine learning workflow focused on identifying customers at risk of churn and supporting retention-oriented business decisions.", churn_bullet_1: "Prepared data with encoding, scaling and missing-value treatment before model training.", churn_bullet_2: "Compared multiple classification algorithms using F1-Score, AUC-ROC and confusion-matrix evaluation.", churn_result: "Developed a predictive analysis and stakeholder-oriented report aimed at reducing customer loss and improving return on investment.", experience_eyebrow: "PROFESSIONAL JOURNEY", experience_heading: "Experience that<br><em>shapes the analysis.</em>", tripleten_role: "Data Scientist",
    tripleten_role: "Data Scientist",
    tripleten_description: "Practical Data Science training using real public datasets, exploratory analysis, Python data manipulation and translation of business questions into analytical tasks.", education_eyebrow: "EDUCATION", education_heading: "Continuous<br><em>learning.</em>", education_ds: "Data Scientist",
    education_supply: "Digital Supply Chain",
    education_ie: "Industrial Engineering",
    education_specialization: "Specialization in Quality & Productivity · Tecnológico de Ciudad Cuauhtémoc",
    contact_eyebrow: "LET'S CONNECT",
    contact_heading: "Let's turn data into<br><em>business impact.</em>", contact_text: "Open to opportunities where analytics, supply chain and strategic thinking can create measurable value.",
    contact_email: "Email me",
    papelera_role: "Procurement Manager",
    papelera_description: "Managed Procurement, raw materials warehouse, spare parts warehouse and packaging. Reduced chemical inventory working capital from 31 to 25 MDP and achieved 0% inventory differences.",
    pondercel_role: "Procurement Manager",
    pondercel_description: "Designed and implemented a logistics management platform for mass material flows exceeding 400 TM/day and developed KPIs for Procurement and raw materials warehousing.",
  }, es: {
    nav_about: "Sobre mí", nav_expertise: "Experiencia", nav_projects: "Proyectos", nav_experience: "Trayectoria", nav_contact: "Contacto", hero_eyebrow: "CIENCIA DE DATOS × NEGOCIO", hero_role: "Data Scientist | Analítica de Supply Chain y Compras", hero_text: "Combino ciencia de datos con más de una década de liderazgo en cadena de suministro y abastecimientos para transformar datos de negocio en decisiones accionables.", hero_projects: "Ver proyectos", download_cv: "Descargar CV", about_eyebrow: "SOBRE MÍ", about_heading: "Experiencia de negocio<br>con <em>ciencia de datos.</em>", about_text_1: "Soy Ingeniera Industrial y Científica de Datos con experiencia profesional en Supply Chain, Compras y gestión operativa.",
    about_text_2: "Mi trayectoria combina el pensamiento analítico con la experiencia gerencial. Disfruto transformar información compleja en insights claros que apoyen mejores decisiones, mayor eficiencia y un impacto de negocio medible.",
    about_text_3: "Mi formación reciente en Ciencia de Datos fortaleció mis capacidades en Python, SQL, análisis exploratorio de datos, machine learning y modelado predictivo.", expertise_eyebrow: "EXPERIENCIA", expertise_heading: "Dos disciplinas.<br><em>Una visión de negocio.</em>", projects_eyebrow: "PROYECTOS TÉCNICOS DESTACADOS", projects_heading: "Soluciones end-to-end con<br><em>contexto de negocio.</em>", projects_subtitle: "Proyectos de Data Science que conectan el análisis técnico con preguntas reales de negocio.", zuber_title: "Análisis de viajes compartidos – Zuber", zuber_description: "Analicé datos de viajes compartidos para identificar patrones en las preferencias de los pasajeros y evaluar el impacto de factores externos en los viajes.", technical_solution: "Solución técnica", zuber_bullet_1: "Recopilé y preparé datos utilizando SQL, web scraping y Python.", zuber_bullet_2: "Exploré patrones para comprender las preferencias de los pasajeros y los factores externos que afectan los viajes.", results_label: "Resultados:", zuber_result: "Desarrollé un análisis exploratorio estructurado para apoyar la interpretación de la actividad de viajes compartidos basada en datos.", supply_title: "Supply Chain Analytics: Pronóstico de Demanda y Optimización de Inventarios",

    stat_supply: "Años en<br>Supply Chain",
    stat_management: "Años en<br>puestos gerenciales",
    stat_inventory: "MDP en reducción<br>de inventario",
    stat_material: "TM/día de experiencia<br>en flujo de materiales",

    expertise_ds_title: "Ciencia de Datos",
    expertise_ds_text: "Desde la preparación de datos hasta el desarrollo y evaluación de modelos predictivos.",
    expertise_sc_title: "Cadena de Suministro",
    expertise_sc_text: "Conocimiento operativo desarrollado a través de años de experiencia en gestión.",

    expertise_ba_title: "Analítica de Negocios",
    expertise_ba_text: "Conectando los resultados analíticos con decisiones prácticas de negocio.",
    expertise_lead_title: "Liderazgo",
    expertise_lead_text: "Coordinación multifuncional, negociación y excelencia operativa.",

    tag_machine_learning: "Machine Learning",
    tag_procurement: "Compras",
    tag_inventory: "Inventarios",
    tag_supplier_management: "Gestión de Proveedores",
    tag_data_visualization: "Visualización de Datos",
    tag_automation: "Automatización",
    tag_process_optimization: "Optimización de Procesos",
    tag_negotiation: "Negociación",
    tag_team_management: "Gestión de Equipos",
    tag_stakeholders: "Partes Interesadas",
    tag_continuous_improvement: "Mejora Continua",

    supply_description: "Este proyecto me entusiasmó especialmente porque me permitió combinar mi experiencia profesional en Supply Chain y Procurement con Ciencia de Datos. Quise explorar cómo las herramientas analíticas que estaba aprendiendo podían aplicarse a decisiones que conozco de primera mano: cuánto inventario mantener, cuándo reabastecer, cómo anticipar la demanda y cómo gestionar el riesgo de proveedores.",

    supply_bullet_1: "Construí un análisis end-to-end que integra limpieza y exploración de datos, segmentación ABC-XYZ, pronóstico de demanda, stock de seguridad, puntos de reorden y optimización de inventarios.",

    supply_bullet_2: "Desarrollé un dashboard en Power BI para convertir los resultados analíticos en acciones de inventario, oportunidades de capital de trabajo y prioridades de gestión de proveedores.",

    supply_result: "Identifiqué aproximadamente $2.45M USD en oportunidad potencial de capital de trabajo y analicé cómo una mayor confiabilidad en los tiempos de entrega de proveedores podría reducir el stock de seguridad manteniendo los niveles objetivo de servicio.", view_project: "Ver proyecto", churn_title: "Predicción de fuga de clientes – Interconnect Telecom", churn_description: "Construí un flujo predictivo de machine learning orientado a identificar clientes con riesgo de abandono y apoyar decisiones de retención.", churn_bullet_1: "Preparé los datos con codificación, escalado y tratamiento de valores ausentes antes del entrenamiento.", churn_bullet_2: "Comparé múltiples algoritmos de clasificación mediante F1-Score, AUC-ROC y matriz de confusión.", churn_result: "Desarrollé un análisis predictivo y un reporte para stakeholders orientado a reducir la pérdida de clientes y maximizar el retorno de inversión.", experience_eyebrow: "TRAYECTORIA PROFESIONAL", experience_heading: "Experiencia que<br><em>fortalece el análisis.</em>", tripleten_role: "Científica de Datos",
    tripleten_description: "Formación práctica en Ciencia de Datos utilizando conjuntos de datos públicos reales, análisis exploratorio, manipulación de datos con Python y traducción de preguntas de negocio en tareas analíticas.", education_eyebrow: "FORMACIÓN", education_heading: "Aprendizaje<br><em>continuo.</em>", education_ds: "Científica de Datos",
    education_supply: "Cadena de Suministro Digital",
    education_ie: "Ingeniería Industrial",
    education_specialization: "Especialización en Calidad y Productividad · Tecnológico de Ciudad Cuauhtémoc",
    contact_eyebrow: "CONECTEMOS",
    contact_heading: "Convirtamos los datos en<br><em>impacto de negocio.</em>",
    contact_text: "Abierta a oportunidades donde la analítica, la cadena de suministro y el pensamiento estratégico puedan generar valor medible.",
    contact_email: "Envíame un correo",
    papelera_role: "Gerente de Abastecimientos",
    papelera_description: "Gestioné Compras, almacén de materias primas, almacén de refacciones y materiales de empaque. Reduje el capital de trabajo en inventario de químicos de 31 a 25 MDP y logré 0% de diferencias de inventario.",
    pondercel_role: "Gerente de Abastecimientos",
    pondercel_description: "Diseñé e implementé una plataforma de gestión logística para flujos de materiales a granel superiores a 400 TM/día y desarrollé KPIs para Compras y el almacén de materias primas.",
  }
}; function setLanguage(lang) { document.documentElement.lang = lang; document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key] }); document.querySelectorAll('.lang-btn').forEach(btn => { const active = btn.dataset.lang === lang; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', active ? 'true' : 'false') }); localStorage.setItem('portfolioLanguage', lang) } document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang))); setLanguage(localStorage.getItem('portfolioLanguage') || 'en');
