const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))

let persons = [
  {id: 1, name: 'xiaowang',age: 88},
  {id: 2, name: 'liming',age: 23},
]
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/persons',(req,res)=>{
  res.send({state:1,data:persons})
})
app.listen(8080,(err)=>{
  if(!err) console.log('http://localhost:8080/persons')
  else console.log(err)
})