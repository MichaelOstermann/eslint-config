import * as regexpPlugin from "eslint-plugin-regexp"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export function regex() {
    return defineConfig({
        files: [GLOB_SRC],
        rules: regexpPlugin.configs["flat/recommended"].rules,
        plugins: {
            regexp: regexpPlugin.configs["flat/recommended"].plugins.regexp,
        },
    })
}
