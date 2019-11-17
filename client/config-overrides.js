const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  ...addBabelPlugins([
    "root-import",
    {
      paths: [
        {
          rootPathSuffix: "./src/constants",
          rootPathPrefix: "$constants"
        },
        {
          rootPathSuffix: "./src/components",
          rootPathPrefix: "$components"
        },
        {
          rootPathSuffix: "./src/pages",
          rootPathPrefix: "$pages"
        },
        {
          rootPathSuffix: "./src/store",
          rootPathPrefix: "$store"
        },
        {
          rootPathSuffix: "./src/utils",
          rootPathPrefix: "$utils"
        },
        {
          rootPathSuffix: "./src",
          rootPathPrefix: "$src"
        }
      ]
    }
  ])
);
