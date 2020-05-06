"use strict";
// TS: 内置
// boolean number string
// 数组 元组
var list1 = [1, 2]; //规定了number,只能用number  数组
var list2 = ['1', 2]; //元组
// 枚举  把所有的可能都枚举一下
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
var ColorName = Color[0]; //'red'
// any
var a; //不清楚的类型:用户输入
// void 空
function test(a) {
}
// null, underfined
var b = null;
// 变量
var RFS_METHOD;
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
}
else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
}
else if ('msRequestFullscreen' in document.body) {
    RFS_METHOD = 'msRequestFullscreen';
}
// object
function beFull(el) {
    // 检查兼容性
    // 4 个中的一个
    //el.requestFullscreen()
    el[RFS_METHOD]();
}
// ts 结合 原生 html dom
// ts 结合 Node
// ts 结合 react
var box = document.querySelector('.box');
var btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', function () {
        // box.requestFullscreen()
        // Element 是一个内置的一个类
        // html 标签都是Element 实例
        // box element | null 
        if (box instanceof Element) { //是否为 Element 实例
            beFull(box);
        }
    });
}
