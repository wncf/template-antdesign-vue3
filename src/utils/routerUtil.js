import { getMenu } from "../api/common";
import BasicLayout from "../layout/BasicLayout.vue";
import { useAppStore } from "~/store/index";
import routerview from "../layout/childrenLayout/RouterView.vue";
export const generatorDynamicRouter = () => {
  // const layoutDic = {
  //   BasicLayout: BasicLayout,
  // };
  // eslint-disable-next-line no-unused-vars
  const AppStore = useAppStore();
  return new Promise((resolve, reject) => {
    // ajax
    getMenu().then((res) => {
      AppStore.setMenu(res.result);
      const result = res.result;
      if (result) {
        const children = generator(result);
        const routers = [
          {
            path: "/",
            name: "index",
            component: BasicLayout,
            meta: { title: "首页" },
            redirect: (children[0].children && children[0].children[0].path) || children[0].path,
            children: children,
          },
        ];
        resolve(routers);
      } else {
        resolve([
          {
            path: "/",
            name: "index",
            component: RouteView,
            redirect: "/403",
            children: [],
          },
        ]);
      }
    });
  });
};
const modules = import.meta.glob("../view/**/**.vue");
console.log(modules);

//路由组件匹配规则
//最上级使用 basciLayout
// 有chidren并且子级大于1的父级路由 使用routerview(可自定义)的渲染
//
const RouterComponent = (item) => {
  if (item.path === "/") {
    return BasicLayout;
  } else {
    if (item.children && item.children.length >= 1) {
      return routerview;
    } else {
      if (item.code === "Index") {
        return modules[`../view${item.url}.vue`];
      } else {
        if (modules[`../view${item.url}/index.vue`]) {
          return modules[`../view${item.url}/index.vue`];
        } else {
          return modules[`../view/not-found/index.vue`];
        }
      }
    }
  }
};

export const generator = (routerMap, parent) => {
  return (
    routerMap &&
    routerMap
      .filter((item) => {
        return item.type < 3;
      })
      .map((item) => {
        if (!item.layout) {
          item.layout = "PageView";
        }
        const currentRouter = {
          // 路由地址 动态拼接生成如 /dashboard/workplace
          path: item.url,
          // 路由名称，建议唯一
          name: item.code,
          // 该路由对应页面的 组件
          component: RouterComponent(item),
          // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
          meta: {
            title: item.name,
            icon: item.icon || undefined,
            permission: (item.alias && [item.alias]) || null,
            hiddenHeaderContent: false,
          },
          hideChildrenInMenu: item.type === 2,
        };
        if (item.type === 1) {
          currentRouter.redirect = item.uri;
        }
        currentRouter.hidden = item.hide;
        // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
        currentRouter.path ? (currentRouter.path = currentRouter.path.replace("//", "/")) : currentRouter.path;
        // 重定向
        item.redirect && (currentRouter.redirect = item.redirect);
        // 是否有子菜单，并递归处理
        if (item.children && item.children.length > 0) {
          // Recursion
          currentRouter.children = generator(item.children, currentRouter);
        }
        return currentRouter;
      })
  );
};
