var { merge } = require("webpack-merge");
var baseConfig = require("./webpack.config.base");

module.exports = baseConfig
    .filter(config => config.target != "electron-main")
    .map(config =>
    {
        return merge(config, {
            entry: "./src/renderer/entries/webRenderer.ts",
            target: "web",
            mode: "development",
            devServer: {
                port: 9000,
                disableHostCheck: true,
            },
            devtool: "source-map"
        })
    });