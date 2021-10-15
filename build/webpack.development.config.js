const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.config')
const developmentConfig =  {
  mode: 'development',
}

const webpackConfig = merge(commonConfig, developmentConfig);
module.exports =  webpackConfig
