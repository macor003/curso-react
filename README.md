# Curso React

Repositorio de estudio con proyectos de práctica para aprender React.

## Proyectos

| Proyecto | Descripción | Stack |
|----------|-------------|-------|
| `gentlemanreact/` | Proyecto base con TypeScript | React 19 + TypeScript + Vite + SWC |
| `03-counter-app/` | Aplicación de contador | React 19 + JavaScript + Vite |
| `04-first-steps/` | Primeros pasos con componentes | React 19 + TypeScript + Vite + SWC |

## Tecnologías

- **React 19** - Última versión de React
- **Vite** - Bundler y servidor de desarrollo
- **TypeScript** - Tipado estático (en proyectos seleccionados)
- **ESLint** - Linting de código
- **SWC/Babel** - Transpilación y Fast Refresh

## Cómo ejecutar un proyecto

1. Navega al directorio del proyecto:
   ```bash
   cd nombre-del-proyecto
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o con bun
   bun install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Scripts disponibles

Cada proyecto incluye los siguientes scripts:

| Script | Comando | Descripción |
|--------|---------|-------------|
| `dev` | `npm run dev` | Servidor de desarrollo con HMR |
| `build` | `npm run build` | Build de producción |
| `lint` | `npm run lint` | Ejecutar ESLint |
| `preview` | `npm run preview` | Previsualizar build de producción |
