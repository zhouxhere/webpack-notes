module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecamVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['@babel', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
