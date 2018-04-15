var path = require('path');
var webpack = require('webpack');
module.exports = {
    module:{
      rules:[
        {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
      ]
    },
    watch:true,
}
