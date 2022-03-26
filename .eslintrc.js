module.exports = {
  env: {
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/*.*'],
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-react',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    indent: ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'arrow-parens': ['error', 'always'],
    'brace-style': ['off', 'off'],
    'comma-dangle': 'error',
    'eol-last': 'error',

    'import/no-default-export': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-irregular-whitespace': 'error',
    'no-multiple-empty-lines': 'error',
    'no-return-await': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-expressions': 'error',
    'no-var': 'error',
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    'quote-props': 'off',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'allow',
        closingSlash: 'allow',
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    semi: 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
  },
};
