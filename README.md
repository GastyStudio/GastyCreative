# Gasty Creative — Webs, apps y Google Ads para negocios

Sitio de **Gasty Creative**: desarrollo de páginas web, apps a medida, Google Ads y automatizaciones con IA para negocios de zona sur y GBA.

## 🚀 Stack Tecnológico

- **Framework:** [Astro 5](https://astro.build/) - Máximo rendimiento y SEO.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Diseño moderno y escalable.
- **Animaciones:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) & CSS Nativo.
- **Iconografía:** [Lucide Astro](https://lucide.dev/) - Iconos minimalistas y técnicos.
- **Navegación:** Astro View Transitions para una experiencia fluida tipo SPA.

## 🎨 Identidad Visual

- **Estilo:** Dark Mode sofisticado.
- **Paleta:** Negro Profundo, Gris Carbón con acentos en Azul Eléctrico y Violeta Neón.
- **Tipografía:** Outfit (Google Fonts).

## 🧩 Estructura del Proyecto

```bash
/src
  /components     # Bloques de UI modulares (Hero, Portfolio, Services...)
  /layouts        # Plantilla base con SEO y Scripts globales
  /pages          # Rutas principales (Index)
  /styles         # Configuraciones de Tailwind y CSS Global
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
