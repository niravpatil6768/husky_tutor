module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential', // Use essential rules from eslint-plugin-vue
      'eslint:recommended', // Use recommended ESLint rules
      'plugin:prettier/recommended', // Enable Prettier plugin
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    },
  }
  