import Mock from "mockjs";
import { getMenu, getLogin, getUserInfo } from "./common.js";

Mock.setup({ timeout: 500 });
// 转义，表示这个路由会被拦截
Mock.mock(/\/api\/menu/, "get", getMenu);
Mock.mock(/\/api\/login/, "get", getLogin);
Mock.mock(/\/user\/info/, "get", getUserInfo);
