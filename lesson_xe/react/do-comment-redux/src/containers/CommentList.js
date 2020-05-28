// UI,
// 部门，向中央财务去申请，我要用comments
import React,{Component} from 'react'
import {connect} from 'react-redux'
import CommentList from '../components/CommentList'
class CommentListContainer extends Component{
  render(){
    // console.log(this.props.comments)
    return(
      <div>
        <CommentList 
        comments = {this.props.comments}
        />
      </div>
    )
  }
}
// state 是 redux 给你的 读操作 
const mapStateToProps = (state) =>{
  return{
    comments:state.comments
  }
}

// const mapDispatchToProps = (dispach)=>{
//   return{
//     onDeleteComment:(commentIndex)=>{
//       dispach(deleteComment(commentIndex))
//     }
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(CommentListContainer)