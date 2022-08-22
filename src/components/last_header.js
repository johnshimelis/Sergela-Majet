import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space } from 'antd';
import React, {useState} from 'react';
import image from '../images/ser.png';



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

function LastHeader() {
  
 const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    const page_bar = document.getElementsByClassName("bar");
    const side_nav = document.getElementsByClassName("last_side_nav");
    if(page_bar.style.display === 'block'){
      side_nav.style.display= 'none'
    }

    setActive(!isActive);
  };
  
  return (
    <div className='last_header'>
      <div className='header'>
       
          <Dropdown overlay={menu} trigger={['click']} className="dropdown">
           <a onClick={e => e.preventDefault()}>
           <Space>
              Engilsh
             <DownOutlined />
           </Space>
           </a>
          </Dropdown>
           
        <nav>
       <div className='icon'>
            <img src={image} className="img"/>
             <a href="http://google.com">Sergela<span>Majet</span></a>
       </div>
 
       <div className='search_input'>
         <Dropdown overlay={menu} trigger={['click']} className="dropdown">
            <a onClick={e => e.preventDefault()}>
            <Space>
                Engilsh
              <DownOutlined />
            </Space>
            </a>
            </Dropdown>
        <input type="search"  placeholder="ምን ይፈልጋሉ?" />
        <Button><i class="fa-solid fa-magnifying-glass"></i><span> Search </span></Button>
        <Button className='join_now'>አሁኑኑ ይቀላቀሉ!</Button>
             
         <span className='fa'><i class="fa-solid fa-heart"></i></span>
         <span className='fas'><i class="fa-solid fa-cart-arrow-down"></i></span>
        </div>
        <div className='menu'>
          <ul>
            <li><a href='#'>ጥቅሎች</a></li>
            <li><a href='#'>ያዘዙት ዕቃዎች</a></li>
            <li><span><i class="fa-solid fa-user"></i></span></li>

          </ul>
        </div>
        <div className='bar'>
         
          <span onClick={toggleClass} ><i class="fa-solid fa-bars"></i></span>
       
        </div>

    </nav>
  <div className={isActive ? 'menu_bar': 'new_class'} >
          <ul>
            <li><a href='#'>ጥቅሎች</a></li>
            <li><a href='#'>ያዘዙት ዕቃዎች</a></li>
            <li><span><i class="fa-solid fa-user"></i></span></li>

          </ul>
  </div>
    
 
   
    </div>
    </div>
  )
}

export default LastHeader