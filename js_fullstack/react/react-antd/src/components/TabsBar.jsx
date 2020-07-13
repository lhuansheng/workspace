import React, { Component } from "react";
import Persons from './Persons'
import { Tabs, List, Avatar, Button, Skeleton } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import "../api/mock";
class TabsBar extends Component {
  state = {
    data: [],
    list: [],
    list1:[],
    list2:[],
    key1:'all',
    key2:'all'
  };
  callback = (k) => {
   const {data,key2,list2} = this.state
   let list1= data.filter((item)=>{
    return k==='all'?true:item.tab===k
   })
  let list = list1.filter((k,i)=>{
    return list2.includes(list1[i])
  })
    this.setState({
      list1,
      key1:k,
      list
    });
  };
  callback1 = (k) => {
  const {list1,data} = this.state
  let list2= data.filter((item)=>{
    return k==='all'?true:item.subtab===k
  })
  let list = list2.filter((k,i)=>{
    // console.log(list1.includes(list2[i]))
    return list1.includes(list2[i])
  })
    this.setState({
      list,
      list2,
      key2:k,
    });
  };
  componentDidMount() {
    axios.get("/posts").then((data) => {
      let person = data.data.person;
      this.setState({
        list: [...person],
        data:[...person],
        list1:[...person],
        list2:[...person]
      });
    });
  }
  render() {
    const { TabPane } = Tabs;
    const { list } = this.state;
    // console.log(list)
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
          <TabPane tab="全部" key="all"></TabPane>
          <TabPane tab="已完成" key="b">
          </TabPane>
          <TabPane tab="未完成" key="c">
          </TabPane>
        </Tabs>
        <Tabs defaultActiveKey="1" type="card" onChange={this.callback1.bind(this)}>
          <TabPane tab="所有形式" key="all">
          <Persons state={this.state} />
          </TabPane>
          <TabPane tab="专栏" key="b">
            <Persons state={this.state} />
          </TabPane>
          <TabPane tab="视频课" key="c"><Persons state={this.state} /></TabPane>
          <TabPane tab="微课" key="d"><Persons state={this.state} /></TabPane>
          <TabPane tab="每日一课" key="e"><Persons state={this.state} /></TabPane>
          <TabPane tab="其他" key="f"><Persons state={this.state} /></TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabsBar;
