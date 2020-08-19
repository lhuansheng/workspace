import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Row, Col, List } from "antd";
import Header from "../components/Header";
import "../styles/pages/index.css";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from "axios";
// list似乎只能传个对象
const Home = (list) => {
  console.log(list);

  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={list.data}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">
                    {/* 将id传出去，根据id展示不同的文章 */}
                    <Link
                      href={{ pathname: "/detailed", query: { id: item.id } }}
                    >
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span> {item.addTime}</span>
                    <span>{item.typeName}</span>
                    <span>{item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios("http://127.0.0.1:7001/default/getArticleList").then((res) => {
      console.log("远程获取数据结果:", res.data);
      resolve(res.data);
    });
  });

  return await promise;
};

export default Home;
