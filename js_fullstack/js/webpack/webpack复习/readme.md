主要考的
- 打包完的结构
- loader
- plugin
- 体积的优化
   - external： react,react-dom 
   - splitChunk 打包完的再重组一下，可以定义很多规则，只要
   - Dll：既可以分离基础库，也可以提高打包速度
   - 懒加载(import().then(xxx))