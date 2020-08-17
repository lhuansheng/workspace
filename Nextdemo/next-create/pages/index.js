import Link from 'next/link'
export default function Home() {
  return (
    <div>
      这是首页
    <Link href="/lhs"><a>跳转到lhs</a></Link>
    </div>
  )
}
