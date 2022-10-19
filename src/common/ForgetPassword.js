import React, {useState} from 'react'
import api from '../adapter/base'
import { Input, Button ,message} from 'antd';
import { UserOutlined } from '@ant-design/icons'; 
export default function ForgetPassword() {
const [email,setEmail] = useState('');
const onError=(err)=>{
  message.error(err);
}
const forget=async ()=>{
  const data=await api.post("forgot-password",{
    email:email,
  }).then(
    (response)=>{
        message.success("Check Your Email For Password");
  }).catch((err) =>{
       onError(err.response.data.message);  
  });
        return data;
}
return (
      <div className='container-fluid' >
      <div className='forgetpass' style={{marginTop:'15%',marginLeft:'30%'}}>
          <div className='forget_pass_header'>
              <h2>የጠፋ ፓሶርድ ለማስተካከል</h2>
              <Input size="large" style={{width:400}} onChange={(e)=>setEmail(e.target.value)} placeholder="ኢሜል አካውንት" suffix={<UserOutlined />} />
              <p></p>
               <Button type="primary" onClick={()=>forget()} style={{width:400,marginTop:'20px',height: 50, background: '#F4AD33'}}>ይላክ ፓስዎርድ</Button>
               <div style={{marginTop:'2%'}}>
              </div>
          </div>
      
      </div>
    </div>
  )
}