import React from "react";
import { Divider, Layout, Menu, } from 'antd';
import 'antd/dist/antd.css';
import { Dropdown, Space, Button } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import image from '../images/ser.png';



const { Search } = Input;
const onSearch = value => console.log(value);
const menu = (
  <Menu
    items={[
      {
        label: <a href="">Amharic</a>,
        key: '0',
      },
      {
        label: <a href="">Tigrigna</a>,
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
const dropdown = (
  <Menu
    items={[
      {
        label: <a href="">የታሸጉ ምግቦች</a>,
        key: '0',
      },
       {
        label: <a href="">እህል እና ጥራጥሬዎች</a>,
        key: '0',
      },
       {
        label: <a href="">መጠጦች</a>,
        key: '0',
      },
       {
        label: <a href="">የንጽህና መጠበቂያዎች</a>,
        key: '0',
      },
       {
        label: <a href="">የጽህፈት መሳሪያዎች</a>,
        key: '0',
      },
       {
        label: <a href="">ልብስ እና ጫማ</a>,
        key: '0',
      },
       {
        label: <a href="">ኤሌክትሮኒክስ</a>,
        key: '0',
      },
       {
        label: <a href="">የውበት መጠበቂያዎች</a>,
        key: '0',
      },
       {
        label: <a href="">ቦርሳዎች</a>,
        key: '0',
      },
       {
        label: <a href="">ጌጣጌጦች</a>,
        key: '0',
      },
    ]
  }
  />
)


function HomeHeader(){
    return(
       
          <div className="home_header">
           <div className="header">
             <Menu style={{backgroundColor:"#1D1D1D"}} theme="#1D1D1D" mode="horizontal" >
            <Menu.Item key="home">ጥቅሎች</Menu.Item>
            <Menu.Item key="about">ያዘዙት ዕቃዎች</Menu.Item>
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
          {/* <hr
        style={{
            marginTop:0,
            color: "lightgray",
            backgroundColor: "lightblue",
            height: 1, 
            width: 1420,
            marginLeft:-50
        }}
    /> */}
       
            <div className="logo">
                <img src={image} className="img"/>
             <a href="http://google.com">Sergela<span>Majet</span></a>
            </div>
            <div className="user_input">
               
                    <Search
                   
                    className="search"
                     placeholder="ምን ይፈልጋሉ?"
                     allowClear
                     enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    />
                
                <div className="dropdown">
                  <Dropdown overlay={dropdown} trigger={['click']} className="dropdown">
                 <a onClick={e => e.preventDefault()}>
                <Space style={{color:"#BFBFBF", marginLeft:16, marginTop:2}}>
                 የዕቃ ምድቦች
               <DownOutlined />
               </Space>
                </a>
               </Dropdown>
                </div>
   
             </div>
            <div className="icons">
                 <i class="fa-solid fa-heart"></i>
                 <i class="fa-solid fa-cart-arrow-down"></i>
             </div>
             <div className="btn">
             <Button className="join_btn">አሁኑኑ ይቀላቀሉ!</Button>
             </div>
            
      
      </div>
      </div>
      </div>
     
    );
}
export default HomeHeader;
