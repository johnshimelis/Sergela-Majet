import React from 'react'
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import image1 from '../images/vector 1.png';
import image2 from '../images/Vector2.png';
import image3 from '../images/Vector3.png';
import image4 from '../images/Vector4.png';
import image5 from '../images/Vector5.png';
import image6 from '../images/Vector6.png';
import image7 from '../images/Vector7.png';
import image8 from '../images/Vector8.png';
import image9 from '../images/Vector9.png';
import image10 from '../images/Vector10.png';
import image11 from '../images/Vector11.png';



export default function LastSideNav() {
  return (
    <div className='last_side_nav'>
      <ul>
       
        <li className='sub'><i class="fa-solid fa-bars"></i><a href="#">ምድቦች</a></li>
        <li><i class="fa-solid fa-burger"></i><a href="#" >የታሸጉ ምግቦች</a></li>
        <li><i class="fa-solid fa-wheat-awn-circle-exclamation"></i><a href="#">እህልና ጥራጥሬ</a></li>
        <li><i class="fa-solid fa-wine-glass"></i><a href="#">መጠጦች</a></li>
        <li><i class="fa-solid fa-pump-medical"></i><a href="#">የንጽህና መጠበቂያ</a></li>
        <li><i class="fa-solid fa-pen"></i><a href="#">የጽሕፈት መሳሪያዎች</a></li>
        <li><i class="fa-solid fa-shirt"></i><a href="#">ልብስ አና ጫማ</a></li>
        <li><i class="fa-solid fa-power-off"></i><a href="#">ኤሌክትሮኒክስ</a></li>
        <li><i class="fa-solid fa-soap"></i><a href="#">የውበት መጠበቂያዎች</a></li>
        <li><i class="fa-solid fa-briefcase"></i><a href="#">ቦርሳዎች</a></li>
        <li><i class="fa-solid fa-gem"></i><a href="#">ጌጣጌጦች</a></li>

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
