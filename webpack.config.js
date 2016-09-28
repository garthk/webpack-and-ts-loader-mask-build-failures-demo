var validate = require('webpack-validator');
var webpack = require('webpack');

const config = validate({
    entry: [
        './src/index.ts',
    ],
    output: {
        filename: 'dist/index.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            // { test: /\.json$/, loader: 'json-loader' },
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
});

module.exports = config;
