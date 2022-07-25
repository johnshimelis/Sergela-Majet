import React, { useState } from 'react'
import axios from 'axios'
import { Header } from 'antd/lib/layout/layout'
import { Input } from 'antd';
import { Switch } from 'antd';
import { Cascader, Select, Space, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const {Option}=Select;

export default function CompanyRegister() {
 const [successMsg,setSuccesMsg] =  useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate=useNavigate()
  const baseUrl='http://18.191.35.149:9010/api/v1/corporate';

function create_corporate(){
          axios.post(baseUrl,{
            name:name,
            address:address,
            phone_number:phoneNumber
          },{
            headers :
            { "Authorization" : `Bearer ${localStorage.getItem("token")}`}
            }).
          then(
            (response)=>{
              setSuccesMsg("Company information added successfully!!")
              console.log("added successfully")
             
                navigate('/admin')
        });
        }
      
  return (
    <div className='  company_register'>
        <div className='container-fluid'>
             <Header style={{background : '#fff'}}>
               <span><i class="fa-solid fa-plus" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer', marginLeft:-20}}></i></span>
               <a href="#">አዲስ ድርጅት ምዝገባ</a>
               <span><i class="fa-solid fa-xmark" style={{color: '#000', fontSize : 24, marginLeft:120, marginTop:-20, cursor:'pointer', width:20}}></i></span>
           <div className='vertical_line'>

           </div>
           </Header>
           <div className='input_area'>
                <h2>መግቢያ</h2>
                <Input placeholder="የድርጅቱ ስም" allowClear onChange={(e)=>setName(e.target.value)} style={{width:400,height:50, marginTop:0, marginLeft:100}}/>
                <Input placeholder="ዘርፍ" allowClear style={{width:400,height:50, marginTop:20, marginLeft:100}}/>
                <Input placeholder="የሰራተኛ ብዛት" allowClear style={{width:400,height:50, marginTop:20, marginLeft:100}}/>
         
        </div>
          <div className='input_area'>
                <h2>አድራሻ</h2>
                <Input placeholder="የከተማ ስም" allowClear onChange={(e)=>setAddress(e.target.value)} style={{width:400,height:50, marginTop:0, marginLeft:100}}/>
                <Input placeholder="ክፍለ ከተማ ስም" allowClear style={{width:400,height:50, marginTop:20, marginLeft:100}}/>
                <Input placeholder="ወረዳ" allowClear style={{width:400,height:50, marginTop:20, marginLeft:100}}/>
                <Input placeholder="ቀበሌ " allowClear style={{width:400,height:50, marginTop:0, marginLeft:100}}/>
                <Input placeholder="የቤት ቁጥር" allowClear onChange={(e)=>setPhoneNumber(e.target.value)} style={{width:400,height:50, marginTop:20, marginLeft:100}}/>
                <Input placeholder="ስልክ ቁጥር" allowClear style={{width:400,height:50, marginTop:20, marginLeft:100}}/>
         
        </div>
         <div className='deliver'>
            <h2>ሁኔታ</h2>
            
      <Select defaultValue="ይምረጡ ያሉበትን ሁኔታ" className="select-after">
    <Option value="ቡድን ይምረጡ">ቡድን ይምረጡ</Option>
    <Option value="ምግብ">ምግብ</Option>
    <Option value="የታሸገ ምግብ">የታሸገ ምግብ</Option>
    <Option value="መጠጥ">መጠጥ</Option>
     <Option value="ልብስ">ልብስ</Option>
     </Select>
     </div>
     <h3 style={{color:'#000'}}>{successMsg}</h3>

     <div className='border_bottom'>

     </div>
     <div className='bottom_btn'>
         <button style={{cursor:'pointer'}} onClick={create_corporate} primary>ይጨርሱ</button>
     </div>
 </div>
 </div>
  )
}