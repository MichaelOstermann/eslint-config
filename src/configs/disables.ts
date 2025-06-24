import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export function disables() {
    return defineConfig({
        files: [
            `**/benchmarks/${GLOB_SRC}`,
            `**/notes/${GLOB_SRC}`,
            `**/playground/${GLOB_SRC}`,
            `**/scripts/${GLOB_SRC}`,
        ],
        rules: {
            "antfu/no-top-level-await": "off",
            "no-console": "off",
        },
    })
}
