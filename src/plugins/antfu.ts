import { defineConfig } from "eslint/config"
import antfuPlugin from "eslint-plugin-antfu"
import { allFiles } from "../constants.js"

export function antfu() {
    return defineConfig({
        files: allFiles,
        plugins: {
            antfu: antfuPlugin,
        },
        rules: {
            "antfu/no-top-level-await": "error",
            "antfu/consistent-chaining": "error",
            "antfu/consistent-list-newline": "error",
            "antfu/curly": "error",
            "antfu/top-level-function": "error",
            "antfu/import-dedupe": "error",
            "antfu/no-import-dist": "error",
            "antfu/no-import-node-modules-by-path": "error",
        },
    })
}
