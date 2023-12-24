module.exports = {
    root: true, // Indica que esta configuración es la raíz para ESLint.
    env: { browser: true, es2020: true }, // Define los entornos en los que se ejecutará el código.
    extends: [              // Extiende las configuraciones de reglas predefinidas.
      'eslint:recommended', // Conjunto de reglas recomendadas por ESLint.
      'plugin:react/recommended', // Reglas recomendadas para proyectos de React.
      'plugin:react/jsx-runtime', // Reglas relacionadas con el uso del JSX en React.
      // 'plugin:react-hooks/recommended', // Reglas recomendadas para el uso de hooks de React.
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],  // Patrones de archivos/directorios a ignorar.
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, // Opciones de análisis del código fuente.
    settings: { react: { version: '18.2' } }, // Configuraciones específicas para plugins o entornos.
    plugins: ['react', 'react-refresh'], // Lista de complementos de ESLint a utilizar.
    rules: {  // Definición de reglas específicas.
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'indent': ['error', 2], // Requiere indentación de 2 espacios.
      'quotes': [
        'warn',
        'single', // Advierte sobre el uso de comillas simples.
      ],
      'semi': [
        'warn',
        'always', // Advierte si falta punto y coma al final de una declaración.
      ],
      'no-mixed-spaces-and-tabs': 0, // Desactiva la advertencia de mezcla de espacios y tabulaciones.
      'react/prop-types': 'off', // Desactiva la verificación de tipos de props en componentes de React.
      'react/react-in-jsx-scope': 'off', // Desactiva la advertencia de importar React en archivos JSX.
      'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // Advierte si las extensiones de archivo JSX son diferentes de .js y .jsx.
    },
  };
  