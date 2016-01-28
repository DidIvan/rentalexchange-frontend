/**
 * Created by Horbynko on 28.01.2016.
 */

/*создаем переменную окружени€*/
const NODE_ENV = process.env.NODE_ENV || "development";
/*устанавливаем локал вебпак, дл€ того чтоб можно было установить плагины*/
const webpack = require('webpack');

module.exports = {
    entry: {
        header: "./public/js/components/markup/header-id.js",
        bestGoods: "./public/js/components/markup/bestGoods.js",
        captcha: "./public/js/components/markup/captcha.js",
        footer: "./public/js/components/markup/footer-id.js",
        goodsCategory: "./public/js/components/markup/goodsCategory.js"
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].js",
        library: "[name]"
    },
    watch: NODE_ENV == "development",
    watchOptions: {
        agregateTimeout: 100
    },
    /*раздел€ет запакованый файл на отдельные модули*/
    /*   devtool: "source-map"   */
    devtool: NODE_ENV == "development" ? "cheap-module-eval-source-map" : "source-map",

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
            // => "jade" loader is used for ".jade" files
        ]
    }
};