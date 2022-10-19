import React,{useState,useEffect} from 'react';
import {Input,Button,Space,message,notification} from 'antd';
import { MailOutlined} from '@ant-design/icons'; 
import {useNavigate} from 'react-router-dom'
import api from '../adapter/base'
const ResetPassword=()=>{
  const [resetuser,setResetUser]=useState();
  const navigate=useNavigate();
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  useEffect(()=>{
    setResetUser(prev=>{return {...prev,token:params.token}});
    setResetUser(prev=>{return{...prev,email:params.email}});
  },[])
   
      const onSucess=()=>{
        message.success("በተሳካ ሁኔታ ተስተካክሏል! እንኳን በደህና መጡ፡:");
      }
      const onError=(err)=>{
        message.error(err);
        message.error("ማስተካከያው አልተሳካም፡፡");
      }
      const reset=async ()=>
      {
        await api.post('reset-password',resetuser).then(
          (res)=>{
            onSucess();
            notification.info({
              message: 'ጠቃሚ መረጃ',
              description:
                'ለ Login ኢሜልና ፓስዎርድዎን ይጠቀሙ! ቤተሰብ ስለሆኑን እናመሰግናለን፡፡',
              onClick: () => {
                navigate('/')
              },
            });
            setTimeout(()=>navigate('/'),3000)
            
          
          }
        ).catch((err)=>
        {
          onError(err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]);
        });
      }
      return(
        <div className='container-fluid'>
          <div className='register'>
              <div className='register_header'>
                  <div style={{borderRadus:20,backgroundColor:'#BFBFBF',marginBottom:'2%',marginTop:'5%',height:'40px',width:'40%',marginLeft:'30%'}}><h2 style={{color:'white'}}>Reset Password</h2></div>
                  <Space direction='vertical'>
                    <Input size="large" className='email' style={{width:'150%',height:50}} value={params.email} disabled placeholder="ኢሜል አካውንት" suffix={<MailOutlined />} />
                    <Input.Password className='pass' placeholder="ምስጢር ቁጥር" style={{width:'150%',height:50}} onChange={(e)=>setResetUser(prev=>{return{...prev,password:e.target.value}})}/>
                    <Input.Password className='cofirm_pass' placeholder="እንደገና ምስጢር ቁጥር" style={{width:'150%',height:50}} onChange={(e)=>setResetUser(prev=>{return{...prev,password_confirmation:e.target.value}})}/>
                  </Space>

                  <p style={{color:'red',marginLeft:'19%',marginTop:'3%'}}></p>
                  <Button type="primary"  onClick={reset} style={{minWidth:400,marginLeft:'10%',marginTop:'10px',height: 50, background: '#F4AD33'}}>ያስተካክሉ</Button>
      </div>
      </div>
      </div>
      );

}


export default ResetPassword;