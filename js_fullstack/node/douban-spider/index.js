const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
// 请求 豆瓣top250
// 浏览器输入一个url, get
https.get('https://movie.douban.com/top250',function(res){
    
    // 分段返回的 自己拼接
    let html = ''
    // 有数据产生的时候
    res.on('data',function(chunk){//监听数据,数据是一块一块返回的,因此要拼接起来
        html += chunk
    }) 
    res.on('end',function(){//当所有数据返回完毕之后
        // console.log(html)
        const $ = cheerio.load(html)
        //25
        // documment.querySelector

        let allFilms = []
        $('li .item').each(function(){
            //this 循环时当前这个电影
            //当前这个电影下面的title
            //this.querySelector
            const title = $('.title',this).text()
            const star = $('.rating_num',this).text()
            const pic = $('.pic img',this).attr('src')
            // 存数据库
            // 存成一个 json 文件 fs
            //console.log(title,star,pic)
            allFilms.push({title,star,pic})
        })
        // fs.readFile 文件内容读出来 index.html -> <html>...</html>
        // index.html -> 把<html>...</html>写入
        fs.writeFile('./files.json',JSON.stringify(allFilms),function(err){
            if(!err){
                console.log('文件写入完毕')
            }
            
        })
        //图片下载一下
        downloadImage(allFilms)
    })
})
function downloadImage(allFilms){
    for(let i = 0;i<allFilms.length;i++){
        const picUrl = allFilms[i].pic
        //下载
        // 页面 url === html(普通文本 utf-8) 浏览器帮你渲染了
        // 图片 url === 图片内容(可能经过二进制编码) 浏览器也帮你渲染了
        // xx.png  双击打开一个图片  
        // 请求  ->  拿到内容
        // fs.writeFile('./xx.png','内容')
        https.get(picUrl,function(res){
            res.setEncoding('binary')
            let str = ''
            res.on('data',function(chunk){
                str +=chunk
    
            })
            res.on('end',function(){
                //回调还是放到最后一个
                //回调函数 第一个参数 基本都是 err 对象
                // 1.png 如果重复下载 会再次写入1.png,也就是覆盖
                fs.writeFile(`./images/${i}.png`,str,'binary',function(err){
                    //console.log(err)
                    if(!err){
                        console.log(`第${i}张图片下载成功`)
                    }
                })
            })
        })
        
    }
}