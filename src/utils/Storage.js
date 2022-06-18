const config = {
  type: "localStorage", // 类型 localStorage / sessionStorage
  prefix: "Template_0.0.1", //名称前缀 建议：项目名 + 项目版本
  expire: 1, //过期时间
  isEncrypt: true, //是否加密
};
const setStorage = (key, value, expire = 1) => {
  if (value === "" || value == null) value = null;

  if (isNaN(expire)) {
  }
};
