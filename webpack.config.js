/**
 * Created by JW on 2016/2/3.
 */
var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
    ],
    output : {
        path :  path.join(__dirname,'dist'),
        filename : '[name].bundle.js'
    },
    module : {
        loaders :[{
                test: /\.css$/,
                include: path.resolve('./test'),
                loader: 'style!css',
            }, {
                test: /\.js$/,
                include: path.resolve('./test'),
                loader: 'babel',
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url'
            }]
    }
}
console.log('当前环境为' + process.env.NODE_ENV);
if (process.env.NODE_ENV == 'production'){
    console.log("现在是生产环境，build后~");
    module.exports.plugins = (module.exports.plugins).concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}else {
    module.exports.plugins = (module.exports.plugins).concat([
        new OpenBrowserPlugin({
            url: 'http://localhost:8200'
        })
    ])
}
