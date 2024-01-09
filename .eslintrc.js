module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  plugins: ['prettier', 'react-hooks', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: 'useCustomHook' },
    ],
  },
};
