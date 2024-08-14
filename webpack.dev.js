const path = require("path")
const webpack = require("webpack")
module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [{
            test: /.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]

    }


}