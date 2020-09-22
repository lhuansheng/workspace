import React,{forwardRef} from 'react'
let p = new Promise((resolve)=>{
  setTimeout(() => {
    resolve('res')
  }, 3000);
})
let status = 'pending'
let res;
function req() {
  p.then((r)=>{
    status='success'
    res = r
  },()=>{})
  if(status === 'pending') {
    // 这里是关键，如果 throw之后，不catch,会报错
    throw p   // catch
    
  } else if(status === 'success') {
    return res;
  }
}
// forwardRef可以拿到ref
export default  forwardRef(function Demo(props,ref) {
  const res = req()
  return (
    <h2 ref = {ref}>
      {res}
    </h2>
  )
})