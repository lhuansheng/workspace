import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import Slider from '../../components/slider/';
import { Content } from './style';
function Recommend(props) {
  const { bannerList } = props;
  const { getBannerDataDispatch } = props;

  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    // eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  return (
    <Content >
      <Slider bannerList={bannerListJS}></Slider>
    </Content>
  );
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  bannerList: state.getIn(["recommend", "bannerList"]),
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
  };
};

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
