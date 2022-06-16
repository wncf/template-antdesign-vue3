import { defineStore } from "pinia";
import { generatorDynamicRouter } from "~/utils/routerUtil";
const UseCommin = defineStore({
  id: "StoreMenus",
  state: () => ({
    menuData: [],
    routersData: [],
  }),
  getters: {
    menu: (state) => state.menuData,
    routers: (state) => state.routersData,
  },
  actions: {
    getMenuData() {
      return new Promise((resolve, reject) => {
        generatorDynamicRouter().then((res) => {
          this.routersData = res;
          resolve(res);
        });
      });
    },
    setMenu(data) {
      this.menuData = data;
    },
  },
});
export default UseCommin;
