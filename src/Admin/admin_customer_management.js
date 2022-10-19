import React,{useEffect,useState} from 'react';
import {Card,Switch,Pagination,List,Avatar,Modal,message,Input,Space} from 'antd';
import {EditOutlined, DeleteOutlined,MoreOutlined,CaretDownOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';
import api from '../adapter/base'
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import TimeCal from '../common/timecal';
import ClipLoader from 'react-spinners/ClipLoader'
import {useSelector} from 'react-redux'
function AdminCustomerManagement(){
  const [data,setData] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible,setIsEditModalVisible]=useState(false);
  const [deleteId,setDeleteId]= useState();
  const [customerName,setCustomerName]=useState();
  const[customer,setCustomer]=useState(null);
  const [updateId,setUpdateId]=useState();
  const [page,setPage]=useState();
  const [lastPage,setLastPage]=useState();
  const [address,setAddress]=useState();
  const allcustomer=()=>{return api.get('products',{
    headers:
            { "Authorization": `Bearer ${user}` }
          })}
  const customers=useQuery('all-customer',()=>{allcustomer()})
  const user=useSelector(state=>state.auth.user.access_token);
  const customer_=async (id)=>{
    await api.get(`users/${id}`,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then((res)=>{
      setAddress(prev=>{return{...prev,address:res.data.data.address}})
      setCustomer({...res.data['data'],address});
    });
    showEditModal();
  }
  
  const activateDeactivator=async (id,val)=>{
    var value=val;
    if(value%2===0){
      value=1
    }
    else{
      value=0
    }
    await api.get(`users/${id}`,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then((res)=>{
      setCustomer({...res.data['data']});
      api.put(`users/${id}`,{...customer,is_active:value},{
        headers:
                { "Authorization": `Bearer ${user}` }
              }).then((res)=>{
        setCustomer({...res.data['data']});
         if(value===0){
             message.warning('Customer Deactivated Succesfully');
             window.location.reload(false);
            }
         else{
             message.success("Customer Activated Succesfully");
             window.location.reload(false);

         }
      })
    });

  }
  const showEditModal = () => {
    setIsEditModalVisible(true);
  }
  const handle_edit_ok=()=>{
       handle_edit(updateId)
  }
  const handle_edit=async (id)=>{
    await api.put(`users/${id}`,customer,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then((res)=>{
      message.success("ማስተካከያው ተደርጎአል፡፡",10)
      window.location.reload(false);
    }).catch((err)=>{
      message.warning(err.response.data)
    });
  }
  const cancel_edit=()=>{
    setIsEditModalVisible(false);
    message.error("ምንም አይነት ማስተካከያ አልተደረገም!",10);
    
  }
  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const handleOk = () => {
    setIsDeleteModalVisible(false);
    delete_cusomer_(deleteId);
  };

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    setTimeout(()=>{message.error("ስረዛው ተቋርጧል!")},1000);
    
  };
  const delete_cusomer_=async (id)=>{
    await api.delete(`users/${id}`,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (res)=> 
      {
      window.location.reload(false);
      message.success("ስራው በተሳካ ሁኔታ ተሰርቶአል!");
      });
  }
  useEffect(()=>{
    api.get('/customers',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then((res)=>{
      setLastPage(res.data.meta.last_page)
      for(let i=0;i<Object.keys(res.data['data']).length;i++){
        setData(pre=>{
          return [...pre,{id:res.data['data'][i].id,title:res.data['data'][i].first_name,is_active:res.data['data'][i].is_active,created_at:res.data['data'][i].created_at,image:res.data['data'][i].profile_thumbnail_path}]
        })
      }
    });
  },[])
    const paginater=async(page)=>{
      await api.get('/customer',{params:{
        page:page
      }},{
        headers:
                { "Authorization": `Bearer ${user}` }
              })
      .then(res=>{

            
      })
      .catch(err=>{

      })
    }
    return(
        <div className='admin_dashboard'>
            <AdminHeader/>
            <AdminNav nav_link='customer_management'/>

            {/* admin table card */}

            <Card 
         className='admin_table' style={{maxHeight:920,marginTop:'2.5%',marginLeft:'12%',borderRadius:10,borderColor:'#DFE0EB'}}>
                <div className='topHeader'>
                    <h6 style={{color:'#252733',fontWeight:'bold',fontSize:18}} >Customers</h6>
                    <div className='admin_table_icons' style={{marginLeft:'87%'}}>
                        <i style={{color:'#C5C7CD'}} className="fa-solid fa-sort"></i><span style={{color:'#4B506D'}}>Sort</span>
                        <div style={{paddingLeft:'20%',display:'inline'}}></div>
                        <i style={{color:'#C5C7CD'}} className="fa-solid fa-filter"></i><span style={{color:'#4B506D'}}>Filter</span>
                    </div>
                </div>
                    <div className='table_column'>
                        <h6 style={{color:'#C5C7CD',marginLeft:"0%", fontSize:14,marginTop:'5%'}} >Customer Name</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-27,marginLeft:"69%" ,fontSize:14}} >Edit</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-25,marginLeft:"76%", fontSize:14}} >Delete</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-23,marginLeft:"85%", fontSize:14}} >Deactivate</h6>
                </div>
                <div className='bottom_border'>
                </div>
                {
                  data.length!==0?<List
                  itemLayout="horizontal"
                  dataSource={data}
                  style={{marginTop:'1%',width:'100%'}}
                  renderItem={item => (
                  <List.Item>
                      <List.Item.Meta
                      avatar={<Avatar src={item.image} style={{width:40,height:40}}/>}  
                      title={item.title}
                      description={<h6 style={{fontSize:11,color:'#C5C7CD'}}>{TimeCal(item.created_at)}</h6>}
                      />
                              <EditOutlined style={{ color : '#F4AD33',paddingLeft:'3%',marginLeft:'-40%', fontSize : 20}} onClick={()=>{customer_(item.id);setUpdateId(item.id)}}/>
                              <DeleteOutlined style={{color : '#F4AD33', fontSize : 20}} onClick={()=>{showDeleteModal();setDeleteId(item.id);setCustomerName(item.title)}}/>
                              <Switch style={{fontSize:13}} defaultChecked={item.is_active?false:true} onChange={()=>{activateDeactivator(item.id,item.is_active)}}/>
                              <MoreOutlined style={{ fontSize:20,color:'#C5C7CD'}}/> 
                  </List.Item> )}
            />:
                  <div style={{textAlign:'center',marginTop:'20%',height:'500px'}}>
                    <ClipLoader
                      size={20}
                      color={"#FAAD14"}
                      loading={true}
                    />
                  </div> 
                  }
                
            
               
            <div className='bottom_border'></div>
            <div className='admin_pagination' style={{marginLeft:'67%'}}>
                    <h6 style={{ fontSize:15,marginTop:20,color:'#C5C7CD'}}>Rows per page: <span style={{color:'#4B506D'}}>10</span> <CaretDownOutlined style={{marginTop:-20,fontSize:16}}  /></h6>
                    <Pagination style={{color: '#BFBFBF',marginTop:-30,marginLeft:'55%'}} size="small" total={lastPage*10}
                    pagination={{
                      pageSize:10,
                      total:{lastPage}*10,
                      onChange:(page,pageSize)=>{
                        setPage(page);
                        paginater(page);
                      }      
                     }}
                    />
                </div>
            </Card>
            <Modal className='delete_modal' closable={false} okText="እሽ" cancelText='ይቅር' visible={isDeleteModalVisible} title={<div><i class='fa fa-trash' aria-hidden='true' style={{fontSize:20,color:'red'}}></i> <span>ለማጥፋት ወስነዋል?</span> </div>} onOk={handleOk} onCancel={handleCancel}>
                            <p style={{fontSize:15}}> <b>{customerName}</b> ከገጽዎ ይጥፋ?</p>
            </Modal>
            <Modal className='edit_modal' closable={false} okText="ይስተካከል" cancelText='ይቅር' visible={isEditModalVisible} title={<div><i class='fa fa-edit' aria-hidden='true' style={{fontSize:20,textAlign:'center',color:'#F6BE5D'}}></i> <span>ማስተካከያ</span> </div>} onOk={handle_edit_ok} onCancel={cancel_edit}>
                            <Space direction='vertical'>
                            <Input addonBefore='የመጀመሪያ ስም' value={customer?.first_name} onChange={(e)=>{
                              setCustomer(prev=>{
                                    return{...prev,first_name:e.target.value}
                                  })
                            }}/>
                            <Input addonBefore='የመጨረሻ ስም' value={customer?.last_name} onChange={(e)=>{
                              setCustomer(prev=>{
                                    return{...prev,last_name:e.target.value}
                                  })
                            }}/>
                            <Input addonBefore='ስልክ ቁጥር' value={customer?.phone_number} onChange={(e)=>{
                              setCustomer(prev=>{
                                    return{...prev,phone_number:e.target.value}
                                  })
                            }}/>
                            <Input addonBefore='መለያ ስም' value={customer?.user_name} onChange={(e)=>{
                              setCustomer(prev=>{
                                    return{...prev,user_name:e.target.value}
                                  })
                            }}/>
                            </Space>
            </Modal>
        </div>
    );
}


export default AdminCustomerManagement;