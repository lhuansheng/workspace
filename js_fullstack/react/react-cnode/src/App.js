import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
// 页面
// 列表：/?tab=all
// 详情：/topic/
// let tab=
// mv-vm
// view
// model 数据
// view
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value:12345,
      tabs: [
        { content: "全部", param: "all" },
        { content: "招聘", param: "job" },
        { content: "精华", param: "good" },
        { content: "分享", param: "share" },
        { content: "问答", param: "ask" },
      ],
      tab: "all",
      isLoading:true,
      lists: [], //文章列表
    };
  }
  // 生命周期
  // App 被 reactDom 渲染到 pc 上
  // 渲染: 一套流程 (生命周期)
  handleGetPost = ()=>{
    const { tab } = this.state;
    // 总页数
    axios({
      url: "https://cnodejs.org/api/v1/topics",
      params: {
        tab: tab,
        page: 1,
        limit: 40,
      },
    }).then((res) => {
      // console.log(res.data)
      this.setState({
        lists: res.data.data,
        isLoading: false
      })
     
    })
    .catch(err =>{
      this.setState({
        isLoading:false
      })
    })
  }
  componentDidMount() {
    this.handleGetPost()
  }
  //  1小时 38 分 32秒
  handleTabChange = (event) =>{
    // this 定义位置决定的
    // 知道点了哪一项？
    // event.target? 点了谁谁就是event.target
    // console.log(event.target)
    const tab = event.target.getAttribute('data-tab')
    // 发个请求
    this.setState({
      tab,
      isLoading:true
    },()=>{
      // setState 异步
      this.handleGetPost()
    })
  }
  handleChange = (event)=>[
    this.setState({
      value: event.target.value
    })
  ]
  render() {
    const { lists,tabs,tab,isLoading , value} = this.state;
    // js 表达式 都用 {} 包起来
    // 受控组件 value + onChange, 输入框里面的内容受本组件里面 state 控制
    // 假如取到用户输入了什么?  this.state.value
    // 非受控组件
    // 假如取到用户输入了什么? 取到 我们 input 真实的 dom 节点，dom.value
    // 涉及到 dom 操作， 现代前端框架不提倡操作 dom 了
    return (
      <div>
        <input type="text" placeholder='1234' value={value}
        onChange={this.handleChange}
        />
        <input type="text" placeholder='1234' defaultValue='1234546534'
        
        />
        
        {/* react 不渲染哪些 值为 空数组 false undefined null 的内容 */}
        {isLoading && '正在加载中...'}
        {lists.length === 0 && "暂无文章请重试"}
        {
          tabs.map((tabObj,i)=>{
          return(
            <div key={i} data-tab = {tabObj.param} 
            className={tabObj.param === tab?'hight-light':''}
            onClick = {this.handleTabChange}>
              {tabObj.content}
            </div>
          )
          })
        }
        {/* map 返回 数组  react 如果 jsx(html + js) 存在数组， react 自己展开数组
        react 列表渲染
        */}
        {/* 加key性能更好 */}
        {lists.map((list, i) => {
          return <div key={i}>{list.title}</div>;
        })}
      </div>
    );
  }
}
// 默认导出
export default App;
// 命名导出

export const name = "lilei";
