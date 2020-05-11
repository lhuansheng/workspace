https.get('https://movie.douban.com/top250', function(res) {
  console.log(res);
  let html = '';
  // 一次性接收所有数据  一次性交给我们
  // 分段：   110分钟
  res.on('data', function(chunk) {
    html = html + chunk;
  })
  console.log(123456789);
  res.on('end', function() {
    console.log(html);
  });
});