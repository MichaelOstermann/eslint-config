import format from "eslint-plugin-format"
import { defineConfig } from "eslint/config"

export function html() {
    return defineConfig({
        files: ["**/*.htm?(l)"],
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
