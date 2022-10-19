import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Row,Col,Card,Pagination,List,Avatar,Modal,Input,message,Space} from 'antd';
import {EditOutlined, DeleteOutlined,MoreOutlined,CaretDownOutlined,PlusOutlined} from '@ant-design/icons';
import api from '../adapter/base'
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import TimeCal from '../common/timecal';
import {useSelector} from 'react-redux'
function AdminDashboard(){
  const [productsCount,setProductsCount]=useState('');
  const [catagory,setCatagory]=useState('');
  const [customer,setCustomer]=useState('');
  const [packages,setPackages]=useState('');
  const [supplier,setSupplier]=useState('');
  const [orders,setOrders]=useState('');
  const [deliveredOrder,setDeliveredOrder]=useState('');
  const [specialUser,setSpecialUser]=useState('');
  const [visible,setVisible]=useState();
  const [deletevisible,setDeletevisible]=useState();
  const [supplierfetched,setSupplierfetched]=useState();
  const [address,setAddress]=useState();
  const [addVisible,setAddVisible]=useState(false);
  const [supplierId,setSupplierId]=useState();
  const [data,setData]=useState([]);
  const user=useSelector(state=>state.auth.user.access_token);
  
  const setmodalvisible=()=>{
    setVisible(true)
  }
  const setaddVisible=()=>{
    setAddVisible(true);
  }
  const navigate=useNavigate();
  const eachsupplier=async (id)=>{
    await api.get(`/suppliers/${id}`,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(res=>{
      setAddress(res.data.data.address);
      setSupplierfetched(res.data.data);
    }).catch(err=>{

    })
  }
  const showDeleteModal=()=>{
    setDeletevisible(true);
  }
  const deletesupplier=async (id)=>{
    await api.delete(`/suppliers/${id}`,{
      headers:
              { "Authorization": `Bearer ${user}` }
            })
    .then(res=>{
        message.success('Deleted Successfully');
        window.location.reload(false);
    })
    .catch(err=>{
      message.error(err);
    });

  }
  const updatesupplier=async (id)=>{
    await api.put(`suppliers/${id}`,supplierfetched,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      res=>{
        message.success('Updated successfully')
        window.location.reload(false)
      }
    ).catch(err=>{
      message.error(err.response.data.message);
    }
    );
  }
  const registerSupplier=()=>{
    api.post('suppliers',supplierfetched,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(res=>{
      message.success("registered succesfully");
      window.location.reload(false);
    }).catch(err=>{
      
      message.warning(err.response.message);
      console.log(err);
    })

  }
  useEffect(()=>{
    setSupplierfetched(prev=>{return{...prev,address:address}});
  },[address])

  useEffect(()=>{
    api.get('suppliers',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(res=>{
      for(let i=0;i<Object.keys(res.data['data']).length;i++){
        setData(pre=>{
          return [...pre,{title:res.data['data'][i].name,id:res.data['data'][i].id,created_at:res.data['data'][i].created_at,image_path:res.data['data'][i].image_path}];
        })
      }
    }).catch(err=>{
    });
    api.get('customers/count',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then((res)=>{
      setCustomer(res.data);
    })
    api.get('products/count',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then((res)=>{
      setProductsCount(res.data);
    })
    api.get('categories/count',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }
      ).then((res)=>{
        setCatagory(res.data);
      })
    api.get('packages/count',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }
      ).then((res)=>{
        setPackages(res.data);
      })
    api.get('suppliers/count',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(res=>{
      setSupplier(res.data);
    })
    api.get('orders/count',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(res=>{
      setOrders(res.data);
    })
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
    api.get('/customers/count',{
      headers:
              { "Authorization": `Bearer ${user}` },
              params:{
                special_user:{
                }
              }
            })
    .then(
      res=>{
       setSpecialUser(res.data)
    })    
  },[]);
    return(
        <div className='admin_dashboard'>
            <AdminHeader/>
            <AdminNav nav_link='main_page'/>
            <h6 style={{fontSize:17,fontWeight:'bold',marginTop:'1.6%',color:'#252733',marginLeft:'10%',letterSpacing:1}}>Dashboard</h6>
            <Row gutter={[8,16]} style={{marginLeft:'12%',marginTop:'2%',maxWidth:'70%'}}> 
                <Col xs={12} md={8} xl={6}>
             <Card loading={customer?false:true} hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#DFE0EB'}} onClick={()=>{navigate('/customer_management')}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Customers</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>{customer}</h6>
            </Card>
            </Col>
            <Col xs={12} md={8} xl={6}>
            <Card  hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#DFE0EB'}} loading={specialUser?false:true}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Special Users</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>{specialUser}</h6>
            </Card>
            </Col>
            <Col xs={12} md={8} xl={6}>
            <Card  hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#DFE0EB'}} loading={productsCount?false:true} onClick={()=>{navigate('/new_products')}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Products</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>{productsCount}</h6>
            </Card>
            </Col>
            <Col xs={12} md={8} xl={6}>
            <Card  hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#DFE0EB'}} loading={catagory?false:true} onClick={()=>{navigate('/stock_management')}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Catagories</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>{catagory}</h6>
            </Card>
            </Col>
            <Col xs={12} md={8} xl={6}>
            <Card  hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#DFE0EB'}} loading={packages?false:true}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Packages</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>{packages}</h6>
            </Card>
            </Col>
            <Col xs={12} md={8} xl={6}>
            <Card  hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#DFE0EB'}} loading={orders?false:true} onClick={()=>{navigate('/admin_order_management')}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Orders</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>{orders}</h6>
            </Card>
            </Col>
            <Col xs={12} md={8} xl={6}>
            <Card  hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#FAAD14'}} loading={supplier?false:true}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#FAAD14'}}>Merchants</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#FAAD14'}}>{supplier}</h6>
            </Card>
            </Col>
            <Col xs={12} md={8} xl={6}>
            <Card  hoverable style={{ maxWidth: 200 ,maxHeight:120,borderRadius:10,borderColor:'#DFE0EB'}} loading={deliveredOrder?false:true} onClick={()=>{navigate('/admin_order_management')}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Delivered Orders</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>{deliveredOrder}</h6>
            </Card>
            </Col>
            </Row>

            {/* admin table card */}

            <Card className='admin_table' style={{maxHeight:660,marginTop:'2.5%',marginLeft:'12%',borderRadius:10,borderColor:'#DFE0EB'}}>
                <div className='topHeader' >
                    <h6 style={{color:'#252733',fontWeight:'bold',fontSize:18}} >Merchants</h6>
                    <div className='admin_table_icons' style={{marginLeft:'87%'}}>
                        <i style={{color:'#C5C7CD'}} className="fa-solid fa-sort"></i><span style={{color:'#4B506D'}}>Sort</span>
                        <div style={{paddingLeft:'20%',display:'inline'}}></div>
                        <i style={{color:'#C5C7CD'}} className="fa-solid fa-filter"></i><span style={{color:'#4B506D'}}>Filter</span>
                    </div>
                </div>
                    <div className='table_column'>
                        <h6 style={{color:'#C5C7CD',marginLeft:"0%", fontSize:14,marginTop:'5%'}} >Merchant Name</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-27,marginLeft:"69%" ,fontSize:14}} >Edit</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-25,marginLeft:"82%", fontSize:14}} >Delete</h6>
                        <h6 style={{color:'#F4AD33',marginTop:-35,marginLeft:"95%", fontSize:20}} ><PlusOutlined onClick={setaddVisible}/></h6>

                        {/* <h6 style={{color:'#C5C7CD',marginTop:-23,marginLeft:"85%", fontSize:14}} >Deactivate</h6>   */}
                </div>
                <div className='bottom_border'>
                </div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                style={{marginTop:'1%',width:'100%'}}
                loading={data.length!==0?false:true}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={item.image_path} style={{width:40,height:40}}/>}  
                    title={item.title}
                    description={<h6 style={{fontSize:11,color:'#C5C7CD'}}>{TimeCal(item.created_at)}</h6>}
                    />
                            <EditOutlined style={{ color : '#F4AD33',marginLeft:'-42%', fontSize : 20}} onClick={()=>{setSupplierId(item.id);eachsupplier(item.id);setmodalvisible()}}/>
                            <DeleteOutlined style={{color : '#F4AD33', fontSize : 20}} onClick={()=>{showDeleteModal();eachsupplier(item.id);setSupplierId(item.id)}}/>
                            {/* <Switch style={{backgroundColor: '#BFBFBF',fontSize:15}} defaultChecked/> */}
                            <MoreOutlined style={{ fontSize:20,color:'#C5C7CD'}}/> 
                </List.Item>
                )}
            />
            <div className='bottom_border'></div>
            <div className='admin_pagination' style={{marginLeft:'67%'}}>
                    <h6 style={{ fontSize:15,marginTop:20,color:'#C5C7CD'}}>Rows per page: <span style={{color:'#4B506D'}}>6</span> <CaretDownOutlined style={{marginTop:-20,fontSize:16}}  /></h6>
                    <Pagination style={{color: '#BFBFBF',marginTop:-30,marginLeft:'55%'}} size="small" total={20} />
                </div>
            </Card>

            <Modal className='supplierEditModal' title="Edit Merchants" okText="ይስተካከል" cancelText="ይቅር" style={{textAlign:'center'}} closable={false} visible={visible} onOk={()=>updatesupplier(supplierId)} onCancel={()=>{message.warning('ምንም ስራ አልተሰራም');setVisible(false)}}>
                  <Space direction='vertical' >
                    <Input addonBefore='ስም' value={supplierfetched?.name} onChange={(e)=>setSupplierfetched(pre=>{return{...pre,name:e.target.value}})}/>
                    <Input addonBefore='ስልክ ቁጥር' value={supplierfetched?.phone_number} onChange={(e)=>setSupplierfetched(pre=>{return{...pre,phone_number:e.target.value}})}/>
                    <Input addonBefore='ከተማ' value={address?.city} onChange={(e)=>{setAddress(pre=>{return{...pre,city:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ክፍለ ከተማ' value={address?.sub_city} onChange={(e)=>{setAddress(pre=>{return{...pre,sub_city:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ወረዳ' value={address?.woreda} onChange={(e)=>{setAddress(pre=>{return{...pre,woreda:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ጎረቤት' value={address?.neighborhood} onChange={(e)=>{setAddress(pre=>{return{...pre,neighborhood:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='የቤት ቁጥር' value={address?.house_number} onChange={(e)=>{setAddress(pre=>{return{...pre,house_number:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                  </Space>
            </Modal>


            <Modal title="Add Merchants" okText="ይጨምሩ" cancelText="ይቅር" style={{textAlign:'center'}} closable={false} visible={addVisible} onOk={()=>registerSupplier()} onCancel={()=>{message.warning('ምንም ስራ አልተሰራም');setAddVisible(false)}}>
                  <Space direction='vertical' >
                    <Input addonBefore='ስም' onChange={(e)=>setSupplierfetched(pre=>{return{...pre,name:e.target.value}})}/>
                    <Input addonBefore='ስልክ ቁጥር' onChange={(e)=>setSupplierfetched(pre=>{return{...pre,phone_number:e.target.value}})}/>
                    <Input addonBefore='ከተማ' onChange={(e)=>{setAddress(pre=>{return{...pre,city:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ክፍለ ከተማ'  onChange={(e)=>{setAddress(pre=>{return{...pre,sub_city:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ወረዳ' onChange={(e)=>{setAddress(pre=>{return{...pre,woreda:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ጎረቤት' onChange={(e)=>{setAddress(pre=>{return{...pre,neighborhood:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='የቤት ቁጥር' onChange={(e)=>{setAddress(pre=>{return{...pre,house_number:e.target.value}});setSupplierfetched(pre=>{return{...pre,address:address}})}}/>
                  </Space>
            </Modal>


            <Modal title= {<h4>Sure To Delete Account?</h4>}style={{textAlign:'center'}} okText='ይጥፋ' cancelText='ይቅር' closable={false} visible={deletevisible} onOk={()=>deletesupplier(supplierId)} onCancel={()=>{message.warning('ምንም ስራ አልተሰራም');setDeletevisible(false)}}>
            <p>Are you sure you want to delete <b style={{color:'#FAAD14'}}>{supplierfetched?.name}</b> account?</p>
            </Modal>
        </div>
    );
}


export default AdminDashboard;