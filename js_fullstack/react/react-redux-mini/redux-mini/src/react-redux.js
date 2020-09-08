import React, { createContext } from 'react'
const context = createContext()
class Provider extends React.Component {
  render() {
    const {store} = this.props
    return (
      <context.Provider value={this.store}>
        {this.props.children}
      </context.Provider>
    )
  }
}
function connect(mapState,mapDispatch) { 
  return function(Com) {
    return class Connected extends React.Component {
      render() {
        // 真实的来自 redux， 怎么拿到 redux 里面的
        // redux 在哪 Provider 怎么 拿到 provider 上面的数据
        let reduxState = {a:1,b:2}
        let filterProps = {}
        if(mapState) {
          filterProps = Object.assign(filterProps,mapState(reduxState))
        }
        if(mapDispatch) {
          filterProps = Object.assign(filterProps,mapDispatch())
        }
        return <Com {...filterProps}/>
      }
    }
  }
}
export {
  context,
  Provider,
  connect
}
