import api from '../adapter/base'
import {useEffect,useState} from 'react'
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import AdminNav from './admin_nav';
import AdminHeader from './admin_header';
import {Button,Table,Space,Input,Modal, Select, message,Tooltip,Drawer} from 'antd'
import {useSelector} from 'react-redux'
import MapSelector from '../common/mapselector';
import UpdateStore from '../drawer/updateStore';
const WareHouse=()=>{
    const [Visible,setVisible]=useState(false);
    const [warehouse,setWarehouse]=useState();
    const [address,setAddress]=useState();
    const [data,setData]=useState([]);
    // update visiblity for edit stores
    const [vis,setVis]=useState(false)
    const [storeToupdate,setStoreToUpdate]=useState();
    const {Option}=Select;
    const user=useSelector(state=>state.auth.user.access_token)
    const getplace=(place)=>{
      setAddress(prev=>{return{...prev,latitude:place.lat,longitude:place.lng}})
    }
    const deleteStore=(id)=>{
      api.delete(`stores/${id}`,{
        headers:
                { "Authorization": `Bearer ${user}` }
              }).then(res=>{
                message.warning("Deleted Successfully");
                window.location.reload(false);
              }).catch(err=>{
                message.error("ምንም ስራ አልተሰራም፡፡");
              })
    }
    const columns=[{
      key:'1',
      title:'Name',
      dataIndex:'name'
    },{
      key:'2',
      title:'Address',
      dataIndex:'address'

    }
    ,{
      key:'3',
      title:'Products Count',
      dataIndex:'product_count'

    },{
      key :"4",
      render :(records) =>{
        return(
          <>
          
          <Tooltip title='Edit Store Detail'>
            <EditOutlined style={{ color : '#F4AD33',marginLeft : 20, fontSize : 20,marginTop:'-40px'}} onClick={()=>{setStoreToUpdate(records.id);setVis(true)}}/>   
             
          </Tooltip>
          <Tooltip title='Delete Store'>
              <DeleteOutlined style={{color : 'red',marginLeft :20, fontSize : 20}} onClick={()=>deleteStore(records.id)}/>
          </Tooltip>
          </>
        );
      }
    }
  ]
  const registerWarehouse=()=>{
    api.post('/stores',warehouse,
    {
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(res=>{
              message.success("Registered Successfully");
              window.location.reload(false);
            }).catch(err=>{
              message.warning(err?.response?.data?.message);
            });
  }
  useEffect(()=>{
      api.get('stores',{
        headers:
                { "Authorization": `Bearer ${user}` }
              })
      .then(res=>{
        
        for(let i=0;i<res.data.data.length;i++){
            setData(pre=>
              {
                return[...pre,{id:res.data.data[i].id,name:res.data.data[i].name,address:res.data.data[i].address.city?res.data.data[i].address.city:'?',product_count:res.data.data[i]?.number_of_products}]})
           
        }
      })
      .catch(err=>{
        console.log('Error Happened somewhere');
      })
  },[])
  return (
  <div> 
    <AdminHeader/>
    <AdminNav/>
    <div >
          <Button style={{marginTop:'3%',marginLeft:'5%',backgroundColor:'#FAAD14'}} onClick={()=>{setVisible(true)}}>+ አዲስ ዌር ሀውስ ይጨምሩ</Button>
      </div>
      <div style={{marginTop:'3%',width:'70%',marginLeft:'9%'}}>
      <Table columns={columns} dataSource={data} loading={data.length===0}/>
      </div>

      <Modal
            title="Register WareHouse"
            style={{ top: 20 }}
            visible={Visible}
            onOk={() => {registerWarehouse()}}
            onCancel={() => {message.warning("ምንም ስራ አልተሰራም");setVisible(false)}}
            closable={false}
            okText='ይመዝገብ'
            cancelText='ይቅር'
        >
        <Space direction='vertical' style={{width:'80%'}}>
            <MapSelector onChanges={getplace}/>
            <Select defaultValue='Type' style={{width:'100%'}} onChange={(value)=>{setWarehouse(pre=>{return{...pre,type:value}})}}>
              <Option value='normal'>Normal</Option>
              <Option value='mobile'>Mobile</Option>
              
            </Select>
            <Input placeholder="የዌር ሀውስ ስም"  onChange={(e)=>{setWarehouse(pre=>{return{...pre,name:e.target.value}})}}/>
            <Input placeholder="ኢሜል" onChange={(e)=>{setWarehouse(pre=>{return{...pre,email:e.target.value}})}}/>
            <Input placeholder="ስልክ ቁጥር"  showCount maxLength={12} onChange={(e)=>{setWarehouse(pre=>{return{...pre,phone_number:e.target.value}})}}/>
            <Input placeholder="ከተማ" onChange={(e)=>{setAddress(pre=>{return{...pre,city:e.target.value}});setWarehouse(pre=>{return{...pre,address}})}}/>
            <Input placeholder="ክፍለ ከተማ" onChange={(e)=>{setAddress(pre=>{return{...pre,sub_city:e.target.value}});setWarehouse(pre=>{return{...pre,address}})}}/>
            <Input placeholder="ወረዳ"  onChange={(e)=>{setAddress(pre=>{return{...pre,woreda:e.target.value}});setWarehouse(pre=>{return{...pre,address}})}}/> 
            <Input placeholder="ጎረቤት"  onChange={(e)=>{setAddress(pre=>{return{...pre,neighborhood:e.target.value}});setWarehouse(pre=>{return{...pre,address}})}}/>  
            <Input placeholder="የቤት ቁጥር"  onChange={(e)=>{setAddress(pre=>{return{...pre,neighborhood:e.target.value}});setWarehouse(pre=>{return{...pre,address}})}}/>  
        </Space>
      </Modal>
      <Drawer visible={vis} onClose={()=>setVis(false)} closable={false}>
        <UpdateStore data={storeToupdate}/>
      </Drawer>
  </div>
  )

}

export default WareHouse;