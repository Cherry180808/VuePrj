const { default: axios } = require("axios");
import Qs from "qs"; // 引入qs模块，用来序列化post类型的数据
import { autoMatch, checkStatus } from "./utils"; // 处理函数
// const instance = axios.create();

const instance = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时时间
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  transformRequest: [
    data => {
      // 对 data 进行任意转换处理
      return data;
    }
  ],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [
    data => {
      // 对 data 进行任意转换处理
      return JSON.parse(data);
    }
  ]
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // config.headers = Object.assign(
    //   config.method === "get"
    //     ? {
    //         Accept: "application/json",
    //         "Content-Type": "application/json; charest=UTF-8"
    //       }
    //     : {
    //         "Content-Type": "application/x-www-form-urlencoded; charest=UTF-8"
    //       },
    //   config.headers
    // );

    // if (config.method === "post") {
    //   const contentType = config.headers["Content-Type"];
    //   console.log("sss", contentType)
    //   //根据contentType转换data格式
    //   if (contentType) {
    //     if (contentType.includes("multipart")) {
    //       // 类型 'multipart/form-data;'
    //       // config.data = data;
    //     } else if (contentType.includes("json")) {
    //       // 类型 'application/json;'
    //       // 服务器收到的raw body(原始数据) "{name:"nowThen",age:"18"}"（普通字符串）
    //       config.data = JSON.stringify(config.data);
    //     } else {
    //       // 类型 'application/x-www-form-urlencoded;'
    //       // 服务器收到的raw body(原始数据) name=nowThen&age=18
    //       config.data = Qs.stringify(config.data);
    //     }
    //   }
    // }

    //eg:add token
    config.headers["X-Token"] = "token";
    return Promise.resolve(config);
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return Promise.resolve(checkStatus(response));
  },
  error => {
    if (error.response) {
      return Promise.reject(checkStatus(error.response));
    } else if (
      error.code == "ECONNABORTED" &&
      error.message.indexOf("timeout") != -1
    ) {
      return Promise.reject({ msg: "请求超时" });
    } else {
      return Promise.reject({});
    }
  }
);

const request = async function(opt) {
  const options = Object.assign(
    {
      method: "get",
      ifHandleError: true // 是否统一处理接口失败(提示)
    },
    opt
  );
  try {
    // 匹配接口前缀 开发环境则通过proxy配置转发请求； 生产环境根据实际配置
    options.baseURL = autoMatch(options.prefix);
    const res = await instance(options);

    if (!res.success && options.ifHandleError) {
      // 自定义参数，是否允许全局提示错误信息
      console.log(res.error || "请求处理失败！");
    }
    return res;
  } catch (err) {
    if (options.ifHandleError) {
      // 自定义参数，是否允许全局提示错误信息
      console.log(err.msg || "请求处理失败！");
    }
    return err;
  }
};

export default request;
