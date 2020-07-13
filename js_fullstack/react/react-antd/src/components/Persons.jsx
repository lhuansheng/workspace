import React, { Component } from 'react';
import { Tabs, List, Avatar, Button, Skeleton } from "antd";
class Persons extends Component {
  state = {  }
  render() { 
    let {list} = this.props.state
    return ( <div>  <List
      style={{width:'90%'}}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src={item.img} />
              }
              title={<a href="#">{item.title}</a>}
              description={`共${item.alllessons}讲|已学${item.currLearnLessons}讲|学完${parseInt(item.alllessons/item.currLearnLessons)}%`}
            />
            <span style={{marginRight:'20%'}}>专栏</span>
            <button>开始学习</button>
            </Skeleton>
          </List.Item>
        )}
      /></div> );
  }
}
 
export default Persons;