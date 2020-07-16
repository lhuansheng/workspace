import React,{useCallback} from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import {connect} from 'react-redux'
import Journey from './components/journey/journey'
import { bindActionCreators } from 'redux'
import { useMemo } from 'react';
import { exchangeFromTo } from './store/actions'
function App(props) {
  console.log(props)
  const {
    from,
    to,
    dispatch
  } = props
  const onBack = useCallback(() => {
    window.history.back();
  }, [])
  const cbs = useMemo(()=>{
    return bindActionCreators({
      exchangeFromTo
    }, dispatch)
  })
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="./query.html" className="form">
        <Journey from={from} to={to} {...cbs} />
      </form>
    </div>
  );
}
export default connect(function mapStateToProps(state){
  // 状态 的读操作
  return state
}, function mapDispatchToProps(dispatch){ return {
  dispatch
} })(App);
// export default App;
