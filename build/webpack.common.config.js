const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/main.js',
  module: {
    rules: [
      { // vue 文件
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      { // 加载 css
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ]
      },
      { // 加载图片
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }, 
      { // 加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new  VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '开发环境',
      template: path.resolve(__dirname, '../public/index.html'), // 源模板文件
      filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    // 配置 省略文件后缀名
    extensions: ['.js', '.css', '.vue'],  
  }
}
