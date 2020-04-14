const webpack = require('webpack');
const config = require('config');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const glob = require('glob');
const entries = {};
const isProd = process.env.NODE_ENV === 'production';
const modeValue = process.env.NODE_ENV;
const destDir = isProd ? 'htdocs' : 'dist';

glob.sync('./src/js/*.js', {
  ignore: './src/**/*_.js'
}).map((file) => {
  const regExp = new RegExp(`./src/js/`);
  const key = file.replace(regExp, '');
  entries[key] = file;
});

module.exports = {
  entry: entries,
  mode: modeValue,
  target: 'node',
  output: {
    path: path.resolve(__dirname, `${destDir}/assets/js/`),
    filename: '[name]'
  },
  devServer: {
    contentBase: path.join(__dirname, `${destDir}`),
    inline: isProd,
    open: true,
    openPage: '',
    host: config.get('config.host'),
    publicPath: '/assets/js/',
    // disableHostCheck: true,
    watchContentBase: true,
    port: config.get('config.port')
  },
  devtool: !isProd ? 'inline-source-map' : false,
  module: {
    rules: [{
      test: /\.js|riot$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env']
          ]
        }
      }],
      exclude: {
        include: /node_modules/
      },
    },
    {
      test: /\.riot$/,
      exclude: /node_modules/,
      use: [{
        loader: '@riotjs/webpack-loader',
        options: {
          hot: false,
          sourcemap: !isProd ? 'inline-source-map' : false,
        }
      }]
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            url: true,
            sourceMap: !isProd,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProd,
            plugins: [
              require('cssnano')({
                autoprefixer: false
              })
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: !isProd,
            // outputStyle: 'expanded'
          }
        }
      ]
    },
  ]
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          ecma: 6,
          compress: { drop_console: isProd },
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/i,
            beautify: !isProd
          }
        },
        extractComments: true
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    })
  ],
  resolve: {
    alias: {
      $Style: path.resolve(__dirname, 'src/scss/'),
      $RiotComponent: path.resolve(__dirname, 'src/riot/components/'),
      $Model: path.resolve(__dirname, 'src/js/Model'),
      $Controller: path.resolve(__dirname, 'src/js/Controller')
    }
  }
};