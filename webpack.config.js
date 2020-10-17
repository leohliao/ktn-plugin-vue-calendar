const path = require('path');
const KintonePlugin = require('@kintone/webpack-plugin-kintone-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    desktop: path.resolve(__dirname, 'src/js/desktop.js'),
    config: path.resolve(__dirname, 'src/js/config.js'),
  },
  output: {
    path: path.resolve(__dirname, 'src', 'js', 'bundle'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  targets: {
                    browsers: [
                      'last 4 versions'
                    ]
                  },
                  useBuiltIns: 'usage'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new KintonePlugin({
      manifestJSONPath: './src/manifest.json',
      privateKeyPath: './vault/private.ppk',
      pluginZipPath: './dist/plugin.zip'
    })
  ],
  performance: {
    hints: false
  }
};