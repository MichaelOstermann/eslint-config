import antfuPlugin from "eslint-plugin-antfu"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export function antfu() {
    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            antfu: antfuPlugin,
        },
        rules: {
            "antfu/consistent-chaining": "error",
            "antfu/consistent-list-newline": "error",
            "antfu/curly": "error",
            "antfu/import-dedupe": "error",
            "antfu/no-import-dist": "error",
            "antfu/no-import-node-modules-by-path": "error",
            "antfu/top-level-function": "error",
        },
    })
}
