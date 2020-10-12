const axios = require('axios')
const CancelToken = axios.CancelToken;
const source = CancelToken.source()
// 首先在 axios 中 有一个 cancelToken  在外面定义一个CancelToken
// https://blog.csdn.net/wopelo/article/details/79802585
axios({
  url:'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA',
  cancelToken: source.token,

}).then(res => {
  console.log(res)
})

// source.cancel('cancel it')