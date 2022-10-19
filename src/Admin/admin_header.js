import React from "react";
import { Menu,Avatar} from 'antd';
import 'antd/dist/antd.css';
import image from '../images/ser.png';
import { useSelector } from "react-redux";
function AdminHeader(){
    const user=useSelector(state=>state.auth.user?.data)
    return(
        <div className="container-fluid" style={{marginLeft:'0%',width:'100%',paddingLeft:'0%',paddingRight:'0%'}}>

        <div className="admin_header" >
            <Menu theme="dark" mode="horizontal" className='admin_menu'>
                <Menu.Item key="features"><span className="span_header">እንኳን በደህና መጣህ!</span><h6>
                    {user?.first_name}</h6></Menu.Item> 
                <Menu.Item key="about" style={{fontSize:'25px'}}><Avatar size={50} src={<img src={user?.profile_thumbnail_path} alt='user profile'/>} /></Menu.Item>
            </Menu>
        <div>
    <div className="admin_logo">
        <img src={image} className="img" alt='seregela logo'/>
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
