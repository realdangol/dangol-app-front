module.exports = {
  plugins: ['@dangol-dev'],
  extends: ['expo', 'plugin:@dangol-dev/recommended'],
  ignorePatterns: ['/dist/*'],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
};
