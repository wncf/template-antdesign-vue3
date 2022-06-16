import { createRouter, createWebHashHistory } from "vue-router";
import BasicLayout from "../layout/BasicLayout.vue";
import UserLayout from "../layout/UserLayout.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/user",
      component: UserLayout,
      redirect: "/user/login",
      hidden: true,
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("../view/login/index.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("../view/not-found/index.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
