module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: 'useCustomHook' },
    ],
  },
};
