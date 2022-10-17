const { addBeforeLoader, loaderByName } = require("@craco/craco");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const ourFileLoader = {
        loader: require.resolve("file-loader"),
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        options: { esModule: false },
      };

      addBeforeLoader(webpackConfig, loaderByName("eslint-loader"), ourFileLoader);
      return webpackConfig;
    },
  },
};
