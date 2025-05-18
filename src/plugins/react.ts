import { defineConfig } from "eslint/config"
import { allFiles, hasReact, tsxFiles } from "../constants.js"

export async function react() {
    if (!hasReact) return []

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
            files: tsxFiles,
            extends: [
                { ...reactPlugin.configs["recommended-typescript"], settings: { react: { version: "detect" } } } as any,
                reactRefreshPlugin.configs.vite,
            ],
            rules: {
                "@eslint-react/no-array-index-key": "off",
                "@eslint-react/no-unstable-context-value": "off",
            },
        },
        {
            files: allFiles,
            extends: [
                reactHooksPlugin.configs["recommended-latest"],
                reactCompilerPlugin.configs.recommended,
            ],
            rules: {
                "@eslint-react/hooks-extra/prefer-use-state-lazy-initialization": "off",
                "@eslint-react/hooks-extra/no-unnecessary-use-prefix": "off",
            },
        },
    ])
}
