import { babel } from "@rollup/plugin-babel"
import external from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import image from "@rollup/plugin-image"
import dts from "rollup-plugin-dts"
import sass from "rollup-plugin-sass"
import copy from "rollup-plugin-copy"

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      copy({
        targets: [
          { src: "src/styles/scssVars/colors", dest: "dist/scssVars", flatten: false },

          /*
          * Note:
          * Not sure if these are needed, allthough it does fix some broken imports
          * in the dist/build. That said, it's tbd if those borked imports even mattered
          * in the first place...this likely isn't the best way to handle that situation anwyay,
          * but leaving for now. ¯\ (ツ) /¯
          */
          { src: "src/styles/scssVars/colors/colors.module.scss", dest: "dist/cjs/styles/scssVars/colors/" },
          { src: "src/styles/scssVars/colors/colors.module.scss", dest: "dist/esm/styles/scssVars/colors/" },
          { src: "src/styles/prefixes/prefixes.module.scss", dest: "dist/cjs/styles/prefixes/", flatten: false },
          { src: "src/styles/prefixes/prefixes.module.scss", dest: "dist/esm/styles/prefixes/", flatten: false }
        ]
      }),
      sass({
        output: "dist/ui_styles.css"
      }),

      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"]
      }),
      image(),
      external(),
      resolve(),
      typescript(),
      terser()
    ]
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/esm/index.d.ts", format: "es" }],
    plugins: [dts.default()],
    external: [/\.scss$/]
  }
]
