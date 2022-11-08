const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
    webpack: function (
        config,
        { buildId, dev, isServer, defaultLoaders, webpack }
    ) {
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
