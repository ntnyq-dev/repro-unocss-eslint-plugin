import pluginUnoCSS from '@unocss/eslint-plugin'
import pluginVue from 'eslint-plugin-vue'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...pluginVue.configs['flat/base'],
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
      '@unocss': pluginUnoCSS,
    },
    rules: {
      '@unocss/order': 'error',
      '@unocss/enforce-class-compile': 'error',
    },
  },
]
