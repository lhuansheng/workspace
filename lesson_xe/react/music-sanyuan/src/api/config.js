import axios from "axios";

export const baseUrl = "http://neteasecloudmusicapi.zhaoboy.com";

// 创建一个axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});
// 响应拦截器，在获取响应之前处理数据
axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };