const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: config => {
    // We search the rule defined for `*.css` files
    const cssRule = config.module.rules.find(rule => rule.test && rule.test.test(".css"));

    // We exclude `*.module.css` files from the previous rule
    cssRule.exclude = /\.module\.css$/;

    // We add a our custom rule for `*.module.css` files
    config.module.rules.push({
      test: /\.module\.css$/,
      use: ["style-loader", {
        loader: "css-loader",
        options: {
          modules: true
        }
      }]
    });
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  docs: {
    docsPage: "automatic"
  }
};