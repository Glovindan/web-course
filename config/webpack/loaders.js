const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolvePath } = require('./utils');

const typedCssModuleLoader = require.resolve(
  '../../lib/typed-css-modules-loader'
);

const getScriptsLoader = () => ({
  test: /\.(jsx?|tsx?)$/,
  use: {
    loader: 'babel-loader',
    options: { cacheDirectory: true },
  },
  include: [resolvePath('src')],
});

const getStylesLoaders = isProduction => {
  const CSS_MODULE_REGEX = /\.module\.p?css$/;
  const CSS_REGEX = /\.p?css$/;

  const getLoaders = (isProduction, cssLoaderOptions, isCssModule = false) =>
    isProduction
      ? [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          {
            loader: 'css-loader',
            options: cssLoaderOptions,
          },
          {
            loader: 'postcss-loader',
            ident: 'postcss',
          },
        ]
      : [
          'style-loader',
          isCssModule && typedCssModuleLoader,
          {
            loader: 'css-loader',
            options: cssLoaderOptions,
          },
          {
            loader: 'postcss-loader',
            ident: 'postcss',
          },
        ].filter(Boolean);

  return [
    {
      test: CSS_MODULE_REGEX,
      use: getLoaders(
        isProduction,
        {
          importLoaders: 1,
          modules: {
            ...(!isProduction && { localIdentName: '[path][name]__[local]' }),
          },
          localsConvention: 'dashesOnly',
        },
        true
      ),
    },
    {
      test: CSS_REGEX,
      exclude: CSS_MODULE_REGEX,
      use: getLoaders(isProduction, {
        importLoaders: 1,
      }),
    },
  ];
};

const getSVGLoader = isProduction =>
  isProduction
    ? {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: { name: `assets/media/[name].[hash:8].[ext]` },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  { removeViewBox: false },
                  { removeEmptyAttrs: false },
                  { removeUselessStrokeAndFill: false },
                ],
              },
            },
          },
        ],
      }
    : {
        test: /\.(svg)$/,
        use: {
          loader: 'svg-sprite-loader',
          options: {
            name: `assets/media/[name].[hash:8].[ext]`,
          },
        },
      };

const getImagesLoader = isProduction =>
  isProduction
    ? {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: `assets/media/[name].[contenthash:8].[ext]` },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      }
    : {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: `assets/media/[name].[contenthash:8].[ext]`,
          },
        },
      };

const getFontTtfLoader = () => ({
  test: /.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: {
    loader: 'file-loader',
    options: {
      mimetype: 'application/octet-stream',
      name: `assets/media/[name].[hash:8].[ext]`,
    },
  },
});

const getLoaders = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return [
    getScriptsLoader(),
    ...getStylesLoaders(isProduction),
    getImagesLoader(isProduction),
    getSVGLoader(isProduction),
    getFontTtfLoader(),
  ];
};

module.exports = {
  getLoaders,
};
