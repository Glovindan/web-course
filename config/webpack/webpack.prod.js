const { getLoaders } = require('./loaders');
const { getPlugins } = require('./plugins');
const { getMinimizers } = require('./minimizers');
const { resolvePath } = require('./utils');

const config = {
  mode: 'production',
  bail: true,
  entry: {
    main: resolvePath('src/index.tsx'),
  },
  output: {
    path: resolvePath('build'),
    publicPath: '/',
    filename: 'assets/js/[name].[contenthash:8].js',
    chunkFilename: 'assets/js/[name].[contenthash:8].chunk.js',
  },
  optimization: {
    minimize: true,
    minimizer: getMinimizers(),
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [resolvePath('src'), 'node_modules'],
  },
  module: {
    rules: getLoaders(),
  },
  plugins: getPlugins({ folder: 'assets' }),
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = config;
