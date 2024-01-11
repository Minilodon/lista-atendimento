# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Bibliotecas instaladas

- Material UI (https://mui.com/material-ui/getting-started/installation/)
- Tailwind CSS (https://tailwindcss.com/docs/guides/vite)
- FakerJs (https://www.npmjs.com/package/@faker-js/faker)
- Material Icons (https://mui.com/material-ui/material-icons/)
- React Router Dom (https://reactrouter.com/en/main)
- BiomeJs (https://github.com/biomejs/biome)
- Firebase (https://firebase.google.com/?hl=pt)
- React Firebase Hooks (https://github.com/CSFrequency/react-firebase-hooks/blob/master/firestore/README.md)
- Momentjs (https://momentjs.com/)
- React Loading Skeleton (https://www.npmjs.com/package/react-loading-skeleton)


## Mudança da develop