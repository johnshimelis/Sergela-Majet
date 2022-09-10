import React,{useState,useEffect} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; 
import { Card, Col, Row } from 'antd';
import AppHeader2 from '../components/header 2';
import AppFooter from '../components/footer';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import image_6 from '../images/product_6.png';
import image_7 from '../images/product_7.png';
import image_8 from '../images/product_8.png';
import image_9 from '../images/product_9.png';
import image_10 from '../images/product_10.png';
import image_11 from '../images/product_11.png';
import product1_image from '../images/product1.png';
import product2_image from '../images/product2.png';
import CompanyRegister from '../drawer/company_register';
import CartPage from './cart_page';
import api from '../adapter/base'

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function MainPage() {
  const navigate  = useNavigate();
  const [product,setProduct]=useState();
  const [counter,setCounter]=useState(1);
  const loc=useLocation();

  function increase(){
    setCounter(counter=>counter+1);
  }

  function decrease(){
    setCounter(counter=>counter-1);
  }  
  
  useEffect(()=>{
      api.get(`products/${loc.state.id}`)
      .then(res=>{setProduct(res.data.data)})
      .catch(err=>{console.log('somewhere error happened')})
  },
  [loc.state.id]);

  return (
    <div className='main_page'> 
      
           <AppHeader2 text="What are you looking for?" button_text="Join now"/>
        <Content className="site-layout">
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ዋና ገጽ</Breadcrumb.Item>
        <Breadcrumb.Item>{product?.name}</Breadcrumb.Item>
       
      </Breadcrumb>
      </Content> 
      <div className='page_card'>
        {/* {product?.image_paths.forEach(path=>{
          
          return(
          <Card className='first_card'
           hoverable
           style={{ width: 100, height: 100 }}
           cover={<img src={path}/>}
           >
           </Card>)
        })} */}
        <div className='first_card'>
          
          <img src={product?.image_paths[0]}/>
         </div>
          <div className='first_card'>
          <img src={product?.image_paths[1]}/>
         </div>
          <div className='first_card'>
          <img src={product?.image_paths[2]}/>
         </div>
          <div className='fourth_card'>
          <img src={product?.image_paths[0]}/>
         </div>
       
      </div>
      <div className='asbeza'>
          <h1>{product?.name}</h1>

           <h2>{product?.price}</h2>
           <div className='birr'>
          <h5>ብር</h5>
          </div>
          <p>{product?.description}</p>

      </div>
      <div className='colors'>
          <h4>ቀለም</h4>
   <div className='all_colors'>
    <Row gutter={[0, 0]}>
       <Col span={2}>
          <Card
           hoverable
           style={{ width: 32, height: 32, background : "#C7342A"}}
         >  
          </Card>
        </Col>
         <Col span={2}>
           <Card
           hoverable
           style={{ width: 32, height: 32, background : "#C66029" }}
           >  
          </Card>
        </Col>
         <Col span={2}>
           <Card
           hoverable
           style={{ width: 32, height: 32, background : "#166BC6" }}
            >  
          </Card>
        </Col>
         <Col span={2}>
           <Card
           hoverable
           style={{ width: 32, height: 32, background : "#6CD13B" }}
            >  
          </Card>
        </Col>
        </Row>
          </div>
      </div>
      <div className='buttons'>
        
          <div className='main_btn'>
              <Button style={{background: '#F0F0F0'}} onClick={()=>{increase()}}>+</Button>
          </div>
       <div className='sub_1'>
              <Button style={{background: '#F0F0F0'}} onClick={()=>{decrease()}}>-</Button>

        </div>
            <p>{counter}</p>
        </div>
        <div className='last_button'>
          <Button className='primary' onClick={()=>{navigate('/cart_page',{state:{counter:counter,product:product}})}}  style={{background: '#F4AD33'}}><span><i class="fa-solid fa-magnifying-glass"></i></span>ዘንቢል ዉስጥ ያስገቡ </Button>
          <Button className='secondary'>ለወደፊት ያስቀምጡ</Button>
        </div>

    {/* <div className='main_products'>
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

     <div className="last_products">
        
      <div className="card_1">
     <Card bordered style={{width: 432, height: 200, border: '2px solid #F4AD33', background : '#F0F0F0'}} className="product_card">
       <div className="get_product2">
      
          <h1 >ለብድር አገልግሎት ይመዝገቡ</h1>
          <Button type="warning">ይመዝገቡ አሁኑኑ</Button>
        </div>
        </Card>
      </div>
      <div className="card_2">
          <Card bordered style={{width: 432, height: 200, border: '2px solid #F0F0F0', background : '#F0F0F0'}} className="product_card">
       <div className="card_content">
           <Button>ታላቅ ቅናሽ</Button>
           <h1>የሶስት ወር አስቤዛ</h1>
           <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
               <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
          <p>23br</p>
          
         <img src={product1_image} />
    
         
         
       </div>
        </Card>
      </div>

       <div className="card_3">
          <Card bordered style={{width: 432, height: 200, border: '2px solid #F0F0F0', background : '#F0F0F0'}} className="product_card">
       <div className="card_content">
           <Button>ታላቅ ቅናሽ</Button>
           <h1>መጠጥና የቺብስ ጥቅል</h1>
           <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
            <div className="bag_2"><i class="fa-solid fa-bag-shopping"></i></div>
          <p>23br</p>
          
          <img src={product2_image} />
         
       </div>
        </Card>
      </div>
       </div>
       <div className='footer'>
       <AppFooter />
       </div> */}
      
    </div>
  )
}
