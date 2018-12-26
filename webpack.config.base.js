var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin')

const loadersConfig = {
    resolve: {
        extensions: [ ".js", ".json", ".ts", ".tsx", ".scss" ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: /node_modules/,
                enforce: "pre"
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader", "import-glob-loader" ]
            },
            {
                test: /\.svg$/,
                loader: "svg-url-loader"
            }
        ]
    }
};

module.exports = [
    {
        entry: "./src/main/main.ts",
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "build")
        },
        target: "electron-main",
        ...loadersConfig,
    },
    {
        entry: "./src/renderer/entries/electronRenderer.ts",
        output: {
            filename: "renderer.js",
            path: path.resolve(__dirname, "build")
        },
        target: "electron-renderer",
        ...loadersConfig,
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/renderer/index.html"
            }),
            new CopyWebpackPlugin([
                { from: 'src/resources', to: 'resources' }
            ])
        ]
    }
];
