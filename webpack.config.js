const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');
const baseWPCfg = require("../../webpack.config");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'microfrontend-application-a.js',
        libraryTarget: 'umd'
    },
    externals: [nodeExternals()],
    devtool: baseWPCfg.devtool,
    mode: baseWPCfg.mode,
    devServer: {
        writeToDisk: true,
        port: 8001
    },
    module: baseWPCfg.module,
    plugins: [
        //new BundleAnalyzerPlugin()
    ]
};