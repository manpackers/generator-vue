const { createEslintLoader } = require('@manpacker/generator')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = ic => ({
  resolve: {
    alias: { 'vue$': 'vue/dist/vue.esm.js' }
  },

  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader'] }
    ].concat(ic.isEslint ? [createEslintLoader(/\.vue$/)] : [])
  },

  plugins: [
    new VueLoaderPlugin()

  ].concat(ic.isVueProvide ? [
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default']
    })
  ] : []).concat(ic.isComponentProvide ? [
    new webpack.ProvidePlugin({
      Component: ['vue-class-component', 'default']
    })
  ] : [])
})
