import React, { createContext } from 'react'
const context = createContext()
class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reduxState: props.store.getState()
    }
  }
  
  componentDidMount() {
    const {store} = this.props;
    store.subscribe(()=>{
      this.setState({
        reduxState:store.getState()
      })
    })
  }
  render() {
    const {store} = this.props
    const {reduxState} = this.state
    return (
      <context.Provider value={{store,reduxState}}>
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
        // let reduxState = {a:1,b:2}
        // let filterProps = {}
        // if(mapState) {
        //   filterProps = Object.assign(filterProps,mapState(reduxState))
        // }
        // if(mapDispatch) {
        //   filterProps = Object.assign(filterProps,mapDispatch())
        // }
        // return <Com {...filterProps}/>
        return (<context.Consumer>
          {
            ({store}) => {
              const state = store.getState()
              const dispatch = store.dispatch
              let props = {}
              if(mapState) {
                props = Object.assign({},mapState(state))
              }
              if(mapDispatch){
                props = Object.assign(props,mapDispatch(dispatch))
              }
              return <Com {...props}/>
            }
          }
        </context.Consumer>)
      }
    }
  }
}
export {
  context,
  Provider,
  connect
}
