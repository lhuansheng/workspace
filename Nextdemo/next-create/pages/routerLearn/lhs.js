import Link from 'next/link'
import Router from 'next/router'
const Lalala = () => {
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete
  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1 routeChangeStart->路由开始变化，参数为：',...args)
  })
  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2 routeChangeComplete->路由变化结束，参数为：',...args)
  })
  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3 beforeHistoryChange->路由历史变化，参数为：',...args)
  })
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('3 hashChangeStart->参数为：',...args)
  })
  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('3 hashChangeComplete->参数为：',...args)
  })


  function gotoxiao() {
    Router.push({
      pathname:'./xiaojiejie',
      query:{name:'毛衣'}
    })
  }
  return (
    <div>
     <div>lhs</div>
     <div>
       <Link href={{pathname:'./xiaojiejie',query:{name:'结衣'}}}><a>选择结衣</a></Link>
       <Link href="./xiaojiejie?name=毛衣"><a>选择毛衣</a></Link>
       <button onClick={gotoxiao}>选毛衣</button>
       {/* <Link href='#abc'>选毛毛虫</Link> */}
     </div>
    </div>
  )
}

export default Lalala
