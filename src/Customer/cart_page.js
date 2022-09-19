import React,{useEffect,useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; 
import api from '../adapter/base'
import { Card } from 'antd';
import AppHeader2 from '../components/header 2';
import LastHeader from '../components/last_header';
import { Row, Col, Input } from 'antd';
import AppFooter from '../components/footer';
import { Button } from 'antd';
import { useNavigate,useLocation,Link } from "react-router-dom";
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
  var cost=0;
  const [quantity,setQuantity]=useState(0);
  const [counter,setCounter]=useState(1);
     function increase(){
    setCounter(counter=>counter+1);
  }

  function decrease(){
    setCounter(counter=>counter-1);
  }  
  useEffect(()=>{
    // localStorage.setItem('products',[]);
    const product= localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[];
    product.unshift({product:loc.state.product,counter:loc.state.counter});
    localStorage.setItem('products',JSON.stringify(product));
    setSelected_products(JSON.parse(localStorage.getItem('products')));
},[]);
  return (
    <div className='cart_page'>
        
        <LastHeader text="What are you looking for?" button_text="Join now"/>
           <div className='content'>
             <h3>ዘንቢልዎ ውስጥ ያስገቡት</h3>
              <h5>{selected_products.length} እቃዎች <Link to='/last_home'>መገብየትዎን ይቀጥሉ!</Link></h5> 
             <div className='products'>
               {selected_products?.map(choicen=>{
                cost+=parseInt(choicen?.product.price)*parseInt(choicen?.counter);
                // setQuantity(cost);
                return (
                <Card className='product_card'
                hoverable
                style={{ width: 800, height: 300 }}
                >
                  <Meta title="እህል እና ጥራጥሬ"/>
                  <Header></Header>
                  <div className='bottom_border'>
                  </div>
                  <div className='delete_btn'>
                 <DeleteOutlined style={{color : 'red', fontSize : 20}} 
                 onClick={()=>{delete selected_products[selected_products.indexOf(choicen)];
                  localStorage.setItem('products',JSON.stringify(selected_products));
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
                    <h6>መጠን ፡ {counter}</h6>
                    <h6 style={{marginTop:10}}>የአንዱ ዋጋ : {choicen?.product.price} ብር</h6>
     
                </div>
               
             <div className='buttons'>
              <div className='main_btn'>
                   <Button style={{background: '#F0F0F0'}} >+</Button>
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

     
     <div className='orders'>
          <Card className='fourth_card'
           hoverable
           
           >
             <Meta title="ትዕዛዞች"/>
             <h6 style={{marginLeft:270, marginTop:-20}}> {selected_products.length} እቃዎች</h6>
            
              <div className='bottom_border'>

             </div>
             {selected_products?.map(choicen=>{
                  <div className='bottom_border'>

             </div>
              return(
             <Card className='third_card'
           hoverable
           style={{ width: 150, height: 100, marginTop:50, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={choicen?.product.image_paths[0]} />}>
                <div className='bottom_border'>

             </div>
             <div className='order_description'>
               <h4>{choicen?.product.name}</h4>
               {/* <h6 style={{marginTop:10}}> ኪሎ : 1ኪ . ግ  <span>አይነት : ለቁርጥ</span></h6> */}
               <h6 style={{marginTop:20}}>የአንዱ ዋጋ : {choicen?.product.price} ብር</h6>
             </div>
           </Card>
             )
            }
             )
          }
               <div className='deliver'>
             <h6 style={{marginTop:-130}}>ማድረሻ<span>0 ብር</span></h6>
             <h6>ቅናሽ<span>-120 ብር</span></h6>
             <h6>ታክስ<span>-124.50 ብር</span></h6>
           <div className='bottom_border'>
             
             </div>
             </div>
             <div className='total'>
               <h6>ጠቅላላ<span>{cost} Br  Total </span></h6>
               <button type='warning'  style={{marginTop:'2%'}} onClick={()=>{localStorage.getItem('token')?navigate('/transport',{state:{cost:cost}}):navigate('/info')}}>ግዙ</button>
               <div className='bottom_border'>
             
             </div>
             </div>
             </Card>
            </div>

</div>

    
  )
}