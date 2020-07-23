import axios from 'axios';

export const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com';  // 全局的后端API前缀

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance }
