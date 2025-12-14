# Portfolio de Gloria Labory

Portfolio personal minimalista construido con Astro y Tailwind CSS v4.

## 🚀 Características

- ✨ Diseño minimalista y profesional
- 🌓 Modo oscuro funcional
- 📱 100% Responsivo (Mobile-first)
- ⚡ Alto rendimiento con Astro
- 🎨 Estilado con Tailwind CSS v4
- 🔍 SEO optimizado

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web moderno
- [Tailwind CSS v4](https://tailwindcss.com) - Framework de CSS
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Vista previa de la build
pnpm preview
```

## 📂 Estructura del Proyecto

```
/
├── public/
│   ├── projects/          # Imágenes de proyectos
│   └── favicon.svg        # Favicon del sitio
├── src/
│   ├── components/        # Componentes de Astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro   # Layout principal
│   ├── pages/
│   │   └── index.astro    # Página principal
│   └── styles/
│       └── global.css     # Estilos globales y configuración de Tailwind
├── astro.config.mjs       # Configuración de Astro
├── package.json
└── tsconfig.json
```

## 🎨 Paleta de Colores

- **Brand (Naranja)**: `#F97316` - Color principal de acento
- **Complementario (Azul)**: `#2563EB` - Color secundario
- **Modo Claro**: Fondo blanco con texto zinc-900
- **Modo Oscuro**: Fondo zinc-900 con texto zinc-100

## 📝 Personalización

Para personalizar el portfolio:

1. **Información personal**: Edita `src/components/Hero.astro`
2. **Proyectos**: Actualiza el array en `src/components/Projects.astro`
3. **Tecnologías**: Modifica el array en `src/components/Skills.astro`
4. **Colores**: Ajusta las variables en `src/styles/global.css`

## 📄 Licencia

© 2024 Gloria Labory. Todos los derechos reservados.
