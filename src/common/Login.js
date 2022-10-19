import React, {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import api from '../adapter/base'
import { Input, Button ,message} from 'antd';
import { UserOutlined } from '@ant-design/icons'; 
import {useDispatch} from 'react-redux'
import {auth_actions} from '../store/auth-slice'
export default function Login() {
const navigate = useNavigate();
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch=useDispatch();

const onError=(err)=>{
  message.error(err);
}
const login=async ()=>{
  const data=await api.post("login",{
    email:email,
    password:password
  }).then(
    (response)=>{
      dispatch(auth_actions.login(response?.data));
      if(response.data?.data?.role?.title==='Admin'){
          navigate('/admin');
        }
      else{
         navigate('/')
         }
      
  }).catch((err) =>{
        message.error(err.response.data.message)
  });
        return data;
}
return (
      <div className='container-fluid'>
      <div className='login'>
          <div className='login_header'>
              <h2>መግቢያ</h2>
              <Input size="large" className='user_name' onChange={(e)=>setEmail(e.target.value)} placeholder="የስም መለያ" suffix={<UserOutlined />} />
              <Input.Password className='pass' placeholder="ምስጢር ቁጥር" onChange={(e)=>setPassword(e.target.value)}/>
              <p></p>
               <Button type="primary"  onClick={login} style={{width:400,marginTop:'20px',height: 50, background: '#F4AD33'}}>ይግቡ</Button>
               <div style={{marginTop:'2%'}}>
               <Link to='/forget_pass' className='forget_pass'>ምስጢር ቁጥር ረስተዋል? </Link><br />
                <Link to='/registration' className='register'>አዲስ አባል ነዎት? ይመዝገቡ</Link><br />
          </div>
          </div>
      
      </div>
    </div>
  )
}