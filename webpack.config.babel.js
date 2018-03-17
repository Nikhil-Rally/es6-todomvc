import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

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
    })
  ]
};
