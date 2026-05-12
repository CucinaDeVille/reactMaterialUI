# React + Vite

Create a new project with `npm create vite@latest <project-name> -- --template react`
... or run this project with `npm run dev`.

## Dependencies
This project requires *react-router-dom*, which can be installed via `npm install react-router-dom@6`. Run this command inside the project directory (where the *package.json* file is located).

Furthermore, to use Material UI the listed tools need to be installed:
- npm install @mui/material @emotion/react @emotion/styled
- npm install @fontsource/roboto
- npm install @mui/icons-material

A more indepth guide can be found [here](https://mui.com/material-ui/getting-started/installation/).

As explained above, these npm-commands also need to be executed from within the project directory on your computer.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
