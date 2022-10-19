import React, { useEffect ,useState} from 'react';
import {Card,Dropdown,Button,Tag,Menu,Input,Row,Col,Modal,Avatar} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import api from '../adapter/base'
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import Ellipse1 from '../images/ellipses/Ellipse 1.png'
import Vector from '../images/ellipses/Vector_one.png' 
import Ellipse3 from '../images/ellipses/Ellipse 3.png'
import Vector1 from '../images/ellipses/Vector 1.png'
import Ellipse2 from '../images/ellipses/Ellipse 2.png'
import Vector2 from '../images/ellipses/Vector.png'
import VectorBar from '../images/Vector_bar.png'
import TimeCal from '../common/timecal';
import {useSelector} from 'react-redux'
function AdminOrderManagement(){
    const { Search }=Input;
    const [pendingOrder,setPendingOrder]=useState();
    const [deliveredOrder,setDeliveredOrder]=useState();
    const [canceledOrder,setCanceledOrder]=useState();
    const [orders,setOrders]=useState();
    const [order,setOrder]=useState();
    const [visible,setVisible]=useState(false);
    const [productName,setProductName]=useState();
    const user=useSelector(state=>state.auth.user.access_token);

    const setModalVisible=(id)=>{
      singleOrder(id)
      setTimeout(()=>{setVisible(true)},1500);
    }
    const singleOrder=(id)=>{
      api.get(`orders/${id}`,{
        headers:
                { "Authorization": `Bearer ${user}` }
              })
      .then(
        res=>{
            setOrder(res.data['data'])
        })
        .catch(
          err=>{
            console.log(err)

          })

    }

    const ordersetter=async(status)=>{
      if(status==='all'){
        await api.get('orders',{
          headers:
                  { "Authorization": `Bearer ${user}` },
       params:{
                    paginate:9,
                    user:{},
                    latest:{}
                  }
                }).then(res=>{
          setOrders(res.data['data'])
        })
      }
      else{
        await api.get('orders',{
          headers:
                  { "Authorization": `Bearer ${user}` },
                  params:{
                    status:status,
                    paginate:9,
                    latest:{},
                    user:{}
                  }
                }
        ).then(res=>{
           setOrders(res.data['data'])
        })
      }
    }
    const searchbyProduct=async ()=>{
      await api.get('orders',{
        headers:
                { "Authorization": `Bearer ${user}` },
                params:{
                  product_name:productName,
                  latest:{},
                  user:{},
                  paginate:9
                }
              }).then(res=>{
         setOrders(res.data['data'])
      })

    }
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <a target="_blank" onClick={()=>ordersetter("all")}>
                 All
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" onClick={()=>ordersetter('pending pickup-approval')}>
                  Pending
                </a>
              ),
            },
            {
              key: '3',
              label: (
                <a target="_blank" onClick={()=>ordersetter('overdue')}>
                  Overdue
                </a>
              ),
            },
            {
              key: '4',
              label: (
                <a target="_blank" onClick={()=>ordersetter('successful')}>
                  Successfull
                </a>
              ),
            },
            {
              key: '5',
              label: (
                <a target="_blank" onClick={()=>ordersetter('canceled')}>
                Canceled
                </a>
              ),
            },
           
          ]}
        />
      );
      useEffect(()=>{
        api.get('/orders/count',{
          headers:
                  { "Authorization": `Bearer ${user}` },
          params:{
                    status:'successful'
                  }
                })
        .then(
          res=>{
           setDeliveredOrder(res.data)
        })
        .catch(
          err=>{
            console.log(err);
          });
          api.get('/orders/count',{
            headers:
                    { "Authorization": `Bearer ${user}` }
                  ,
            params:{
                    status:'pending'
                  }})
          .then(
            res=>{
             setPendingOrder(res.data)
          })
          .catch(
            err=>{
              console.log(err);
            });
            api.get('/orders/count',{
              headers:
                      { "Authorization": `Bearer ${user}` },
              params:{
                status:'overdue'
              }
            })
            .then(
              res=>{
              setCanceledOrder(res.data)
            })
            .catch(
              err=>{
                console.log(err);
              });
              api.get('orders',{
                headers:
                        { "Authorization": `Bearer ${user}` },
                        params:{
                          latest:{},
                          user:{},
                          paginate:9
                   }
                      }).then(res=>{
                 setOrders(res.data['data']);
              }
              ).catch(err=>{
                console.log(err);
              });

      },[]);

    const tag=(status)=>{
      if(status==='successful'){
        
        return(<Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#88D4BD'}}>Successful</Tag>);
        
      }
      else if(status==='overdue'){
        return(<Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#E56154'}}>Overdue</Tag>);
        
      }
      else if(status==='pending pickup-approval' || 'pending customer-approval' || 'pending delivery' || 'pending payment'){
        return(<Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#FBDA85'}}>Pending</Tag>)
        
      }
      else if(status==='canceled'){
        return(<Tag style={{fontSize:13,color:'#252733',height:25, marginLeft:790,background:'#E56154'}}>Canceled</Tag>);


      }
    }
    return(
        <div className='admin_order management'>
          <AdminHeader/>
          <AdminNav nav_link='order_management'/>
          <h6 style={{fontSize:16,fontWeight:'bold',color:'#252733',marginTop:30, marginLeft:150}}>አሁን ላይ  እየተካሄዱ ያሉ ትእዛዞች</h6>
          <Row gutter={[16,16]} style={{marginLeft:'15%',marginTop:'2%'}}>
          <Col xs={16} md={12} lg={7}> 
             <Card  hoverable style={{ width: 280 ,height:100,borderColor:'#DFE0EB'}} >
             <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,opacity:2}} src={Ellipse1} alt='ellipse for items'/>
             <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-10}} src={Vector} alt='vector for items'/>
                    <h6 style={{fontSize:45,marginTop:-80,marginLeft:80,textAlign:'center',color:'#9FA2B4'}}>{pendingOrder}</h6>
                    <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:140}}>ትእዛዞች</h6>      
            </Card>
            </Col>
          <Col xs={16} md={12} lg={7}> 

            <Card  hoverable style={{ width: 280 ,height:100,borderColor:'#DFE0EB'}}>
             <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,zIndex:10}} src={Ellipse2} alt='ellipse for items'/>
             <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-10}} src={Vector2} alt='vector for items'/>
                    <h6 style={{fontSize:45,marginTop:-80,marginLeft:80,textAlign:'center',color:'#9FA2B4'}}>{canceledOrder}</h6>
                    <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:145}}>የዘገዩ</h6>
            </Card>
            </Col>
            <Col xs={16} md={12} lg={7}> 
              <Card  hoverable style={{ width: 280 ,height:100,borderColor:'#DFE0EB'}}>
              <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,opacity:2}} src={Ellipse3} alt='ellipse for items'/>
              <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-10}} src={Vector1} alt='vector for items'/>
                      <h6 style={{fontSize:45,marginTop:-80,marginLeft:100,textAlign:'center',color:'#9FA2B4'}}>{deliveredOrder}</h6>
                      <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:130}}>በትክክል የደረሱ</h6>
              </Card>
            </Col>
            </Row>
            
            {/* table for admin  */}
            <div className='content'>
                    
                <h6 style={{fontSize:16,fontWeight:'bold',color:'#000000',marginTop:50, marginLeft:150}}>የትእዛዞች መረጃ </h6>
                 <Card className='fourth_card' hoverable style={{ width: 1200, maxHeight: 800, marginLeft:100, marginTop:20,borderRadius:10}} >
                <Card className='first_card' hoverable style={{ width: 1120, height: 60, background:'#F9F9F9'}} >
                 <Search placeholder="Search Product Order" onChange={(e)=>{setProductName(e.target.value)}} onPressEnter={()=>{searchbyProduct()}} style={{marginTop:-10, marginLeft:-10, width:400,borderColor:'#F4AD33'}} />
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
              <Button type="link" style={{paddingRight:40}}>የትእዛዝ ቁጥር <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              <Button type='link' style={{paddingLeft:50}}>የደንበኛው ስም</Button>
              <Button type="link" style={{paddingLeft:230}}>የትእዛዙ ዋጋ <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              <Button type="link" style={{paddingLeft:70}}>ያለበት ሁኔታ</Button>
              <Button type="link" style={{paddingLeft:100}}>ቀን<DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              </div>
                
           </Card>
           {orders?.map(order=>{
            return(
            <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}} onClick={()=>setModalVisible(order.id)}>
            <div className='items'>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:12,marginTop:-10}}>#{order.id} </h6>

              <div className='table_element' style={{marginTop:-33,marginLeft:190}}>
                    <Avatar src={order.user?.profile_thumbnail_path} style={{width:40,height:40}}/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-40,color:'#252733'}}>{order.user?.first_name+" "+order.user?.last_name}</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>{TimeCal(order?.created_at)}</h6>
                    </div>
              <h6 style={{fontSize:13,color:'#252733',marginTop:-35,paddingLeft:520}}>{order.total_cost+ " ብር"}</h6>
                  <div className='tag' style={{marginTop:-27,marginLeft:-120}}>
                         {tag(order.status)}
                  </div>
              <h6 style={{fontSize:13,color:'#252733',marginLeft:820,marginTop:-25}}>{order.created_at.split("T")[0]}</h6>
                  
              </div>
                
           </Card>);
           })}     
           </Card>
            <Modal
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              okText="ዝጋ"
              cancelButtonProps={{style:{display:'none'}}}
              width={1000}
              closable={false}
              className='infomodal'
            >
                  <h5 style={{textAlign:'center',color:'grey'}}>የተገዙ እቃዎች ዝርዝር</h5>
                  {order?.products?
                  <div><Card className='second_card' hoverable style={{ width: "100%", height: 50, marginTop:20, background:'#EBEBEB'}}>
                      <Row gutter={16} style={{marginTop:-10,width:'90%',marginLeft:'100px'}}>
                          
                          <Col className="gutter-row" span={4}>
                          <div >የእቃው ስም</div>
                          </Col>

                          <Col className="gutter-row" span={4}>
                            <div >የእቃው ብዛት</div>
                          </Col>
                          
                          <Col className="gutter-row" span={4}>
                            <div >የአንዱ ዋጋ</div>
                          </Col>

                          <Col className="gutter-row" span={4}>
                            <div>አጠቃላይ ቅናሽ</div>
                          </Col>
              
                          <Col className="gutter-row" span={4}>
                            <div>አጠቃላይ</div>
                          </Col>

                      </Row>

                  </Card></div>:''}
                  {order?.products?.map(pro=>{
                    return(
            <Card className='second_card' hoverable style={{ width: '100%', height: '50%', marginTop:2, background:'#FFF'}}>

                      <div className='new_obj_item'>
                      <Row gutter={16} style={{width:'90%',marginLeft:'100px'}}>
                        <Col className="gutter-row" span={4}>
                          <div >
                              <h6 style={{fontSize:13,color:'grey',marginleft:10}}>{pro?.name} </h6>
                          </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                         <div >
                           <h6 style={{fontSize:13,color:'grey'}}>{pro?.pivot?.quantity} </h6>
                         </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                         <div >
                           <h6 style={{fontSize:13,color:'grey'}}>{pro?.price} </h6>
                         </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div>
                              <h6 style={{fontSize:13,color:'grey'}}>{pro.pivot?.quantity * pro?.discount +' ብር'} </h6>
                            </div>
                          </Col>
                        <Col className="gutter-row" span={4}>
                          <div>
                            <h6 style={{fontSize:13,color:'#252733'}}>{' ' +pro.pivot?.quantity * pro?.price +' ብር'}</h6>                
                          </div>
                        </Col>
                      </Row>
                      </div>
                      </Card>
                    )
                  })}
                  {order?.packages[0]?
                  <div>
                  <h5 style={{textAlign:'center',marginTop:'5%',color:'grey'}}>የተገዙ ፓኬጆች ዝርዝር</h5>
                  <Card className='second_card' hoverable style={{ width: "100%", height: 50, marginTop:20, background:'#EBEBEB'}}>
                      <Row gutter={16} style={{marginTop:-10,width:'90%',marginLeft:'100px'}}>
                          
                          <Col className="gutter-row" span={4}>
                          <div >የፓኬጅ ስም</div>
                          </Col>

                          <Col className="gutter-row" span={4}>
                            <div >የፓኬጅ ብዛት</div>
                          </Col>
                          
                          <Col className="gutter-row" span={4}>
                            <div >የአንዱ ዋጋ</div>
                          </Col>
                          <Col className="gutter-row" span={4}>
                            <div>አጠቃላይ ቅናሽ</div>
                          </Col>
                          <Col className="gutter-row" span={4}>
                            <div >አጠቃላይ</div>
                          </Col>
                          

                      </Row>

                  </Card></div>:" "}
                  {order?.packages?.map(pack=>{
                    return(
                      <Card className='second_card' hoverable style={{ width: '100%', height: '50%', marginTop:2, background:'#FFF'}}>

                      <div className='new_obj_item'>
                      <Row gutter={16} style={{width:'90%',marginLeft:'100px'}}>
                        <Col className="gutter-row" span={4}>
                          <div >
                              <h6 style={{fontSize:13,color:'grey',marginleft:10}}>{pack.name} </h6>
                          </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                         <div >
                           <h6 style={{fontSize:13,color:'grey'}}>{pack?.pivot?.quantity} </h6>
                         </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                         <div >
                           <h6 style={{fontSize:13,color:'grey'}}>{pack.price} </h6>
                         </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <div>
                            <h6 style={{fontSize:13,color:'#grey'}}>{pack?.pivot?.quantity*pack.discount+' ብር'}</h6>                
                          </div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <div>
                            <h6 style={{fontSize:13,color:'#252733'}}>{' ' +pack?.pivot?.quantity * pack.price +' ብር'}</h6>                
                          </div>
                        </Col>
                      </Row>
                      </div>
                      </Card>
                    )
                  })}
                  {order?.total_cost ?
                  <div>
                    <Card className='second_card' hoverable style={{ width: "100%", height: 50, marginTop:30, background:'#EBEBEB'}}>
                      <Row gutter={16} style={{marginTop:-10,width:'90%',marginLeft:'100px'}}>
                          
                          <Col className="gutter-row" span={4}>
                          <div >የሁሉም ድምር</div>
                          </Col>

                          <Col className="gutter-row" span={4}>
                            <div ></div>
                          </Col>
                          
                          <Col className="gutter-row" span={4}>
                            <div ></div>
                          </Col>

                          <Col className="gutter-row" span={4}>
                            <div ></div>
                          </Col>

                          <Col className="gutter-row" span={4}>
                            <div><b>{order?.total_cost + ' ብር'}</b></div>
                          </Col>

                      </Row>

                  </Card>

                  </div>
                  :""}
                  
            </Modal>
          
            </div>


            
        </div>
    );
}
export default AdminOrderManagement;