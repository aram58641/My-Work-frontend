const nextConfig = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 100000,
                    name: "[name].[ext]",
                },
            },
        });

        config.module.rules.push({
            test: /\.css$/i,
            use: !isServer
                ? ["style-loader", "css-loader"]
                : [MiniCssExtractPlugin.loader, "css-loader"],
        });

        return config;
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
