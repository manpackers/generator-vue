const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = ic => ({
  resolve: {
    alias: { 'vue$': 'vue/dist/vue.esm.js' }
  },

  module: {
    rules: [{ test: /\.vue$/, use: ['vue-loader'] }]
  },

  plugins: [
    new VueLoaderPlugin(),

    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default']
    })
  ].concat(ic.isClassModel ? [

    new webpack.ProvidePlugin({
      Component: ['vue-class-component', 'default']
    })
  ] : [])
})
