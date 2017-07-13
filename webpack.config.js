var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    "./src/index.js",
    "./src/index.html"
  ],
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  module: {
     loaders: [
         {
           test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['react','es2015']}
         },
         {
           test: /\.(html)$/,
           use: {
             loader: 'html-loader',
             options: {
               minimize: true
             }
           }
         },
         {
           test: /\.css$/,
           loader: "style-loader!css-loader"
         }
       ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html'
  })]
}
