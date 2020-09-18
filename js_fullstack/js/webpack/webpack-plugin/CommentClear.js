// 一个插件就长这样，，
class HelloAsyncPlugin {
  apply(compiler) {
    // emit: webpack 打包完资源
    compiler.hooks.emit.tap('CommentClear', compilation => {
      // return a Promise that resolves when we are done...
     let assets = compilation.assets
    //  console.log(assets)
     Object.keys(assets).forEach((key) => {
       let content = assets[key].source()
       console.log(content)
       content = content.replace(/\/\*\*\*\*\*\*\//g,'')
       assets[key]['source'] = () => {
         return content
       }
     })
    });
  }
}

module.exports = HelloAsyncPlugin;