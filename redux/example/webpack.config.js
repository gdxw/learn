const path = require('path');
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');

const autoPlugin = new AutoWebPlugin(path.resolve(__dirname, "src"),{
    template: path.resolve(__dirname, "template.html"),
    outputPagemap: true,
});


module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: autoPlugin.entry({
        main: path.resolve(__dirname, "src/index.js"),
    }),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[{
            test: /.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-react","@babel/preset-env"]
                }
            }
        }]
    },
    plugins: [
		autoPlugin,
	],
}