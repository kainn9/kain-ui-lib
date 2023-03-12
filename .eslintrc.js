module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  overrides: [
    {
      files: "*",
      rules: {
        quotes: ["error", "double"]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/quotes": ["error", "double"]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["*.md", "/dist", "/build"]
}
