import { defineStore } from "pinia";
import { generatorDynamicRouter } from "~/utils/routerUtil";
const UseCommin = defineStore({
  id: "StoreMenus",
  state: () => ({
    menuData: [],
    routersData: [],
    AppconfigData: [],
  }),
  getters: {
    menu: (state) => state.menuData,
    routers: (state) => state.routersData,
    Appconfig: (state) => state.AppconfigData,
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
    setTheme(){
      
    }
  },
});
export default UseCommin;
