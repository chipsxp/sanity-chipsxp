import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "sanity.types.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-syntax": [
        "error",
        {
          "selector": "TSNullKeyword",
          "message": "The use of `null` is forbidden. Please use `undefined` instead for strict typing consistency."
        },
        {
          "selector": "Literal[value=null]",
          "message": "The use of `null` is forbidden. Please use `undefined` instead for strict typing consistency."
        },
        {
          "selector": "TSNeverKeyword",
          "message": "The use of `never` is restricted. Extract correct union types directly instead of resolving to never."
        }
      ]
    }
  }
]);

export default eslintConfig;
