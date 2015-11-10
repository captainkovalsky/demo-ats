var path = require('path');
var webpack = require('webpack');
var appDir = __dirname + '/src';

module.exports = {

  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      __dirname + '/src/App.jsx',
    ]
  },

  output: {
    path: __dirname + '/public/assets/',
    // So the file will be served from /assets/recorder.js
    publicPath: '/',
    filename: 'app.js'
  },

  resolve: {
    // Let Webpack use bower components & node modules
    modulesDirectories: ['node_modules', 'bower_components'],
    // Let Webpack require files without extension
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        // Tell webpack to use jsx-loader + babel for all *.jsx files
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        // Tell webpack to use jsx-loader + babel for all *.jsx files
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    // Let Webpack use the main field from the bower.json file from the component
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json',
        ['main'])
    )
  ],

  externals: {
    'jquery': '$',
    'jquery': 'jQuery'
  }
};
