import type { Options } from "../types.js"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export async function tailwind(options: Options) {
    if (options.tailwind !== true) return []

    // @ts-expect-error No declaration files available.
    const tailwindPlugin = await import("eslint-plugin-tailwindcss").then(m => m.default)

    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            tailwind: tailwindPlugin,
        },
        rules: {
            ...tailwindPlugin.configs["flat/recommended"].rules,
            "tailwindcss/no-custom-classname": "off",
        },
        settings: {
            tailwindcss: {
                callees: ["tv", "twJoin", "twMerge"],
            },
        },
    })
}
