const fs = require('fs')
function copy(sourceUrl,destUrl){
  // fs.readFile(sourceUrl,(err,info)=>{
  //   if(!err){
  //     fs.writeFile(destUrl,info,(err)=>{
  //       if(!err){
  //         console.log('拷贝完毕')
  //       }
  //     })
  //   }
  // })
  // 源头
  // 流： 基础类 Stream
  // 可读流 可写流  
  const readStream = fs.createReadStream(sourceUrl)
  const writeStream = fs.createWriteStream(destUrl)
  readStream.pipe(writeStream)
}
// 不用流：
// 读完一个文件得到内容 info 变量放到计算机内存里面的 写道某个地方
// 区别
// 前端：
// 我  baidu.com -> html,css, js  浏览器  -> 我看到
// 小王 baidu.com -> html,css,js 浏览器  -> 小王看到
// 小李 baidu.com -> html,css,js 浏览器  -> 小李看到
// 浏览器执行 js, 浏览器申请内存 浏览器在各自的电脑上运行  天然就是分布式  (集中)
// 高并发 
copy('./readme.md','./copy.md')