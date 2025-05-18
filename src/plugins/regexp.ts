import * as regexpPlugin from "eslint-plugin-regexp"
import { defineConfig } from "eslint/config"
import { allFiles } from "../constants.js"

const config = regexpPlugin.configs["flat/recommended"]

export function regexp() {
    return defineConfig({
        files: allFiles,
        plugins: {
            regexp: config.plugins.regexp,
        },
        rules: {
            ...config.rules,
        },
    })
}
