module.exports = {
  extends: ['plugin:taro/all'],
  plugins: ['prettier', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'taro/render-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
