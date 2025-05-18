import * as importsPlugin from "eslint-plugin-import-x"
import perfectionistPlugin from "eslint-plugin-perfectionist"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import { defineConfig } from "eslint/config"
import { allFiles, isInEditor } from "../constants.js"

export function imports() {
    return defineConfig({
        files: allFiles,
        plugins: {
            "import": importsPlugin as any,
            "unused-imports": unusedImportsPlugin,
            "perfectionist": perfectionistPlugin as any,
        },
        rules: {
            "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
            "import/first": "error",
            "import/no-duplicates": "error",
            "import/no-mutable-exports": "error",
            "import/no-named-default": "error",
            "import/no-self-import": "error",
            "import/no-webpack-loader-syntax": "error",
            "import/newline-after-import": ["error", { count: 1 }],
            "unused-imports/no-unused-imports": isInEditor ? "warn" : "error",
            "unused-imports/no-unused-vars": [
                "error",
                {
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    vars: "all",
                    varsIgnorePattern: "^_",
                },
            ],
            "perfectionist/sort-exports": ["error", { order: "asc", type: "natural" }],
            "perfectionist/sort-imports": ["error", {
                groups: [
                    "type",
                    ["parent-type", "sibling-type", "index-type", "internal-type"],
                    "builtin",
                    "external",
                    "internal",
                    ["parent", "sibling", "index"],
                    "side-effect",
                    "object",
                    "unknown",
                ],
                newlinesBetween: "ignore",
                order: "asc",
                type: "natural",
            }],
            "perfectionist/sort-named-exports": ["error", { order: "asc", type: "natural" }],
            "perfectionist/sort-named-imports": ["error", { order: "asc", type: "natural" }],
        },
    })
}
