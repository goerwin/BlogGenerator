const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const distFolder = path.resolve(__dirname, '_webpackTempFiles');

function getConfigs({ env = 'production', styles = {}, ...attrs }) {
    const commonConfig = {
        mode: env,
        devtool: env === 'development' ? 'inline-source-map' : 'none',
        output: {
            path: distFolder,
            filename: '[name].[contenthash].bundle.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cwd: __dirname,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: true,
                                    localIdentName:
                                        '[name]__[local]__[contenthash:8]',
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                prependData: Object.keys(styles).reduce(
                                    (prev, curr) =>
                                        prev + `$${curr}: ${styles[curr]};`,
                                    ''
                                ),
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[contenthash].[ext]',
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                chunkFilename: '[id].css',
                ignoreOrder: false,
            }),
            new webpack.DefinePlugin({
                THEME: JSON.stringify(attrs.theme),
            }),
        ],
    };

    const serverConfig = {
        ...commonConfig,
        target: 'node',
        entry: {
            index: path.resolve(__dirname, 'indexSSR.jsx'),
        },
        output: {
            ...commonConfig.output,
            libraryTarget: 'commonjs2',
        },
    };

    const clientConfig = {
        ...commonConfig,
        target: 'web',
        entry: {
            index: path.resolve(__dirname, 'indexClient.jsx'),
        },
        output: {
            ...commonConfig.output,
            libraryTarget: undefined,
        },
    };

    return { serverConfig, clientConfig };
}

module.exports = getConfigs;
