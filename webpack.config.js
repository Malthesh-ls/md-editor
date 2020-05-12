const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js'
    },
    module:{
        rules:[
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|md)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({template:path.join(__dirname, '/src/index.html')})
    ]
}