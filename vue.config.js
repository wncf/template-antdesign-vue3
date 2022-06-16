const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  // 全局使用~代替src
  chainWebpack: (config) => {
    config.resolve.alias.set("~$", resolve("src"));
  },
});
