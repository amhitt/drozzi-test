const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EvalSourceMapDevToolPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : 'style-loader';

const plugins = [
    new HtmlWebpackPlugin({
        template: 'index.html',
    }),
    new EvalSourceMapDevToolPlugin({
        test: /\.(m?js)x?$/,
    }),
]

if (process.env.SERVE) { // Используем плагин только если запускаем devServer
    plugins.push(new ReactRefreshWebpackPlugin());
}

const config = {
    context: __dirname,
    entry: './src/index.jsx',
    resolve: {
        fallback: {
            "fs": false,
            "util": false
        },
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    
    plugins,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                    // при каждом запуске
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.devtool = 'source-map';

        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = 'development';
        config.devtool = 'eval-cheap-source-map';

        config.target = 'web';

        config.devServer.port = 3000;
        config.devServer.liveReload = false;
        config.devServer.hot = true;

        config.plugins.push(new EvalSourceMapDevToolPlugin({
            test: /\.(m?js)x?$/,
        }));
    }
    return config;
};
