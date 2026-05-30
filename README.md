# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Nectar Grocery

  Live URL: https://your-live-url-here.example

  ## Tech Stack

  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS v4 with `@tailwindcss/vite`
  - Zustand for client state
  - React Router DOM for routing

  ## Run Locally

  1. Install dependencies:

  ```bash
  npm install
  ```

  2. Start the dev server:

  ```bash
  npm run dev
  ```

  3. Build for production:

  ```bash
  npm run build
  ```

  4. Preview the production build:

  ```bash
  npm run preview
  ```

  ## Architecture Notes

  - `src/App.tsx` defines the route map and splits auth, main app, checkout, and standalone flows.
  - `src/components/layout` holds the shared shell components for desktop and mobile navigation.
  - `src/components/ui` contains reusable primitives like buttons, cards, loaders, and selectors.
  - `src/pages/auth`, `src/pages/main`, and `src/pages/checkout` organize screen-level UI by flow.
  - `src/store` contains Zustand stores for cart, favorites, auth, filters, and order state.
  - `src/data` provides mock product and category data with simulated async fetch helpers.
  - `src/hooks` contains shared hooks such as debounce and simulated fetch loading/error state.
      },
