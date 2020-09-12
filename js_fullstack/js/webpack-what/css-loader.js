// css.css 样式文件 
// import 


// export
module.exports = function (source) {
  console.log(source)
  return `export default \`${source}\``
}