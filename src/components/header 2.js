import React from "react";
import { Layout, Menu, } from 'antd';
import 'antd/dist/antd.css';
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import image from '../images/ser.png';
import { Button } from 'antd';



const { Search } = Input;
const onSearch = value => console.log(value);
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">Amharic</a>,
        key: '0',
      },
      {
        label: <a href="https://www.aliyun.com">Tigrigna</a>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: 'Oromigna',
        key: '3',
      },
    ]}
  />
);


function AppHeader2(props){
    return(
        <div className="container-fluid">
        <div className="header">
             <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="home">ጥቅሎች</Menu.Item>
            <Menu.Item key="about">ያዘዙት ዕቃዎች</Menu.Item>
            <Menu.Item key="features"><span className="span">ሰላም!</span> አበበ ቢቂላ</Menu.Item> 
             <Menu.Item key="about" style={{fontSize:'25px'}}><i class="fa-solid fa-user"></i></Menu.Item>
           
         </Menu>
<div className="dropdown">
     <Dropdown overlay={menu} trigger={['click']} className="dropdown">
    <a onClick={e => e.preventDefault()}>
      <Space>
     Engilsh
        <DownOutlined />
      </Space>
    </a>
     </Dropdown>
    
       
            <div className="logo">
                <img src={image} className="img"/>
             <a href="http://google.com">Sergela<span>Majet</span></a>
            </div>
            <div className="user_input">
                <Search placeholder={props.text} onSearch={onSearch} enterButton />
             </div>
            
             <div className="icons">
                 <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-bag-shopping"></i>
             </div>
              <div className="header2">
             <Button type="primary">{props.button_text}</Button>
              </div>
            
      
      </div>
      </div>
      </div>
    );
}
export default AppHeader2;
