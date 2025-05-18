import typescriptParser from "@typescript-eslint/parser"
import { defineConfig } from "eslint/config"
import globals from "globals"
import { allFiles } from "../constants.js"

export function setupTs() {
    return defineConfig({
        files: allFiles,
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
                document: "readonly",
                navigator: "readonly",
                window: "readonly",
            },
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
            },
            sourceType: "module",
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    })
}
