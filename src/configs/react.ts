import type { Options } from "../types.js"
import stylisticPlugin from "@stylistic/eslint-plugin"
import { defineConfig } from "eslint/config"
import { GLOB_REACT, GLOB_SRC } from "../constants.js"

export async function react(options: Options) {
    if (options.react !== true) return []

    const [
        reactPlugin,
        reactCompilerPlugin,
        reactHooksPlugin,
        reactRefreshPlugin,
    ] = await Promise.all([
        import("@eslint-react/eslint-plugin").then(m => m.default),
        import("eslint-plugin-react-compiler").then(m => m.default),
        import("eslint-plugin-react-hooks").then(m => m.default),
        import("eslint-plugin-react-refresh").then(m => m.default),
    ])

    return defineConfig([
        {
            files: [GLOB_SRC],
            extends: [
                reactHooksPlugin.configs.flat["recommended-latest"],
                reactCompilerPlugin.configs.recommended,
            ],
            rules: {
                "@eslint-react/hooks-extra/no-unnecessary-use-prefix": "off",
                "@eslint-react/hooks-extra/prefer-use-state-lazy-initialization": "off",
            },
        },
        {
            files: [GLOB_REACT],
            extends: [
                { ...reactPlugin.configs["recommended-typescript"], settings: { react: { version: "detect" } } } as any,
                reactRefreshPlugin.configs.vite,
            ],
            plugins: {
                "@stylistic": stylisticPlugin,
            },
            rules: {
                "@eslint-react/no-array-index-key": "off",
                "@eslint-react/no-unstable-context-value": "off",
                "@stylistic/jsx-max-props-per-line": ["error", { maximum: { multi: 1, single: 2 } }],
            },
        },
    ])
}
