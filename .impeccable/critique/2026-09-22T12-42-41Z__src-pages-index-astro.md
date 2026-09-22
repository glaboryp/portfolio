---
target: src/pages/index.astro
total_score: 27
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:/home/gloria/p/personal/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:ff265cf0bdf316405adcb4c14b167ad76015c390db191713d1d4c9b39501b23b"
target_path: /home/gloria/p/personal/portfolio/src/pages/index.astro
timestamp: 2026-09-22T12-42-41Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: revisión de diseño aislada · B: detector + evidencia de navegador aislada) — segunda pasada, tras cerrar el backlog de la Fase 2/3/4.

**Nota de entorno:** de nuevo, `localhost:8000` es un servicio de terceros no relacionado; la inspección se hizo en `localhost:4321`.

## Design Health Score (Nielsen, 8 aplicables · 2 n/a)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | El scroll-spy del nav se retrasa aproximadamente una pantalla en los límites de sección (verificado con captura). |
| 2 | Match System / Real World | 4 | Copy en español, timeline cronológico inverso, fechas/enlaces reales. |
| 3 | User Control and Freedom | 3 | Buena navegación por anclas, lightbox con cierre por Esc/backdrop; falta back-to-top en una página larga. |
| 4 | Consistency and Standards | 3 | El color de los chips de tecnología (hash por nombre) hace que tarjetas enteras (Breakout, Fontray) salgan casi todo azul, rompiendo por accidente "The One Accent Rule" del propio DESIGN.md. |
| 5 | Error Prevention | 4 | Sin formularios; enlaces opcionales (github/demo/post) solo se renderizan si existen — nunca hay botones muertos. |
| 6 | Recognition Rather Than Recall | 4 | Tiles de tecnología con icono+etiqueta, nav explícito, breadcrumb en detalle de proyecto. |
| 7 | Flexibility and Efficiency | n/a | Superficie de persuasión de una sola visita. |
| 8 | Aesthetic and Minimalist Design | 4 | Coincide con el brief: superficies planas, un acento, sombra solo en hover, espaciado generoso. |
| 9 | Error Recovery | 2 | No hay página 404 personalizada; el lightbox de galería no tiene `role="dialog"`/`aria-modal` ni gestión de foco al abrir. |
| 10 | Help and Documentation | n/a | Portfolio personal autoexplicativo, no necesita sistema de ayuda. |
| **Total** | | **27/32** | **Bueno (≈84%)** — sube desde 24/32 (75%) de la primera pasada. |

## Design Specificity Verdict

**Revisión de diseño (A):** El sistema visual ("El Dossier Técnico" — IBM Plex, un solo acento naranja, plano-hasta-el-hover, tokens claro/oscuro pareados) está genuinamente comprometido y ejecutado con consistencia en todos los componentes. El contenido es real y específico: 4 proyectos nombrados, enlazados y con capturas propias; un empleador actual honesto (Homedoctor) con copy de disponibilidad preciso; un timeline de firma con alternancia. Dicho esto, el esqueleto de la página (hero → timeline → grid 2 columnas → grid 4 columnas → contacto de 2 CTAs) sigue siendo el esqueleto por defecto de casi cualquier portfolio de developer, y la línea del Hero ("Desarrolladora Full-Stack") es lo bastante genérica como para pertenecer a cualquiera. La especificidad vive casi enteramente en la capa de contenido, todavía no en la composición o la interacción.

**Escaneo determinista (B):** `impeccable detect --json src public` → **0 hallazgos** (limpio). El escaneo en navegador repitió los mismos 2 tipos de hallazgo de la primera pasada: `pulsing-dot` (nodo "Actualidad" del timeline) e `image-hover-transform` (×4, una por cada `<img>` de proyecto). Sin falsos positivos nuevos — son exactamente los mismos patrones ya juzgados como probablemente intencionales en la Fase 2 (indicador de estado real y micro-gesto de hover ya consistente con el sistema), y nada ha cambiado esa lectura.

## Overall Impression

Mejora real y medible: 24/32 → 27/32. Las 5 priority issues de la primera pasada están cerradas y no reaparecen. Lo que queda ahora es más sutil: el Hero no comunica la señal de credibilidad más fuerte (seniority + empleador actual) en los primeros segundos, y el color de los chips de tecnología es accidental (hash de texto) en vez de deliberado, lo que rompe por casualidad la regla de un solo acento en algunas tarjetas.

## What's Working

1. **El copy de Contact ya vive el principio de "vigencia y honestidad"** en el código, no solo en PRODUCT.md.
2. **Las tarjetas de proyecto operacionalizan "la evidencia manda"**: cada una lidera con una captura real y solo muestra enlaces Código/Demo/Artículo cuando existen de verdad.
3. **El modo oscuro se sostiene como ciudadano de primera clase** en las 5 secciones y ambos viewports, sin elementos sin estilar o de bajo contraste.

## Priority Issues

**[P1] El Hero entierra la señal de credibilidad más fuerte.**
- **Por qué importa:** el H2 dice "Desarrolladora Full-Stack" — genérico, idéntico a miles de portfolios — mientras que el diferenciador real (Senior, empleador actual, profundidad Vue+Laravel) solo aparece en el timeline, más abajo del fold. Un reclutador que hace scan de 30-60s puede no llegar a verlo.
- **Fix:** añadir una línea de credibilidad bajo el subtítulo, p. ej. "Senior Full-Stack Developer en Homedoctor · Especializada en Vue.js + Laravel".
- **Suggested command:** `/impeccable clarify`

**[P2] El color de los chips de tecnología es accidental, no diseñado.**
- **Por qué importa:** `isBrandTint` colorea por hash del nombre de la tecnología, no por índice ni por categoría real. Esto hace que tarjetas enteras (Breakout Game: 3/3 tags azules; Fontray: 4/5 azules) rompan por coincidencia "The One Accent Rule" del propio DESIGN.md.
- **Fix:** basar el color en una taxonomía real (frontend vs. backend/infra) o volver a un índice fijo alternante; o quitar el tinte azul de los chips y reservar el azul solo para el enlace de Demo, como ya pretende el sistema.
- **Suggested command:** `/impeccable colorize`

**[P3] Huecos de "camino de fallo" sin pulir.**
- **Por qué importa:** no existe una página 404 personalizada (un enlace de proyecto obsoleto o mal escrito deja a la visita sin salida); el lightbox de galería no tiene `role="dialog"`/`aria-modal` ni mueve el foco al abrirse, dejando a usuarios de teclado/lector de pantalla sin señal de que están en un overlay.
- **Fix:** `404.astro` con enlace a inicio; añadir semántica ARIA de diálogo y gestión de foco inicial al lightbox.
- **Suggested command:** `/impeccable harden`

**[P4] Los CTAs de Contact compiten en vez de jerarquizarse.**
- **Por qué importa:** "Conectar en LinkedIn" y "Enviar Email" se renderizan como botones sólidos del mismo tamaño, diluyendo ligeramente la guía de una sola acción primaria en un momento de alto impacto, aunque el color ya diferencia.
- **Fix:** mantener LinkedIn como único botón sólido naranja y bajar "Enviar Email" al tratamiento outline que ya usan los enlaces sociales del Hero.
- **Suggested command:** `/impeccable distill`

## Persona Red Flags

**Jordan (scan de 30-60s):** llega a "Desarrolladora Full-Stack" sin pista de seniority/empleador actual en la primera pantalla; tiene que pasar el fold para enterarse de que es Senior en Homedoctor — el hecho con más probabilidad de mantenerla leyendo.
**Casey (evaluador técnico escéptico):** notaría que el patrón de color de los chips parece significar algo (consistente por palabra) pero no significa nada — un pequeño golpe de credibilidad para un perfil que se vende por precisión. Los `highlights` de Experience mayormente repiten palabras del párrafo de arriba en vez de aportar una métrica o resultado.
**Riley (accesibilidad/teclado):** el lightbox de detalle de proyecto no tiene semántica ARIA de diálogo ni gestión de foco — un usuario de lector de pantalla no recibe ninguna señal de haber entrado en un overlay.

## Minor Observations

- El resaltado del scroll-spy se retrasa cerca de una pantalla completa en los límites de sección.
- "Herramientas y Entorno" en Skills sigue siendo 6 items planos sin subagrupar (exceso de chunking leve, bajo impacto visual).
- El H2 se usa tanto para el subtítulo del Hero como para cada título de sección — un matiz de jerarquía de encabezados para lectores de pantalla, sin efecto visual.
- El último contenido visible del footer es el crédito técnico, no algo que refuerce el mensaje de contratación — una pequeña oportunidad de peak-end perdida.
- El botón comentado "Descargar CV" en Hero.astro sigue siendo código muerto confirmado, consistente con la decisión pendiente ya anotada en PRODUCT.md.

## Questions to Consider

- ¿Qué pasaría si el subtítulo del Hero dijera "Senior Full-Stack Developer — Vue.js + Laravel" en vez del genérico "Desarrolladora Full-Stack", poniendo la señal de seniority + especialización en los primeros tres segundos?
- ¿Qué pasaría si el color de los chips reflejara una taxonomía real (naranja = frontend, azul = backend/infra) en vez de un hash del texto?
- ¿Qué pasaría si el footer cerrara reforzando el mensaje de contratación en vez de solo el crédito técnico?
