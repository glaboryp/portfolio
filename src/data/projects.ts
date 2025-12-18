export interface Project {
    title: string;
    slug: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    post: string | null;
    gallery?: string[];
}

export const projects: Project[] = [
    {
        title: "DocuPrism",
        slug: "docuprism",
        description:
            "DocuPrism es una Progressive Web App (PWA) que transforma tu navegador en un asistente de documentos privado. Permite a los usuarios subir, resumir y chatear con sus archivos (PDF, DOCX) utilizando la IA de Chrome, garantizando que todos los datos se procesen 100% en el dispositivo y funcione perfectamente sin conexión a internet.",
        image: "/projects/docuprism_logo.webp",
        technologies: ["Nuxt 3", "TypeScript", "Tailwind CSS", "PWA", "Chrome AI"],
        github: "https://github.com/glaboryp/DocuPrism",
        demo: "https://docuprism.vercel.app/",
        post: null,
        gallery: ["/projects/docuprism_dashboard.webp", "/projects/docuprism_summary.webp", "/projects/docuprism_chat.webp"]
    },
    {
        title: "AulaLens",
        slug: "aulalens",
        description:
            "AulaLens es un dashboard de analítica estratégica que se conecta a la API de Google Classroom para transformar datos en insights visuales. Permite a educadores y ONGs monitorizar el progreso real de los estudiantes e identificar proactivamente a quienes necesitan apoyo.",
        image: "/projects/aulalens_logo.webp",
        technologies: ["Nuxt 3", "TypeScript", "Nuxt UI", "Google Classroom API"],
        github: "https://github.com/glaboryp/AulaLens",
        demo: "https://aula-lens.vercel.app/",
        post: "https://dev.to/glabory/como-construi-aulalens-en-24h-y-gane-un-macbook-en-el-proceso-5li",
        gallery: ["/projects/aulalens_home.webp", "/projects/aulalens_teachers.webp", "/projects/aulalens_students.webp"]
    },
    {
        title: "Fontray",
        slug: "fontray",
        description:
            "Fontray es una aplicación web innovadora diseñada para explorar, previsualizar y seleccionar fuentes de Google Fonts de manera eficiente. Su propósito es simplificar el proceso de encontrar la tipografía perfecta para proyectos de diseño y desarrollo, ofreciendo una experiencia de usuario intuitiva y dinámica.",
        image: "/projects/fontray_logo.webp",
        technologies: [
            "Laravel",
            "Vue.js",
            "Inertia.js",
            "Tailwind CSS",
            "PostgreSQL",
        ],
        github: "https://github.com/glaboryp/fontray",
        demo: "https://fontray.onrender.com/",
        post: null,
        gallery: ["/projects/fontray_home.webp", "/projects/fontray_font_choose.webp", "/projects/fontray_font_chosen.webp", "/projects/fontray_list.webp"]
    },
    {
        title: "Breakout Game",
        slug: "breakout-game",
        description:
            "Implementación del clásico juego arcade Breakout construido desde cero utilizando JavaScript, HTML5 Canvas y CSS. El proyecto demuestra el manejo del game loop (requestAnimationFrame), la renderización 2D en Canvas, la detección de colisiones (bola, ladrillos y pala) y la gestión del estado del juego (puntuación y vidas).",
        image: "/projects/breakout_logo.webp",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/glaboryp/breakout-game",
        demo: "https://breakout-game-one.vercel.app/",
        post: null,
        gallery: ["/projects/breakout_home.webp", "/projects/breakout_game.webp", "/projects/breakout_game2.webp"]
    },
];
