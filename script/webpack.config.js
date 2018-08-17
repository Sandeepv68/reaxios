/**
 * Webpack production build script
 */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {

    return {
        /**
         * set webpack build mode
         */
        mode: env && env.production === true ? 'production' : 'development',

        /**
         * Node polyfills for browser
         */
        node: {
            process: true
        },

        /**
         * ignore all modules in node_modules folder
         */
        externals: [nodeExternals()],

        /**
         * Configuration settings
         */
        plugins: [
            new webpack.BannerPlugin({
                banner: '//reAxios (c) 2018, Sandeep Vattapparambil',
                raw: true
            })
        ],

        /**
         * set minification flag
         */
        optimization: {
            minimize: env && env.production === true ? true : false
        },
        entry: path.resolve(__dirname, '../', 'src/reAxios.js'),
        output: {

            /**
             * set output target for UMD
             */
            library: 'reAxios',
            libraryTarget: 'umd',
            path: path.resolve(__dirname, '../', 'dist'),
            filename: env && env.production === true ? 'reAxios.min.js' : 'reAxios.js',
            umdNamedDefine: true,
            /**
             * Set up global object as 'this' rather than 'window'
             */
            globalObject: 'typeof self !== \'undefined\' ? self : this'
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }]
        },
        stats: {
            colors: true
        },
        devtool: 'cheap-source-map'
    }
};