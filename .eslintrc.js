module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecamVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['@babel', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
