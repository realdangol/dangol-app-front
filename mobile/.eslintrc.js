module.exports = {
  plugins: ['@realdangol'],
  extends: ['expo', 'plugin:@realdangol/recommended'],
  ignorePatterns: ['/dist/*'],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
};
