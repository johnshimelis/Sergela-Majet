import React,{useState,useEffect} from 'react'
import { Input,Button,Card,Layout,Row, Col,Steps,message} from 'antd';
import { useNavigate } from "react-router-dom";
import api from '../adapter/base'
import LastHeader from '../components/last_header';
import { useSelector} from 'react-redux';
import HomeFooter from './home_footer';
const { Meta } = Card;
const { Step } = Steps;


const steps = [
  {
    title: 'First',
    content: 'መረጃ',
  },
  {
    title: 'Second',
    content: 'ትራንስፖርት',
  },
  {
    title: 'Last',
    content: 'ክፍያ',
  },
];
export default function Info() {
    const [current, setCurrent] = useState(0);
    const [address,setAddress]=useState();
    const [user,setUser]=useState();
    const loggedInuser=useSelector(state=>state.auth?.user?.data);
    const navigate = useNavigate();
    useEffect(()=>{
      if(!loggedInuser){
        message.success('Please Logged In First!')
        navigate('/login');
      }
      else{
      setUser(loggedInuser);
      setAddress(loggedInuser.address);
    }
    },[]);

  const next = () => {
    setCurrent(current + 1);
    
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  function functionCollections(){
      if(current < steps.length){
         next();
         navigate('/transport');
     }}     
     const update=()=>{
      setUser(prev=>{return {...prev,address:address}});
      navigate('/transport',{state:{user:user,cost:100}})

     }

  return (
    <div className='info'>
      <LastHeader/>
        <div className='container-fluid'>
            
            <div className='content'>
                <Steps current={current} className="steps">
                {steps.map((item) => (
               <Step onClick={functionCollections} key={item.title} title={item.content}/>
                ))}
                
               </Steps>

               <div className='info_input'>
                   <div className='basic_info'>
                       <h3 style={{marginTop:100, marginLeft:100}}>መሰረታዊ መረጃ</h3>
                   <Input placeholder="የእርስዎ ስም" value={user?.first_name} onChange={(e)=>{setUser(prev=>{return {...prev,first_name:e.target.value}})}} style={{width:300, height:40, marginLeft:100, marginTop:20}}/>
                   <Input placeholder="የአባትዎ ስም" value={user?.last_name} onChange={(e)=>{setUser(prev=>{return {...prev,last_name:e.target.value}})}} style={{width:300, height:40, marginLeft:20}}/><br />
                   <Input placeholder="የመለያ ስም" value={user?.user_name} onChange={(e)=>{setUser(prev=>{return {...prev,user_name:e.target.value}})}} style={{width:620, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/>
                   <Input placeholder="ኢሜል" value={user?.email} onChange={(e)=>{setUser(prev=>{return {...prev,email:e.target.value}})}} style={{width:620, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/>
                   
               </div>
               <div className='address'>
                   <h3 style={{marginTop:100, marginLeft:100}}>አድራሻ</h3>
                   <Input placeholder="ከተማ" value={address?.city} onChange={(e)=>{setAddress(prev=>{return {...prev,city:e.target.value}});setUser(prev=>{return{...prev,address:address}})}} style={{width:620, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/><br/>
                   <Input placeholder="ክፍለ ከተማ" value={address?.sub_city} onChange={(e)=>{setAddress(prev=>{return {...prev,sub_city:e.target.value}});setUser(prev=>{return{...prev,address:address}})}} style={{width:190, height:40, marginLeft:100, marginTop:20}}/>
                   <Input placeholder="ወረዳ" value={address?.woreda} onChange={(e)=>{setAddress(prev=>{return {...prev,woreda:e.target.value}});setUser(prev=>{return{...prev,address:address}})}} style={{width:195, height:40, marginLeft:20}}/>
                   <Input placeholder="ጎረቤት" value={address?.neighborhood} onChange={(e)=>{setAddress(prev=>{return {...prev,neighborhood:e.target.value}});setUser(prev=>{return{...prev,address:address}})}} style={{width:195, height:40, marginLeft:20}}/><br/>
                   <Input placeholder="ስልክ ቁጥር" value={user?.phone_number} onChange={(e)=>{setUser(prev=>{return {...prev,phone_number:e.target.value}});setUser(prev=>{return{...prev,address:address}})}} style={{width:405, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/>
                   <Input placeholder="የቤት ቁጥር" value={address?.house_number} onChange={(e)=>{setAddress(prev=>{return {...prev,house_number:e.target.value}});setUser(prev=>{return{...prev,address:address}})}} style={{width:195, height:40, marginLeft:20}}/>
               </div>
               <button type='primary' onClick={()=>update()}>ይቀጥሉ</button>
               </div>
            </div>

      <HomeFooter />
     </div>
     
    </div>
  )
}
