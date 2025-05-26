const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
   return{ mode: env.mode ?? 'development',
    entry: './src/gameJs.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "assets", to: "assets" },
                { from: "styles", to: "styles" },
                { from: "src", to: "src" },

            ],
        }),
        new HtmlWebpackPlugin(
            {
                template: './index.html',
            }
        ),

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]', // Измените путь и формат по необходимости
                            outputPath: 'assets/', // Папка, в которую будут выводиться изображения
                        },
                    },
                ],
            },
        ],
    },
};

}