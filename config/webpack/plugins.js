const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { resolvePath } = require('./utils');

const getHtmlWebpackPlugin = () =>
  new HtmlWebpackPlugin({
    inject: 'body',
    template: resolvePath('src/index.html'),
  });

const getMiniCssExtractPlugin = () =>
  new MiniCssExtractPlugin({
    filename: `assets/css/[name].[contenthash:8].css`,
    chunkFilename: `assets/css/[name].[contenthash:8].chunk.css`,
  });

const getPlugins = () => {
  const env = process.env.NODE_ENV;

  const isProduction = env === 'production';

  const getCommonPlugins = () => [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    getHtmlWebpackPlugin(),
  ];

  return isProduction
    ? [...getCommonPlugins(), getMiniCssExtractPlugin()]
    : [...getCommonPlugins()];
};

module.exports = {
  getPlugins,
};
