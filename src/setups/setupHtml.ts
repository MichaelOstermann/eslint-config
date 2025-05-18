import { defineConfig } from "eslint/config"
import format from "eslint-plugin-format"

export function setupHtml() {
    return defineConfig({
        files: ["**/*.html"],
        languageOptions: {
            parser: format.parserPlain,
        },
        plugins: {
            format,
        },
        rules: {
            "format/prettier": ["error", {
                parser: "html",
                tabWidth: 4,
            }],
        },
    })
}
