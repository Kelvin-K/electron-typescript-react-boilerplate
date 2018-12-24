var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const loadersConfig = {
    resolve: {
        extensions: [ ".js", ".json", ".ts", ".tsx", ".sass" ]
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
                use: [ "style-loader", "css-loader", "sass-loader" ]
            }
        ]
    }
};

module.exports = [
    {
        entry: "./src/main/main.ts",
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist")
        },
        target: "electron-main",
        ...loadersConfig,
    },
    {
        entry: "./src/renderer/entries/electronRenderer.ts",
        output: {
            filename: "renderer.js",
            path: path.resolve(__dirname, "dist")
        },
        target: "electron-renderer",
        ...loadersConfig,
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/renderer/index.html"
            })
        ]
    }
];