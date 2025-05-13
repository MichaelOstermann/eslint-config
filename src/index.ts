import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from "@antfu/eslint-config"
import type { Linter } from "eslint"
import type { FlatConfigComposer } from "eslint-flat-config-utils"
import antfu from "@antfu/eslint-config"
import reactCompiler from "eslint-plugin-react-compiler"
// @ts-expect-error eslint-plugin-tailwindcss exports no declaration files.
import tailwind from "eslint-plugin-tailwindcss"

export default function (
    options?: OptionsConfig & Omit<TypedFlatConfigItem, "files">,
    ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
) {
    const react = Boolean(options?.react)

    return antfu(
        {
            yaml: false,
            react,
            typescript: true,
            ...options,
            formatters: Object.assign({
                css: react,
            }, options?.formatters),
            stylistic: Object.assign({
                indent: 4,
                quotes: "double",
            }, options?.stylistic),
            rules: Object.assign({
                // Personal preference
                "style/comma-dangle": ["error", "always-multiline"],
                // Personal preference
                "antfu/if-newline": "off",
                // I prefer to able to choose depending on the scenario
                "ts/consistent-type-definitions": "off",
                // You have to be careful regardless of this rule
                "react/no-array-index-key": "off",
                // Irrelevant with react-compiler
                "react-hooks-extra/prefer-use-state-lazy-initialization": "off",
                // Irrelevant with react-compiler
                "react/no-unstable-context-value": "off",
                // Prevents react-compiler from doing its magic
                "react-hooks-extra/no-unnecessary-use-prefix": "off",
            }, options?.rules),
            settings: Object.assign({
                tailwindcss: {
                    callees: ["tv", "twJoin", "twMerge"],
                },
            }, options?.settings),
        },
        ...(react
            ? [
                    tailwind.configs["flat/recommended"],
                    {
                        rules: {
                            "tailwindcss/no-custom-classname": "off",
                        },
                    },
                    {
                        name: "react-compiler/recommended",
                        plugins: {
                            "react-compiler": reactCompiler,
                        },
                        rules: {
                            "react-compiler/react-compiler": "error",
                        },
                    },
                ]
            : []),
        ...userConfigs,
    )
}
