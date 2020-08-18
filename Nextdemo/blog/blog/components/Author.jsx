
import {Avatar,Divider} from 'antd'
import '../styles/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2825036977,2449697928&fm=26&gp=0.jpg"  /></div>
            <div className="author-introduction">
                获取快乐的方式很简单，一杯卡布奇诺，一部动漫
                <Divider>社交账号</Divider>
                <Avatar size={28}  className="account"  />
                <Avatar size={28}   className="account" />
                <Avatar size={28}  className="account"  />

            </div>
        </div>
    )

}

export default Author