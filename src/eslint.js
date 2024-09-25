import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export const { eslint } = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  {
    ignores: [
      '**/dist/',
      '**/coverage/',
      '**/public/',
      '**/storybook-static/',
      '**/node_modules/',
      '**/package-lock.json',
      '**/android/',
    ],
  },

  { files: ['**/*.{ts,tsx,vue}'], languageOptions: { parser: tseslint.parser } },

  { files: ['**/*.vue'], languageOptions: { parser: vueParser, parserOptions: { parser: tseslint.parser } } },

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node, ymaps: 'writable' },
    },

    settings: {
      'import-x/resolver': { node: { extensions: ['.js', '.ts', '.mjs', '.d.ts'] } },
      'import-x/ignore': 'vue',
      'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
    },

    rules: {
      'vue/attribute-hyphenation': ['error', 'never', { ignore: ['hide-details'] }],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/block-tag-newline': ['error', { singleline: 'always', multiline: 'always' }],
      'vue/comment-directive': 'error',
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { ignores: ['component', '/v-/'], registeredComponentsOnly: false },
      ],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/define-macros-order': ['error', { order: ['defineProps', 'defineEmits'] }],
      'vue/eqeqeq': 'error',
      'vue/html-button-has-type': 'error',
      'vue/html-comment-content-newline': 'error',
      'vue/html-comment-content-spacing': 'error',
      'vue/html-comment-indent': 'error',
      'vue/html-self-closing': ['error', { html: { normal: 'never', void: 'always' } }],
      'vue/max-attributes-per-line': ['error', { singleline: { max: 6 }, multiline: { max: 1 } }],
      'vue/new-line-between-multi-line-property': 'error',
      'vue/no-boolean-default': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-multiple-slot-args': 'error',
      'vue/no-restricted-call-after-await': 'error',
      'vue/no-restricted-props': ['error', 'value'],
      'vue/no-static-inline-styles': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/no-undef-components': ['error', { ignorePatterns: ['RouterView', 'RouterLink'] }],
      'vue/no-undef-properties': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/this-in-template': 'error',
      'vue/v-for-delimiter-style': 'error',
      'vue/v-on-event-hyphenation': ['error', 'never'],
      'vue/v-on-function-call': 'error',

      'array-bracket-spacing': ['error', 'never'],
      'array-callback-return': 'error',
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'only-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      complexity: ['error', 12],
      curly: ['error', 'multi-line'],
      'default-param-last': 'error',
      'func-name-matching': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          ignoredNodes: ['ConditionalExpression', 'CallExpression', 'ObjectExpression'],
        },
      ],
      'max-depth': ['error', 4],
      'max-nested-callbacks': ['error', 4],
      'max-params': ['error', 5],
      'max-statements-per-line': ['error', { max: 1 }],
      'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
      'no-array-constructor': 'error',
      'no-case-declarations': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'error',
      'no-constant-binary-expression': 'error',
      'no-debugger': 'error',
      'no-div-regex': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-return-assign': ['error', 'always'],
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': ['error', { allow: ['_id'] }],
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      'no-use-before-define': ['error', { functions: false }],
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'object-curly-spacing': ['error', 'always'],
      'object-shorthand': 'error',
      'operator-assignment': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      semi: 'error',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      yoda: ['error', 'never', { onlyEquality: true }],

      'import-x/default': 'error',
      'import-x/exports-last': 'error',
      'import-x/first': 'error',
      'import-x/named': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-relative-packages': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-unassigned-import': ['error', { allow: ['**/*.scss', '**/*.css'] }],
      'import-x/no-unresolved': 'off',
      'import-x/no-unused-modules': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/order': 'error',

      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'] },
        { selector: 'function', format: ['camelCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
      ],
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-type-alias': [
        'error',
        {
          allowAliases: 'in-unions-and-intersections',
          allowGenerics: 'always',
          allowConditionalTypes: 'always',
        },
      ],
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-literal-enum-member': 'error',
      '@typescript-eslint/unified-signatures': 'error',

      'max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignorePattern: '<rect|path|ellipse([\\s\\S]*?)/>',
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
    },
  },

  eslintPluginPrettierRecommended
);
