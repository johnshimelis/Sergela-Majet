
import React, {useState} from 'react'
// import api from '../api/base'
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'; 
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login(){
const [errorMsg,setErrorMsg] =  useState("");
const navigate = useNavigate();
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const login=async ()=>{
  const data=await axios.post("http://18.217.229.72:8400/api/v1/login",{
    email:email,
    password:password
  }).then(
    (response)=>{
      localStorage.setItem("token",response.data.access_token);
      navigate('/admin');
  }).catch(error =>{
       setErrorMsg("Incorrect email or password");
  });
        return data;
}
return (
      <div className='container-fluid'>
      <div className='login'>
          <div className='login_header'>
              <h2>ምዝገባ</h2>
              <p>የአዲስ አባል ምዝገባ እዚህ ጋር ነው።</p>
              <p style={{color:'red',marginLeft:'-9%'}}>{errorMsg}</p>
              <Input size="large" className='user_name' onChange={(e)=>setEmail(e.target.value)} placeholder="የስም መለያ" suffix={<UserOutlined />} />

              <Input.Password className='pass' placeholder="ምስጢር ቁጥር" onChange={(e)=>setPassword(e.target.value)}/>
               <Button onClick={login} className='login_btn'  type="primary" style={{width:400, height: 50, background: '#F4AD33'}}>ይግቡ</Button>
               <div className='links'>
               <a href='#' className='forget_pass'>ምስጢር ቁጥር ረስተዋል?</a><br />
                <a href='#' className='register'>አዲስ አባል ነዎት? ይመዝገቡ</a><br />
                <a href='#' className='register_page'>የድርጅቱ መመዝገቢያ</a>
          </div>
          </div>
      
      </div>
    </div>
  )
}