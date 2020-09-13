const express = require('express')
const fs = require('fs')
const app = express()
app.get('/content',(req,res)=> {
  console.log('/content')
  // res.setHeader('Cache-Control','max-age=300')
  res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
  
  // const content = fs.readFileSync('./aa.js','utf-8')
  res.end(JSON.stringify({a:1}))
})

app.listen(9090,() => {
  console.log('9090')
})