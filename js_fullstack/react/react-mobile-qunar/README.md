1. css reset 
normalize.css
index.css css 移动业务的设置

2. 无状态组件的创建流程刻意练习
  - 组件插入父组件中，思考好props
  - 组件的类型如果是无状态组件
   prop-types css propTypes
   形参props
   return (<div></div>)
  - props 解构出来要的prop
  - 功能函数建议由父组件打理，可以复用

3. 年轻的 react hooks 全新开发方式
class Component -> function
函数式编程
class + constructor + 生命周期 + render -> function + react hooks
  - useCallback 缓存一个函数
  - useMemo

4. 状态组件编写顺序
  - 数据 Provider store
5. redux
  - 简单的redux 项目结构
      store.js createStore reducers 
        中间件 axios redux-thunk 支持异步
      reducers.js combineReducers
      actions.js 数据请求， 状态改变的触发都由 actions 来负责
        actionTypes 可读性
  - redux API -> 设计状态 (reducer + actions)
      初始值 from  to 两个 reducer函数
      函数 初始值 action return 初始值
      状态会这么改变 动作的声明 SET_FROM
      - switch case
      - { type, payload } action
      - actionTypes 可读性
      - actions 写出来
  - 数据组件化
    1. connect 高级返回原组件
        connect({
          mapState,
          mapDispatch
        })(Component)
    2. 创建组件
    3. 状态组件， 无状态组件重用方法
      
  - reducer
    1. action 标准做法
    返回 { type:, payload} 更新reducer状态
    2. 组件里的事件、生命周期等功能 主要是和数据状态 打交道，归 Action 来做
    - 所有的action export function
    在组件里引入 需要 actions
    - bindActionCreators
    actions 变成本地调用的函数 
     dispatch
    - useMemo 缓存函数
    - connect 中第二个参数返回 action


  1. action 
    from 北京
    to 南昌
    两个 action 思想的切换
    修改的本质  redux

- from to 的复盘
  1. redux 哲学  编程思想
    reducers 纯函数 返回 状态 及 接受 状态 的更新
    那一刻只有一个状态与之对应， switch case
    - actions actionsTypes
      是更新reducer 的使者  dispatch action
    from to 都有 独立的 reducer 函数和 action








先写 <Header /> 再在Header里面添加 title