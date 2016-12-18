/**
 * Created by zeelshah on 22/11/16.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: './dist',
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 3333,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                cacheDirectory: true
            }
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.svg$/,
            loader: 'svg-sprite?' + JSON.stringify({
                name: '[name]_[hash]',
                prefixize: true,
            })
        }, ]
    },
    resolve: {
        root: [
            path.resolve('./src')
        ]
    }
}