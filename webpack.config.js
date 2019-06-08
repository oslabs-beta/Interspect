const webpack = require('webpack');
const path = require('path');

// Config directories
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const defaultInclude = [SRC_DIR];
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

module.exports = {
  // original: entry: SRC_DIR + '/index.js'
  entry: `${SRC_DIR}/main/index.js`,
  output: {
    path: OUTPUT_DIR,
    publicPath: '../dist/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: defaultInclude,
      },
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        }],
        include: defaultInclude,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  target: 'electron-renderer',
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    contentBase: OUTPUT_DIR,
    publicPath: '/dist/',
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
    before() {
      spawn(
        'electron',
        ['.'],
        { shell: true, env: process.env, stdio: 'inherit' },
      )
        .on('close', () => process.exit(0))
        .on('error', spawnError => console.error(spawnError));
    },
  },
};
