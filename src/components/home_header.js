import React from "react";
import 'antd/dist/antd.css';
import { Dropdown, Space, Button, Menu ,Input} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import image from '../images/ser.png';



const { Search } = Input;
const onSearch = value => console.log(value);
const menu = (
  <Menu
    items={[
      {
        label: <a href="amharic">Amharic</a>,
        key: '0',
      },
      {
        label: <a href="tigrai">Tigrigna</a>,
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
        label: <a href="pack_food">የታሸጉ ምግቦች</a>,
        key: '0',
      },
       {
        label: <a href="cereals">እህል እና ጥራጥሬዎች</a>,
        key: '0',
      },
       {
        label: <a href="drinks">መጠጦች</a>,
        key: '0',
      },
       {
        label: <a href="sanitary">የንጽህና መጠበቂያዎች</a>,
        key: '0',
      },
       {
        label: <a href="writing tools">የጽህፈት መሳሪያዎች</a>,
        key: '0',
      },
       {
        label: <a href="clothes and shoes">ልብስ እና ጫማ</a>,
        key: '0',
      },
       {
        label: <a href="electronics">ኤሌክትሮኒክስ</a>,
        key: '0',
      },
       {
        label: <a href="beauty">የውበት መጠበቂያዎች</a>,
        key: '0',
      },
       {
        label: <a href="bags">ቦርሳዎች</a>,
        key: '0',
      },
       {
        label: <a href="jawlary">ጌጣጌጦች</a>,
        key: '0',
      },
    ]
  }
  />
)


function HomeHeader(){
    const navigate=useNavigate();
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
    <a href="none" onClick={e => e.preventDefault()}>
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
             <Button className="join_btn" onClick={()=>navigate('/registration')}>አሁኑኑ ይቀላቀሉ!</Button>
             </div>
            
      
      </div>
      </div>
      </div>
     
    );
}
export default HomeHeader;