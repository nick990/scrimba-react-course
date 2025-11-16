import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  // Configurazione per file di configurazione (senza import/no-unresolved)
  {
    files: ["*.config.js", "*.config.mjs"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
  // Configurazione principale per file sorgente
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["*.config.js", "*.config.mjs"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin,
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
      react: {
        version: "detect", // Rileva automaticamente la versione di React
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "import/no-unresolved": "error",
      "no-undef": "error",
      "react/jsx-no-undef": "error", // Questa è la regola che rileva componenti JSX non definiti
    },
  },
]);
