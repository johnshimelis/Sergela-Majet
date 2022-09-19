import React,{useEffect, useState} from 'react'
import { Layout} from 'antd';
import 'antd/dist/antd.css'; 
import { Card } from 'antd';
import AppHeader2 from '../components/header 2';
import { Row, Col, Input,Button } from 'antd';
import { useNavigate,useLocation,Link } from "react-router-dom";
import {DeleteOutlined} from '@ant-design/icons';
const { Header} = Layout;
const { Meta } = Card;

export default function CartPage() {
  const navigate = useNavigate();
  const loc=useLocation();
  const [selected_products,setSelected_products]=useState([]);
  var cost=0;
  const [quantity,setQuantity]=useState(0);
  useEffect(()=>{
    // localStorage.setItem('products',[]);
    const product= localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[];
    product.unshift({product:loc.state.product,counter:loc.state.counter});
    localStorage.setItem('products',JSON.stringify(product));
    setSelected_products(JSON.parse(localStorage.getItem('products')));
},[]);
  return (
    <div className='cart_page'>
        <div className='container-fluid'>
           <AppHeader2 text="What are you looking for?" button_text="Join now"/>
           <div className='content'>
             <h3>ዘንቢልዎ ውስጥ ያስገቡት</h3>
             <h5>{quantity} እቃዎች <Link to='/last_home'>መገብየትዎን ይቀጥሉ!</Link></h5> 
             <div className='products'>
              {selected_products?.map(choicen=>{
                cost+=parseInt(choicen?.product.price)*parseInt(choicen?.counter);
                // setQuantity(cost);
                return (<Card className='product_card'
                hoverable
                style={{ width: 800, height: 300 }}
                >
                  <Meta title="እህል እና ጥራጥሬ"/>
                  <Header></Header>
                  <div className='bottom_border'>
                  </div>
                  <div className='delete_btn'>
                 <DeleteOutlined style={{color : 'red', fontSize : 20}} onClick={()=>{delete selected_products[selected_products.indexOf(choicen)];localStorage.setItem('products',JSON.stringify(selected_products));
    setSelected_products(JSON.parse(localStorage.getItem('products')));
                  
                }}
                />
                 </div>
                  <Card className='third_card'
                hoverable
                style={{ width: 180, height: 180, marginTop:50, background:'#FAFAFA'}}
                 cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={choicen?.product.image_paths[0]} />}
                >
                </Card>
                <div className='description'>
                  <h5>{choicen?.product.name}</h5>
                  <p>{choicen?.product.description}</p>
                    <h6>መጠን ፡ </h6>
                    <h6 style={{marginTop:10}}>የአንዱ ዋጋ : {choicen?.product.price} ብር</h6>
     
                </div>
               
             <div className='buttons'>
              <div className='main_btn'>
                   <Button style={{background: '#F0F0F0'}}>+</Button>
               </div>
            <div className='sub_1'>
                   <Button style={{background: '#F0F0F0'}}>-</Button>
           </div>
            <p>{choicen?.counter}</p>
           </div>
          </Card>);
              })}
              <div style={{marginTop:'120px'}}>{cost} Br  Total </div>
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
     <Row