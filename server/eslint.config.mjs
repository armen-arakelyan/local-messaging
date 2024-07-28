import globals from 'globals';
import pluginJs from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'indent': ['error', 'tab'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      ...typescriptEslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      'indent': ['error', 'tab'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
  pluginJs.configs.recommended,
];
