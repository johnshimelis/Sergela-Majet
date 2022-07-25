import React from 'react'
import { useState } from 'react';
import AppHeader2 from '../components/header 2';
import { useNavigate } from 'react-router-dom';
import { Steps } from 'antd';
import { Card } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { Row, Col, Input, Button } from 'antd';
import { Checkbox } from 'antd';
import image from '../images/new_product.png';
import image2 from '../images/new_product2.png'

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Step } = Steps;

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const steps = [
  {
    title: 'First',
    content: 'መረጃ',
  },
  {
    title: 'Second',
    content: 'ትራንስፖርት',
  },
  {
    title: 'Last',
    content: 'ክፍያ',
  },
];



export default function Transport() {

     const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    const next = () => {
    setCurrent(current + 1);
    console.log(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  function functionCollections(){
      if(current < steps.length){
         next();
         navigate('/payment');
     }}   
  return (
    <div className='transport'>
        <div className='container-fluid'>
          <div className='header'>
                <AppHeader2 />
          </div>
           <div className='content'>
                <Steps current={current + 1} className="steps">
                {steps.map((item) => (
               <Step onClick={functionCollections} key={item.title} title={item.content}/>
                ))}
                
               </Steps>
               <h3 style={{marginTop:50, marginLeft:140}}>ትራንስፖርት</h3>
              <Row gutter={[0, 200]}>
                <Col span={4}>
               <Card className='product_card'
                      hoverable
                       style={{ width: 350, height: 150 }}
                       >
                    
                    <Header><h3 style={{fontSize:23, marginLeft:-30, marginTop:20, paddingTop:10}}>ኮንቪኒየንስ</h3></Header>
                    <div className='bottom_border'>

                    </div>
                      <div className='delete_btn'>
                      <Checkbox onChange={onChange}></Checkbox>
                      </div>   
                      <h6>በ 1 ሳምንት ውስጥ እናደርሳለን</h6>   
                      <p>+ 100 ብር</p>

               </Card>
               </Col>
                <Col span={8} style={{marginTop:-7}}>
               <Card className='product_card'
                      hoverable
                       style={{ width: 350, height: 150 }}
                       >
                    
                    <Header><h3 style={{fontSize:23, marginLeft:-30, marginTop:20, paddingTop:10}}>መደበኛ</h3></Header>
                    <div className='bottom_border'>

                    </div>
                      <div className='delete_btn'>
                      <Checkbox onChange={onChange}></Checkbox>
                      </div>   
                      <h6>በ 1 ቀን ውስጥ እናደርሳለን</h6>   
                      <p>+ 100 ብር</p>

               </Card>
               </Col>
               </Row>
               <Card className='product_card'
                      hoverable
                       style={{ width: 724, height: 150, marginLeft:143, marginTop:80}}
                       >
                    
                    <Header style={{marginLeft:-25, width:725}}><h3 style={{fontSize:23, marginTop:20, paddingTop:10, marginLeft:-27}}>ሰረገላ ፈጣን</h3></Header>
                    <div className='bottom_border' style={{marginLeft:-24, width:724}}>

                    </div>
                      <div className='delete_btn'>
                        <Checkbox className='checkbox' style={{marginTop:45}} onChange={onChange}></Checkbox>
                      </div>   
                      <h6 style={{marginTop:35}}>በ 1 ቀን ውስጥ እናደርሳለን</h6>   
                      <p>+ 100 ብር</p>

               </Card>
  
              <Button style={{color:'#000', background:'#F4AD33',height:50}} type='warning'>የሰረገላ የብድር ክፍያ</Button>
              <Button style={{marginLeft:22, background:'#000', height:50}} type='primary' onClick={()=>{navigate('/payment')}}>ወደ ክፍያ ይሂዱ</Button>

        <div className='orders' style={{marginTop:-470}}>
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
               
               <div className='bottom_border'>
             
             </div>
             </div>
             </Card>
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
