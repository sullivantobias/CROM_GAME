const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
   entry: {
      app: './src/index.js',
   },
   output: {
      filename: 'main.bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   plugins: [new CleanWebpackPlugin(['dist'])],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
         },
      ],
   },
};
