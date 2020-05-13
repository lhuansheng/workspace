import React,{Component} from 'react';// 按需加载  es6结构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// let {a,b,c} = {a:1,b:2,c:3}
// react facebook 高级 OO
class CommentApp extends Component{
  constructor(){
    super();
    this.state = {
      comments:[
        {
          username:'liu',
          content:'学习学习'
        },
        {
          username:'wang',
          content:'玩游戏'
        }
      ]
    }
  }
  render(){
     const {comments} = this.state
    return(
      <div className="wrapper">
        {/* onSubmit 事件函数？  state props
        react 组件 render 页面输出 state 内部数据 props 外部数据
        */}
        {/* <a href="" onClick></a> */}
        <CommentInput  onSubmit = {this.handleSubmitComment.bind(this)}/>
        {/* 
        用户新提交了评论了怎么办？
        伸手向父组件要什么？ 静态页面 2.动态化的 props 显示评论列表 */}
        <CommentList comments={comments}/>
      </div>
    )
  }
  handleSubmitComment(comment){

      // console.log(comment)
  //   const {comments} = this.state
  //   comments.unshift(comment)
  //  // console.log(comments,'++++++++++++++++')
  //   this.setState({
  //     comments:comments
  //   })
    this.setState({
      comments:[comment,...this.state.comments] // 展开运算符
    })
  }
}

export default CommentApp;