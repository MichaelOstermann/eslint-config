// @ts-expect-error No declaration files available.
import commentsPlugin from "@eslint-community/eslint-plugin-eslint-comments"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export function comments() {
    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            "eslint-comments": commentsPlugin,
        },
        rules: {
            "eslint-comments/no-aggregating-enable": "error",
            "eslint-comments/no-duplicate-disable": "error",
            "eslint-comments/no-unused-enable": "error",
        },
    })
}
