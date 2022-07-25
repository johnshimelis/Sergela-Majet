import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Card,Dropdown,Button,Tag,Menu,Input} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import Image1 from '../images/m 5.png';
import Ellipse1 from '../images/ellipses/Ellipse 1.png'
import Vector from '../images/ellipses/Vector_one.png' 
import Ellipse3 from '../images/ellipses/Ellipse 3.png'
import Vector1 from '../images/ellipses/Vector 1.png'
import Ellipse2 from '../images/ellipses/Ellipse 2.png'
import Vector2 from '../images/ellipses/Vector.png'
import VectorBar from '../images/Vector_bar.png'
function AdminOrderManagementSuccesful(){
    const { Search }=Input;
    const navigate=useNavigate();
    function navigateOrderManagement(){
        navigate('/admin_order_management');
    }
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a target="_blank" rel="noopener noreferrer" onClick={navigateOrderManagement}>
                 All
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
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
              key: '4',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  Successful
                </a>
              ),
            },
            {
              key: '5',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Canceled
                </a>
              ),
            },
           
          ]}
        />
      );
    return(
        <div className='admin_order management'>
          <AdminHeader/>
          <AdminNav nav_link='order_management'/>
          <h6 style={{fontSize:16,fontWeight:'bold',color:'#252733',marginTop:30, marginLeft:150}}>አሁን ላይ  እየተካሄዱ ያሉ ትእዛዞች</h6>
             <Card  hoverable style={{ width: 280 ,height:100,marginTop:30,marginLeft:250,borderColor:'#DFE0EB'}}>
             <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,opacity:2}} src={Ellipse1} alt='ellipse for items'/>
             <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-10}} src={Vector} alt='vector for items'/>
                    <h6 style={{fontSize:45,marginTop:-80,marginLeft:100,textAlign:'center',color:'#9FA2B4'}}>42</h6>
                    <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:140}}>ትእዛዞች</h6>      
            </Card>

            <Card  hoverable style={{ width: 280 ,height:100,marginTop:-100,marginLeft:580,borderColor:'#DFE0EB'}}>
             <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,zIndex:10}} src={Ellipse2} alt='ellipse for items'/>
             <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-10}} src={Vector2} alt='vector for items'/>
                    <h6 style={{fontSize:45,marginTop:-80,marginLeft:100,textAlign:'center',color:'#9FA2B4'}}>63</h6>
                    <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:145}}>የዘገዩ</h6>
            </Card>

            <Card  hoverable style={{ width: 280 ,height:100,marginTop:-100,marginLeft:910,borderColor:'#DFE0EB'}}>
             <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,opacity:2}} src={Ellipse3} alt='ellipse for items'/>
             <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-10}} src={Vector1} alt='vector for items'/>
                    <h6 style={{fontSize:45,marginTop:-80,marginLeft:100,textAlign:'center',color:'#9FA2B4'}}>25</h6>
                    <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:130}}>በትክክል የደረሱ</h6>
            </Card>
            
            {/* table for admin  */}
            <div className='content'>
                    
                <h6 style={{fontSize:16,fontWeight:'bold',color:'#000000',marginTop:50, marginLeft:150}}>የትእዛዞች መረጃ </h6>
                 <Card className='fourth_card' hoverable style={{ width: 1200, height: 800, marginLeft:100, marginTop:20,borderRadius:10}} >
                <Card className='first_card' hoverable style={{ width: 1120, height: 60, background:'#F9F9F9'}} >
                 <Search placeholder="Order ID, product" enterButton  style={{marginTop:-10, marginLeft:-10, width:400,borderColor:'#F4AD33'}} />
                 <Dropdown
                    overlay={menu}
                    placement="bottom"
                    arrow={{
                         pointAtCenter: true,
                         }} >
                    <Button style={{marginTop:-20, marginLeft:500, height:40, background:'#F9F9F9', color:'#F4AD33', borderColor:'#F4AD33'}}>
                         <img src={VectorBar} alt="vector" style={{paddingRight:10}} /> አማራጮች</Button>
                 </Dropdown>
               
                   </Card>
                   <Card className='second_card'
           hoverable
           style={{ width: 1120, height: 50, marginTop:20, background:'#EBEBEB'}}
           >
            <div className='links' style={{marginTop:-15}}>
              <Button type="link" style={{paddingRight:40}}>የእቃው ቁጥር <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              <Button type='link' style={{paddingLeft:50}}>የደንበኛው ስም</Button>
              <Button type="link" style={{paddingLeft:100}}>የእቃው ስም</Button>
              <Button type="link" style={{paddingLeft:80}}>የእቃው ዋጋ <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              <Button type="link" style={{paddingLeft:70}}>ያለበት ሁኔታ</Button>
              <Button type="link" style={{paddingLeft:100}}>ቀን <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              </div>
                
           </Card>
           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:12,marginTop:-10}}>#2340 </h6>

              <div className='table_element' style={{marginTop:-38,marginLeft:190}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:440}}>ቲማቲም</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>82 ብር</h6>
                  <div className='tag' style={{marginTop:-27}}>
                    <Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#88D4BD'}}>Successful</Tag>
                  </div>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:950,marginTop:-25}}>05-04-2022</h6>
                  
              </div>
                
           </Card>

           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:12,marginTop:-10}}>#2342 </h6>

              <div className='table_element' style={{marginTop:-38,marginLeft:190}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:440}}>ኦማር ዘይት</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>948 ብር</h6>
                  <div className='tag' style={{marginTop:-27}}>
                    <Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#88D4BD'}}>Successful</Tag>
                  </div>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:950,marginTop:-25}}>19-03-2022</h6>
                  
              </div>
                
           </Card>

           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:12,marginTop:-10}}>#2343 </h6>

              <div className='table_element' style={{marginTop:-38,marginLeft:190}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:440}}>ሳሙና</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>56 ብር</h6>
                  <div className='tag' style={{marginTop:-27}}>
                    <Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#88D4BD'}}>Successful</Tag>
                  </div>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:950,marginTop:-25}}>19-03-2022</h6>
                  
              </div>
                
           </Card>

           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:12,marginTop:-10}}>#2344 </h6>

              <div className='table_element' style={{marginTop:-38,marginLeft:190}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:440}}>እንቁላል</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>120 ብር</h6>
                  <div className='tag' style={{marginTop:-27}}>
                    <Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#88D4BD'}}>Successful</Tag>
                  </div>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:950,marginTop:-25}}>02-03-2022</h6>
                  
              </div>
                
           </Card>



        




           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:12,marginTop:-10}}>#2346 </h6>

              <div className='table_element' style={{marginTop:-38,marginLeft:190}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:440}}>ጥቅል ጎመን</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>82 ብር</h6>
                  <div className='tag' style={{marginTop:-27}}>
                    <Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#88D4BD'}}>Successful</Tag>
                  </div>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:950,marginTop:-25}}>12-03-2022</h6>
                  
              </div>
                
           </Card>


           

            


                      
      
           
           
                
           </Card>
           
          
            </div>


            
        </div>
    );
}
export default AdminOrderManagementSuccesful;