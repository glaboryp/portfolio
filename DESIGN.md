---
name: Gloria Labory — Portfolio
description: Portfolio personal minimalista y basado en evidencia para procesos de contratación técnica.
colors:
  naranja-distintivo: "#F97316"
  naranja-distintivo-claro: "#FB923C"
  naranja-distintivo-oscuro: "#EA580C"
  azul-apoyo: "#2563EB"
  azul-apoyo-oscuro: "#1D4ED8"
  papel-claro: "#FFFFFF"
  papel-claro-alterno: "#FAFAFA"
  tinta-casi-negra: "#18181B"
  tinta-atenuada: "#52525B"
  linea-clara: "#E4E4E7"
  papel-oscuro: "#18181B"
  papel-oscuro-alterno: "#27272A"
  tinta-casi-blanca: "#F4F4F5"
  tinta-atenuada-oscura: "#A1A1AA"
  linea-oscura: "#3F3F46"
typography:
  display:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "normal"
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  md: "8px"
  full: "9999px"
spacing:
  sm: "1rem"
  md: "2rem"
  lg: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.naranja-distintivo}"
    textColor: "{colors.tinta-casi-negra}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.naranja-distintivo-oscuro}"
  button-outline:
    backgroundColor: "{colors.papel-claro-alterno}"
    textColor: "{colors.tinta-casi-negra}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  chip-brand:
    backgroundColor: "rgba(251, 146, 60, 0.2)"
    textColor: "{colors.naranja-distintivo-oscuro}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  chip-complementary:
    backgroundColor: "rgba(37, 99, 235, 0.2)"
    textColor: "{colors.azul-apoyo-oscuro}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Gloria Labory — Portfolio

## Overview

**Creative North Star: "El Dossier Técnico"**

El portfolio se comporta como un expediente profesional: la evidencia (proyectos reales, trayectoria, stack) es la protagonista y la forma se mantiene sobria para no competir con ella. No hay decoración gratuita, ni gradientes, ni ilustraciones; cada elemento visual (borde, color, sombra) existe para ayudar a un reclutador a escanear y verificar información en segundos.

El naranja de marca es el único acento con peso propio: aparece en enlaces activos, CTAs y el punto de "actualidad" del timeline, y su escasez es justamente lo que le da fuerza. El azul solo diferencia una acción secundaria (por ejemplo, "Ver Demo" frente a "Ver Código"); nunca lidera una pantalla. El modo oscuro es un ciudadano de primera clase, no un extra: toda la paleta neutra está definida en pares claro/oscuro desde el primer token.

**Key Characteristics:**
- Plano en reposo; el único gesto visual es el hover (color, sombra, escala).
- Un solo acento protagonista (naranja); el azul es siempre de apoyo.
- Bordes de 1px como recurso principal de separación, no sombras.
- Tipografía y color ya preparados para claro/oscuro con la clase `.dark`.

## Colors

Paleta reducida y deliberada: dos acentos con roles claramente jerarquizados y una escala neutra pareada para ambos modos.

### Primary
- **Naranja Distintivo** (`#F97316`): el único acento con autoridad de marca. Enlaces en hover, texto de subtítulo del Hero, punto activo del timeline, fondo de los CTAs principales (LinkedIn en Contacto).

### Secondary
- **Azul de Apoyo** (`#2563EB`): reservado para diferenciar una acción secundaria de una primaria en la misma vista (el enlace "Ver Demo" junto a "Código"; los chips de tecnologías backend/infra). Nunca sustituye al naranja como acento principal de una pantalla ni aparece como botón sólido — solo como texto/enlace o tinte de chip.

### Neutral
- **Papel Claro** (`#FFFFFF`) / **Papel Oscuro** (`#18181B`): fondo base de la página en cada modo.
- **Papel Claro Alterno** (`#FAFAFA`) / **Papel Oscuro Alterno** (`#27272A`): fondo de tarjetas y superficies elevadas (proyectos, skills, botones outline).
- **Tinta Casi Negra** (`#18181B`) / **Tinta Casi Blanca** (`#F4F4F5`): texto principal.
- **Tinta Atenuada** (`#52525B`) / **Tinta Atenuada Oscura** (`#A1A1AA`): texto secundario, descripciones, metadatos.
- **Línea Divisoria Clara** (`#E4E4E7`) / **Línea Divisoria Oscura** (`#3F3F46`): bordes de tarjetas, separadores de header/footer.

### Named Rules
**The One Accent Rule.** El naranja es el único color que puede liderar una acción o un estado activo en una vista dada. El azul solo aparece para diferenciar una segunda opción; si no hay una acción secundaria que distinguir, el azul no aparece.

## Typography

**Display / Body / Label Font:** IBM Plex Sans (con fallback `ui-sans-serif, system-ui, sans-serif`).
**Mono/Label especial:** IBM Plex Mono (con fallback `ui-monospace, monospace`), reservada a metadatos temporales.

**Character:** Plex nace como la tipografía corporativa de IBM para documentación técnica — encaja literalmente con la metáfora "El Dossier Técnico": precisa, funcional, sin decoración, y evita las fuentes más sobreusadas (Inter, Roboto, Geist...) que ya no aportan personalidad. La jerarquía se construye con tamaño y peso, no con cambios de familia.

### Hierarchy
- **Display** (700, `clamp(3rem, 6vw, 4.5rem)`, line-height 1.1): nombre en el Hero (`text-5xl md:text-7xl`).
- **Headline** (700, `clamp(1.875rem, 3vw, 2.25rem)`, line-height 1.2): títulos de sección (`text-3xl md:text-4xl`) — siempre acompañados de la barra naranja de 4px debajo.
- **Body** (400, 1.125rem, line-height 1.625): párrafos descriptivos (Hero, Contacto, descripciones de proyecto); ancho de línea limitado por `max-w-2xl`/`max-w-3xl` en el contenedor, no por `ch` explícito.
- **Label** (500, 0.875rem): nombres de tecnología, enlaces de navegación, texto de botones.
- **Mono/Label especial**: las fechas del timeline de experiencia usan `font-mono uppercase tracking-widest text-xs`, un tratamiento distinto reservado exclusivamente a metadatos temporales.

## Layout

Mobile-first con un único breakpoint operativo (`md`, 768px) para casi todos los cambios de layout; `lg` solo aparece en la página de detalle de proyecto (grid de 12 columnas, 7/5).

- **Contenedores**: `max-w-7xl` para header/footer, `max-w-5xl` para Experiencia y Proyectos, `max-w-4xl` para Tecnologías, `max-w-3xl` para Contacto, con `px-4 md:px-8` de margen lateral constante.
- **Ritmo vertical**: cada sección de la home usa `py-20` (5rem) como respiración estándar entre bloques.
- **Grids**: Proyectos en 1 columna (mobile) → 2 columnas (`md`); Tecnologías en 2 columnas (mobile) → 4 columnas (`md`); detalle de proyecto en 12 columnas (`lg`) repartidas 7 (contenido) / 5 (galería, sticky).
- **Densidad**: espaciados generosos (`gap-6`–`gap-12`, `space-y-8`–`space-y-12`); nada se siente apretado.

## Elevation & Depth

El sistema es plano por defecto: la separación entre superficies se resuelve con un borde de 1px (`border-base-border` / `border-base-dark-border`), no con sombra. La sombra existe únicamente como respuesta a interacción (hover), nunca en reposo.

### Shadow Vocabulary
- **Hover de tarjeta** (`shadow-lg` / `shadow-xl`): aparece solo al pasar el cursor sobre tarjetas de proyecto o skill, junto con el cambio de borde a naranja.
- **Contenedor de galería** (`shadow-sm`): sombra sutil y constante, reservada a los contenedores de imagen de la página de detalle de proyecto.

### Named Rules
**The Hover-Only Shadow Rule.** Ninguna tarjeta, botón o contenedor tiene sombra en su estado de reposo. La sombra es exclusivamente una señal de interactividad.

## Shapes

`rounded-lg` (8px) es la esquina por defecto para tarjetas, botones, inputs e imágenes de proyecto. `rounded-full` se reserva a elementos circulares o de píldora: el avatar del Hero, los tags de tecnología, los puntos indicadores del carrusel y los nodos del timeline de experiencia (círculo con borde de 2px).

## Components

### Buttons
- **Shape:** `rounded-lg` (8px) en todos los botones.
- **Primary:** fondo naranja (`bg-brand`), texto en tinta oscura (`text-base-text`, no blanco — el blanco no pasa contraste AA sobre este naranja), `hover:bg-brand-dark`, anillo de foco `ring-4 ring-brand-light/50`. Uso: la única acción sólida y principal de cada sección (conectar en LinkedIn). Hay como máximo un botón primary visible por sección.
- **Outline/Ghost:** fondo `base-bg-alt`, borde `base-border`, `hover:border-brand`, anillo de foco `ring-4 ring-brand-light/50`. Uso: cualquier acción de igual o menor jerarquía que la primaria (enlaces sociales del Hero, "Enviar Email" en Contacto, "Ver Código" en detalle de proyecto). No existe un botón sólido "secondary" en azul: el azul nunca ocupa el fondo de un botón, solo texto/enlaces y chips.

### Chips (tags de tecnología)
- **Style:** píldora (`rounded-full`), texto `text-xs`/`text-sm` `font-medium`, padding `px-3 py-1`.
- **State:** tinte naranja (`bg-brand-light/20 text-brand-dark`) para tecnologías frontend, azul (`bg-complementary/20 text-complementary-dark`) para backend/infra — codificación semántica real (`isFrontendTech` en `src/data/projects.ts`), no decorativa. Consistente entre proyectos: la misma tecnología siempre lleva el mismo color.

### Cards / Containers
- **Corner Style:** `rounded-lg`.
- **Background:** `base-bg-alt` (claro) / `base-dark-bg-alt` (oscuro).
- **Shadow Strategy:** ninguna en reposo; `shadow-xl` al hover (ver Elevation & Depth).
- **Border:** 1px `base-border`, cambia a `brand` en hover.
- **Internal Padding:** `p-6`.

### Navigation
- **Style:** header `sticky top-0`, fondo semitransparente (`bg-base-bg/80`) con `backdrop-blur-md` y borde inferior.
- **Typography:** enlaces en `font-medium`, color `text-base-text-muted`, `hover:text-brand`.
- **Mobile:** menú colapsable con el mismo tratamiento de enlaces, en vertical.

### Experience Timeline (componente de firma)
Línea vertical central con degradado (`bg-linear-to-b from-transparent via-base-border to-transparent`) y tarjetas alternadas a izquierda/derecha (`md:odd:flex-row-reverse`), cada una con un nodo circular sobre la línea (punto naranja pulsante si `isCurrent`, neutro si no). Es el único componente con lógica de alternancia espacial del sitio; refuerza la lectura cronológica del "dossier". Migrado a los tokens `base-*`/`brand` (ya no usa clases `zinc-*`/`orange-*` crudas).

## Do's and Don'ts

### Do:
- **Do** usar el naranja como único acento con autoridad de marca por vista; su escasez es la regla (The One Accent Rule).
- **Do** mantener tarjetas y botones planos en reposo; la sombra aparece solo en hover (The Hover-Only Shadow Rule).
- **Do** usar el azul únicamente para diferenciar una acción secundaria de una primaria ya presente en la misma vista.
- **Do** dar a todo control táctil (botón, indicador, enlace de icono) un área de toque de al menos 44×44px, aunque el elemento visual sea más pequeño (ver el patrón botón-envoltorio + icono/punto interior en los indicadores de la galería).
- **Do** respetar `prefers-reduced-motion`: las animaciones continuas/en bucle (`animate-pulse`, `animate-soft-bob`, scroll suave) se desactivan bajo esa preferencia sin perder la señal de estado que transmiten.

### Don't:
- **Don't** dar al azul más peso visual que al naranja dentro de una misma pantalla — dejaría de ser un color de apoyo.
- **Don't** añadir sombra en el estado de reposo de tarjetas o botones nuevos; rompe la identidad plana del sistema.
- **Don't** introducir nuevas clases Tailwind crudas de paleta (`zinc-*`, `orange-*`, etc.) fuera de los tokens `{colors.*}`.
- **Don't** usar azul como fondo sólido de un botón; el azul solo aparece como texto/enlace o tinte de chip (ver Buttons).
- **Don't** usar `transition-all`; usar la utilidad `transition` (propiedades curadas de Tailwind) para no animar propiedades de layout por accidente.
- **Don't** revelar un control interactivo solo con `:hover` sin un equivalente para puntero táctil (`(hover: none)`); todo control debe tener una vía de descubrimiento sin ratón.
