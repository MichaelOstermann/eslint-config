import type { Options } from "./types.js"
import { defineConfig } from "eslint/config"
import { antfu } from "./configs/antfu.js"
import { comments } from "./configs/comments.js"
import { css } from "./configs/css.js"
import { disables } from "./configs/disables.js"
import { html } from "./configs/html.js"
import { ignores } from "./configs/ignores.js"
import { imports } from "./configs/imports.js"
import { javascript } from "./configs/javascript.js"
import { jsdoc } from "./configs/jsdoc.js"
import { json } from "./configs/json.js"
import { markdown } from "./configs/markdown.js"
import { packageJson } from "./configs/packageJson.js"
import { parsers } from "./configs/parsers.js"
import { perfectionist } from "./configs/perfectionist.js"
import { react } from "./configs/react.js"
import { regex } from "./configs/regex.js"
import { stylistic } from "./configs/stylistic.js"
import { tailwind } from "./configs/tailwind.js"
import { tsconfig } from "./configs/tsconfig.js"
import { typescript } from "./configs/typescript.js"
import { unicorn } from "./configs/unicorn.js"

export default function (options: Options = {}) {
    return Promise
        .all([
            ignores(options),
            parsers(),
            javascript(),
            typescript(),
            antfu(),
            comments(),
            css(),
            html(),
            imports(),
            jsdoc(),
            json(),
            markdown(),
            packageJson(),
            regex(),
            stylistic(),
            perfectionist(),
            react(options),
            tailwind(options),
            tsconfig(),
            unicorn(),
            disables(),
        ])
        .then(defineConfig)
}
