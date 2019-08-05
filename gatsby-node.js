const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        // components: path.resolve(__dirname, "src/components/"),
        // assets: path.resolve(__dirname, "src/assets/"),
      },
    },
  })
}
