const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MimiCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
})
const OptimazeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  if(!isDev) {
    config.minimizer = [
      new OptimazeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    catalog: ['@babel/polyfill', './src/catalog.js'],
    detailed: ['@babel/polyfill', './src/detailed.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 3333
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['catalog'],
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new HTMLWebpackPlugin({
      template: './public/detailed.html',
      filename: 'detailed.html',
      chunks: ['detailed'],
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new CleanWebpackPlugin(),
    new MimiCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MimiCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}