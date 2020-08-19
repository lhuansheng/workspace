import React, { useState, useEffect } from "react";
import "../styles/components/header.css";
import { Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/apiUrl";
const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
     
    axios(servicePath.getTypeInfo).then((res) => {
      setNavArray(res.data.data);
     
    });
  }, []);

  //跳转到列表页
  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };
  return (
      
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">花生酱</span>
          <span className="header-txt">非一般的感觉</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              {/* <HomeOutlined /> */}
              首页
            </Menu.Item>
            {navArray.map((item) => {
              return <Menu.Item key={item.id}>{item.typeName}</Menu.Item>;
            })}
            {/* <Menu.Item key="video">
                      <VideoCameraOutlined />
                          视频
                      </Menu.Item>

                      <Menu.Item key="life">
                      <SmileOutlined />
                          生活
                      </Menu.Item> */}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
