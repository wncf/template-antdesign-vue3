import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index.js";
import pinia from "~/store/index";
import "~/config/globalStyles.less";
import "ant-design-vue/es/message/style/css";
import { AntComponentImport } from "~/config/bootstrap";
import setupPermissionGuard from "./permission";
import "./mock/index.js";

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.log("[全局异常]", err, vm, info);
};

app.use(pinia);
setupPermissionGuard(router);
app.use(AntComponentImport);

app.use(router).mount("#app");
