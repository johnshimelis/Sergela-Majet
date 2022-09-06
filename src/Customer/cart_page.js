import React,{useEffect,useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; 
import api from '../adapter/base'
import { Card } from 'antd';
import AppHeader2 from '../components/header 2';
import { Row, Col, Input } from 'antd';
import AppFooter from '../components/footer';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CompanyRegister from '../drawer/company_register';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import image from '../images/new_product.png';
import image2 from '../images/new_product2.png'
import image_6 from '../images/product_6.png';
import image_7 from '../images/product_7.png';
import image_8 from '../images/product_8.png';
import image_9 from '../images/product_9.png';
import image_10 from '../images/product_10.png';
import image_11 from '../images/product_11.png';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;



export default function CartPage() {
  const navigate = useNavigate();
  const loc=useLocation();
  const [selected_products,setSelected_products]=useState([]);
  return (
    <div className='cart_page'>
        <div className='container-fluid'>
           <AppHeader2 text="What are you looking for?" button_text="Join now"/>
           <div className='content'>
             <h3>ዘንቢልዎ ውስጥ ያስገቡት</h3>
             <h5>{loc.state.counter} እቃዎች <a href='#'>መገብየትዎን ይቀጥሉ!</a></h5> 
             <div className='products'>
           <Card className='product_card'
           hoverable
           style={{ width: 800, height: 300 }}
           >
             <Meta title="እህል እና ጥራጥሬ"/>
             <Header></Header>
             <div className='bottom_border'>

             </div>
             <div className='delete_btn'>
            <DeleteOutlined style={{color : 'red', fontSize : 20}}/>
            </div>
             <Card className='third_card'
           hoverable
           style={{ width: 180, height: 180, marginTop:50, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={loc.state.product.image_paths[0]} />}
           >
           </Card>
           <div className='description'>
             <h5>{loc.state.product.name}</h5>
             <p>{loc.state.product.description}</p>
               <h6>መጠን ፡ </h6>
               <h6 style={{marginTop:10}}>የአንዱ ዋጋ : {loc.state.product.price} ብር</h6>

           </div>
          
        <div className='buttons'>
         <div className='main_btn'>
              <Button style={{background: '#F0F0F0'}}>+</Button>
          </div>
       <div className='sub_1'>
              <Button style={{background: '#F0F0F0'}}>-</Button>
      </div>
       <p>{loc.state.counter}</p>
      </div>
     </Card>
      <Card className='product_card'
           hoverable
           style={{ width: 800, height: 300, marginTop:80 }}
           >
             <Meta title="የታሸጉ ምግቦች"/>
             <Header></Header>
             <div className='bottom_border'>

             </div>
             <div className='delete_btn'>
            <DeleteOutlined style={{color : 'red', fontSize : 20}}/>
            </div>
             <Card className='third_card'
           hoverable
           style={{ width: 180, height: 180, marginTop:50, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={image2} style={{marginTop:30}}/>}
           >
           </Card>
           <div className='description'>
             <h5>ኦማር የምግብ ዘይት</h5>
             <p>የተጣራ የሱፍ አበባ ዘይት  ፍጹም ንጹሕ ዘይት, ይህም በምርት ሂደት ውስጥ ሁሉንም ንጥረ 
               ነገሮች ይጠብቃል. ይህ ዘይት በጣም ከፍተኛ በሆነ የሙቀት ማብሰያ ሁኔታዎች ውስጥ ጥቅም 
               ላይ ሊውል ይችላል።</p>
               <h6>መጠን ፡ 5 ሊትር</h6>
               <h6 style={{marginTop:10}}>የአንዱ ዋጋ : 890 ብር</h6>
           </div>
          
        <div className='buttons'>
         <div className='main_btn'>
              <Button style={{background: '#F0F0F0'}}>+</Button>
          </div>
       <div className='sub_1'>
              <Button style={{background: '#F0F0F0'}}>-</Button>
      </div>
       <p>1</p>
      </div>
     </Card>

     <div className='orders'>
          <Card className='fourth_card'
           hoverable
           style={{ width: 430, height: 680 }}
           >
             <Meta title="ትዕዛዞች"/>
             <h6 style={{marginLeft:270, marginTop:-20}}> 2 እቃዎች</h6>
             <Header></Header>
              <div className='bottom_border'>

             </div>
             <Card className='third_card'
           hoverable
           style={{ width: 150, height: 100, marginTop:50, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={image} style={{marginTop:0,marginLeft:10, width:120, height:100}}/>} >
                <div className='bottom_border'>

             </div>
             <div className='order_description'>
               <h4>ቲማቲም</h4>
               <h6 style={{marginTop:10}}> ኪሎ : 1ኪ . ግ  <span>አይነት : ለቁርጥ</span></h6>
               <h6 style={{marginTop:20}}>የአንዱ ኪሎ ዋጋ : 40 ብር</h6>
             </div>
           </Card>
              <Card className='third_card'
           hoverable
           style={{ width: 150, height: 100, marginTop:80, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={image2} style={{marginTop:10,marginLeft:10, width:120, height:80}}/>} >
                <div className='bottom_border'>

             </div>
             <div className='order_description'>
               <h4>ኦማር የምግብ ዘይት</h4>
               <h6 style={{marginTop:10}}> ኪሎ : 1ኪ . ግ  <span>አይነት : ለቁርጥ</span></h6>
               <h6 style={{marginTop:20}}>የአንዱ ኪሎ ዋጋ : 40 ብር</h6>
             </div>
           </Card>
           <div className='deliver'>
             <h6 style={{marginTop:-130}}>ማድረሻ<span>0 ብር</span></h6>
             <h6>ቅናሽ<span>-120 ብር</span></h6>
             <h6>ታክስ<span>-124.50 ብር</span></h6>
           <div className='bottom_border'>
             
             </div>
             </div>
             <div className='total'>
               <h6>ጠቅላላ<span>954.50 ብር</span></h6>
               <button type='warning' onClick={()=>{navigate('/info')}}>ግዙ</button>
               <div className='bottom_border'>
             
             </div>
             </div>
             </Card>
            </div>
  </div>
  <div className='product_list'>
    <Row gutter={[0, 200]}>
       <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="PepsiCo" src={image_6} />}
             >  
               
           <Meta title="PepsiCo"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Brisk" src={image_7} />}
             >  
               
           <Meta title="Brisk"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Reese's" src={image_8} />}
             >  
               
           <Meta title="Reese's"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Smarties" src={image_9} />}
             >  
               
           <Meta title="Smarties"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Doritos" src={image_10} />}
             >  
               
           <Meta title="Doritos Chips"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Doritos" src={image_11} />}
             >  
               
           <Meta title="Doritos Chips"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
           <p>23br</p>
            
          </Card>
        </Col>
        </Row>
  </div>
 </div>
  <div className='footer'>
        <div className='container-fluid'>
            <Row gutter={[8, 32]}>
               <Col span={6}>
                  <div className='part_1'  style={{marginTop:-50, color:'#000'}}>
                       <h1 style={{color:'#fff'}}>ለጋዜጣችን ይመዝገቡ</h1> 
                       <h4 style={{color:'#fff'}}>ስለሚሸምቱት ዕቃዎች አዲስ መረጃ ለመስማት ሁልግዜም ቀዳሚ ይሁኑ</h4> 
                       <Input  style={{ width: 'calc(100% - 200px)', color:'#fff' }} placeholder="ኢሜል አድራሻ" />
                       <Button style={{color:'#fff'}} type="primary">ይመዝገቡ</Button>
                  </div>
                </Col>
            </Row>
     <Row gutter={[8,200]}>
       <Col span={4}>
            <div className='part_2 ' style={{color:'#fff'}}>
          <h3 style={{color:'#fff'}}>ይግዙ</h3>
          <h5 style={{color:'#fff'}}>ልብስና ጫማ</h5>
           <h5 style={{color:'#fff'}}>መጳሕፍት</h5>
            <h5 style={{color:'#fff'}}>አስቤዛ</h5>
             <h5 style={{color:'#fff'}}> ምግብና መጠጥ</h5>
              <h5 style={{color:'#fff'}}>የውበቶ ዕቃዎች</h5>
            </div>
         </Col>
         <Col span={4}>
         <div className='part_2 part_3'>
         
          <h5 style={{color:'#fff'}}>ኤሌክትሮኒክስ</h5>
           <h5 style={{color:'#fff'}}>የቤት ዕቃዎች</h5>
            <h5 style={{color:'#fff'}}>የጵሕፈት መሳሪያዎች</h5>
             <h5 style={{color:'#fff'}}>መድኃኒቶች</h5>
            </div>
            </Col>
        <Col span={4}>
         <div className='part_2'>
          <h3 style={{color:'#fff'}}>ሻጭ ይሁኑ!</h3>
          <h5 style={{color:'#fff'}}>መረጃ ማዕከል</h5>
           <h5 style={{color:'#fff'}}>ያዘዙት ዕቃዎች</h5>
            <h5 style={{color:'#fff'}}>መመለሻ ፓሊሲ</h5>
             <h5 style={{color:'#fff'}}>ያነጋግሩን</h5>
             
            </div>
            </Col>
              <Col span={4}>
         <div className='part_2'>
          <h3 style={{color:'#fff'}}>ሰረገላ</h3>
          <h5 style={{color:'#fff'}}>ስለ ሰረገላ</h5>
           <h5 style={{color:'#fff'}}>ሀላፊነት</h5>
            <h5 style={{color:'#fff'}}>ራዕይ</h5>
             
            </div>
            </Col>
            </Row>
        </div>


    </div>
</div>
</div>
    
  )
}
