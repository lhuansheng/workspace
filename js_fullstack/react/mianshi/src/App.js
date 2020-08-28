import React, { useEffect, useState } from "react";
import { Table,Space,Dropdown,Button,Menu,Input  } from "antd";
import "antd/dist/antd.css";
import "./api/mockjs";
import './App.css'
import axios from "axios";
import { DownOutlined ,SearchOutlined,DeleteOutlined,EditOutlined,EyeInvisibleOutlined} from '@ant-design/icons';
const { Column } = Table;

function App() {
  const [list, setList] = useState([]);
  const [kind, setKind] = useState('全部品类')
  const [loading, setLoading] = useState(true)
  const [inputVal, serInputVal] = useState('')
  useEffect(() => {
    setLoading(true)
    axios.get(`/list/${0}`).then((data) => {
      setList(data.data.listInfo);
      setLoading(false)
    });
  }, []);
  const handleMenuClick = (e) => {
    setKind(e.item.props.children[1])
    setLoading(true)
    axios.get(`/list/${e.key}`).then((data) => {
      setList(data.data.listInfo);
      setLoading(false)
    });
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="0" >
        全部品类
      </Menu.Item>
      <Menu.Item key="1" >
        电压力锅
      </Menu.Item>
      <Menu.Item key="2" >
        电饭煲
      </Menu.Item>
      <Menu.Item key="3" >
        电磁炉
      </Menu.Item>
    </Menu>
  );
 const handleInput = function(e) {
  // serInputVal(inputVal)
  console.log(e.target.value)
  console.log(list.filter(item => e.target.value))
  // setList(list.find(item => e.target.value))
 }

  return (
    <div className="app">
    <div className="header">
    <Dropdown overlay={menu} className="dropdown">
      <Button>
      {kind}<DownOutlined />
      </Button>
    </Dropdown>
    <Input className="search" size="defalut"  placeholder="search" prefix={<SearchOutlined />} onChange={handleInput} />
    </div>
      <Table
        dataSource={list}
        loading={loading}
        pagination={{
          size: "middle",
          
        }}
      >
        <Column title="ID" dataIndex="key" key="key" />
        <Column title="产品名称" dataIndex="name" key="name"/>

        <Column title="品类" dataIndex="category" key="category"  />
        <Column title="型号" dataIndex="model" key="model"  />
        <Column title="entry" dataIndex="entry" key="entry" />
        <Column
          title="func"
          dataIndex="func"
          key="func"
          
          render={(func) => (
            <>
              {func.map((item) => (
                <span id={item.key}  key={item} >
                  <span style={{color:'#3ea0bb',marginLeft:'2px'}}  >
                    {item==='EyeInvisibleOutlined'?<EyeInvisibleOutlined />:''}
                    {item==='EditOutlined'?<EditOutlined />:''}
                    {item==='DeleteOutlined'?<DeleteOutlined />:''}
                    </span>
                </span>
              ))}
            </>
          )}
        />
      </Table>
    </div>
  );
}

export default App;
