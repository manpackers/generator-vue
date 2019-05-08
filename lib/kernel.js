'use strict'
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MEIPIAN_NODE_ENV = process.env.MEIPIAN_NODE_ENV

function cssLoaders(options) {
  let that = this
  let generateLoaders = function(loader, loaderOptions) {
    const loaders = [...that.cssLoader()]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    if (options.extract) {
      loaders.unshift(MiniCssExtractPlugin.loader)
    }
    return ['vue-style-loader'].concat(loaders)
  }
  let sassResources = (that.sassResources && that.sassResources.length) ? [{
    loader: 'sass-resources-loader',
    options: {
      resources: that.sassResources.map(value => {
        return path.resolve(process.cwd(), path.join(that.root, value))
      })
    }
  }] : []

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }).concat(sassResources),
    scss: generateLoaders('sass').concat(sassResources),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

/**
 * meipian.config.js for context
 * @param  {Object} mpconf meipian runtime congfig
 * @return {Object}        webpack config object
 */
module.exports = function(mpconf) {
  let config = {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    externals: {
      'Hook': 'hook'
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: cssLoaders.apply(mpconf, [{
            sourceMap: mpconf.isMap,
            extract: mpconf.isExtract
          }]),
          cssSourceMap: mpconf.isMap,
          cacheBusting: !mpconf.isMap,
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }]
    }
  }

  // Local server node_moudles
  if (MEIPIAN_NODE_ENV === 'server') {
    config.plugins = [
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default'],
        _: 'lodash',
        axios: 'axios'
      })
    ]
  } else {
    config.externals['Vue'] = 'vue'
    config.externals['_'] = 'lodash'
    config.externals['axios'] = 'axios'
  }

  return config
}
