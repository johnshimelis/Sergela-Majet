import React,{useState,useEffect} from 'react'
import { Layout,Breadcrumb,Button,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import LastHeader from '../components/last_header';

import { useNavigate,useLocation } from "react-router-dom";
import api from '../cust_adapter/base'
import { useDispatch } from 'react-redux';
import {actions} from '../store/products-slice'
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function MainPage() {
  const navigate  = useNavigate();
  const [product,setProduct]=useState();
  const [counter,setCounter]=useState(1);
  const loc=useLocation();
  const dispatch=useDispatch();
  const addToCart=(product)=>{
    product['quantities']=counter;
    dispatch(actions.addToCart(product))
  }
  function increase(){
    setCounter(counter=>counter+1);
  }

  function decrease(){
    if(counter>0){
      setCounter(counter=>counter-1);
    }
  }  
  
  useEffect(()=>{
    setProduct(loc.state.product)
  },[]);

  return (
    <div className='main_page'> 
    <LastHeader/>
        <Content className="site-layout">
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ዋና ገጽ</Breadcrumb.Item>
        <Breadcrumb.Item>{product?.name}</Breadcrumb.Item>
      </Breadcrumb>
      </Content> 
      <div className='page_card'>
     
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
      
          <Button className='primary' onClick={()=>{addToCart(product);navigate('/cart_page')}}  style={{background: '#F4AD33'}}><span><i class="fa-solid fa-magnifying-glass"></i></span>ዘንቢል ዉስጥ ያስገቡ </Button>
          <Button className='secondary'>ለወደፊት ያስቀምጡ</Button>
        </div>
    </div>
  )
}