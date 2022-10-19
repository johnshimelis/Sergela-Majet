import React from 'react'
import image_1 from '../images/product_1.png';
import image_2 from '../images/product_2.png';
import image_3 from '../images/product_3.png';
import image_4 from '../images/product_4.png';
import image_5 from '../images/product_5.png';
import image_6 from '../images/product_6.png';
import image_7 from '../images/product_7.png';
import image_8 from '../images/product_8.png';
import image_9 from '../images/product_9.png';
import image_10 from '../images/product_10.png';
import { Card } from 'antd';
import { Row, Col, Slider } from 'antd';

const { Meta } = Card;

export default function OnlyProducts() {
  return (
<div className='container-fluid' style={{marginTop:-150, zIndex:-1}}>
    <div className='all_products' style={{zIndex:-1}}>
 
    <div className="all_product">
    <Row gutter={[0, 200]}>

        <Col span={6}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="ካሮት" src={image_2} />}
             >  
               
           <Meta title="ካሮት"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={6}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="አስቤዛ" src={image_3} />}
             >  
               
           <Meta title="አስቤዛ"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
          <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={6}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="አስቤዛ ትልቅ ቤተሰብ" src={image_4} />}
             >  
               
           <Meta title="አስቤዛ ትልቅ ቤተሰብ"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={6}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Fanta" src={image_5} />}
             >  
               
           <Meta title="Fanta"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
            
          </Card>
        </Col>

        
  </Row>
     <Row gutter={[0, 200]} style={{marginTop:150}}>
       <Col span={6}>
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
          <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={6}>
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
          <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
          </Card>
        </Col>
    
        <Col span={6}>
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
           <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={6}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Doritos" src={image_10} />}
             >  
               
           <Meta title="Doritos"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
          <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>23br</p>
            
          </Card>
        </Col>
        
  </Row>
         
     </div>
     
     </div>
 </div>
 
  );
}
