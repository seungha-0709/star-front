module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: ["standard", "prettier"],
  // required to lint *.vue files
  plugins: ["html", "standard"],
  // add your custom rules here
  rules: {
    eqeqeq: ["error", "always"],
    indent: ["error", 2],
    "no-tabs": 0,
    semi: [2, "never"],
    quotes: ["off", "single"],
    "no-console": "off",
    "comma-dangle": ["error", "never"],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
    "space-in-parens": ["error", "never"],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "no-empty": "error",
    "no-duplicate-imports": "error"
  },
  globals: {}
}
