const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: './client/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  module: {
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html'
    }),
  ],

  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname)
    }
  },
  
};    
          