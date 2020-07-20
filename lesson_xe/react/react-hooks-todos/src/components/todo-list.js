import React, { useState } from 'react';
import { List, Icon } from 'antd';
const { Item } = List

const TodoList = ({ todos, onToggleFinished }) => {
  const onDelete = e => {

  }

  return (
    <div className="list-wrap">
      {todos.length === 0 ? (
        <p>暂无待办事项</p>):(
          <List itemLayout='horizontal' dataSource= {todos} 
          renderItem={({ id, text, finished }, idx)=>{
            const itemClasses = classNames({
              'list-item': true,
              'list-item_finished': finished
            })
            return (
              // - 表示子组件 _表示状态  item 子组件 finished 状态
              <Item className='list-item'></Item>
            )
          }}/>
        )
      }
    </div>
  )
}
