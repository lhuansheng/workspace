// TS: 内置
// boolean number string
// 数组 元组
let list1:number[] = [1,2] //规定了number,只能用number  数组
let list2:[string,number] = ['1',2] //元组
// 枚举  把所有的可能都枚举一下
enum Color {Red = 0,Green = 1,Blue = 2}
let color:Color = Color.Red
let ColorName = Color[0] //'red'
// any
let a:any; //不清楚的类型:用户输入
// void 空
function test(a:string):void{

}
// null, underfined
let b:null = null
// never 没有返回值
//function test1() : never{
  // while(true){
  // }
  //throw new Error('error')
//}
//自定义一个类型
// 定义一个类型: 进入全屏的时候 调用就是其中之一
type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' | 'mozRequestFullScreen' | 'msRequestFullscreen'
//dom 没有定义自己定义
interface Element{
  requestFullscreen():any,
  webkitRequestFullScreen():any,
  mozRequestFullScreen():any,
  msRequestFullscreen():any
}
// 变量
let RFS_METHOD: RFSmethods 
if('requestFullscreen' in document.body){
  RFS_METHOD = 'requestFullscreen'
}
else if('webkitRequestFullScreen' in document.body){
  RFS_METHOD = 'webkitRequestFullScreen'
}
else if('mozRequestFullScreen' in document.body){
  RFS_METHOD = 'mozRequestFullScreen'
}
else if('msRequestFullscreen' in document.body){
  RFS_METHOD = 'msRequestFullscreen'
}
// object
function beFull(el:Element){
  // 检查兼容性
  // 4 个中的一个
  //el.requestFullscreen()
  el[RFS_METHOD]()
}
// ts 结合 原生 html dom
// ts 结合 Node
// ts 结合 react

const box = document.querySelector('.box')
const btn = document.getElementById('btn')
if(btn){
  btn.addEventListener('click',function(){
    // box.requestFullscreen()
    if(box instanceof Element){ //是否为 Element 类型
      beFull(box)
    }
  })
}

