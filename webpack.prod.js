const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
            },
         },
      ],
   },
});
