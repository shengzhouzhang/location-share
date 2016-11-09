const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client/main.js',
  output: {
    path: './public/',
    filename: '/main.js',
    publicPath: 'http://localhost:8080/static/',
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks: true,
    }),
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]', 'sass') },
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
