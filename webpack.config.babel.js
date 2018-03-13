import path from 'path';

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }
};
