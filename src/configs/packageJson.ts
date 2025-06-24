import jsonc from "eslint-plugin-jsonc"
import { defineConfig } from "eslint/config"

export function packageJson() {
    return defineConfig({
        files: ["**/package.json"],
        plugins: {
            jsonc: jsonc as any,
        },
        rules: {
            "jsonc/sort-array-values": [
                "error",
                {
                    order: { type: "asc" },
                    pathPattern: "^files$",
                },
            ],
            "jsonc/sort-keys": [
                "error",
                {
                    pathPattern: "^$",
                    order: [
                        "publisher",
                        "name",
                        "displayName",
                        "type",
                        "version",
                        "private",
                        "packageManager",
                        "description",
                        "author",
                        "contributors",
                        "license",
                        "funding",
                        "homepage",
                        "repository",
                        "bugs",
                        "keywords",
                        "categories",
                        "sideEffects",
                        "imports",
                        "exports",
                        "main",
                        "module",
                        "unpkg",
                        "jsdelivr",
                        "types",
                        "typesVersions",
                        "bin",
                        "icon",
                        "files",
                        "engines",
                        "activationEvents",
                        "contributes",
                        "scripts",
                        "peerDependencies",
                        "peerDependenciesMeta",
                        "dependencies",
                        "optionalDependencies",
                        "devDependencies",
                        "pnpm",
                        "overrides",
                        "resolutions",
                        "husky",
                        "simple-git-hooks",
                        "lint-staged",
                        "eslintConfig",
                    ],
                },
                {
                    order: { type: "asc" },
                    pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$",
                },
                {
                    order: { type: "asc" },
                    pathPattern: "^(?:resolutions|overrides|pnpm.overrides)$",
                },
                {
                    pathPattern: "^exports.*$",
                    order: [
                        "types",
                        "import",
                        "require",
                        "default",
                    ],
                },
                {
                    pathPattern: "^(?:gitHooks|husky|simple-git-hooks)$",
                    order: [
                        // client hooks only
                        "pre-commit",
                        "prepare-commit-msg",
                        "commit-msg",
                        "post-commit",
                        "pre-rebase",
                        "post-rewrite",
                        "post-checkout",
                        "post-merge",
                        "pre-push",
                        "pre-auto-gc",
                    ],
                },
            ],
        },
    })
}
