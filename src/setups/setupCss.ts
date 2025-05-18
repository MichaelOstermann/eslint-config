import { defineConfig } from "eslint/config"
import format from "eslint-plugin-format"

export function setupCss() {
    return defineConfig({
        files: ["**/*.css"],
        languageOptions: {
            parser: format.parserPlain,
        },
        plugins: {
            format,
        },
        rules: {
            "format/prettier": ["error", {
                parser: "css",
                tabWidth: 4,
            }],
        },
    })
}
