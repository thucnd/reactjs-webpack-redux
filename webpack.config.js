const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const Dotenv = require('dotenv-webpack')

module.exports = (env, options) => {
    return {
        devtool: options.mode === 'production' ? false : 'eval-source-map',
        entry: './src/index.js',
        // Where files should be sent once they are bundled
        output: {
            publicPath: "/",
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js'
        },
        // webpack 5 comes with devServer which loads in development mode
        devServer: {
            historyApiFallback: true,
            port: 3000,
            watchContentBase: true
        },
        // Rules of how webpack will take our files, complie & bundle them for the browser
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ]
                }
            ]
        },
        optimization: {
            minimize: options.mode === 'production',
            minimizer: [
                new TerserPlugin({
                    test: /\.js(\?.*)?$/i,
                    parallel: true
                }),
                new CssMinimizerPlugin({
                    minify: CssMinimizerPlugin.cleanCssMinify,
                    parallel: true,
                })
            ],
        },
        plugins: [
            new Dotenv({
                path: env.goal ? './.env.' + env.goal : './.env.local',
                safe: true,
                allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
                systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
                silent: true, // hide any errors
                defaults: false // load '.env.defaults' as the default values if empty.
            }),
            new HtmlWebpackPlugin({ template: './src/index.html' }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
        ],
    }
}
