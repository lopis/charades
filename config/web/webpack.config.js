const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|web.js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                include: [
                  path.resolve('./app/assets/fonts')
                ],
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.web.js']
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        port: 3000
    }
};
