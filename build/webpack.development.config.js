const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.config')
const developmentConfig =  {
  mode: 'development',
  devServer: {
        port: 9091
  },
  devtool: 'source-map'
}

const webpackConfig = merge(commonConfig, developmentConfig);
module.exports =  webpackConfig
