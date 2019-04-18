const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry:  {
        mixin: path.resolve(__dirname, "src/mixin.js"),
        hoc: path.resolve(__dirname, "src/hoc.js"),
        hook: path.resolve(__dirname, "src/hook.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[{
            test: /.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-react","@babel/preset-env"],
                    "plugins": [
                        ["@babel/plugin-proposal-decorators",{
                            "legacy": true
                        }],
                        ["@babel/plugin-proposal-class-properties", {
                            "loose": true
                        }]
                    ]
                }
            }
        }]
    }
}