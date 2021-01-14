/*
 * @Author: zhangjin
 * @Date: 2021-01-14 12:54:57
 * @Description: Modify here please
 */
import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , List ,Icon} from 'antd'
import '../styles/list.css'

const blogList = () => {
    const [ mylist , setMylist ] = useState(
        [
          {title:'标题1',context:'测试1'},
          {title:'标题2',context:'测试2。'},
        ]
      )
    return  (
        <div>    
            <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={item => (
                    <List.Item>
                    <div className="list-title">{item.title}</div>
                    <div className="list-icon">
                        <span><Icon type="calendar" /> 2019-06-28</span>
                        <span><Icon type="folder" /> 视频教程</span>
                        <span><Icon type="fire" /> 5498人</span>
                    </div>
                    <div className="list-context">{item.context}</div>  
                    </List.Item>
                )}
            />    
      </div>
    )
}

export default blogList
