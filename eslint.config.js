import { Language } from "@mui/icons-material";

export default [
  {
    plugins: ['eslint:recommended', 'react-refresh', 'react-hooks'],
    ignores: ['**/dist', '**/eslint.config.js'],
    files: ['**/*.ts', '**/*.tsx'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions : {
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  },
];
