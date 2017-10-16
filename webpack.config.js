var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    // set watch to true so that everytime we make a change to the app.js webpack will recompile
    watch: true,
    module: {
        // loaders webpack scans all js files and to prevent long compile time we exclude all js files inside node_modules and set loader
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env', 'stage-1']
            }
        }]
    }
}