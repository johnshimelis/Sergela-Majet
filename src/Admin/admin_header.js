import React from "react";
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import image from '../images/ser.png';
import AbeImg from '../images/abebe.jpeg' 
import { Button } from 'antd';
function AdminHeader(props){
    return(
        <div className="container-fluid" style={{marginLeft:-15,width:'1500px'}}>
        <div className="admin_header" >
            <Menu theme="dark" mode="horizontal" className='admin_menu'>
                <Menu.Item key="features"><span className="span_header">እንኳን በደህና መጣህ!</span><h6>አበበ ቢቂላ</h6></Menu.Item> 
                <Menu.Item key="about" style={{fontSize:'25px'}}><img src={AbeImg} className='abe_img'/></Menu.Item>
            </Menu>
        <div>
    <div className="admin_logo">
        <img src={image} className="img"/>
            <div className="sergela_link">
                <a href="http://google.com">Sergela<span>Majet</span></a>
            </div>
    </div>
             <div className="gear_icons">
                 <i style={{color:'white',fontSize:25}}class="fa-solid fa-gear"></i>
             </div>           
      
      </div>
      </div>
      </div>
    );
}
export default AdminHeader;
