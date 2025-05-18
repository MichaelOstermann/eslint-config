import { defineConfig } from "eslint/config"
import { allFiles, hasTailwind } from "../constants.js"

export async function tailwind() {
    if (!hasTailwind) return []

    // @ts-expect-error No declaration files available.
    const tailwindPlugin = await import("eslint-plugin-tailwindcss").then(m => m.default)

    return defineConfig({
        files: allFiles,
        plugins: {
            tailwind: tailwindPlugin,
        },
        settings: {
            tailwindcss: {
                callees: ["tv", "twJoin", "twMerge"],
            },
        },
        rules: {
            ...tailwindPlugin.configs["flat/recommended"].rules,
            "tailwindcss/no-custom-classname": "off",
        },
    })
}
