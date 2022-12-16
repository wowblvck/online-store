const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FontminPlugin = require('fontmin-webpack');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ESLintPlugin({ extensions: [".ts"] }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/images/[name].[contenthash][ext]'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext]'
        }
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin(),
      new FontminPlugin({
        autodetect: true,
        glyphs: ['\uf0c8'],
        allowedFilesRegex: null,
        skippedFilesRegex: null,
      }),
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }));
  } else {
    config.mode = "development";
    config.devtool = "inline-source-map";
  }
  return config;
};
