import React, {useState, useEffect} from 'react'
import api from '../cust_adapter/base'
import LastHeader from '../components/last_header';
import { Button, Carousel, Row, Rate  } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import HomeFooter from './home_footer';
import imager1 from '../images/imager1.jfif'
import imager2 from '../images/imager2.jfif'
import imager3 from '../images/imager3.jpg'
import imager4 from '../images/imager4.jpg'
import imager5 from '../images/imager5.jpg'
import package1 from '../images/packages.png'
import image1 from '../images/sunchips.png';
import image2 from '../images/user.png';
import image3 from '../images/rectangle.png';
import image4 from '../images/delivery.png';
import image5 from '../images/cashback.png';
import image6 from '../images/hour.png';
import image7 from '../images/premium.png';
import image8 from '../images/images.png';
import image15 from '../images/banner.png';
import image21 from '../images/discount2.png';
import image22 from '../images/discount1.png';
import image23 from '../images/discount3.png';
import image24 from '../images/women.png';
import SideNav from './side_nav';
function LastHome() {
  const [isSideNav, setSideNav] = useState(false);
  const usenav=useNavigate();
  const isLoggedIn=useSelector(state=>state.auth.user)
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
      setCategories(res.data.data);
    })
    .catch(err=>{
      console.log('Error happened')
    });
    api.get('/popular-products')
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
    <LastHeader/>
     
    <div className={isSideNav ? 'last_side_nav': 'new_nav'} id="last_side_nav">

    <div className='close'>
      <span><i onClick={toggleClass} class="fa-solid fa-xmark"></i></span>
    </div>
      <SideNav/>
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
  {!isLoggedIn?
  <div className='intro'>
  <img src={image2} />
  <h5>እንኳን በደህና መጡ! </h5>
    
    <Button className='enter_btn' onClick={()=>{usenav('/login')}}>ይግቡ</Button>
    <Button onClick={()=>{usenav('/registration')}}>ይመዝገቡ</Button>
    
    </div>
    :''}
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
       <img alt="PepsiCo" src={image5}/>
       <h6>የብድር አገልግሎት</h6>
        <p>በብድር መገበይት ይችላሉ</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image6}/>
       <h6>የደንብኛ አገልግሎት</h6>
        <p>24/7 አስተማማኝ ብቁ እገዛ ያገኛሉ</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image7}/>
       <h6>ጥራቱን የጠበቀ እቃ</h6>
        <p>ደረጃቸወን የጠበቁ እቃዎች</p>
    </div>
     <div className='cards'>
       <img alt="PepsiCo" src={image8}/>
       <h6>ተመጣጣኝ ዋጋ</h6>
        <p>ጥራቱን የጠበቀ እቃ በቅናስ ዋጋ</p>
    </div>
  </div>
</div>
<div className='some_btn'>
  <Button>ከተመረጡ ምድቦቻችን ይገብዩ!</Button>
  </div>
  <Carousel autoplay>

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
         </Carousel>

          <div className='banner'>
          <img src={image15} />
          <p>የቤት አስቤዛዎን ከአንድ ቦታ ሳይንገላቱ ይሸምቱ!</p>
        </div>
 <div className='high_rating'>
          <h6>በጣም የተሸጡ እቃዎች </h6>
          
            {
         highly_paid?.map(popular_products=>{
          return(
              <div className='high_rating_img' onClick={()=>{usenav('/main_page',{state:{product:popular_products}})}}>
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
           <div className='selected_cards' onClick={()=>usenav('/main_page',{state:{product:pack}})}>
              <img alt="PepsiCo" src={pack?.image_path} />
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
        <HomeFooter />

</div>

  )

}

export default LastHome;