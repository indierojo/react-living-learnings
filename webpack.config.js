module.exports = {

  devtool: 'eval',
  debug: true,
  hotComponents: true,
  entry: './loader.jsx',

  output: {
    filename: 'built.js'
  },

  module: {
    loaders: [
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx$/, loaders: ['react-hot', 'babel'] }
    ]
  }
};
