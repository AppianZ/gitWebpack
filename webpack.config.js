/**
 * Created by JW on 2016/2/3.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './',
        port: 8200
    },
    entry : {
        index : './test/index.js'
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    output : {
        path :  path.join(__dirname,'dist'),
        filename : '[name].bundle.js'
    },
    module : {
        loaders :[{
                test : '/\.css$/',
                loader :'style!css'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url'
            }]
    }
}