import format from "eslint-plugin-format"
import { defineConfig } from "eslint/config"

export function markdown() {
    return defineConfig({
        files: ["**/*.md"],
        languageOptions: {
            parser: format.parserPlain,
        },
        plugins: {
            format,
        },
        rules: {
            "format/prettier": ["error", {
                parser: "markdown",
                semicolons: false,
                tabWidth: 4,
            }],
        },
    })
}
