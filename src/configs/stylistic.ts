import stylisticPlugin from "@stylistic/eslint-plugin"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export function stylistic() {
    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            "@stylistic": stylisticPlugin,
        },
        rules: {
            ...stylisticPlugin.configs.customize({
                indent: 4,
                jsx: true,
                quotes: "double",
                semi: false,
            }).rules,
            "@stylistic/generator-star-spacing": ["error", { after: true, before: false }],
            "@stylistic/yield-star-spacing": ["error", { after: true, before: false }],
            "@stylistic/operator-linebreak": ["error", "before", { overrides: {
                "=": "after",
            } }],
        },
    })
}
