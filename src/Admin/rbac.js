import React,{useState,useEffect} from 'react'
import AdminHeader from './admin_header'
import AdminNav from './admin_nav'
import {Card,Button,Dropdown,Input,Menu,Row,Col, message,Avatar} from 'antd'
import {DownOutlined,CaretDownOutlined,MoreOutlined} from '@ant-design/icons' 
import api from '../adapter/base'
import TimeCal from '../common/timecal'
import VectorBar from '../images/Vector_bar.png'
import {useSelector} from 'react-redux'
function RBAC(){
        const {Search}=Input;
        const [systemusers,setSystemusers]=useState();
        const [admins,setAdmins]=useState([]);
        const [managers,setManagers]=useState([]);
        const [viewers,setViewers]=useState([]);
        const user=useSelector(state=>state.auth.user.access_token);
        
        const adminrole=async ()=>{
        
            await setSystemusers(admins)
        
        }
        const managerrole=async ()=>{
          
            await setSystemusers(managers)
          
        }
        const viewerrole=async ()=>{
            await setSystemusers(viewers)
        }
        const all=async ()=>{
          await api.get('/system-users',{
            headers:
                    { "Authorization": `Bearer ${user}` }
                  }).then(res=>{
            setSystemusers(res.data.data)
           })
        }
       
        const menus =(id)=> (
          <Menu
            items={[
              {
                key: '1',
                label: (
                  <a target="_blank">
                    Remove Access
                  </a>
                ),
              }]}
              />);
        const menu = (
                <Menu
                  items={[
                    {
                      key: '1',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={all}>
                         All
                        </a>
                      ),
                    },
                    {
                      key: '2',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={adminrole}>
                          Admins
                        </a>
                      ),
                    },
                    {
                      key: '3',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={viewerrole}>
                          Viewers
                        </a>
                      ),
                    },
                    {
                      key: '4',
                      label: (
                        <a target="_blank" rel="noopener noreferrer" onClick={managerrole}>
                          Managers
                        </a>
                      ),
                    },
                  ]}
                />
              );
              const menu_for_caret = (role)=>(
                <Menu
                  items={[
                    {
                      key: '1',
                      label: (
                        <a target="_blank" rel="noopener noreferrer">
                         Admin
                        </a>
                      ),
                    },
                    {
                      key: '2',
                      label: (
                        <a target="_blank" rel="noopener noreferrer">
                          Manager
                        </a>
                      ),
                    },
                    {
                      key: '3',
                      label: (
                        <a target="_blank" rel="noopener noreferrer">
                          Viewer
                        </a>
                      ),
                    }
                  ]}
                />
              );

    useEffect(
      ()=>{
        api.get('roles',{
          headers:
                  { "Authorization": `Bearer ${user}` },
                  params:{users:{}}
                }).then(res=>{
          res.data.data.forEach(role=>{
            if(role.title==='Admin'){
              setAdmins(role.users);
            }
            else if(role.title==='Manager'){
              setManagers(role.users);
            }
            else if(role.title==='Viewer'){
              setViewers(role.users);
            }
          })
        }).catch(err=>{
          console.log(err);
        })
      
      
     
      const systemusers=async ()=>{
        
        await api.get('/system-users',{
          headers:
                  { "Authorization": `Bearer ${user}` }
                }).then(res=>{
         setSystemusers(res.data.data);
        })
      }

      systemusers();
    },[]);
     const search=async (letters)=>{
      await api.get('/system-users',{
        headers:
                { "Authorization": `Bearer ${user}` },
                params:{
                  name:letters
                }
              }).then(res=>{
          setSystemusers(res.data.data)
      }).catch(err=>{
        message.error("Search error happened");
      })
     }
    return(
    <div className='rbac_main'>
        <AdminHeader/>
        <AdminNav nav_link='rbac'/>

        <h6 style={{fontSize:16,fontWeight:'bold',color:'#252733',marginTop:30, marginLeft:"8%"}}>ሃላፊነቶች</h6>
        <Row gutter={[16,16]} style={{marginLeft:'15%'}}>
          <Col xs={16} md={12} xl={8}>
             <Card  hoverable style={{ width: 320 ,height:100,borderColor:'#DFE0EB'}}>
                    <h6 style={{fontSize:13,marginTop:-5,marginLeft:5}}>{admins?.length} accounts</h6>
                    <h6 style={{fontSize:23,marginTop:-2,marginLeft:5}}>Admin</h6>

                    <div className='acc_imgs'>
                            <Avatar.Group
                                    maxCount={3}
                                    maxStyle={{
                                      color: '#FFF',
                                      backgroundColor: '#FAAD07',
                                    }}
                                  >
                                    {admins?.map((admin)=>{
                                        return(<Avatar src={admin?.profile_thumbnail_path} />);
                                    })}
                             </Avatar.Group>
                            </div>
            </Card>
            </Col>
            <Col xs={16} md={12} xl={8}>
            <Card  hoverable style={{ width: 320 ,height:100,borderColor:'#DFE0EB'}}>
                    <h6 style={{fontSize:13,marginTop:-5,marginLeft:5}}>{managers?.length} accounts</h6>
                    <h6 style={{fontSize:23,marginTop:-2,marginLeft:5}}>Manager</h6>
                    <div className='acc_imgs'>
                    <Avatar.Group
                        maxCount={3}
                        maxStyle={{
                          color: '#FFF',
                          backgroundColor: '#FAAD07',
                        }}
                      >
                        {
                        managers?.map((manager)=>{
                            return(<Avatar src={manager?.profile_thumbnail_path} />);
                        })
                        }
                     </Avatar.Group>
                    </div>
            </Card>
            </Col>
            <Col xs={16} md={12} xl={8}>
            <Card  hoverable style={{ width: 320 ,height:100,borderColor:'#DFE0EB'}}>
                    <h6 style={{fontSize:13,marginTop:-5,marginLeft:5}}>{viewers?.length} accounts</h6>
                    <h6 style={{fontSize:23,marginTop:-2,marginLeft:5}}>Viewer</h6>
                    <div className='acc_imgs'>
                    <Avatar.Group
                                    maxCount={3}
                                    maxStyle={{
                                      color: '#FFF',
                                      backgroundColor: '#FAAD07',
                                    }}
                                  >
                                    {viewers?.map((viewer)=>{
                                        return(<Avatar src={viewer?.profile_thumbnail_path} />);
                                    })}
    </Avatar.Group>
                            
                    </div>
            </Card>
            </Col>
            </Row>

            {/* table for admin  */}
            <div className='content'>
                    
                <h6 style={{fontSize:16,fontWeight:'bold',color:'#000000',marginTop:50, marginLeft:"8%"}}>የሃላፊነት መረጃ</h6>
                 <Card className='fourth_card' hoverable style={{ width: 1200, maxHeight: '100%', marginLeft:"8%", marginTop:20,borderRadius:10}} >
                 <Card className='first_card' hoverable style={{ width: 1120, height: 60, background:'#F9F9F9'}} >
                 <Search placeholder="System user Name" className='search-input' style={{marginTop:-10, marginLeft:-10, width:400,borderColor:'#F4AD33'}} onChange={e=>{search(e.target.value)}}/>
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
              <Row gutter={16}>
              <Col span={4}><Button type="link">ስም</Button></Col>
              <Col span={1}></Col>  
              <Col span={4} style={{marginLeft:'40px'}}><Button type='link'>የኢሜል አድራሻ</Button></Col>
              <Col span={2}></Col>  
              <Col span={4}><Button type="link">ሃላፊነት</Button></Col>
              <Col span={1}></Col>  
              <Col span={4}><Button type="link">የሚያበቃበት ቀን <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button></Col>
              </Row>
             </div>
                
           </Card>
           {systemusers?.map(user=>{
            return(
              <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
              <div className='items'>
              <Row gutter={16}>
                <Col span={4}>
                <div className='table_element' style={{marginTop:-20}}>
                      <Avatar src={user?.profile_thumbnail_path} style={{width:38,height:38}}/>
                      <h6 style={{fontSize:13,marginLeft:50,marginTop:-36,color:'#252733'}}>{user.first_name +' ' + user.last_name}</h6>
                      <h6 style={{fontSize:11,marginLeft:50,color:'#C5C7CD'}}>{TimeCal(user.created_at)}</h6>
                      </div>
                </Col>
                <Col span={1}></Col>
                <Col span={4}>
                <h6 style={{fontSize:13,color:'#252733',paddingLeft:'45px',marginTop:-10}}>{user.email}</h6>
                </Col>
                <Col span={6}>
                <h6 style={{fontSize:13,color:'#252733',marginTop:-10,paddingLeft:140}}>{user.role?.title}
                {
                  user.role?.title==='Admin'?
                  <Dropdown overlay={menu_for_caret}>  
                  <CaretDownOutlined style={{fontSize:12,textAlign:'center',paddingLeft:10}} />
                </Dropdown>:''

                 }
                
                </h6>
                </Col>

                <Col span={1}></Col>
                <Col span={4}>
                <h6 style={{fontSize:13,color:'#252733',marginLeft:830,marginTop:-25}}>{user?.role?.pivot?.expire_at}</h6>
                </Col>
                <Col span={5}>
                <div className='more_outline_admin_table' style={{marginTop:'-45px'}}>
                <Dropdown overlay={menus(user.id)}>
                  <a onClick={e => e.preventDefault()}>
                    <MoreOutlined style={{fontSize:20,textAlign:'center'}}/>  
                  </a>
                </Dropdown>
                </div>
                </Col>
                </Row>
                </div>
             </Card>
            );
           })}
           
           </Card>
           
          
            </div>


          

    </div>
    );
}
export default RBAC;