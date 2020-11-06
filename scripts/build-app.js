process.env.NODE_ENV = 'production';

const rimraf = require('rimraf');
const fs = require('fs');
const Webpack = require('webpack');

const webpackConfig = require('../config/webpack/webpack.prod');

const webpack = Webpack(webpackConfig);

if (fs.existsSync(webpackConfig.output.path)) {
  rimraf.sync(webpackConfig.output.path);
}

webpack.run(function(err, stats) {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    process.exit(1);
  }
  process.stdout.write(stats.toString());
});
