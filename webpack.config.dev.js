const webpack = require("webpack"); // webpack uses node, so use the old js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; // required for babel

module.exports = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map",
  entry: "./src/index", //entry point is index.js
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    fileName: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "+" },
    https: false // the last 3 options are due to a bug for latest version of chrome
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicom.ico"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
