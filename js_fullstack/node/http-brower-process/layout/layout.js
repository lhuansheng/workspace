// 样式 格式化的处理
// font-size: bold ->800
// width: 200px -> 逻辑 +-  数字两百
// background-color: red; -> rgb()
function getStyle(element) {
  if(!element.style){
    element.style = {}
  }
  else{
    return element.style
  }
  for(let prop in element.computerStyle){
    let value = element.computerStyle[prop]
    if(value.includes('px')){
      value = parseInt(value)
    }
    element.style[prop]=value
  }
  return element.style
}
function layout(element) {
// 获取 computer.Style
if(!element.computerStyle) return;
let elementStyle = getStyle(element)
if(elementStyle.display !=='flex') return;
if(elementStyle['justify-content']!=='center') return;
// 主轴方向剩余空间
let mainSpace = elementStyle.width;
for(let child of element.children){
  let childStyle = getStyle(child)
  mainSpace -=childStyle.width;
}
// 主轴绘制的起点
let mainBase = mainSpace/2
// 算出主轴全部元素的 x 坐标
for(let child of element.children){
  let childStyle = getStyle(child)
  childStyle.x = mainBase
  childStyle.y = 0
  mainBase += childStyle.width
}
}
module.exports = layout;
