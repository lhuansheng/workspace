import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from "./style";
import Scroll from '../../baseUI/scroll/index';
import style from "../../assets/global-style";
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import  Header  from './../../baseUI/header/index';
function Album(props) {

  const [showStatus, setShowStatus] = useState(true);
  const [title, setTitle] = useState("歌单");
  const [isMarquee, setIsMarquee] = useState(false);
  
  const id = props.match.params.id;

  const { currentAlbum, enterLoading, pullUpLoading } = props;
  const { getAlbumDataDispatch, changePullUpLoadingStateDispatch } = props;

  const musicNoteRef = useRef();
  const headerEl = useRef();
  return (
    <CSSTransition 
    in={showStatus}  
    timeout={300} 
    classNames="fly" 
    appear={true} 
    unmountOnExit
    onExited={props.history.goBack}
  >
   <Container>
   <Header ref={headerEl} title={title}  isMarquee={isMarquee}></Header>
     </Container> 
  </CSSTransition>
  )
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  currentAlbum: state.getIn(['album', 'currentAlbum']),
  pullUpLoading: state.getIn(['album', 'pullUpLoading']),
  enterLoading: state.getIn(['album', 'enterLoading']),
  startIndex: state.getIn(['album', 'startIndex']),
  totalCount: state.getIn(['album', 'totalCount']),
  // songsCount: state.getIn(['player', 'playList']).size
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getAlbumDataDispatch(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getAlbumList(id));
    },
    changePullUpLoadingStateDispatch(state) {
      dispatch(changePullUpLoading(state));
    }
  }
};

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album));