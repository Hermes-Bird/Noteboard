const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill','./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(),
        new copyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }]
        })
    ],
    devServer: {
        port: 9414,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },

                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            } 
        ]
    }


}