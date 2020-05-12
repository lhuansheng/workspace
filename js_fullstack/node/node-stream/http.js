const https = require('https')
const fs =  require('fs')
https.get('https://movie.douban.com/top250', function(res) {
  // console.log(res); // 继承了 流  可读流  提供数据的那一方
  // 返回一个html  保存 在 本地 douban.html
  const writeStream = fs.createWriteStream('./douban.html')
  res.pipe(writeStream)
});
https.get('https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp',function(res){
  const writeStream = fs.createWriteStream('./p480747492.webp')
  res.pipe(writeStream)
})

// https.createServer((req,res)=>{

// })