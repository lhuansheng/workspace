import React, { Component } from "react"; // 按需加载  es6结构
import Comment from "./Comment";
class CommentList extends Component {
  render() {
    let { comments } = this.props; // 在下面不用this.props.comments
    // console.log(this.props),
    return (
      <div>
        {comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
      // <div key={i}>
      //   {comment.username}:{comment.content}
      // </div>
    );
  }
}
export default CommentList;
