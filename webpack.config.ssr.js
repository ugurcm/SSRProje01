const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var env = (process.env.NODE_ENV || 'development').trim();
const browserConfig = {
  entry: ["@babel/polyfill", './src/browser/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js'
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name]-[hash:6].[ext]'
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    /*new HtmlWebpackPlugin({
      template: './src/assets/html_templates/index.html'
    })*/
  ]
};

const serverConfig = {
  entry: './src/server/index.js',
  /*output: {
    path: __dirname,
    filename: 'server.js',
  },*/
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'public/media/[name].[ext]'
            }
          }
        ]
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          {
            loader: 'css-loader',
            options: {
              onlyLocals: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              onlyLocals: true,
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
};

module.exports = [browserConfig, serverConfig];

/*"start-dev": "SET NODE_ENV=development & webpack & nodemon server.js",
"start-dev": "SET NODE_ENV=development & webpack & nodemon server.js"*/