
module.exports = {
  entry: './src/client/main.js',
  output: {
    path: './public/js/',
    filename: 'main.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
    ],
  },
};
