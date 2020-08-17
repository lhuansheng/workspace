import Link from 'next/link'
import {withRouter} from 'next/router'
import axios from 'axios'
// 引入了withRouter才有 router  
const Xiaojiejie = ({router}) => {
  // const req = () => {
  //   axios('http://neteasecloudmusicapi.zhaoboy.com/banner').then(
  //     res =>{
  //       console.log(res.data.banners)
  //      }
  //   )
  // }
  // req()
  return (
    <>
      <div>{router.query.name}来为我服务了 </div>
      <Link href="./lhs"><a>返回lhs</a></Link>
      <div>
      
      </div>
    </>
  )
}
// Xiaojiejie.getInitialProps = async () => {
//   const promise = new Promise((resolve)=>{
//     axios('http://neteasecloudmusicapi.zhaoboy.com/banner').then(
//       res =>{
//         resolve(res.data.banners)
//         console.log(res.data.banners)
        
//        }
//     )
    
//   })
  
//   return await promise
// }

export default withRouter(Xiaojiejie)
