// java 强类型语言
// js 的超集  typescript
//tsc 2.js  可以转换成js文件
const getArea = (w:number,h:number):number=>{  //前面两个number限制形参类型，最后面的number限制返回值为number类型
    return w*h
}

getArea(2,3)

// 如何写出优质代码
// 1. 注释
// 2. 可读性 for  Map, filter, every, some
// 3. area 从js 的繁琐到ts的强类型

// 增长点， 写文章，开始写，坐下来