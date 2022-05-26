module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',

  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-wrap-multilines": "off",
    "quotes": [0, "double"],
    "semi": [0, "never"],
    "padded-blocks": ["error", { "classes": "always" }],
    "react/destructuring-assignment": "off",
    "comma-dangle": "off",
    "quote-props": "off",
    "operator-linebreak": "off",
    "no-multiple-empty-lines": "off",
    // "vars-on-top": "off",
    // "no-var": "off"

  },
};
