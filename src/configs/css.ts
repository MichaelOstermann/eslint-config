import format from "eslint-plugin-format"
import { defineConfig } from "eslint/config"

export function css() {
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
