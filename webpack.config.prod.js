var merge = require("webpack-merge");
var { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
var baseConfig = require("./webpack.config.base");

module.exports = baseConfig.map(config =>
{
    return merge(config, {
        mode: "production",
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                openAnalyzer: false,
                reportFilename: "bundle_sizes.html"
            })
        ]
    })
})