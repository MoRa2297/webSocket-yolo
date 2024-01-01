module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: 'useCustomHook' },
    ],
  },
};
