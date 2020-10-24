let express = require('express')
let app = express()

app.get('/a',(req,res) => {
  console.log(req.query.callback)
  res.end(req.query.callback+'("成功接收到数据")')
})
app.listen(9090,res=>{
  console.log('9090 is running')
})