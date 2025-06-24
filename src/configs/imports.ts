import * as importsPlugin from "eslint-plugin-import-x"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import { defineConfig } from "eslint/config"
import { GLOB_SRC, isInEditor } from "../constants.js"

export function imports() {
    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            "import": importsPlugin as any,
            "unused-imports": unusedImportsPlugin,
        },
        rules: {
            "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
            "import/first": "error",
            "import/newline-after-import": ["error", { count: 1 }],
            "import/no-duplicates": "error",
            "import/no-mutable-exports": "error",
            "import/no-named-default": "error",
            "import/no-self-import": "error",
            "import/no-webpack-loader-syntax": "error",
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
        },
    })
}
