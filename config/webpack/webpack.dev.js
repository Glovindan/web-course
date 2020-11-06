const path = require('path');
const { resolvePath } = require('./utils');
const { getLoaders } = require('./loaders');
const { getPlugins } = require('./plugins');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    main: resolvePath('src/index.tsx'),
  },
  output: {
    path: resolvePath('build'),
    pathinfo: true,
    publicPath: '/',
    filename: './assets/js/bundle.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [resolvePath('src'), 'node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: getLoaders(),
  },
  plugins: getPlugins(),
};

module.exports = config;
