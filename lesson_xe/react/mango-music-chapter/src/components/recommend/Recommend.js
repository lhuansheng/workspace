import React from 'react';
import './recommend.styl'; // webpack
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
import Loading from '../../common/loading/Loading'
import {getNewAlbum} from '../../api/recommend'; // api文件夹 数据请求的   assets 静态文件
// 应用中很多图片
import Lazyload from 'react-lazyload' //图片延迟加载
// 1. 路由
// 2. redux
// 3. 切页面 +js
// 4. 生命周期 + api 请求
// 5. 公共组件

// 1. 幻灯片， swiper
// 数据   { src, link}
class Recommend extends React.Component {
  constructor() {
    super()
    // 这个组件 state , 属于这个组件， 不属于其他组件， 
    // 1. 用假数据 把页面先做出
    // 2. 未来再改成接口
    this.state = {
      newAlbums:[], /*数据驱动的界面 */
      loading:true,
      sliderList: [{
        id: 1,
        picUrl: 'https://mat1.gtimg.com/rain/bailing20/4333e6a9ac25.uzi.png',
        linkUrl: 'https://www.baidu.com/'
      }, {
        id: 2,
        picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11885314858_640330/0',
        linkUrl: 'https://www.baidu.com/'
      }, {
        id: 3,
        picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11884276052_640330/0',
        linkUrl: 'https://www.baidu.com/'
      }] // 幻灯片  没有必要去redux 
    }
  }
  componentDidMount(){
    new Swiper('.slider-container',{
      loop: true,
      autoplay:{
        delay:1000
      },
      pagination:{
        el:'.swiper-pagination',
        type:'bullets'
      }
    })
    // setTimeout(() => {
    //   this.setState({
    //     loading:false
    //   })
    // }, 3000);
    getNewAlbum() /**promise */
    .then(res =>{
      this.setState({
        loading:false,
        newAlbums:res
      })
      console.log('获取最新专辑')
    })
  }

    // 获取最新专辑 功能的封装
    // fetch 低级的
  
   


  render() {
    // 
    let albums = this.state.newAlbums.map(item => (
      <div className="album-wrapper" key={item.id}>
        <div className="left">
          <img src={item.img} alt={item.name} width="100%" height="100%"/>
        </div>
        <div className="right">
          <div className="album-name">
            {item.name}
          </div>
          <div className="singer-name">
            {item.singer}
          </div>
          <div className="public-time">
            {item.publicTime}
          </div>
        </div>
      </div>
    ))
    return (
      <div className="music-recommend">
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              this.state.sliderList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <a href={slider.linkUrl} className="slider-nav">
                     <Lazyload height={60}>
                     <img src={slider.picUrl} alt="" width="100%" height="100%"/>
                     </Lazyload>
                    </a>
                  </div>
                );
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="album-container">
          <h1 className="title">最新专辑</h1>
          <div className="album-list">
            {albums}
          </div>
        </div>
        <Loading  show={this.state.loading} title="正在加载..."/>
      </div>
    )
  }
}


export default Recommend;