const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const strategy = {
  entry: 'prepend'
};

module.exports = merge.strategy(strategy)(base, {
  entry: ['react-hot-loader/patch'],
  devtool: 'eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true
  }
});
