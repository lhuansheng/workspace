const getUserInfo = function (user) {
  return `name: ${user.name},age: ${user.age}`
}
// 队友 用户 潜在 bug

getUserInfo({name:'koala', age:18})

getUserInfo()
getUserInfo({name:'koala'})
getUserInfo({name:'koala',height:12})
