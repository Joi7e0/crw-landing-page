import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylisticJs from '@stylistic/eslint-plugin-js'
import { defineConfig, globalIgnores } from 'eslint/config'

export default Object.assign(defineConfig([
  globalIgnores(['dist', 'node_modules', 'coverage', '.env*']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/js/no-trailing-spaces': 'error',
    },
  },
]))
