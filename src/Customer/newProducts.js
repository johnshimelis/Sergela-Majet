import React from 'react'
import image from '../images/ser.png'
import image_2 from '../images/abebe.jpeg'
import { Header } from 'antd/lib/layout/layout'
import { Tabs, Button } from 'antd';
import { Input } from 'antd';
import { Card } from 'antd';
import image_12 from '../images/product_12.png';
import image_13 from '../images/product_13.png';
import image_14 from '../images/product_14.png';
import image_15 from '../images/product_15.png';
import image_16 from '../images/product_16.png';
import image_17 from '../images/product_17.png';
import image_18 from '../images/product_18.png';
import image_19 from '../images/product_19.png';
import image_20 from '../images/product_20.png';

import { useNavigate } from "react-router-dom";
import MainPage from '../Customer/main_page'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';


import { Row, Col, Slider,Checkbox } from 'antd';

const { Meta } = Card;

const { Search } = Input;
const onSearch = value => console.log(value);
const { TabPane } = Tabs;
const operations = <Button></Button>;



export default function NewProducts() {

  const navigate = useNavigate();
    const[selectedTab, setSelectedTab] = React.useState('1');

  const handleChange = activeKey =>{
    console.log(activeKey)
    setSelectedTab(activeKey);
  }
  return (
    <div div className='new_products'>
        <div className='container_fluid'>
          <Header>
              <div className="logo">
                <img src={image} className="img"/>
             <a href="http://google.com">Sergela<span>Gebeya</span></a>
            </div>
            <div className='header_corner'>
                <h1>እንኳን በደህና መጣህ!</h1>
                <h2>አበበ ቢቂላ</h2>
                <img src={image_2} style={{height: 40, width:40}} />
                <div className='setting'>
                  <i class="fa-solid fa-gear"></i>
                </div>
               
            </div>
        </Header>

           <div className='tabs'>
               <Tabs activeKey={selectedTab} defaultActiveKey="1" tabBarExtraContent={operations} onChange={handleChange} >
        <TabPane tab="ሰረገላ አድሚን" key="1">
       {navigate('/main_page')}
        </TabPane>
        <TabPane tab="ዋና ገጽ" key="2">
         { navigate('/new_products')}
        </TabPane>
        <TabPane tab="ዕቃዎች" key="3">
         
        </TabPane>
         <TabPane tab="የታዘዙ" key="4">
       
        </TabPane>
        <TabPane tab="ብድር(ክሬዲት)" key="5">
         
        </TabPane>
        </Tabs>
        <Button type='warning' style={{marginLeft:7}}>+ አዲስ እቃ</Button>
          <div className="input">
               <Input placeholder="ይፈልጉ" onSearch={onSearch} enterButton />
              
        </div>
        <div className='btn'>
           <button type='warning'><i class="fa-solid fa-magnifying-glass"></i></button>
       </div>
       <div className='side_nav'>
        <ul>
           <li><Checkbox><a>ሁሉም ምድቦች</a></Checkbox></li>
            <li><Checkbox><a>የታሸጉ ምግቦች</a></Checkbox></li>
            <li><Checkbox><a>እህልና ጥራጥሬ</a></Checkbox></li>
            <li><Checkbox><a>መጠጦች</a></Checkbox></li>
            <li><Checkbox><a>የንጽህና መጠበቂያ</a></Checkbox></li>
            <li><Checkbox><a>የጽሕፈት መሳሪያዎች</a></Checkbox></li>
            <li><Checkbox><a>ልብስና ጫማ</a></Checkbox></li>
            </ul>
          </div>
      
          <div className='items'>
              <Row gutter={[0, 200]}>
       <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={image_12} />}
             >  
               
           <Meta title="አስቤዛ መካከለኛ ቤተሰብ"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
             <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="ካሮት" src={image_13} />}
             >  
               
           <Meta title="ካሮት"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
             <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="አስቤዛ" src={image_14} />}
             >  
               
           <Meta title="አስቤዛ"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
            <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="አስቤዛ ትልቅ ቤተሰብ" src={image_15} />}
             >  
               
           <Meta title="አስቤዛ ትልቅ ቤተሰብ"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
            <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Fanta" src={image_16} />}
             >  
               
           <Meta title="Fanta"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
             <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>

        
  
   
       <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="PepsiCo" src={image_17} />}
             >  
               
           <Meta title="PepsiCo"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
            <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Brisk" src={image_18} />}
             >  
               
           <Meta title="Brisk"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
             <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Reese's" src={image_19} />}
             >  
               
           <Meta title="Reese's"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
          <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={5}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Smarties" src={image_20} />}
             >  
               
           <Meta title="Smarties"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        <Col span={4}>
          <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="Doritos" src={image_20} />}
             >  
               
           <Meta title="Doritos"/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
             <div className='edit'>
           <EditOutlined style={{ color : 'red', fontSize : 23}}/>

           </div>
           <div className='delete'>
           <DeleteOutlined style={{color : 'red', fontSize : 23}}/>
       </div>
           <p>23br</p>
            
          </Card>
        </Col>
        
  </Row>
         
     </div>
     </div>
     </div>
     </div>
  )}