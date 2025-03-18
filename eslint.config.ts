import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";

export default tsEslint.config(
  {
    ignores: ["dist", ".react-router/**/*.ts", "src"],
    settings: { react: { version: "19.0.0" } },
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    extends: [
      eslint.configs.recommended,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
      tsEslint.configs.recommended,
      jsxA11y.flatConfigs.strict,
      reactRefresh.configs.recommended,
    ],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "error",
        {
          allowExportNames: ["meta", "links", "headers", "loader", "action"],
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXOpeningElement[name.name='img']",
          message: "Use the Image from @mantine/core component instead of img.",
        },
      ],
      "jsx-a11y/alt-text": [
        "error",
        {
          img: ["Image"],
          allowEmptyAlt: false,
        },
      ],
    },
  },
  prettier,
);
