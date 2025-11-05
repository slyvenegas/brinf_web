# BRINF: Brutalismo Informàtico

> > Un sitio web moderno y responsivo construido con Astro, React, Preact y Tailwind CSS, diseñado para mostrar contenido visual y gestionar imágenes.

---

## ✨ Sobre el proyecto

Este proyecto es un sitio web dinámico y optimizado para el rendimiento, desarrollado con Astro para una entrega de contenido rápida y eficiente. Incorpora componentes interactivos creados con React y Preact, y un diseño atractivo y responsivo gestionado con Tailwind CSS. La estructura sugiere un enfoque en la presentación de contenido visual, posiblemente un portafolio, una galería o un blog, con una API básica para la gestión de imágenes.

---

<img width="1362" height="643" alt="image" src="https://github.com/user-attachments/assets/4ffa8180-2afa-4e49-a5bf-9ae62cd3edd8" />

<img width="1358" height="636" alt="image" src="https://github.com/user-attachments/assets/3209486d-f5da-4ba1-bea2-75f6f491200d" />

<img width="1352" height="638" alt="image" src="https://github.com/user-attachments/assets/a07811f5-6233-496a-a68f-e94c7565853b" />

<img width="1365" height="646" alt="image" src="https://github.com/user-attachments/assets/28175398-4f99-43d2-946d-eb225ab2382b" />





## 🔋 Tech Stack

*   **Framework:** Astro
*   **UI Libraries:** React, Preact, Tailwind CSS
*   **SEO:** @astrojs/sitemap, @astrolib/seo
*   **CSS Utility:** @tailwindcss/forms, @tailwindcss/typography, tailwind-scrollbar-hide
*   **Deployment:** Vercel (potencial)
*   **Backend (API):** Node.js (con `node-fetch` para posibles llamadas externas)

---

## 🔋 Características principales

*   **Rendimiento optimizado:** Gracias a la arquitectura de Astro.
*   **Componentes interactivos:** Desarrollados con React y Preact.
*   **Diseño responsivo:** Utilizando Tailwind CSS para una experiencia de usuario fluida en todos los dispositivos.
*   **Optimización SEO:** Con `@astrojs/sitemap` para una mejor visibilidad en buscadores.
*   **Gestión de imágenes:** Posiblemente a través de la API `add-image.ts` para subir o mostrar contenido visual.
*   **Estructura modular:** Facilita la expansión y mantenimiento del proyecto.

---

## 🚀 Quick Start (local)

**Requisitos**: Node.js, npm/yarn, Git

1.  **Clona el repositorio**

    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd [NOMBRE_DE_TU_PROYECTO]
    ```

2.  **Instala dependencias**

    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Ejecuta la app en modo desarrollo**

    ```bash
    npm run dev
    # o
    yarn dev
    ```

    Abre `http://localhost:4321` (o el puerto que Astro asigne).

---

## 📁 Estructura de carpetas

```
/
  ├── public/                 # Archivos estáticos (imágenes, favicons, etc.)
  ├── src/
  │   ├── api/                # Endpoints de la API (ej. add-image.ts)
  │   ├── components/         # Componentes Astro, React/Preact
  │   │   ├── global/         # Componentes usados globalmente (Navigation, Footer)
  │   │   └── landing/        # Componentes específicos de páginas de aterrizaje
  │   │   └── work/           # Componentes relacionados con trabajo/proyectos
  │   ├── data/               # Archivos de datos (JSON, TS)
  │   ├── layouts/            # Plantillas de layout para páginas Astro
  │   ├── pages/              # Páginas de tu sitio web (archivos .astro)
  │   └── styles/             # Archivos CSS globales (global.css)
  ├── astro.config.mjs        # Configuración de Astro
  ├── package.json            # Dependencias y scripts del proyecto
  └── tsconfig.json           # Configuración de TypeScript
```

---

## 🧪 Testing

Actualmente no se han configurado frameworks de testing específicos. Se recomienda:

*   Añadir pruebas unitarias para la lógica de los componentes React/Preact.
*   Considerar pruebas de integración para las páginas Astro.
*   Evaluar el uso de herramientas como Jest, Vitest o Testing Library.

---

## 🖼️ Assets / Demo

Las imágenes y otros recursos estáticos se encuentran en la carpeta `/public`.

---

## 💡 Mejores prácticas y mejoras sugeridas

*   Implementar un sistema de gestión de contenido (CMS) headless para la gestión de imágenes y textos.
*   Añadir integración CI/CD (Continuous Integration/Continuous Deployment) con plataformas como GitHub Actions o Vercel para automatizar el despliegue.
*   Optimizar aún más las imágenes para mejorar el rendimiento de carga.
*   Considerar la implementación de un service worker para funcionalidades PWA (Progressive Web App).
*   Añadir más tipos de pruebas, como pruebas E2E (End-to-End).

---
