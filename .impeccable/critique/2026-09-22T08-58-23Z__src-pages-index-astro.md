---
target: src/pages/index.astro
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/home/gloria/p/personal/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:ff265cf0bdf316405adcb4c14b167ad76015c390db191713d1d4c9b39501b23b"
target_path: /home/gloria/p/personal/portfolio/src/pages/index.astro
timestamp: 2026-09-22T08-58-23Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: revisión de diseño aislada · B: detector + evidencia de navegador aislada)

**Nota de entorno:** ambos assessments detectaron que `localhost:8000` está ocupado por un servicio de terceros no relacionado ("Device Router"); el servidor real de Astro corre en `localhost:4321`. Ambos redirigieron la inspección ahí; los resultados son válidos.

## Design Health Score (Nielsen, 8 aplicables · 2 n/a)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Buen micro-feedback (hover, punto pulsante "Actualidad", swap de icono), pero el nav sticky nunca resalta la sección activa en un scroll de ~5000px. |
| 2 | Match System / Real World | 3 | Metáfora del timeline y del "dossier" encajan bien; los chips de tecnología alternan naranja/azul por índice, no por significado real. |
| 3 | User Control and Freedom | 3 | Menú móvil se cierra solo, tema persiste, hay "Volver a proyectos". Falta un back-to-top en una página larga. |
| 4 | Consistency and Standards | 3 | Disciplina de tokens fuerte, salvo 3/4 tarjetas de proyecto con logo vs. 1 con screenshot real, y `Experience.astro` con clases `zinc-*`/`orange-*` crudas (ya marcado como deuda en DESIGN.md). |
| 5 | Error Prevention | 2 | "Enviar Email" es un `mailto:` sin fallback visible si no hay cliente de correo configurado. |
| 6 | Recognition Rather Than Recall | 4 | Todo lo necesario es visible en su sección; iconos y etiquetas son estándar. |
| 7 | Flexibility and Efficiency | n/a | Superficie de persuasión de una sola visita, sin flujos repetitivos que acelerar. |
| 8 | Aesthetic and Minimalist Design | 4 | Tarjetas planas, un solo acento, espaciado generoso — "El Dossier Técnico" se percibe en la UI real, no solo en el papel. |
| 9 | Error Recovery | 2 | Sin mensaje de "puede tardar en cargar" en demos alojadas en free-tier (Vercel/onrender), ni estado disabled si se reactiva el botón de CV. |
| 10 | Help and Documentation | n/a | Superficie de una sola página no necesita documentación in-app. |
| **Total** | | **24/32** | **Aceptable-Bueno (≈75%)** |

## Design Specificity Verdict

**Revisión de diseño (A):** Mayormente específico, no genérico — con una excepción grave. El timeline de experiencia, la disciplina de un solo acento y el copy honesto sin testimonios inventados sí se sienten construidos para este caso. Pero el grid de Proyectos —la sección que debería encarnar "la evidencia manda sobre la declaración"— muestra un logo vectorial casi en blanco para 3 de 4 proyectos en vez de las capturas reales que ya existen en el repo (`public/projects/aulalens_home.webp`, `docuprism_dashboard.webp`, `fontray_home.webp`), usadas solo en la página de detalle. Justo la sección de mayor peso probatorio parece una plantilla genérica de portfolio.

**Escaneo determinista (B):** `impeccable detect --json src public` → 2 hallazgos estáticos confirmados sin falsos positivos: `bounce-easing` (`Hero.astro:117`) y `overused-font` (Inter, `global.css:1`). El escaneo en navegador (inyección en `localhost:4321`) amplió esto a 4 categorías sobre 7 elementos: contraste bajo en el subtítulo del Hero (2.8:1, se necesita 3:1) y en el botón "Conectar en LinkedIn" (2.8:1, se necesita 4.5:1); `bounce-easing` corroborado en el mismo elemento; un `pulsing-dot` sobre el punto "Actualidad" del timeline; y `image-hover-transform` en 4 imágenes (hover `scale`).

**Visual overlays:** capturas de escritorio (1440px) y móvil (390px) confirmaron los hallazgos con badges visibles sobre los elementos señalados.

**Posibles falsos positivos:** el `pulsing-dot` sobre el nodo "Actualidad" probablemente no es slop en este caso — es un indicador de estado real ("empleo actual"), no una urgencia falsa. El `image-hover-transform` es un micro-gesto de hover ya consistente con la regla "Hover-Only Shadow/Feedback" del propio DESIGN.md. Ninguno de los dos requiere acción salvo que en revisión visual se sientan gratuitos.

## Overall Impression

El sistema visual funciona y se siente propio ("El Dossier Técnico" es legible en la UI real), pero la sección que más debería pesar para un reclutador —Proyectos— se sabotea a sí misma con placeholders de logo en vez de las capturas reales que ya existen en el repo. Esa es la oportunidad más grande, seguida de dos fallos de contraste WCAG AA muy concretos y fáciles de corregir.

## What's Working

1. **El timeline de experiencia** es un componente de firma real: la alternancia izquierda/derecha y el punto naranja pulsante en "Actualidad" responden en un vistazo a "¿está trabajando ahora mismo?".
2. **La disciplina de un solo acento** se respeta casi en toda la UI real (naranja lidera, azul solo acompaña una acción secundaria), lo que evita el efecto "portfolio de plantilla con gradiente".
3. **El copy de Contact ya está corregido en el código actual** ("Actualmente trabajo como Senior Full Stack Developer en Homedoctor…") — el principio de "vigencia y honestidad" se cumple en la práctica, no solo en PRODUCT.md.

## Priority Issues

**[P0] Las tarjetas de proyecto muestran logos casi en blanco en vez de las capturas reales — y se rompen en modo oscuro.**
- **Por qué importa:** `Projects.astro` usa `project.image` (los `*_logo.webp`) como miniatura para DocuPrism, AulaLens y Fontray — justo los 3 proyectos que demuestran el stack Vue+Laravel. Las capturas reales ya existen (`public/projects/*_home.webp`, `*_dashboard.webp`) pero solo se usan en la página de detalle. Además, esos logos son rectángulos blancos que chocan contra el fondo oscuro en dark mode, contradiciendo el compromiso de DESIGN.md de que el modo oscuro es "ciudadano de primera clase". Solo Breakout Game (el proyecto menos relevante para el stack) muestra gameplay real.
- **Fix:** usar la primera captura de la galería como miniatura de card; reservar el logo para la cabecera del detalle si se quiere mantener.
- **Suggested command:** `/impeccable polish`

**[P1] Dos fallos de contraste WCAG AA confirmados por el detector en navegador.**
- **Por qué importa:** el subtítulo "Desarrolladora Full-Stack" (naranja sobre blanco, 2.8:1, mínimo 3:1 para texto grande) y el texto del CTA "Conectar en LinkedIn" (blanco sobre naranja, 2.8:1, mínimo 4.5:1) no pasan AA. Es exactamente el tipo de detalle que un reclutador que use zoom o tenga baja visión notará primero.
- **Fix:** oscurecer el naranja usado para texto sobre blanco (usar `brand-dark` en vez de `brand`) y/o oscurecer el fondo del botón primario.
- **Suggested command:** `/impeccable audit`

**[P1] El grid de Tecnologías da a Java/Nginx/Git el mismo peso visual que a Vue.js/Laravel.**
- **Por qué importa:** PRODUCT.md declara "profundidad de stack sobre amplitud" como principio, pero `Skills.astro` renderiza las 8 tecnologías como tarjetas idénticas en una sola grilla — la especialización que sostiene todo el posicionamiento no se ve reforzada visualmente en ningún sitio fuera del texto del Hero.
- **Fix:** agrupar en dos niveles — "Stack Principal" (Vue.js, Laravel) más grande o primero, "Herramientas y Entorno" para el resto.
- **Suggested command:** `/impeccable distill`

**[P2] El indicador de scroll usa easing bounce/elástico (confirmado por escaneo estático y en DOM vivo).**
- **Por qué importa:** `animate-bounce` (Tailwind) en la flecha de scroll (`Hero.astro:117`) es un patrón que se percibe anticuado; el propio detector de Impeccable lo marca como "slop" por convención.
- **Fix:** sustituir por un easing exponencial (ease-out-quart/quint) en vez del bounce de Tailwind.
- **Suggested command:** `/impeccable animate`

**[P2] La tipografía del sitio es Inter, una de las fuentes más sobreusadas detectadas por el escáner.**
- **Por qué importa:** Inter aparece en tantos sitios generados por IA que deja de transmitir personalidad; en un "dossier" que quiere sentirse cuidado y distintivo, la tipografía por defecto no ayuda a la especificidad del diseño.
- **Fix:** elegir una pareja tipográfica con más carácter, coherente con el tono profesional pero no genérico.
- **Suggested command:** `/impeccable typeset`

## Persona Red Flags

**Jordan (reclutador primerizo, scan de 30-60s):**
- Llega al grid de Proyectos y ve 3 logos casi en blanco antes de cualquier UI real — el momento pensado para convertir escepticismo en confianza falla (ver P0).
- Al pasar por Tecnologías, Jordan no puede distinguir Vue.js/Laravel de Java/Nginx/Git en profundidad — el posicionamiento declarado no se refuerza visualmente.
- Sin indicador de sección activa en el header, Jordan pierde la noción de progreso al hacer scroll por el "dossier".

**Riley (stress tester):**
- Pulsa "Enviar Email" en una máquina corporativa sin cliente de correo configurado → no pasa nada visible, sin dirección de fallback.
- Pulsa "Ver Demo" de Fontray (`fontray.onrender.com`) durante un cold-start → carga lenta/en blanco sin ningún mensaje de "puede tardar".
- Encuentra el bloque comentado de "Descargar CV" en el código fuente — una función a medio construir sin estado gestionado para cuando se active.

**Casey (móvil):**
- Navegar entre secciones cuesta dos toques cada vez (abrir menú, tocar enlace) en una página de ~6850px de alto a 390px de ancho — justo lo opuesto al objetivo de "escaneo rápido".

## Minor Observations

- `Layout.astro:16`: la meta description dice "Porfolio" (typo de "Portfolio"), visible en previews de enlaces (LinkedIn/Slack) y en resultados de búsqueda.
- Los botones outline (enlaces sociales del Hero, enlaces de nav) caen al contorno de foco azul por defecto del navegador en vez del `ring-4 ring-brand-light/50` que sí tienen los botones primarios — accesible, pero fuera de marca.
- Los chips de tecnología alternan naranja/azul por índice de array, no por tecnología — el mismo tag (p. ej. "Vue.js") puede salir naranja en un proyecto y azul en otro, sin consistencia semántica.
- El crédito del footer ("Construido con Astro y Tailwind CSS") compite visualmente con los iconos sociales justo en el cierre de página (momento peak-end).
- `pulsing-dot` e `image-hover-transform` del detector probablemente no requieren acción: el primero es un indicador de estado real (empleo actual), el segundo es el micro-gesto de hover ya consistente con el sistema.
- Sin fallback visible para: `mailto:` sin cliente configurado, demos en hosts free-tier con cold-start, y el botón de CV comentado sin estado disabled gestionado (ver P3 implícito, cubierto por `/impeccable harden` si se decide abordar).

## Questions to Consider

- ¿Cambiaría la decisión de un reclutador de pulsar "Ver Código" si las tarjetas mostraran las capturas reales en vez de los logos?
- ¿Qué pasaría si Tecnologías se dividiera en "Stack Principal" y "Herramientas" — haría visible lo que hoy solo está escrito en PRODUCT.md?
- ¿Qué pasaría si el nav sticky resaltara la sección activa — convertiría el scroll pasivo en la lectura deliberada de un dossier?
