import jsdocPlugin from "eslint-plugin-jsdoc"
import { defineConfig } from "eslint/config"
import { GLOB_SRC } from "../constants.js"

export function jsdoc() {
    return defineConfig({
        files: [GLOB_SRC],
        plugins: {
            jsdoc: jsdocPlugin,
        },
        rules: {
            "jsdoc/check-access": "warn",
            "jsdoc/check-alignment": "warn",
            "jsdoc/check-param-names": "warn",
            "jsdoc/check-property-names": "warn",
            "jsdoc/check-types": "warn",
            "jsdoc/empty-tags": "warn",
            "jsdoc/implements-on-classes": "warn",
            "jsdoc/multiline-blocks": "warn",
            "jsdoc/no-defaults": "warn",
            "jsdoc/no-multi-asterisks": "warn",
            "jsdoc/require-param-name": "warn",
            "jsdoc/require-property": "warn",
            "jsdoc/require-property-description": "warn",
            "jsdoc/require-property-name": "warn",
            "jsdoc/require-returns-check": "warn",
            "jsdoc/require-returns-description": "warn",
            "jsdoc/require-yields-check": "warn",
        },
    })
}
