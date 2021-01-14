/*
 * @Author: zhangjin
 * @Date: 1985-10-26 16:15:00
 * @Description: Modify here please
 */
import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import BlogList from '../components/list'
import {Row, Col} from 'antd'


const Home = () => (
  <>
    <Head>
      <title>Detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <BlogList />
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>

 </>
)
export default Home