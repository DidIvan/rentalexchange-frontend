var path = require("path");

module.exports = [{
    context: path.join(__dirname, "public", "javascripts"),
    entry: {
        bundle: "./app.js",
        bundle_reg_conf: "./app_reg_conf.js"
    },
    output: {
        /*создаем абсолютный путь*/
        path: __dirname + "/public",
        filename: "[name].js",
        /*создаем глобальные переменные*/
        library: '[name]'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: "jsx-loader?harmony"}
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ["", ".js", ".jsx"],
        root: [path.join(__dirname, "public", "javascripts")],
        modulesDirectories: ["node_modules"]
    }
}];