import React from 'react'
import { Row, Col, Input, Button ,Typography} from 'antd';
const { Title } = Typography;

export default function HomeFooter() {
  return (
    <div className='home_footer' style={{marginTop:200}}>
       
            
            <Row gutter={[8, 32]}>
               <Col span={6}>
                  <div className='part_1'>
                       <h1>ለጋዜጣችን ይመዝገቡ</h1> 
                       <h4>ስለሚሸምቱት ዕቃዎች አዲስ መረጃ ለመስማት ሁልግዜም ቀዳሚ ይሁኑ</h4> 
                       <Input placeholder="ኢሜል አድራሻ" />
                       <Button type="primary">ይመዝገቡ</Button>
                  </div>
                </Col>
            </Row>
     <Row gutter={[8,200]}>
       <Col span={4}>
            <div className='part_2 '>
          <h3>ይግዙ</h3>
          
            <h5>አስቤዛ</h5>
             <h5>ምግብና መጠጥ</h5>
              <h5>የውበቶ ዕቃዎች</h5>
            </div>
         </Col>
    
        <Col span={4}>
         <div className='part_2'>
          <h3>ሻጭ ይሁኑ!</h3>
          <h5>መረጃ ማዕከል</h5>
           <h5>ያዘዙት ዕቃዎች</h5>
            <h5>መመለሻ ፓሊሲ</h5>
             <h5>ያነጋግሩን</h5>
             
            </div>
            </Col>
              <Col span={4}>
         <div className='part_2'>
          <h3>ሰረገላ</h3>
          <h5>ስለ ሰረገላ</h5>
           <h5>ሀላፊነት</h5>
            <h5>ራዕይ</h5>
             
            </div>
            </Col>
            </Row>
       


    </div>
  )
}