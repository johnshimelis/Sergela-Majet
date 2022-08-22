import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space } from 'antd';
import React from 'react';
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

function LastHeader2() {
  return (
    <div className='last_header2'>
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
            <p>Language</p>
            <span><i class="fa-solid fa-caret-down"></i></span>
            <ul>
                <li className='options'>Amharic</li>
                <li className='options'>Tigrigna</li>
                <li className='options'>English</li>
            </ul>
  
       
         </div>
          <input type="search"  placeholder="ምን ይፈልጋሉ?" />
       </nav>
       </div>
       </div>
  )}
  export default LastHeader2;