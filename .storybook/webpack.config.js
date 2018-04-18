const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
    const config = defaultConfig;

    let deleteRulesIndex = config.module.rules.findIndex((elem) => {
        return elem.test.test(".svg");
    });

    if (deleteRulesIndex > -1) {
        config.module.rules[deleteRulesIndex] = {
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
            include: [path.resolve(__dirname, './'), /node_modules\/vr-ui/],
            loader: require.resolve('file-loader'),
            query: {
                name: 'static/media/[name].[hash:8].[ext]'
            }
        };
    }

    // For example, add typescript loader:
    // Build vr-ui jsx
    config.module.rules.push({
        test: /\.jsx?$/,
        include: /node_modules\/vr-ui/,
        use: {
            loader: 'babel-loader',
            options: {
                // @remove-on-eject-begin
                babelrc: false,
                presets: [
                    'env',
                    'es2015',
                    'react'
                ],
                plugins: [
                    "transform-class-properties",
                    "transform-decorators-legacy",
                    "transform-object-rest-spread"
                ],
                // @remove-on-eject-end
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
            }
        }
    });

    // Build vr-ui svg
    config.module.rules.push({
        test: /\.svg$/,
        include: path.resolve(__dirname, '../'),
        use: [
            {loader: 'raw-loader'}
        ]
    });

    // Build vr-ui css
    config.module.rules.push({
        test: /\.css$/,
        use: [
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-import')({
                            skipDuplicates: true,
                            path: [],
                        }),
                        require('postcss-flexbugs-fixes'),
                        require('postcss-cssnext')
                    ],
                },
            },
        ],
    });

    return config;
};