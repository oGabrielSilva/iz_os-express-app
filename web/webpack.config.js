require('dotenv/config');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.ts'),
  devtool: 'inline-source-map',
  mode: process.env.DEV_MODE,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist', 'public', 'static', 'javascript'),
  },
};
