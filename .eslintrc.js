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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0,
    'no-new': 0,
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': ['error', {'args': 'none'}],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
