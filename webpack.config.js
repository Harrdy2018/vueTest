const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
const config={
    entry: {
        app: "./src/main.js",
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: "Web App",
            template: "./src/assets/myTemplate.html"
        }),
        new VueLoaderPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
      },
    module: {
        rules: [
          {test: /\.css$/, use: ["style-loader",'css-loader']},
          {test: /\.vue$/, use: ["vue-loader"]},
          {test: /\.(png|svg|jpg|gif)$/,use: ['file-loader']},
          {test: /\.(woff|woff2|eot|ttf|otf)$/,use: ['file-loader']},
        ]
    },
    resolve: {
        alias: {'vue$': 'vue/dist/vue.esm.js'}
    },
    mode: "development"
};
module.exports=config;