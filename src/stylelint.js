export const stylelint = {
  plugins: ['stylelint-prettier'],

  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],

  rules: {
    'at-rule-allowed-list': ['import', 'media', 'keyframes', 'each', 'font-face', 'use', 'container', 'extend'],
    'at-rule-no-vendor-prefix': true,
    'color-function-notation': 'legacy',
    'color-hex-alpha': 'never',
    'color-named': 'never',
    'declaration-no-important': true,
    'declaration-property-unit-allowed-list': [
      {
        'font-size': ['rem'],
        width: ['px', '%', 'vw'],
        height: ['px', '%', 'vh'],
        'max-width': ['px', '%', 'vw'],
        'max-height': ['px', '%', 'vh'],
        gap: ['px', '%'],
        'grid-gap': ['px', '%'],
        '/^border/': ['px', '%'],
        '/^padding/': ['px', '%'],
        '/^margin/': ['px', '%'],
        '/^background/': ['px', '%'],
        'line-height': [],
      },
      { ignore: ['inside-function'] },
    ],
    'declaration-property-value-allowed-list': [
      {
        'font-size': [
          '0.75rem',
          '0.875rem',
          '1rem',
          '1.125rem',
          '1.25rem',
          '1.375rem',
          '1.5rem',
          '1.75rem',
          '2rem',
          '2.25rem',
          '2.5rem',
          '2.75rem',
          '3rem',
          '3.5rem',
          '4rem',
          '5rem',
        ],
        'font-weight': ['$font-weight', '300', '400', '500', '700'],
        'line-height': ['1', '1.2', '1.3', '1.5', '2'],
        color: ['/^var/', '/^v-bind/', 'unset'],
        'background-color': ['/^var/', '/^v-bind/', 'unset'],
        'border-color': ['/^var/', '/^v-bind/', 'unset'],
      },
    ],
    'font-weight-notation': 'numeric',
    'function-url-no-scheme-relative': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': 4,
    'media-feature-name-allowed-list': ['max-width', 'print'],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-allowed-list': [{ 'max-width': ['$mobile', '$tablet', '$notebook', '$desktop'] }],
    'no-descending-specificity': null,
    'no-unknown-animations': true,
    'number-max-precision': 3,
    'rule-empty-line-before': ['always-multi-line', { except: ['first-nested'] }],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$|.',
    'selector-pseudo-class-no-unknown': null,
    'time-min-milliseconds': 100,
    'unit-allowed-list': ['px', 'rem', '%', 'vh', 'vw', 'ms', 'deg', 'fr'],
    'value-keyword-case': ['lower', { ignoreFunctions: ['v-bind'] }],

    'prettier/prettier': true,
  },
};
