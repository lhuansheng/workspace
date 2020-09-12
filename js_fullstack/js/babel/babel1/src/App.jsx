import React from 'react'
import styles from './style.css';
function App() {
  return (
    <div 
    // className="swiper-container"
    className={styles['swiper-container']}
    // className= {styles.aaa}
    >
       <div>小明</div>
       <img src="/img/1.png" alt="图片加载出错"/>
    </div>
  )
}

export default App
