module.exports = {
  extends: ['../.eslintrc.js', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks', 'react-native'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    // 'react/jsx-no-constructed-context-values': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-handler-names': [
      1,
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': [2, { skip: ['Typography', 'TextBody', 'T', 'TextEllipsis'] }],
    'react-native/no-single-element-style-arrays': 2,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 0,
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
}
