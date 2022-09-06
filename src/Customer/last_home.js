import React, {useState, useEffect} from 'react'
import api from '../adapter/base'
import LastHeader from '../components/last_header';
import LastSideNav from '../components/side_nav';
import { Button, Carousel,Card, Col, Row, Rate,  } from 'antd';
import { useNavigate } from 'react-router-dom';
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
  const usenav=useNavigate();
  const toggleClass = () => {
    setSideNav(!isSideNav);
   };
  const close = () =>{
   setSideNav(!isSideNav);
  }
  const [categories, setCategories] = useState();
  const [highly_paid, setHighlyPaid] = useState();
  const [packages, setPackage] = useState();
  useEffect(()=>{
    api.get('/categories')
    .then(res=>{
      setCategories(res.data.data.slice(0,5));
    })
    .catch(err=>{
      console.log('Error happened')
    });
    api .get('/popular-products')
    .then(res=>{
      setHighlyPaid(res.data.data.slice(0,5));
     
    })
    .catch(err=>{
      console.log("Error Occured")
    });
    api.get('/packages')
    .then(res=>{
      setPackage(res.data.data.slice(0,5));
    
    })
    .catch(err=>{
      console.log('Error Occured');
    })

  },[]);


  
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
<div className='some_btn'>
  <Button>ከተመረጡ ምድቦቻችን ይገብዩ!</Button>
  </div>

   <div className='selected_items'>
        {
            categories?.map(category=>{
              return(
             <div className='selected_cards' onClick={()=>{usenav('/all_products',{state:{id:category.id}})}}>
              <img alt="PepsiCo" src={category.image_path } /> 
           <div className='names'>
        <p>{category.name}</p>
      </div>
        </div>
              )
            })
          }
        
        
       
         </div>
          <div className='banner'>
          <img src={image15} />
          <p>የቤት አስቤዛዎን ከአንድ ቦታ ሳይንገላቱ ይሸምቱ!</p>
        </div>
 <div className='high_rating'>
          <h6>በጣም የተሸጡ እቃዎች </h6>
          
            {
         highly_paid?.map(popular_products=>{
          return(
              <div className='high_rating_img'>
               <img alt="PepsiCo" src={popular_products.image_paths} /> 
               <div className='high_rating_name'>
                <p>{popular_products.name}</p>
                <p>{popular_products.price} br</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>
          )
         })}

               
        </div>

      <div className='package'>
        
          <div className='content'>
          <h3>የእቃ ጥቅሎች</h3>
          <p>እንዚህን ጥቅሎች በቅናሽ ዋጋ ይሸምቱ!</p>
          <div className='btn'>
          <Button >
            <i  class="fa-solid fa-angle-left"></i>
            </Button>
          </div>
                <div className='package_item'>
         
            {packages?.map(pack=>{
              return(
           <div className='selected_cards'>
              <img alt="PepsiCo" src={image10} />
                <div className='names'>
                  <h6>{pack.name}</h6>
                  <p>{pack.price} ብር</p>
                 </div>        
            </div>
            )

        })}
            </div>

        
           
        <div className='last_btn'>
                <Button>
                 <i class="fa-solid fa-angle-right"></i>
               </Button>
        </div>
          </div>
        </div>
         <div className='discounts'>
          <h2>የዛሬ ልዩ ቅናሾች</h2>
          <Row gutter={[0,10]}>
          <div className='discount_img'>
            <img src={image21} />
          </div>
           <div className='discount_img'>
            <img src={image22} />
          </div>
           <div className='discount_img'>
            <img src={image23} />
          </div>
        </Row>
      </div>
      <div className='for_womens'>
        <img src={image24} />
        <h2>የክረምት ልብሶች ለሴቶች በቅናሽ</h2>
      </div>

      <div className='cloths'>
          <Row gutter={[0,10]}>
            <div className='cloths_img'>
               <img alt="PepsiCo" src={image30} /> 
               <div className='cloths_name'>
                <p>ተከፋች ሹራብ</p>
                <p>430 ብር</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>

               <div className='cloths_img'>
               <img alt="PepsiCo" src={image31} /> 
               <div className='cloths_name'>
                <p>ጋውን</p>
                <p>588 ብር</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>

               <div className='cloths_img'>
               <img alt="PepsiCo" src={image32} /> 
               <div className='cloths_name'>
                <p>ሹራብ</p>
                <p>700 ብር</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>

               <div className='cloths_img'>
               <img alt="PepsiCo" src={image33} /> 
               <div className='cloths_name'>
                <p>ካፖርት</p>
                <p>658 ብር</p>
                <Rate className='rate' 
                allowHalf defaultValue={2.5} />
               </div>
           </div>

               <div className='cloths_img'>
               <img alt="PepsiCo" src={image34} /> 
               <div className='cloths_name'>
                <p>ጃኬት</p>
                <p>430 ብር</p>
                <Rate className='rate'  
                allowHalf defaultValue={2.5} />
               </div>
           </div>
          
        </Row>
        </div>
        <HomeFooter />

</div>

  )

}

export default LastHome;