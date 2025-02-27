import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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
      jsxA11y.flatConfigs.recommended,
      reactRefresh.configs.recommended,
    ],
    plugins: {
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
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/img-redundant-alt": "off",
      "jsx-a11y/media-has-caption": "off",
      "jsx-a11y/mouse-events-have-key-events": "off",
    },
  },
  prettier,
);
