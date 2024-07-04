import eslint from '@eslint/js';
import imports from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactRecommended,
  prettierRecommended,
  {
    files: ['test/**'],
    ...jest.configs['flat/recommended'],
  },
  {
    ignores: [
      '**/.vscode/',
      '**/node_modules/',
      '**/.coverage/',
      '**/.expo/',
      '**/web_build/',
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        //ecmaVersion: 2024,
        //sourceType: 'module',
        project: true,
        tsconfigRootDir: './',
      },
      globals: {
        browser: true,
        module: true,
      },
    },
    plugins: {
      import: imports,
      'unused-imports': unusedImports,
      'react-hooks': reactHooks,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'all',
          singleQuote: true,
          jsxSingleQuote: true,
          printWidth: 80,
          tabWidth: 2,
        },
        {
          usePrettierrc: false,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
      ...reactHooks.configs.recommended.rules,
      ...imports.configs.recommended.rules,
      ...imports.configs.typescript.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
      'import/ignore': ['react-native-easy-grid'],
      react: {
        version: 'detect',
      },
    },
  },
);

export default config;
