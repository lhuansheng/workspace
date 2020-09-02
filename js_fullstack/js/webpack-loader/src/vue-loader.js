const {DomHandler} = require('domhandler')
const htmlparse2 = require('htmlparser2')
const fs = require('fs')

module.exports = function (source) {
  // 编译原理
  return new Promise((resolve,reject) => {
    // 组装成dom树
    const handle = new DomHandler((err,dom) => {
      if(err) {
        reject(err)
      } else {
        // console.log(dom)
        function visit(parentNode) {
          let children = []
          // 将dom树转换成 createElement
          function help(children) {
            if(!children) {
              return ''
            } return children.map(child => {
              if(child.type === 'text') return `\`${child.data}\``
              return `React.createElement("${child.name}",{},${help(child.children).join(',')})`
            })
          }
          children = help(parentNode.children)
          return `React.createElement("${parentNode.name}",{},
            ${children.join(',')})`
        }
        // createElement第一个参数标签名，第二个参数属性，第三个参数子节点
        // fs.writeFileSync('./dom.json',JSON.stringify(dom,null,2))
        resolve(`
        import React from 'react';
        export default function Component (params) {
          return ${visit(dom[0].children.find(e => e.type === 'tag'))}
        }
        `)
      }
    })
    // 处理html标签
    const parse = new htmlparse2.Parser(handle)
    parse.write(source)
    parse.end()

  
  })
}