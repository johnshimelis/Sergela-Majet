import React from 'react'
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';

export default function SideNav() {
  return (
    <div className='side_nav'>
      <ul>
        <li className='main'><a href="#">የእቃ መለያዎች</a></li>
        <li className='sub'><a href="#" style={{color: "#F4AD33"}}>ሁሉም ምድቦች</a></li>
        <li><a href="#" >የታሸጉ ምግቦች</a></li>
        <li><a href="#">እህልና ጥራጥሬ</a></li>
        <li><a href="#">የመጠጦች</a></li>
        <li><a href="#">የንጽህና መጠበቂያ</a></li>
        <li><a href="#">የጽሕፈት መሳሪያዎች</a></li>
        <li><a href="#">ልብስ አና ጫማ</a></li>
        <li><a href="#">የንጽሕና መጠበቂያ</a></li>
        <li><a href="#">የጽሕፈት መሳሪያዎች</a></li>


      </ul>
      
        {/* <Menu theme='white' mode="vertical" defaultSelectedKeys={['']}>
            <Menu.Item key="home">የእቃ መለያዎች</Menu.Item>
            <Menu.Item key="about">ሁሉም ምድቦች</Menu.Item>
            <Menu.Item key="features">የታሸጉ ምግቦች</Menu.Item> 
            <Menu.Item key="howitworks">እህልና ጥራጥሬ</Menu.Item>
            <Menu.Item key="faq">መጠጦች</Menu.Item> 
            <Menu.Item key="pricing">የንጽህና መጠበቂያ</Menu.Item>
            <Menu.Item key="contact">የጽሕፈት መሳሪያዎች</Menu.Item>
              <Menu.Item key="faq">ልብስ አና ጫማ</Menu.Item> 
            <Menu.Item key="pricing">የንጽሕና መጠበቂያ</Menu.Item>
            <Menu.Item key="contact">የጽሕፈት መሳሪያዎች</Menu.Item>
         </Menu> */}
    
    </div>
  )
}
