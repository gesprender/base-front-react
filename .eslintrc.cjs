module.exports = {
  root: true, // Indica a ESLint que esta es la configuración principal del proyecto.
  env: { browser: true, es2020: true }, // Define el entorno del proyecto (navegador y versión de ECMAScript).
  parser: '@typescript-eslint/parser', // Especifica el parser de TypeScript para ESLint.
  extends: [
    'eslint:recommended', // Conjunto base de reglas recomendadas por ESLint.
    'plugin:react/recommended', // Reglas recomendadas para proyectos React.
    'plugin:react/jsx-runtime', // Reglas para el uso de JSX en React.
    'plugin:@typescript-eslint/eslint-recommended', // Ajustes para TypeScript en reglas recomendadas.
    'plugin:@typescript-eslint/recommended' // Reglas recomendadas específicas para TypeScript.
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Patrones de archivos/directorios a ignorar por ESLint.
  parserOptions: { 
    ecmaVersion: 'latest', // Versión de ECMAScript para el análisis del código.
    sourceType: 'module', // Indica que se utilizan módulos ECMAScript.
    ecmaFeatures: {
      jsx: true, // Habilita el soporte para sintaxis JSX.
    },
  },
  settings: { react: { version: '18.2' } }, // Configuración específica para React (versión).
  plugins: ['react', 'react-refresh', '@typescript-eslint'], // Plugins adicionales de ESLint para React y TypeScript.
  rules: {
    // Aquí puedes definir o ajustar reglas específicas según tus preferencias.
  },
};
