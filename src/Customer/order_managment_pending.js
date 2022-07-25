import React from 'react'
import AppHeader2 from '../components/header 2';
import { Card } from 'antd';
import { Button,Input, Space, Tag, Dropdown,Menu } from 'antd';
import vector from '../images/Vector.png';
import {EyeOutlined} from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import OrderManagment from './order_managment';

const { Meta } = Card;
const { Search } = Input;
const onSearch = (value) => console.log(value);


function OrderManagmentPending() {
     const navigate = useNavigate();
  function NavigateToAll(){
    navigate('/order_managment');
  }
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" onClick={NavigateToAll}>
           All
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Pending
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Overdue
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Successful
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Canceled
          </a>
        ),
      },
     
    ]}
  />
);
  return (
    <div className='order_managment'>
        <div className='container-fluid'>
            <div className='header'>
             <AppHeader2 text="What are you looking for?" button_text="Join now"/>
            </div>
            <div className='content'>
                <h6 style={{marginTop:80, marginLeft:100}}>የትእዛዞች መረጃ </h6>
                 <Card className='fourth_card'
                 hoverable
                 style={{ width: 1200, height: 1000, marginLeft:100, marginTop:50 }}
                 >
                     <Card className='first_card'
                    hoverable
                    style={{ width: 1120, height: 60, background:'#F9F9F9'}}
                    >
                 <Search placeholder="Order ID, product" onSearch={onSearch} enterButton 
                 style={{marginTop:-12, marginLeft:-10, width:400}} />
                 <Dropdown
                    overlay={menu}
                    placement="bottom"
                    arrow={{
                         pointAtCenter: true,
                         }} >
                    <Button style={{marginTop:-300, marginLeft:500, height:40, background:'#F9F9F9', 
                 color:'#F4AD33', borderColor:'#F4AD33'}}><img src={vector} alt="vector" style={{paddingRight:10}} /> አማራጮች</Button>
                 </Dropdown>
                   </Card>
                   <Card className='second_card'
           hoverable
           style={{ width: 1120, height: 50, marginTop:30, background:'#EBEBEB'}}
           >
            <div className='links'>
              <Button type="link" >የእቃው ቁጥር </Button>
              <Button type="link" >የእቃው ስም</Button>
              <Button type="link" >የእቃው ዋጋ</Button>
              <Button type="link" >ያለበት ሁኔታ</Button>
              <Button type="link" style={{marginLeft:-160}}>ቀን</Button>
              <Button type="link" style={{marginLeft:-160}}>ሙሉ መረጃ</Button>
              </div>
                
           </Card>
      
             <Card className='second_card'
           hoverable
           style={{ width: 1120, height: 50, marginTop:30, background:'#FFF'}}
           >
            <div className='items'>
              <h6 style={{marginLeft:-30}}>#2341 </h6>
              <h6>ድንች</h6>
              <h6 style={{marginLeft:50}}>63 ብር</h6>
              <Tag style={{height:25, marginLeft:30, background:'#FBDA85', marginTop:-10}}>Pending</Tag>
              <h6 style={{paddingLeft:100}}>25-03-2022</h6>
              <h6 style={{marginLeft:100}}><EyeOutlined /></h6>
              </div>
                
           </Card>
         
            <Card className='second_card'
           hoverable
           style={{ width: 1120, height: 50, marginTop:30, background:'#FFF'}}
           >
            <div className='items'>
              <h6 style={{marginLeft:-30}}>#2347</h6>
              <h6>ዝኩኒ</h6>
              <h6 style={{marginLeft:50}}>204 ብር</h6>
              <Tag style={{height:25, marginLeft:30, background:'#FBDA85', marginTop:-10}}>Pending</Tag>
              <h6 style={{paddingLeft:100}}>18-01-2022</h6>
              <h6 style={{marginLeft:100}}><EyeOutlined /></h6>
              </div>
                
           </Card>
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

export default OrderManagmentPending