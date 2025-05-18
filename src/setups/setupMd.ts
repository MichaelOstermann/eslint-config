import { defineConfig } from "eslint/config"
import format from "eslint-plugin-format"

export function setupMd() {
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
                tabWidth: 4,
            }],
        },
    })
}
