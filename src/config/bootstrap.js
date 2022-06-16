// Icon全量引入
import * as icons from "@ant-design/icons-vue";
import "ant-design-vue/es/message/style/css";
export const AntComponentImport = {
  install(app) {
    for (let comp in icons) {
      app.component(comp, icons[comp]);
    }
  },
};
