var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');

const TARGET = process.env.npm_lifecycle_event;

var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, 'app');

var common = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    publicPath: '',
    filename: 'bundle.js'
  },
  module : {
      rules : [{
            enforce: 'pre',
            test : /\.jsx?/,
            include : APP_DIR,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}