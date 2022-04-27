const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const basePath = __dirname;
const Dotenv = require('dotenv-webpack');
module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: {
    app: ["./index.tsx"],
  },
  devtool: "eval-source-map",
  stats: "errors-only",
  output: {
    filename: './js/[name].[chunkhash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "url-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
        new Dotenv({
            path:"./.env",
        }),
  ],
};
