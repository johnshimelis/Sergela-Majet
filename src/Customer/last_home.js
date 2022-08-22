import React, {useState} from 'react'
import LastHeader from '../components/last_header';
import LastSideNav from '../components/side_nav';
import { Button, Carousel,Card, Col, Row, Rate,  } from 'antd';
import HomeFooter from './home_footer';
import image1 from '../images/sunchips.png';
import image2 from '../images/user.png';
import image3 from '../images/rectangle.png';
import image4 from '../images/delivery.png';
import image5 from '../images/cashback.png';
import image6 from '../images/hour.png';
import image7 from '../images/premium.png';
import image8 from '../images/images.png';
import image9 from '../images/items1.png';
import image10 from '../images/items2.png';
import image11 from '../images/items3.png';
import image12 from '../images/items4.png';
import image13 from '../images/items5.png';
import image14 from '../images/items6.png';
import image15 from '../images/banner.png';

import image16 from '../images/product_71.png';
import image17 from '../images/product_61.png';
import image18 from '../images/product_21.png';
import image19 from '../images/product_101.png';
import image20 from '../images/product_21.png';

import image21 from '../images/discount2.png';
import image22 from '../images/discount1.png';
import image23 from '../images/discount3.png';

import image24 from '../images/women.png';
import image25 from '../images/product2.png';
import image26 from '../images/product1.png';
import image27 from '../images/package1.png';
import image28 from '../images/package3.png';
import image29 from '../images/women.png';

import image30 from '../images/cloth1.png';
import image31 from '../images/cloth2.png';
import image32 from '../images/cloth3.png';
import image33 from '../images/cloth4.png';
import image34 from '../images/cloth5.png';






function LastHome() {
  const [isSideNav, setSideNav] = useState(false);

  const toggleClass = () => {
    setSideNav(!isSideNav);
    const side_nav = document.getElementsByClassName('last_side_nav');
    const page_body = document.getElementsByClassName('body');
    if(side_nav.style.display === "block"){
      page_body.style.display = 'none';
    }

  
  };
  const close = () =>{
   setSideNav(!isSideNav);
  }
  return (
    <div className='last_home'>
        
          <LastHeader />
         
    <div className={isSideNav ? 'last_side_nav': 'new_nav'} id="last_side_nav">
    <div className='close'>
      <span><i onClick={toggleClass} class="fa-solid fa-xmark"></i></span>
    </div>
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
    </div>

     <div className='only_icon' id="last_side_nav">
  
      <ul>
        <li className='sub'><i class="fa-solid fa-bars"></i></li>
        <li><i class="fa-solid fa-burger"></i></li>
        <li><i class="fa-solid fa-wheat-awn-circle-exclamation"></i></li>
        <li><i class="fa-solid fa-wine-glass"></i></li>
        <li><i class="fa-solid fa-pump-medical"></i></li>
        <li><i class="fa-solid fa-pen"></i></li>
        <li><i class="fa-solid fa-shirt"></i></li>
        <li><i class="fa-solid fa-power-off"></i></li>
        <li><i class="fa-solid fa-soap"></i></li>
        <li><i class="fa-solid fa-briefcase"></i></li>
        <li><i class="fa-solid fa-gem"></i></li>

      </ul>
    </div>
    
          <div className="bars" id='bars'>
         
          <span onClick={toggleClass} ><i class="fa-solid fa-bars"></i></span>
       
        </div>
            
        <div className='body'>
         
          <div className='content'>
      <Carousel autoplay >
      <div>
         <h3>3 Sunchips <span>ሲገዙ አንድ በነጻ</span></h3>
          <p>100% ከተፈጥሮ ግብአት የተዘጋጀ ቺብስ፤ ምንም ቃና የሌለው፤ በፈለጉት
            አይነት ጣእም የተዘጋጀ
          </p>
          <Button type='warning'>አሁኑኑ ይሸምቱ</Button>
          <div className='circular'>
            <img src={image1} />
          </div>
      </div>
       <div>
         <h3>3 Sunchips <span>ሲገዙ አንድ በነጻ</span></h3>
          <p>100% ከተፈጥሮ ግብአት የተዘጋጀ ቺብስ፤ ምንም ቃና የሌለው፤ በፈለጉት
            አይነት ጣእም የተዘጋጀ
          </p>
          <Button type='warning'>አሁኑኑ ይሸምቱ</Button>
          <div className='circular'>
            <img src={image1} />
          </div>
      </div>
  </Carousel>
  
  </div>
</div>
<div className='right_side'>
  <img src={image2} />
  <h5>እንኳን በደህና መጡ! </h5>
    
    <Button className='enter_btn'>ይግቡ</Button>
    <Button>ይመዝገቡ</Button>
    <div className='rectangle'>
      <img src={image3} />
      <h6>በቂ ገንዘብ የለዎትም፤ አይጫነቁ የብድር አገልግሎታችንን ይመዝገቡ!</h6>
      <Button>አሁኑኑ ይመዝገቡ</Button>
    </div>
     
</div>
<div className='services'>
  
  <div className='card'>
    <div className='cards'>
       <img alt="PepsiCo" src={image4}/>
       <h6>ነጻ ትራንስፖርት</h6>
        <p>ካሉበት ቦታ በነጻ ትራንስፖርት እናደርሳለን</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image4}/>
       <h6>ነጻ ትራንስፖርት</h6>
        <p>ካሉበት ቦታ በነጻ ትራንስፖርት እናደርሳለን</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image4}/>
       <h6>ነጻ ትራንስፖርት</h6>
        <p>ካሉበት ቦታ በነጻ ትራንስፖርት እናደርሳለን</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image4}/>
       <h6>ነጻ ትራንስፖርት</h6>
        <p>ካሉበት ቦታ በነጻ ትራንስፖርት እናደርሳለን</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image4}/>
       <h6>ነጻ ትራንስፖርት</h6>
        <p>ካሉበት ቦታ በነጻ ትራንስፖርት እናደርሳለን</p>
    </div>
  </div>
        </div>

</div>

  )

}

export default LastHome;