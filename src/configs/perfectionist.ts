import perfectionistPlugin from "eslint-plugin-perfectionist"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export function perfectionist() {
    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            perfectionist: perfectionistPlugin as any,
        },
        rules: {
            "perfectionist/sort-exports": ["error", { order: "asc", type: "natural" }],
            "perfectionist/sort-named-exports": ["error", { order: "asc", type: "natural" }],
            "perfectionist/sort-named-imports": ["error", { order: "asc", type: "natural" }],
            "perfectionist/sort-classes": ["error", {
                newlinesBetween: "ignore",
                order: "asc",
                partitionByComment: true,
                type: "natural",
            }],
            "perfectionist/sort-imports": ["error", {
                newlinesBetween: "ignore",
                order: "asc",
                type: "natural",
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
            }],
            "perfectionist/sort-interfaces": ["error", {
                newlinesBetween: "ignore",
                order: "asc",
                partitionByComment: true,
                type: "natural",
                groups: [
                    "index-signature",
                    "unknown",
                    "multiline-property",
                    "method",
                    "multiline-method",
                ],
            }],
            "perfectionist/sort-jsx-props": ["error", {
                newlinesBetween: "ignore",
                order: "asc",
                type: "natural",
                groups: [
                    "shorthand-prop",
                    "unknown",
                    "multiline-prop",
                ],
            }],
            "perfectionist/sort-object-types": ["error", {
                newlinesBetween: "ignore",
                order: "asc",
                partitionByComment: true,
                type: "natural",
                groups: [
                    "index-signature",
                    "unknown",
                    "multiline-property",
                    "method",
                    "multiline-method",
                ],
            }],
            "perfectionist/sort-objects": ["error", {
                newlinesBetween: "ignore",
                order: "asc",
                partitionByComment: true,
                type: "natural",
                groups: [
                    "unknown",
                    "property",
                    "method",
                    "multiline-property",
                    "multiline-method",
                ],
            }],
        },
    })
}
