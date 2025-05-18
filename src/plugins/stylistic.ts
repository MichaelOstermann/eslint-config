import { defineConfig } from "eslint/config"
import stylisticPlugin from "@stylistic/eslint-plugin"
import { allFiles } from "../constants.js"

export function stylistic() {
    return defineConfig({
        files: allFiles,
        plugins: {
            "@stylistic": stylisticPlugin,
        },
        rules: {
            ...stylisticPlugin.configs.customize({ indent: 4, quotes: "double", semi: false, jsx: true }).rules,
            "@stylistic/generator-star-spacing": ["error", { after: true, before: false }],
            "@stylistic/yield-star-spacing": ["error", { after: true, before: false }],
        },
    })
}
