// @ts-check
import { defineStore, acceptHMRUpdate } from "pinia";
import { Login, getInfo } from "~/api/user";
import { token } from "~/config/Static_config";
// 在getters中第一个参数state可以访问到state
// 在actions中使用 this访问到state
// 外部使用
// import { useMenuStore } from './stores/users'
// const Menudata = useCartStore()
// 注意在使用getter或者state时不能使用解构，否则为空
// getter : Menudata.menu
// state  : Menudata.menuData
// acions : Menudata.methods()
const useUserStore = defineStore({
  id: "useUserStore",
  state: () => ({
    userInfoState: {},
    userRolesState: [],
  }),
  getters: {
    userInfo: (state) => state.userInfoState,
    roles: (state) => state.userRolesState,
  },
  actions: {
    async onLogin(data) {
      const res = await Login(data);
      this.userInfoState = res.result;
      localStorage.setItem(`${token}`, res.result.token);
      return res;
    },
    onGetInfo() {
      return new Promise((resolve, reject) => {
        getInfo().then((res) => {
          if (res && res.result) {
            this.userInfoState = res.result;
            this.userRolesState = res.result.role.permissions;
            resolve(res);
          } else {
            reject("获取用户信息失败");
            this.userInfoState = [];
            this.userRolesState = [];
          }
        });
      });
    },
  },
});
export default useUserStore;
