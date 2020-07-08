
let initState = 0
export default  function (preState = initState, action){
  const {type,data} = action
  let newState
  switch(type){
    case 'increment':
      return newState = preState + data
  }
}