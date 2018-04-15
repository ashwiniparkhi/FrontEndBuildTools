var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
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
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js',
         publicPath: 'dist/'
    }
}
