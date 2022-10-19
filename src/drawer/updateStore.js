import { Button,Input,message,Space } from 'antd';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../adapter/base'
const UpdateStore = (props) => {
  const users=useSelector(state=>state.auth.user.access_token);
  const [warehouse,setWarehouse]=useState();
  const [address,setAddress]=useState()
  useEffect(()=>{
    setWarehouse(prev=>{return{...prev,address:address}});
  },[address])
  useEffect(()=>{
    api.get(`stores/${props.data}`,{
      headers:{
        'Authorization':`Bearer ${users}`
      }
    })
    .then(res=>{
      setWarehouse(res.data.data);
      setAddress(res.data.data.address);
      
    })
    .catch(err=>{
      message.warning(err.data.response.message);
  
    })
  },[props.data])


  const update=()=>{
    api.put(`stores/${props.data}`,warehouse,{
      headers:{
        'Authorization':`Bearer ${users}`
      }
    })
    .then(res=>{
      message.success("Updated Successfully");
      window.location.reload(false);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  

  return (
    <>
      <h3 style={{marginLeft:'4%'}}>Update WareHouse</h3>
      <Space direction='vertical' style={{width:'100%',marginTop:'4%'}}>
          <Input addonBefore="የዌር ሀውስ ስም" value={warehouse?.name} onChange={(e)=>{setWarehouse(prev=>{return{...prev,name:e.target.value}})}}/>
          <Input addonBefore="ስልክ ቁጥር" value={warehouse?.phone_number} showCount maxLength={12} onChange={(e)=>{setWarehouse(prev=>{return{...prev,phone_number:e.target.value}})}}/>
          <Input addonBefore="ከተማ" value={address?.city} onChange={(e)=>{setAddress(prev=>{return{...prev,city:e.target.value}})}}/>
          <Input addonBefore="ክፍለ ከተማ" value={address?.sub_city} onChange={(e)=>{setAddress(prev=>{return{...prev,sub_city:e.target.value}})}}/>
          <Input addonBefore="ወረዳ" value={address?.woreda} onChange={(e)=>{setAddress(prev=>{return{...prev,woreda:e.target.value}})}}/> 
          <Input addonBefore="ጎረቤት" value={address?.neighborhood} onChange={(e)=>{setAddress(prev=>{return{...prev,neighborhood:e.target.value}})}}/>  
          <Input addonBefore="የቤት ቁጥር" value={address?.house_number} onChange={(e)=>{setAddress(prev=>{return{...prev,house_number:e.target.value}})}}/>
          <Button style={{marginTop:'2%',marginLeft:'10%',width:'80%'}} onClick={()=>update()}>Update</Button>
      </Space>
    </>
  );
};

export default UpdateStore;