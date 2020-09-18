module.exports = function(source) {
  console.log(source)
  return `
  import React from 'react';
  import Markdown from 'markdown-to-jsx'
  export default function Post() {
  return React.createElement(Markdown,{},\`${source}\`)
}
  `
}

// import xxx from 'xxx.js'
// .js文件结尾 -> babel-loader -> js文件原始内容(class -> Function) -> js -> 解析 -> 转换 -> 生成另外一份代码 
