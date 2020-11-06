process.env.NODE_ENV = 'development';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack/webpack.dev');

const port = 8080;
const host = 'localhost';

const devServerConfig = {
  contentBase: webpackConfig.output.path,
  publicPath: '/',
  watchContentBase: true,
  hot: true,
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  lazy: false,
  inline: true,
  stats: {
    colors: true,
    modules: false,
  },
  port,
  host,
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, devServerConfig);

const webpack = Webpack(webpackConfig);
const devServer = new WebpackDevServer(webpack, devServerConfig);

devServer.listen(port, host, () => {
  console.log(`Starting on ${host}:${port}`);
});
