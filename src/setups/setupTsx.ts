import { defineConfig } from "eslint/config"
import { tsxFiles } from "../constants.js"

export function setupTsx() {
    return defineConfig({
        files: tsxFiles,
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    })
}
