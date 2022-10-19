import React,{useState} from 'react';
import {Input,Button,Tooltip,Space,message,notification} from 'antd';
import { MailOutlined,InfoCircleOutlined,PhoneOutlined} from '@ant-design/icons'; 
import {useNavigate} from 'react-router-dom'
import api from '../adapter/base'
export default function Registration(){
  const [userName,setUserName]=useState();
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [phoneNumber,setPhoneNumber]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [passwordConfirm,setPasswordConfirm]=useState();
  const navigate=useNavigate();
      const onSucess=()=>{
        message.success("በተሳካ ሁኔታ ተመዝግበዋል! እንኳን በደህና መጡ፡:");
      }
      const onError=(err)=>{
        message.error(err);
        message.error("ምዝገባው አልተሳካም፡፡");
      }
      const register=async ()=>
      {
        await api.post('/customer/register',{
          user_name:userName,
          first_name:firstName,
          last_name:lastName,
          email:email,
          phone_number:phoneNumber,
          password:password,
          password_confirmation:passwordConfirm
        }).then(
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
                  <div style={{borderRadus:20,backgroundColor:'#BFBFBF',marginBottom:'2%',marginTop:'1%',height:'40px',width:'20%',marginLeft:'40%'}}><h2 style={{color:'white'}}>ይመዝገቡ</h2></div>
                  <Space direction='vertical'>
                  <Input size="large" className='user_name' style={{width:'300px',height:50}}onChange={(e)=>setUserName(e.target.value)} placeholder="የስም መለያ" suffix={
                    <Tooltip title="ይሄ መለያ አስፈላጊ ስለሆነ እንዳይረሱት"> 
                      <InfoCircleOutlined style={{ color: '#262626' }} />
                    </Tooltip>} />
                  <Input size="large" className='first_name' style={{height:50}} onChange={(e)=>setFirstName(e.target.value)} placeholder="የመጀመሪያ ስም" suffix={
                  <Tooltip title="የእርሶ ስም">
                      <InfoCircleOutlined style={{ color: '#262626' }} />
                    </Tooltip>} /> 
                  <Input size="large" className='last_name' style={{height:50}} onChange={(e)=>setLastName(e.target.value)} placeholder="የመጨረሻ ስም" suffix={
                  <Tooltip title="የአባት ስም">
                      <InfoCircleOutlined style={{ color: '#262626' }} />
                    </Tooltip>} /> 
                  <Input size="large" className='email' style={{height:50}} onChange={(e)=>setEmail(e.target.value)} placeholder="ኢሜል አካውንት" suffix={<MailOutlined />} />
                  <Input size="large" className='phone_number' style={{height:50}} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="ስልክ ቁጥር" suffix={<PhoneOutlined />} />
                  <Input.Password className='pass' placeholder="ምስጢር ቁጥር" style={{height:50}} onChange={(e)=>setPassword(e.target.value)}/>
                  <Input.Password className='cofirm_pass' placeholder="እንደገና ምስጢር ቁጥር" style={{height:50}} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                  </Space>

                  <p style={{color:'red',marginLeft:'9%',marginTop:'3%'}}></p>
                  <Button type="primary"  onClick={register} style={{width:200,marginTop:'10px',height: 50, background: '#F4AD33'}}>ይመዝገቡ</Button>
      </div>
      </div>
      </div>
      );

}