function parse(template,count,dict) {
  let i = 0
  let dictLen = Object.keys(dict)[0].length
  let valLen = dict[0]
   while(i<template.length&&count>0) {
        if(template.slice(i,i+dictLen)===Object.keys(dict)[0]){
          console.log(template.slice(i-2,i)==='{{'&&template.slice(i+dictLen,i+dictLen+2)==='}}')
          if(template.slice(i-2,i)==='{{'&&template.slice(i+dictLen,i+dictLen+2)==='}}'){

            template = template.slice(0,i-2)+template.slice(i,i+dictLen)+template.slice(i+dictLen+2)
            count--
          }
        }
    i++
   }
   console.log(template)
   return template
 
}

parse('这是{{unit}}很长很长的句子。',1,{'unit':'一个'})
// let obj = {'unit':'一个'}
// console.log(Object.keys(obj)[0][0])