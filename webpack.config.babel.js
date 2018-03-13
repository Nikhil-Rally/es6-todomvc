import path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    pathinfo: isDev,
  },
  devtool: isDev ? 'eval' : 'source-map'
};
