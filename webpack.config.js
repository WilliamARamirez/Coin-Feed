const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
module: {
  rules: [
    {
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
    },
    {
      test: /css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: false,
          },
        },  
      ],
    },
  ],
},
devServer: {
  host: 'localhost',
  port: 8080,
  // contentBase: path.join(__dirname, 'dist'),
  compress: true,
  hot: true,
  publicPath: '/dist'
}
}
