const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: "./example/index.jsx",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve('./docs/'),
        filename: "index.js",
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            src: path.resolve('./src'),
            example: path.resolve('./example'),
            dist: path.resolve('./dist'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                //we definitely don't want babel to transpile all the files in
                //node_modules. That would take a long time.
                exclude: /node_modules/,
                //use the babel loader
                loader: 'babel-loader',
                query: {
                    //specify that we will be dealing with React code
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-transform-spread"
                    ]
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(txt|yaml)$/,
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./example/index.html",
            filename: "./index.html"
        })
    ],
    stats: {
        errorDetails: true,
        errors: true,
        source: true,
    }
};