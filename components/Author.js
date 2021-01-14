/*
 * @Author: zhangjin
 * @Date: 2021-01-14 16:27:07
 * @Description: 作者介绍组件
 */
import {Avatar,Divider} from 'antd'
import '../styles/author.css'

const Author =()=>{
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src=""  /></div>
            <div className="author-introduction">
                锦锦一个96年前端程序媛~
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
            </div>
        </div>
    )
}

export default Author