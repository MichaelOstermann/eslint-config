import typescriptParser from "@typescript-eslint/parser"
import { defineConfig } from "eslint/config"
import globals from "globals"
import jsoncParser from "jsonc-eslint-parser"
import { GLOB_JSON, GLOB_REACT, GLOB_SRC } from "../constants.js"

export function parsers() {
    return defineConfig(
        {
            files: [GLOB_SRC],
            languageOptions: {
                ecmaVersion: 2022,
                parser: typescriptParser,
                sourceType: "module",
                globals: {
                    ...globals.browser,
                    ...globals.es2021,
                    ...globals.node,
                    document: "readonly",
                    navigator: "readonly",
                    window: "readonly",
                },
                parserOptions: {
                    ecmaVersion: 2022,
                    sourceType: "module",
                },
            },
            linterOptions: {
                reportUnusedDisableDirectives: true,
            },
        },
        {
            files: [GLOB_REACT],
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                },
            },
        },
        {
            files: GLOB_JSON,
            languageOptions: {
                parser: jsoncParser,
            },
        },
    )
}
