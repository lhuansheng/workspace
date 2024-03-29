import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb,Affix } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../styles/pages/detailed.css";
import ReactMarkdown from "react-markdown";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import axios from "axios";
import 'highlight.js/styles/monokai-sublime.css';
import  servicePath  from '../config/apiUrl'
import {tocify,marked} from'../components/MarkdownParse'
// const renderer = new marked.Renderer();
// const tocify = new Tocify()
// renderer.heading = function(text, level, raw) {
//       const anchor = tocify.add(text, level);
//       return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
//     };
// marked.setOptions({
//     renderer: renderer, 
//     gfm: true,
//     pedantic: false,
//     sanitize: false,
//     tables: true,
//     breaks: false,
//     smartLists: true,
//     smartypants: false,
//     highlight: function (code) {
//             return hljs.highlightAuto(code).value;
//     }
//   }); 

    

const Detailed = (props) =>{
  let html = marked(props.data[0].article_content) 
 
  return <>
  <Head>
<title>{props.data[0].title}</title>
  </Head>
  <Header />
  <Row className="comm-main" type="flex" justify="center">
    <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
      <div>
        <div className="bread-div">
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/">首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
<Breadcrumb.Item>{props.data[0].title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div>
          <div className="detailed-title">
            React实战视频教程-技术胖Blog开发(更新08集)
          </div>

          <div className="list-icon center">
            <span> 2019-06-28</span>
            <span> 视频教程</span>
            <span> 5498人</span>
          </div>

          <div className="detailed-content"
          dangerouslySetInnerHTML={{__html:html}}
          >
          </div>
        </div>
      </div>
    </Col>

    <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
      <Author />
      <Advert />
      <Affix offsetTop={5}>
<div className="detailed-nav comm-box">
  <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
</div>
</Affix>
    </Col>
  </Row>
  <Footer />
</>
} 
Detailed.getInitialProps = async(context)=>{

  // console.log(context.query.id)
  let id =context.query.id
  const promise = new Promise((resolve)=>{

    axios(servicePath.getArticleById+id).then(
      (res)=>{
        // console.log(res.data)
        // resolve(res.data.data[0])
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Detailed;
