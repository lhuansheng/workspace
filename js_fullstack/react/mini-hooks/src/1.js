const { render } = require("react-dom")

let hooks = []
let currIndex = 0
const useState = (function() {
  return function(initVal) {
    if(!hooks[currIndex]) hooks[currIndex] = []
    let hookState = hooks[currIndex]
    hooks[currIndex][0] = hookState[0]||initVal
    function setState(newState) {
      hookState[0] = newState
      render()
    }
    hookState[1] = setState
    return hookState
  }
})
function render() {
  currIndex = 0
  ReactDOM.render(<App/>,document.getElementById('root'))
}