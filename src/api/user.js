import { axios } from "../utils/require";
export function Login(data) {
  return axios({
    url: "/api/login",
    method: "get",
    feedback: "登录",
  });
}
export function getInfo() {
  return axios({
    url: "/user/info",
    method: "get",
  });
}
