import nProgress from "nprogress";
import { token } from "~/config/Static_config";
import { useUserStore } from "~/store/index";
import { useAppStore } from "~/store/index";
const whiteList = ["login", "404"];
const modules = import.meta.glob("./view/**/**.vue");
console.log(modules);
export default function setupPermissionGuard(router) {
  const userStore = useUserStore();
  const Permission = useAppStore();
  const { onGetInfo } = userStore;
  const { getMenuData, routersData } = Permission;
  router.beforeEach((to, from, next) => {
    nProgress.start();
    console.log(to);
    if (localStorage.getItem(token)) {
      if (to.path === "/user/login") {
        console.log("前往登录");
        next({ path: "/" });
        nProgress.done();
      } else {
        if (userStore.roles.length === 0) {
          userStore
            .onGetInfo()
            .then(() => {
              getMenuData().then((res) => {
                console.log("路由数据构建完成", res);
                res.forEach((item) => {
                  router.addRoute(item);
                });
                const redirect = decodeURIComponent(from.query.redirect || res[0].redirect);
                nProgress.done();
                if (to.path === redirect && redirect !== "/") {
                  next({ ...to, replace: true });
                } else {
                  next({ path: redirect });
                }
              });
            })
            .catch((error) => {
              localStorage.removeItem(token);
              next({ name: "login" });
              nProgress.done();
            });
        } else {
          next();
          nProgress.done();
        }
      }
    } else {
      if (whiteList.includes(to.name)) {
        next();
        nProgress.done();
      } else {
        next({ name: "login" });
        nProgress.done();
      }
    }
  });
}
