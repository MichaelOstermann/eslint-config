import type { Options } from "../types.js"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export async function tailwind(options: Options) {
    if (!options.tailwind) return []

    const betterTailwindcss = await import("eslint-plugin-better-tailwindcss").then(m => m.default)

    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            "better-tailwindcss": betterTailwindcss,
        },
        rules: {
            ...betterTailwindcss.configs["recommended"].rules,
            "better-tailwindcss/enforce-consistent-line-wrapping": "off",
            "better-tailwindcss/no-unknown-classes": "off",
        },
        settings: {
            "better-tailwindcss": {
                entryPoint: options.tailwind,
            },
        },
    })
}
