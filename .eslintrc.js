module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [2, { classes: false, functions: false }],
    'react/forbid-prop-types': [1],
  },
};
