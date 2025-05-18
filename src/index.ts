import { comments } from "./plugins/comments.js"
import { javascript } from "./plugins/javascript.js"
import { react } from "./plugins/react.js"
import { regexp } from "./plugins/regexp.js"
import { typescript } from "./plugins/typescript.js"
import { setupIgnores } from "./setups/setupIgnores.js"
import { setupTs } from "./setups/setupTs.js"
import { setupTsx } from "./setups/setupTsx.js"
import { antfu } from "./plugins/antfu.js"
import { stylistic } from "./plugins/stylistic.js"
import { unicorn } from "./plugins/unicorn.js"
import { setupJsonc } from "./setups/setupJsonc.js"
import { jsdoc } from "./plugins/jsdoc.js"
import { packageJson } from "./plugins/packageJson.js"
import { tsconfig } from "./plugins/tsconfig.js"
import { defineConfig } from "eslint/config"
import { tailwind } from "./plugins/tailwind.js"
import type { Options } from "./types.js"
import { setupCss } from "./setups/setupCss.js"
import { setupHtml } from "./setups/setupHtml.js"
import { setupMd } from "./setups/setupMd.js"

export default function (options?: Options) {
    return Promise
        .all([
            react(),
            tailwind(),
        ])
        .then(([react, tailwind]) => defineConfig(
            setupIgnores(options),
            setupTs(),
            setupTsx(),
            setupJsonc(),
            setupHtml(),
            setupCss(),
            setupMd(),
            react,
            tailwind,
            typescript(),
            javascript(),
            comments(),
            regexp(),
            stylistic(),
            antfu(),
            unicorn(),
            jsdoc(),
            packageJson(),
            tsconfig(),
        ))
}
