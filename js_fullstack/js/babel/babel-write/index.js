const babel = require('@babel/core')
const t = require('babel-types')
const code = `import { zip } from 'lodash'`

// import zip from 'lodash/zip';  // importDefault
// import zip as xx from xx  // import Name
const plugin = {
  // AST import 的节点
  ImportDeclaration(path) {
    // 要导入啥  1. 默认导入， 2.命名导入
    // 如果不是默认导入
    // componentDidMount () {xxx} 
    // load(){}  
    if(!t.isImportDefaultSpecifier(path.node.specifiers[0])){
      console.log(path.node.specifiers[0].imported.name)
      console.log(path.node.source.value)
      let identify = t.identifier('zip')
      let descs = [t.importDefaultSpecifier(identify)]
      // 从哪导入
      let str = t.stringLiteral('lodash/zip')
      // const spacifies = path.node.spacifiers
      let importStatement = t.ImportDeclaration(descs,str)
      path.replaceWith(importStatement)
    }
    
  }, 
}
// js 代码: 1.module 2. 脚本
const res = babel.transform(code,{
  plugins: [
    {
      visitor: plugin
    }
  ]
})
console.log(res)