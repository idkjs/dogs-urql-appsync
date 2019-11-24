let path = require("path")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let webpack = require("webpack")

let outputDir = path.join(__dirname, "public")

module.exports = {
  entry: "./src/Index.bs.js",
  mode: "development",
  output: {
    path: outputDir,
    filename: "Index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV !== "production")
    })
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
}

// const path = require('path');

// module.exports = {
//   entry: './src/Index.bs.js',
//   // If you ever want to use webpack during development, change 'production'
//   // to 'development' as per webpack documentation. Again, you don't have to
//   // use webpack or any other bundler during development! Recheck README if
//   // you didn't know this
//   mode: 'production',
//   output: {
//     path: path.join(__dirname, "bundleOutput"),
//     filename: 'index.js',
//   },
// };