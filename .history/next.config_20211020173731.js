const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
    cssModules: true,
});
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const nextConfig = {
//     webpack: function (
//         config,
//         { buildId, dev, isServer, defaultLoaders, webpack }
//     ) {
//         const cssRulesIdx = config.module.rules.findIndex((r) => r.oneOf);
//         if (cssRulesIdx === -1) {
//             throw new Error("Could not find NextJS CSS rule to overwrite.");
//         }
//         config.module.rules.splice(cssRulesIdx, 1);

//         config.plugins.push(
//             new MiniCssExtractPlugin({
//                 experimentalUseImportModule: true,
//                 filename: "static/css/[contenthash].css",
//                 chunkFilename: "static/css/[contenthash].css",
//             })
//         );

//         config.module.rules.push({
//             test: /\.s[ac]ss$/i,
//             use: !isServer
//                 ? ["style-loader", "css-loader", "sass-loader"]
//                 : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//         });

//         config.module.rules.push({
//             test: /\.css$/i,
//             use: !isServer
//                 ? ["style-loader", "css-loader"]
//                 : [MiniCssExtractPlugin.loader, "css-loader"],
//         });

//         return config;
//     },
//     reactStrictMode: true,
// };

// module.exports = nextConfig;
