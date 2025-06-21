import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import dangolPlugin from '@realdangol/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
  plugins: {
    '@realdangol': dangolPlugin,
  },
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:@dangol-dev/recommended'),
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/display-name': 'off',
    },
  },
  {
    ignores: ['src/mocks/*', 'src/**/*.d.ts', '*.config.js'],
  },
];

export default eslintConfig;
