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
  resolve: {
    modules: [path.resolve(__dirname, "./node_modules"), "node_modules"]
  },
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
}
