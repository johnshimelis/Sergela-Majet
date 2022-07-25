import React from 'react'
import HomeHeader from '../components/home_header';
import LastSideNav from '../components/side_nav';
import { Button, Carousel,Card, Col, Row, Rate  } from 'antd';
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

  return (
    <div className='last_home'>
        
          <HomeHeader />
          <LastSideNav />
            
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
  <div className='btn'>
    <Button style={{color:'#fff', backgroundColor:'#F4AD33',height:35, width:100,marginLeft:-50}}>ይግቡ</Button>
    <Button style={{width:100, marginLeft:7,height:35, color:'#F4AD33'}}>ይግቡ</Button>
    
  </div>
  <div className='rectangle'>
      <img src={image3} />
      <h6>በቂ ገንዘብ የለዎትም፤ አይጫነቁ የብድር አገልግሎታችንን ይመዝገቡ!</h6>
      <Button>አሁኑኑ ይመዝገቡ</Button>
    </div>
     
</div>
<div className='services'></div>
  <Row gutter={[0,10]}>
       <Col span={2} >
          <Card
           hoverable
           style={{ width: 150, height: 139, marginLeft:315, marginTop:-185, borderRadius:10 }}
           cover={<img alt="PepsiCo" src={image4} style={{width:50, height:50, marginLeft:50, marginTop:20}}/>} >  
           <h6 style={{width:200, marginLeft:-3, marginTop:-23, fontWeight:'bold'}}>ነጻ ትራንስፖርት</h6>
          <p style={{width:150, marginLeft:-24, marginTop:-2, fontSize:11, textAlign:'center'}}>ካሉበት ቦታ በነጻ ትራንስፖርት እናደርሳለን</p>
      </Card>
        </Col>
         <Col span={2} style={{marginLeft:50}}>
          <Card
           hoverable
           style={{ width: 150, height: 139, marginLeft:315, marginTop:-185, borderRadius:10 }}
           cover={<img alt="PepsiCo" src={image5} style={{width:50, height:50, marginLeft:50, marginTop:20, paddingBottom:10}}/>} >  
          <h6 style={{width:200, marginLeft:-13, marginTop:-20, fontWeight:'bold'}}>የብድር አገልግሎት</h6>
          <p style={{width:150, marginLeft:-24, marginTop:-2, fontSize:11, textAlign:'center'}}>በብድር መገበይት ችላሉ</p>
      </Card>
        </Col>
         <Col span={2} style={{marginLeft:50}}>
          <Card
           hoverable
           style={{ width: 150, height: 139, marginLeft:315, marginTop:-185, borderRadius:10 }}
           cover={<img alt="PepsiCo" src={image6} style={{width:50, height:50, marginLeft:50, marginTop:20,paddingBottom:10}}/>} >  
           <h6 style={{width:200, marginLeft:-13, marginTop:-20, fontWeight:'bold'}}>የብድር አገልግሎት</h6>
          <p style={{width:150, marginLeft:-24, marginTop:-2, fontSize:11, textAlign:'center'}}>24/7 አስተማማኝ ብቁ እገዛ ያገኛሉ</p>
      </Card>
        </Col>
         <Col span={2} style={{marginLeft:50}}>
          <Card
           hoverable
           style={{ width: 150, height: 139, marginLeft:315, marginTop:-185, borderRadius:10 }}
           cover={<img alt="PepsiCo" src={image7} style={{width:50, height:50, marginLeft:50, marginTop:20,paddingBottom:10}}/>} >  
          <h6 style={{width:200, marginLeft:-22, marginTop:-20  , fontWeight:'bold'}}>ጥራቱን የጠበቀ እቃ</h6>
          <p style={{width:150, marginLeft:-24, marginTop:-2, fontSize:11, textAlign:'center'}}>ደረጃቸወን የጠበቁ እቃዎች</p>
      </Card>
        </Col>
         <Col span={4} style={{marginLeft:50}}>
          <Card
           hoverable
           style={{ width: 150, height: 139, marginLeft:315, marginTop:-185, borderRadius:10 }}
           cover={<img alt="PepsiCo" src={image8} style={{width:50, height:50, marginLeft:50, marginTop:20,paddingBottom:10}}/>} >  
           <h6 style={{width:200, marginLeft:-10, marginTop:-20, fontWeight:'bold'}}>ተመጣጣኝ ዋጋ</h6>
          <p style={{width:150, marginLeft:-24, marginTop:-2, fontSize:11, textAlign:'center'}}>ጥራቱን የጠበቀ እቃ በቅናስ ዋጋ</p>
      </Card>
        </Col>
         
        </Row>
        <Button 
        style={{width:1325, marginLeft:70, backgroundColor:'#FDEFD0',
         fontSize:17,fontWeight:'bold',height:40}}>ከተመረጡ ምድቦቻችን ይገብዩ!
         </Button>
         <div className='selected_items'>
          <Row gutter={[0,10]}>
          <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 131, borderRadius:10, marginLeft:30, marginTop:20, backgroundColor:'#F5F5F5' }}
           cover={<img alt="PepsiCo" src={image9} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} >  
           </Card>
           <p style={{width:200, fontWeight:'bold'}}>የንጽህና መጠበቂያዎች</p>
         </Col>
          <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 131, borderRadius:10, marginLeft:60, marginTop:20, backgroundColor:'#F5F5F5' }}
           cover={<img alt="PepsiCo" src={image10} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} >  
           </Card>
           <p style={{width:200, marginLeft:100,  fontWeight:'bold'}}>እህል እና ጥራጥሬ</p>
         </Col>
          <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 131, borderRadius:10, marginLeft:90, marginTop:20, backgroundColor:'#F5F5F5' }}
           cover={<img alt="PepsiCo" src={image11} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} >  
           </Card>
           <p style={{width:200, marginLeft:170, fontWeight:'bold'}}>መጠጦች</p>
         </Col>
          <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 131, borderRadius:10, marginLeft:120, marginTop:20, backgroundColor:'#F5F5F5' }}
           cover={<img alt="PepsiCo" src={image12} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} >  
           </Card>
           <p style={{width:200, marginLeft:200,  fontWeight:'bold'}}>ቦርሳዎች</p>
         </Col>
          <Col span={3} >
          <Card
           hoverable
           style={{ width: 219, height: 131, borderRadius:10, marginLeft:150, marginTop:20, backgroundColor:'#F5F5F5' }}
           cover={<img alt="PepsiCo" src={image13} style={{width:120, height:106, marginLeft:0, marginTop:10}}
           /> } 
           
           >  
           <img src={image14}  style={{marginLeft:80, marginTop:-160}}/>
           </Card>
           <p style={{width:200, marginLeft:220, fontWeight:'bold'}}>ልብስና ጫማ</p>
         </Col>
        </Row>
         </div>
        <div className='banner'>
          <img src={image15} />
          <p>የቤት አስቤዛዎን ከአንድ ቦታ ሳይንገላቱ ይሸምቱ!</p>
        </div>


        <div className='high_rating'>
          <h6>በጣም የተሸጡ እቃዎች </h6>
          <Row gutter={[0,10]}>
          <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:70, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image16} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ሽንኩርት</p>
           <p style={{width:200, marginLeft:-10}}>43 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:110, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image17} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ሽንኩርት</p>
           <p style={{width:200, marginLeft:-10}}>43 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:140, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image18} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ሽንኩርት</p>
           <p style={{width:200, marginLeft:-10}}>43 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:180, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image19} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ሽንኩርት</p>
           <p style={{width:200, marginLeft:-10}}>43 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={5} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:220, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image20} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ሽንኩርት</p>
           <p style={{width:200, marginLeft:-10}}>43 ብር</p>
           <Rate style={{marginTop:-500, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>
        </Row>
        </div>

        <div className='package'>
          <div className='content'>
          <h3>የእቃ ጥቅሎች</h3>
          <p>እንዚህን ጥቅሎች በቅናሽ ዋጋ ይሸምቱ!</p>
          <div className='btn' style={{marginLeft:-20, marginTop:-100}}>
          <Button style={{marginLeft:250,paddingBottom:50, paddingRight:40, backgroundColor:'#D9D9D9', 
          borderRadius:100, color:'#000', fontSize:25 }}>
            <i style={{marginLeft:5}} class="fa-solid fa-angle-left"></i></Button>
          </div>
          <Row gutter={[0,10]}>
       <Col span={4} >
          <Card
           hoverable
           style={{ width: 200, height: 159, marginLeft:315, marginTop:-140, borderRadius:10, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image25} style={{width:100, height:100, marginLeft:40, marginTop:10}}/>} >  
           <h6 style={{width:100, marginLeft:-12, marginTop:-23, fontSize:12 }}>መጠጥና የቺብስ ጥቅል</h6>
          <p style={{width:100, marginLeft:60, marginTop:-38, fontSize:15, textAlign:'center', color:'#000'}}>78 ብር</p>
      </Card>
        </Col>

           <Col span={4} >
          <Card
           hoverable
           style={{ width: 200, height: 159, marginLeft:325, marginTop:-140, borderRadius:10, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image26} style={{width:100, height:100, marginLeft:40, marginTop:10}}/>} >  
           <h6 style={{width:100, marginLeft:-12, marginTop:-23, fontSize:12 }}>የአስቤዛ ጥቅል</h6>
          <p style={{width:100, marginLeft:60, marginTop:-24, fontSize:15, textAlign:'center', color:'#000'}}>2350 ብር</p>
      </Card>
        </Col>

           <Col span={4} >
          <Card
           hoverable
           style={{ width: 200, height: 159, marginLeft:335, marginTop:-140, borderRadius:10, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image27} style={{width:100, height:100, marginLeft:40, marginTop:10}}/>} >  
           <h6 style={{width:100, marginLeft:-12, marginTop:-23, fontSize:12 }}>የንጽህና መጠበቂያ ጥቅል</h6>
          <p style={{width:100, marginLeft:80, marginTop:-38, fontSize:15, textAlign:'center', color:'#000'}}>250 ብር</p>
      </Card>
        </Col>

           <Col span={4}>
          <Card
           hoverable
           style={{ width: 200, height: 159, marginLeft:345, marginTop:-140, borderRadius:10, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image28} style={{width:100, height:100, marginLeft:40, marginTop:10}}/>} >  
           <h6 style={{width:100, marginLeft:-12, marginTop:-23, fontSize:12 }}>የእህል ምርቶች ጥቅል</h6>
          <p style={{width:100, marginLeft:60, marginTop:-38, fontSize:15, textAlign:'center', color:'#000'}}>580 ብር</p>
      </Card>
        </Col>
        </Row>
        <div className='btn' style={{marginLeft:-10, marginTop:-180}}>
                <Button style={{marginLeft:1190, backgroundColor:'#D9D9D9', borderRadius:50,
                               color:'#000', fontSize:25, paddingBottom:40,paddingRight:40 }}>
                                <i style={{marginRight:-20, marginTop:-10}} class="fa-solid fa-angle-right"></i></Button>
           </div>
          </div>
        </div>

        <div className='discounts'>
          <h2>የዛሬ ልዩ ቅናሾች</h2>
          <Row gutter={[0,10]}>
          <Col span={7} >
            <img src={image21} />
          </Col>
          <Col span={7} >
            <img src={image22} />
          </Col>
          <Col span={7} >
            <img src={image23} />
          </Col>
          </Row>
         
          
        </div>
 
      <div className='for_womens'>
        <img src={image24} />
        <h2>የክረምት ልብሶች ለሴቶች በቅናሽ</h2>
      </div>
    

    <div className='cloths'>
      
          <Row gutter={[0,10]}>
          <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:70, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image30} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ተከፋች ሹራብ</p>
           <p style={{width:200, marginLeft:-10}}>430 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:110, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image31} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ጋውን</p>
           <p style={{width:200, marginLeft:-10}}>588 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:140, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image32} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ሹራብ</p>
           <p style={{width:200, marginLeft:-10}}>700 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={4} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:180, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image33} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ካፖርት</p>
           <p style={{width:200, marginLeft:-10}}>658 ብር</p>
           <Rate style={{marginTop:-50, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>

             <Col span={5} >
          <Card
           hoverable
           style={{ width: 219, height: 220, borderRadius:10, marginLeft:220, marginTop:20, backgroundColor:'#EEEEEE' }}
           cover={<img alt="PepsiCo" src={image34} style={{width:171, height:106, marginLeft:20, marginTop:10}}/>} > 
           <Card hoverable
           style={{ width: 219, height: 130, marginLeft:-25.5, marginTop:-20, 
           backgroundColor:'#fff', borderBottomLeftRadius:20, borderBottomRightRadius:20 }}>
          <p style={{width:200, marginLeft:-10}}>ጃኬት</p>
           <p style={{width:200, marginLeft:-10}}>430 ብር</p>
           <Rate style={{marginTop:-500, marginLeft:-15}} allowHalf defaultValue={2.5} />
           </Card> 
           </Card>
           </Col>
        </Row>
        </div>

    <HomeFooter />
    </div>
  )

}

export default LastHome;