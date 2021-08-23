const path = require("path")
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.jsx?$/],
          include: [path.resolve(__dirname, '../src/components')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    }
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /scss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    })
    config.module.rules.push({
      test: [/\.stories\.jsx?$/],
      loaders: [
        {
          loader: require.resolve("@storybook/source-loader")
        }
      ]
    })
    return config
  }
}