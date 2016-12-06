const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-sourcemap',
  entry: ['rxjs', './app/main.jsx'],
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV === 'production' ? 'production' : 'development')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2017'],
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
            'transform-function-bind',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      styles: path.resolve(__dirname, 'app', 'styles'),
      components: path.resolve(__dirname, 'app', 'components'),
      reducers: path.resolve(__dirname, 'app', 'reducers'),
      data: path.resolve(__dirname, 'app', 'data'),
      images: path.resolve(__dirname, 'app', 'images'),
    }
  },
  devServer: {
    /*inline: true,
    hot: true,*/
    host: process.env.IP || 'localhost'
  }
}
