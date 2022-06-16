import axios from "axios";
import { message } from "ant-design-vue";
console.log('当前默认请求地址'+import.meta.env.VITE_BASE_URL);
const service = axios.create({
  url: import.meta.env.VITE_BASE_URL,
  timeout: 6000, //超时时间
});
// 错误字典@
const errorMessage = {
  401: "登录失效，请重新登录",
};
// 错误对象处理
const errData = {
  401: () => {
    console.log("401");
    console.log("登录超时，请重新登录");
    window.location.reload();
    return;
  },
  404: () => {
    console.log("请求失败，错误代码404");
  },
};

const token = window.localStorage.getItem("token");
const err = (error) => {
  if (error.response) {
    // 存在错误代码，执行对应函数
    if (errData[error.response.status]) errData[error.response.status]();
  }
};
// 请求拦截器
service.interceptors.request.use((config) => {
  if (token) {
    config.headers[`Authorization`] = "Bearer" + token; //携带token
  }
  return config;
}, err);

// 响应拦截器
service.interceptors.response.use((response) => {
  const { config, data } = response;
  const { feedback } = config;
  if (feedback) {
    if (data.success) {
      message.success(`${feedback}成功`);
    } else {
      message.error(`${feedback}失败${data.msg}`);
    }
  }

  return response.data;
}, err);

export { service as axios };
