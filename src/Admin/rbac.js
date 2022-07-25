import React from 'react'
import AdminHeader from './admin_header'
import AdminNav from './admin_nav'
import { useNavigate } from 'react-router-dom'
import {Card,Tag,Button,Dropdown,Input,Menu} from 'antd'
import {DownOutlined,CaretDownOutlined,MoreOutlined} from '@ant-design/icons' 
import Image1 from '../images/m 5.png';
import VectorBar from '../images/Vector_bar.png'
import Acc1 from '../images/account/4 4.png'
import Acc2 from '../images/account/5 7.png'
import Acc3 from '../images/account/5 8.png'
import Acc4 from '../images/account/5 9.png'
import Acc5 from '../images/account/6 4.png'
import Acc6 from '../images/account/6 5.png'
import Acc7 from '../images/account/6 6.png'
import Acc8 from '../images/account/7 1.png'
function RBAC(){
        const {Search}=Input;
        const navigate=useNavigate();
        function navigateAdmins(){
          navigate('/rbac_filter');
        }
        function navigateAllRoles(){
          navigate('/rbac');
        }
        const menu = (
                <Menu
                  items={[
                    {
                      key: '1',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={navigateAllRoles}>
                         All
                        </a>
                      ),
                    },
                    {
                      key: '2',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={navigateAdmins}>
                          Admin
                        </a>
                      ),
                    },
                    {
                      key: '3',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                          Viewer
                        </a>
                      ),
                    },
                    {
                      key: '4',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                          SuperAdmin
                        </a>
                      ),
                    },
                  ]}
                />
              );

    return(
    <div className='rbac_main'>
        <AdminHeader/>
        <AdminNav nav_link='rbac'/>

        <h6 style={{fontSize:16,fontWeight:'bold',color:'#252733',marginTop:30, marginLeft:150}}>ሃላፊነቶች</h6>
             <Card  hoverable style={{ width: 320 ,height:100,marginTop:30,marginLeft:250,borderColor:'#DFE0EB'}}>
                    <h6 style={{fontSize:13,marginTop:-5,marginLeft:5}}>3 accounts</h6>
                    <h6 style={{fontSize:23,marginTop:-2,marginLeft:5}}>Admin</h6>
                    <div className='acc_imgs'>
                            <img src={Acc1}  alt='admin accounts'/>
                            <img src={Acc2} alt='admin accounts'/>
                            <img src={Acc3} alt='admin accounts'/>
                            </div>
                    {/* <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:150}}>ትእዛዞች</h6>       */}
            </Card>

            <Card  hoverable style={{ width: 320 ,height:100,marginTop:-100,marginLeft:650,borderColor:'#DFE0EB'}}>
                    <h6 style={{fontSize:13,marginTop:-5,marginLeft:5}}>4 accounts</h6>
                    <h6 style={{fontSize:23,marginTop:-2,marginLeft:5}}>Manager</h6>
                    <div className='acc_imgs'>
                            <img src={Acc5}  alt='super admin accounts'/>
                            <img src={Acc4} alt='super admin accounts'/>
                            <img src={Acc6} alt='super admin accounts'/>
                            <img src={Acc1} alt='super admin accounts '/>
                    </div>
            </Card>

            <Card  hoverable style={{ width: 320 ,height:100,marginTop:-100,marginLeft:1050,borderColor:'#DFE0EB'}}>
                    <h6 style={{fontSize:13,marginTop:-5,marginLeft:5}}>2 accounts</h6>
                    <h6 style={{fontSize:23,marginTop:-2,marginLeft:5}}>Viewer</h6>
                    <div className='acc_imgs'>
                            <img src={Acc8}  alt='Viewer accounts'/>
                            <img src={Acc7} alt='Viewer accounts'/>
                            
                    </div>
            </Card>



            {/* table for admin  */}
            <div className='content'>
                    
                <h6 style={{fontSize:16,fontWeight:'bold',color:'#000000',marginTop:50, marginLeft:150}}>የሃላፊነት መረጃ</h6>
                 <Card className='fourth_card' hoverable style={{ width: 1200, height: 750, marginLeft:200, marginTop:20,borderRadius:10}} >
                <Card className='first_card' hoverable style={{ width: 1120, height: 60, background:'#F9F9F9'}} >
                 <Search placeholder="Order ID, product" enterButton className='search-input' style={{marginTop:-10, marginLeft:-10, width:400,borderColor:'#F4AD33'}} />
                 <Dropdown
                    overlay={menu}
                    placement="bottom"
                    arrow={{
                         pointAtCenter: true,
                         }} >
                    
                         <Button style={{marginTop:-20, marginLeft:500, height:37, background:'#F9F9F9', color:'#F4AD33', borderColor:'#F4AD33'}}>
                         <img src={VectorBar} alt="vector" style={{paddingRight:10}} /> ሃላፊነት</Button>
                 </Dropdown>
               
                   </Card>
                   <Card className='second_card'
           hoverable
           style={{ width: 1120, height: 50, marginTop:20, background:'#EBEBEB'}}
           >
            <div className='links' style={{marginTop:-15}}>
              <Button type="link" style={{paddingRight:100}}>ስም</Button>
              <Button type='link' style={{paddingLeft:170}}>የእሜል አድራሽ</Button>
              <Button type="link" style={{paddingLeft:190}}>ሃላፊነት</Button>
              <Button type="link" style={{paddingLeft:120}}>የሚያበቃበት ቀን <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
             </div>
                
           </Card>
           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>Sismak934@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Admin <CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>05-04-2022</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>


           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>Abeni16@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Super Admin <CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>25-03-2022</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>



           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>Gere12@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Viewer<CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>19-03-2022</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>


            <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>Merryluv@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Viewer<CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>23-03-2022</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>
           




           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>hewangeb@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Viewer<CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>02-11-2021</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>



   


          <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>robelg@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Viewer<CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>12-03-2022</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>
    



    <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>aman12@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Super Admin<CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>18-01-2022</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>





           <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
            <div className='items'>
              <div className='table_element' style={{marginTop:-22,marginLeft:6}}>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                    </div>

              <h6 style={{fontSize:13,color:'#252733',marginTop:-40,marginLeft:320}}>samri23@gmail.com</h6>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-27,paddingLeft:620}}>Admin<CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}}/></h6>
        
              <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>12-05-2022</h6>
              
              <div className='more_outline_admin_table'>
                  <MoreOutlined style={{fontSize:20,textAlign:'center',marginTop:-25}}/>
              </div>
                  
              </div>
                
           </Card>




                
      
           
      
           
           
                
           </Card>
           
          
            </div>


          

    </div>
    );
}
export default RBAC;