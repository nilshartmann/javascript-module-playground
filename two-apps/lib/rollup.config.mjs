import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.ts",

  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    // {
    //   file: packageJson.module,
    //   format: "esm",
    //   sourcemap: true,
    // },
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    typescript(),
    postcss({
      config: {
        path: ".",
      },
      extract: true,
      minimize: true,
    }),
  ],
};

export default config;
