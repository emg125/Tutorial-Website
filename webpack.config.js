const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  entry: { 
    circleanim:'./circleanim.js',
    script:`./script.js`,
    },
  mode: 'development',
  output: {
    clean: true
  }
};