- react 小书
- react 全家桶  react + react-router + redux
- 会给大家展示一个完整的react 项目怎么做， 下周实战简单的react 开发
yarn add react-redux
yarn add redux

效果： 数据不需要派发的方式来做， 
redux 任何组件可以随时跟redux connect

搭建的时候 store ->Provider -> App
connect(mapStateToProps)()
1. 状态收归 redux 管理， 由 reducer 函数提供
2. connect 借到组件去 state, 单一状态树， state.comments