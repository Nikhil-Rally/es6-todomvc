const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '',
    pathinfo: isDev,
  },
  devtool: isDev ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'VanillaJS • TodoMVC',
      template: 'index.html',
      inject: 'head'
    }),
    new ProgressBarPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          mangle: true,
          keep_fnames: true,
          output: {
            beautify: false,
            comments: false
          }
        }
      })
    ]
  }
};
