# ⚔️ Chronicles of the Cursed Knight — Sitio Web Oficial

> **Proyecto de Videojuegos (Proyecto Arrow - Grupo 5)**  
> *Universidad Central del Ecuador*  
> Una experiencia web inmersiva con temática gótica medieval de fantasía oscura y mecánicas interactivas para presentar la aventura de Sir Gareth en su camino de redención.

---

## 🌟 Descripción General

Este es el sitio web oficial (Landing Page) para **Chronicles of the Cursed Knight**, un videojuego indie del género de plataformas de acción 2D. El proyecto está construido bajo una arquitectura moderna utilizando **Astro**, **React**, **Tailwind CSS v4** y **Framer Motion**, logrando una estética visual premium inspirada en manuscritos medievales y ambientes góticos oscuros (tonos de oro envejecido y acero).

La web permite a los usuarios:
* **Explorar el Lore y las Facciones**: Conocer el trasfondo del Reino de Valtheria y los tres personajes principales (Sir Gareth, el Eco de Elara y Lord Malakor).
* **Visualizar la Cronología**: Recorrer los hitos históricos desde el Florecimiento de Eldergrove hasta la trágica Noche de la Ceniza.
* **Galería Multimedia Interactiva**: Observar capturas reales de los escenarios del juego como los *Jardines Marchitos*, las subterráneas *Mazmorras del Eco* y la cúspide de *La Torre Marchita*.
* **Encuesta de Personalidad Interactiva**: Responder preguntas sobre la toma de decisiones morales en el juego.
* **Descarga de Demo**: Acceso a la descarga del juego de forma simulada y detallada a través de un modal temático.

---

## 🛠️ Tecnologías y Librerías Utilizadas

El proyecto aprovecha un stack tecnológico de vanguardia para garantizar rendimiento y animaciones fluidas aceleradas por hardware:

| Tecnología | Propósito / Función | Versión |
| :--- | :--- | :--- |
| **Astro** | Framework principal (generación estática e hidratación selectiva) | `^7.0.2` |
| **React** | Componentes interactivos y manejo de estados de la interfaz | `^19.2.7` |
| **Tailwind CSS** | Estilado de alta fidelidad, layouts responsivos y variables de diseño | `^4.3.1` |
| **Framer Motion** | Animaciones fluidas, transiciones de modales y efectos hover premium | `^12.41.0` |
| **Lucide React** | Librería de iconos vectoriales consistentes y minimalistas | `^0.546.0` |

---

## 🎨 Características de Diseño & Efectos Visuales

Siguiendo principios de diseño moderno y estéticas premium, la landing page incorpora:
1. **Paleta de Colores Curada**: Fondos negros profundos (`#050505`) con acentos de oro envejecido (`#c5a059`), bronces y tonos de ceniza.
2. **Efecto de Parallax Multicapa**: El pie de página (Footer) implementa un parallax dinámico en scroll donde la imagen de fondo y la marca de agua (`logo3.svg`) se desplazan a diferentes velocidades para dar sensación de profundidad física.
3. **Partículas Flotantes Activas**: Animaciones CSS de partículas de ceniza y chispas de fuego que flotan desde el fondo en las secciones principales (Hero y Footer).
4. **Estructura Semántica y SEO**: Configuración SEO completa con etiquetas Open Graph y optimización de velocidad de carga de assets.

---

## 📁 Estructura del Proyecto

El código está organizado de la siguiente manera:

```text
/
├── public/                 # Recursos estáticos (Logos, imágenes de personajes, niveles y wallpapers)
├── src/
│   ├── components/         # Componentes interactivos en React
│   │   ├── DemoModal/      # Modal de descarga de la versión Demo
│   │   ├── Error404.tsx    # Vista de página no encontrada
│   │   ├── Footer/         # Footer con efecto Parallax y chispas flotantes
│   │   ├── HeroSection/    # Cabecera principal con partículas y llamadas a la acción
│   │   ├── LoreSection/    # Explorador interactivo de facciones e historia
│   │   ├── Navbar/         # Barra de navegación superior
│   │   ├── ScreenshotCarousel/ # Galería deslizante con transiciones fluidas de los niveles
│   │   ├── SurveyModal/    # Modal de la encuesta interactiva basada en el lore
│   │   └── MainLanding.tsx # Ensamblador principal de la página
│   ├── layouts/
│   │   └── Layout.astro    # Plantilla HTML base con metadatos SEO en español
│   ├── styles/
│   │   └── global.css      # Estilos globales y configuración de variables Tailwind v4
│   ├── data.ts             # Base de datos local (facciones, timeline, capturas, encuesta)
│   ├── types.ts            # Tipados estáticos en TypeScript
│   └── pages/
│       ├── 404.astro       # Ruta alternativa para errores 404
│       └── index.astro     # Punto de entrada principal en Astro
├── package.json            # Scripts de ejecución y dependencias del proyecto
└── tsconfig.json           # Configuración del compilador TypeScript
```

---

## 🚀 Instrucciones de Desarrollo y Ejecución

Sigue estos pasos para levantar el entorno local:

### 1. Requisitos Previos
Asegúrate de contar con Node.js en su versión `>=22.12.0`.

### 2. Instalación de Dependencias
Instala los paquetes necesarios definidos en el `package.json`:
```sh
npm install
```

### 3. Servidor de Desarrollo
Para iniciar el servidor local con detección de cambios en tiempo real:
```sh
npm run dev
```
La aplicación estará disponible por defecto en: [http://localhost:4321/](http://localhost:4321/)

*Nota de desarrollo: Si utilizas agentes de desarrollo autónomos, puedes arrancar en modo background con `astro dev --background`.*

### 4. Construcción para Producción
Para generar los archivos estáticos optimizados y listos para producción en la carpeta `./dist/`:
```sh
npm run build
```

### 5. Previsualización
Para comprobar la versión construida localmente antes de desplegarla:
```sh
npm run preview
```

---

## 👥 Equipo de Desarrollo (Grupo 5 — Proyecto Arrow)

Desarrollado bajo la cátedra de **Proyecto de Videojuegos** en la **Universidad Central del Ecuador (UCE)** por:

* **J. Enríquez**
* **B. Loya**
* **J. Ninabanda**
* **L. Perenguez**
* **D. Trujillo**

---

## 📄 Licencia

Este proyecto está distribuido bajo la **Licencia MIT**. Para más detalles, consulta el archivo [LICENSE](./LICENSE) en la raíz de este repositorio.

