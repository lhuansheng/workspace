  // 20s内 不会重复从服务器请求数据
  res.setHeader('Cache-Control','max-age=20')

  https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control