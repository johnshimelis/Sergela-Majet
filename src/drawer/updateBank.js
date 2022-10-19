import React,{useEffect} from 'react';
import { Button, Input,message, Space } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../adapter/base'
const UpdateBank = (props) => {
    const [bank,setBank]=useState();
    const [address,setAddress]=useState();
    const user=useSelector(state=>state.auth.user.access_token);
    const update=async ()=>{
        await api.put(`banks/${props.id}`,bank,{
            headers:{
                'Authorization':`Bearer ${user}`
            }
        })
        .then(res=>{
           message.success("Bank Information Updated Succesfully");
           window.location.reload(false);
        })
        .catch(err=>{
            message.error(err.response.data.message);
        })
    }
    useEffect(()=>{
        const bank_=async ()=>{
            await api.get(`banks/${props.id}`,{
               headers:{
                   'Authorization':`Bearer ${user}`
               }
            }).then(res=>{
               setBank(res.data.data);
               setAddress(res.data.data.address);
            })
   
       }
       bank_();    
    },[props.id])
    useEffect(()=>{
        setBank(prev=>{return{...prev,address:address}});
    },[address])
    
    return(
            <>
            <h4 style={{marginBottom:'2%'}}>Update Bank Information</h4>
            <Space direction='vertical'style={{marginTop:'2%',marginLeft:'10%'}}>
                <Input addonBefore="የባንክ ስም" value={bank?.name} onChange={(e)=>{setBank(prev=>{return{...prev,name:e.target.value}})}}/>
                <Input addonBefore="ስልክ ቁጥር" value={bank?.phone_number} onChange={(e)=>{setBank(prev=>{return{...prev,phone_number:e.target.value}})}}/>
                <Input addonBefore="ኢሜል" value={bank?.email} onChange={(e)=>{setBank(prev=>{return{...prev,email:e.target.value}})}}/>
                <Input addonBefore="ከተማ" value={address?.city} onChange={(e)=>{setAddress(prev=>{return{...prev,city:e.target.value}})}}/>
                <Input addonBefore="ክፍለ ከተማ" value={address?.sub_city} onChange={(e)=>{setAddress(prev=>{return{...prev,sub_city:e.target.value}})}}/>
                <Input addonBefore="ወረዳ" value={address?.woreda} onChange={(e)=>{setAddress(prev=>{return{...prev,woreda:e.target.value}})}}/>
                <Input addonBefore="የቤት ቁጥር" value={address?.house_number} onChange={(e)=>{setAddress(prev=>{return{...prev,house_number:e.target.value}})}}/>
                <Button onClick={()=>update()} style={{marginTop:'2%',marginLeft:'30%'}}>Update</Button>
            </Space>
            </>
)}

export default UpdateBank;