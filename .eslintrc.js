module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0,
    'no-new': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  }
}
