import React from 'react'
import { useState } from 'react';
import AppHeader2 from './header 2';
import { Steps } from 'antd';
import { Input, Space, Button, Switch } from 'antd';
import { Card } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col} from 'antd';
import image from '../images/new_product.png';
import image2 from '../images/new_product2.png' 
import { useNavigate } from "react-router-dom";
import Admin from '../Admin/admin';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Step } = Steps;


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

export default function Info() {
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
         navigate('/transport');
     }}     


  
  return (
    <div className='info'>
        <div className='container-fluid'>
            <div className='header'>
                <AppHeader2 />
            </div>
            <div className='content'>
                <Steps current={current} className="steps">
                {steps.map((item) => (
               <Step onClick={functionCollections} key={item.title} title={item.content}/>
                ))}
                
               </Steps>

               <div className='info_input'>
                   <div className='basic_info'>
                       <h3 style={{marginTop:100, marginLeft:100}}>መሰረታዊ መረጃ</h3>
                   <Input placeholder="የእርስዎ ስም" style={{width:300, height:40, marginLeft:100, marginTop:20}}/>
                   <Input placeholder="የአባትዎ ስም" style={{width:300, height:40, marginLeft:20}}/><br />
                   <Input placeholder="የአያትዎ ስም" style={{width:620, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/>
               </div>
               <div className='address'>
                   <h3 style={{marginTop:100, marginLeft:100}}>አድራሻ</h3>
                   <Input placeholder="ከተማ" style={{width:620, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/><br/>
                    <Input placeholder="ክፍለ ከተማ" style={{width:190, height:40, marginLeft:100, marginTop:20}}/>
                   <Input placeholder="ወረዳ" style={{width:195, height:40, marginLeft:20}}/>
                   <Input placeholder="ሰፈር" style={{width:195, height:40, marginLeft:20}}/><br/>
                   <Input placeholder="ስልክ ቁጥር" style={{width:405, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/>
                   <Input placeholder="የቤት ቁጥር" style={{width:195, height:40, marginLeft:20}}/>
               </div>
               <button type='primary' onClick={()=>{navigate('/transport')}}>ይቀጥሉ</button>
               </div>
            </div>

     <div className='orders'>
          <Card className='fourth_card'
           hoverable
           style={{ width: 450, height: 680 }}
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
