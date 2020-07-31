// JSON XML Yaml
// JS: ECMA:只管语法
// DOM:管理dom
// BOM: 管理浏览器相关的api



// function ajax({ url: string, method: string, data?: object,  timeout?: number, … }): promise;
// 封装axios
function ajax({url,method,data,timeout}) {

  return new Promise((resolve,reject)=>{
    // node 端 需要 创建 http 服务等
    const xhr = new XMLHttpRequest();  
    // xhr自己处理超时
    xhr.timeout = timeout;
    xhr.ontimeout = function(){
      reject('timeout')
    }
    // true代表异步
    // readystate 0 1 2 3 4
    xhr.open(method,url,true)
    xhr.onreadystatechange = () =>{
      if(xhr.readyState===4){
        if((xhr.status>=200 && xhr.status < 300) || xhr.status === 304 ){
          resolve(xhr.response)
        }
        else{
          reject('response error')
        }
      }
     
    }
    // GET 数据拼接到url后面
    // POST 要看 Content-Type:
    // 发送请求
    xhr.send()
  })
}

ajax({
  url:'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA',
  method:'GET',
  timeout:'500',

})
.then((res)=>{
  console.log(res)
})



