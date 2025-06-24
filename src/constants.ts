import { isPackageExists } from "local-pkg"

export const GLOB_SRC = "**/*.[jt]s?(x)"
export const GLOB_REACT = "**/*.[jt]sx"

export const GLOB_JSON = [
    "**/*.json",
    "**/*.json5",
    "**/*.jsonc",
]

export const isInEditor = !process.env["CI"]
    && !process.env["GIT_PARAMS"]
    && !process.env["npm_lifecycle_script"]?.startsWith("lint-staged")
    && !process.env["VSCODE_GIT_COMMAND"]
    && (!!process.env["VSCODE_PID"]
        || !!process.env["VSCODE_CWD"]
        || !!process.env["JETBRAINS_IDE"]
        || !!process.env["VIM"]
        || !!process.env["NVIM"])

export const hasReact = isPackageExists("react")
export const hasTailwind = isPackageExists("tailwindcss")
