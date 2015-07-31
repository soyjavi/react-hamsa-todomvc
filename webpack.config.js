var pkg           = require('./package.json');

module.exports = {
  cache         : true,
  resolve       : { extensions: ['', '.jsx', '.js'] },
  context       : __dirname,

  entry: {
    app         : ['webpack/hot/dev-server', './app.jsx']
  },

  output: {
    path        : './build',
    filename    : pkg.name + '.[name].js',
    publicPath  : '/build/'
  },

  devServer: {
    host        : '0.0.0.0',
    port        : 8080,
    inline      : true
  },

  module: {
    loaders     : [ { test: /\.jsx$/, loader: 'jsx-loader' } ]
  }
};
