import LHS from '../components/lhs'
import Link from 'next/link'
import Router from 'next/router'

const Lhs = () => {
  return (
    <div>
      lhssdaf
      <LHS>小猫画虎</LHS>
      <Link href="/"><a>跳转到主页</a></Link>
      <button onClick={()=>{Router.push('/')}}>跳转首页</button>
    </div>
  )
}

export default Lhs
