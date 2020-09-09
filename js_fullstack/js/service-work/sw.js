console.log(1)
// 请求  -> sw.js -> 后端
// sw.js 监听 请求， 看之前有没有请求过 
// 如果请求过，直接从缓存里面取，
// 如果没有， 我们会帮浏览器发出请求 得到内容，我给浏览器 同时
// 我再缓存一次
const CACHE_NAME = 'APP' + 1
this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then( cache => {
      // www.baidu.com/
      return cache.addAll([
        './',
      'js/bundle.js',
      ])
    })
  )
})

