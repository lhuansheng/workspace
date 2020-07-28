import { axiosInstance } from './config';

// export const getRecommendListRequest = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data:[{
//           id: 1,
//           title: 'aaaaaa'
//         }]
//       })
//     }, 1000)
//   })
// }
// 项目所有请求api 的列表文件
// 每个请求 一个函数
// 每个函数都是返回一个promise

// api 与 actions 的分离点
// axiosInstance.get 返回时Promise

// 首页广告
export const getBannersRequest = () => {
  return axiosInstance.get("/banner");
}

// 推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

// 歌手列表，支持分页 0-50-100
// reducer init = {singerList:[], offset:0}
// useEffect dispatch getHotSingerList -> getHotSingerListRequest API 请求 异步
// then -> changeSingerList [] [...oldSingerList, ...data] 同步
//         changeOffset 0 data.length  同步

// better-scroll baseUI scroll/index.js 上拉触底加载更多

// 下拉刷新的时候， 过程是怎么样的

// 前后端合作要素有哪些?
// 1. 接口地址
// url /top/artists 请求
// 2. 传参 按照后端要求传参， offset 0 50 100
// 3. 接口文档 前后端制定一套规则，接口文档一般是后端给你的


export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};


export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

// history.push() Link
// 路由传参

export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};