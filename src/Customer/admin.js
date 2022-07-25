import { Header } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import AppHeader from '../components/header'
import image from '../images/ser.png'
import image_2 from '../images/abebe.jpeg'
import { Tabs, Button } from 'antd';
import 'antd/dist/antd.css';
import { Space, Table, Tag } from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import MainPage from './main_page'
import axios from 'axios'
import CompanyRegister from '../drawer/company_register'
import { Input } from 'antd';
import { Switch } from 'antd';
import { Cascader, Select } from 'antd';
const { TabPane } = Tabs;
const {Option}=Select;

const operations = <Button></Button>;

export default function Admin() {
  const newClass = ['company_register']
  const [newClasses,setNewClasses] = useState(false);
  const [successMsg,setSuccesMsg] =  useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
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
              setSuccesMsg("The New Company Added To Sergela Successfully!!")
              console.log("added successfully")
             
                navigate('/admin')
        });
        }

    function showCompanyRegister(){
      const register_class = document.getElementById('company_register');
      if(register_class.style.display === 'none'){
        
        newClass.push('new_class');
        console.log(newClass);
          register_class.style.display = 'block'
               
      }
      else{
        register_class.style.display = 'none';
      }

    }
    function closeDrawer(){
      const close_btn = document.getElementById('close');
       const register_class = document.getElementById('company_register');
        register_class.style.display = 'none'

      
    }
   const[selectedTab, setSelectedTab] = React.useState('1');
  const [companyName,setCompanyName] = useState([]);
  
  
 


  React.useEffect(() => {
    const data = axios.get(baseUrl,{
      headers :
      { "Authorization" : `Bearer ${localStorage.getItem("token")}`}
      }).then(
      (response)=> 
      {
      setCompanyName(response.data['data']);
      console.log(companyName);
        
       
  });}, []);


  const handleChange = activeKey =>{
    console.log(activeKey)
    setSelectedTab(activeKey);
  }
   const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([
  {
   name : "ዞዊ ቴክ",
   number : "53",
   rent : "80,000",
   rank : "ተፈቅዷል"
  },
   {
   name : "ግሬተር አካዳሚ",
   number : "30",
   rent : "70,000",
   rank : "እይታ ላይ"
  },
   {
   name : "የኢትዮጵያ አየር መንገድ",
   number : "800",
   rent : "900,000",
   rank : "የታገደ"
  },
   {
   name : "ሳንቲም ክፍያ",
   number : "150",
   rent : "100,000",
   rank : "የታገደ"
  },
])

const column =[
  {
    key : "1",
    title : "የድርጅቱ ስም",
    dataIndex : "name"
  },
    {
    key : "2",
    title : "የሰራተኛ ብዛት",
    dataIndex : "number"
  },
    {
    key : "3",
    title : "የብድር መጠን",
    dataIndex : "rent"
  },
   {
    key: '4',
    title: 'ደረጃ',
    dataIndex: 'rank',
     render : (tag) =>{
       const color = tag.includes('ተፈቅዷል')?'Green':tag.includes('እይታ ላይ')?'#595959': tag.includes('የታገደ')?'red':'blue'
          return <Tag color={color} key={tag}>{tag}</Tag>
          
        }
 }, 
 {
   key :"5",
   render :(records) =>{
     return(
       <>
       <EditOutlined style={{ color : '#F4AD33', fontSize : 23,}}/>
       <DeleteOutlined style={{color : '#F4AD33',marginLeft : 50, fontSize : 23,paddingBottom:-1200}}/>
       </>
     );
   }
 }


]
function admin(){
  if(selectedTab === '2'){
  navigate('/main_page');
}
 else if(selectedTab === '3'){
  navigate('/new_products');
}
}

  return (
    <div className='admin'>
       
        <Header>
              <div className="logo">
                <img src={image} className="img"/>
             <a href="#">Sergela<span>Gebeya</span></a>
            </div>
            <div className='header_corner'>
                <h1>እንኳን በደህና መጣህ!</h1>
                <h2>አበበ ቢቂላ</h2>
                <img src={image_2} style={{height: 40, width:40}} />
                <div className='setting'>
                  <i class="fa-solid fa-gear"></i>
                </div>
                <div className='menu'>
                <i className="fa fa-navicon" style={{fontSize:40, color:'red'}}></i>
                </div>
               
            </div>
        </Header> 
        <div className='tabs'>
          <Button style={{background:'#fff', borderColor:"#fff", marginTop:20}} type='link'>ሰረገላ አድሚን</Button>
          <Button style={{background:'#fff', borderColor:"#fff"}} type='link' onClick={()=> navigate('/main_page')}>ዋና ገጽ</Button>
          <Button style={{background:'#fff',  borderColor:"#fff"}} type='link' onClick={()=> navigate('/new_item')}>ዕቃዎች</Button>
          <Button style={{background:'#fff',  borderColor:"#fff"}} type='link' onClick={()=> navigate('/new_products')}>የታዘዙ</Button>
           <Button style={{background:'#fff',  borderColor:"#fff"}} type='link' onClick={()=> navigate('/home')}>ብድር(ክሬዲት)</Button>
           <div className='new_company'>
           <Button className='new_comp'onClick={showCompanyRegister} type='warning' style={{marginTop:50}}>+ አዲስ ድርጅት ይጨምሩ
           </Button>
           </div>
      <div className='container'>
      <div className='table table-condensed '>
        <Table dataSource={dataSource} columns={column} />;
         {/* <table>
               <thead>
                 <th style={{}}>የድርጅቱ ስም</th>
                  <th> የሰራተኛ ብዛት</th>
                   <th>የብድር መጠን</th>
                    <th style={{paddingLeft:50}}>ደረጃ</th>
                    <th></th>
                    <th></th>
                 </thead>
                           
           {companyName.map((res)=>(
  
            
                 <tbody>
                   <td key={res.id}>{res.name}</td>
                   <td key={res.id}>{res.phone_number}</td>
                   <td key={res.id}>{res.address}</td>
                   <td key={res.id}><Tag style={{width:100, textAlign:'center', backgroundColor:'green',paddingTop:3,paddingBottom:3, color:'#fff', fontSize:20}}>{res.verified}</Tag></td>
                  
                <td> <EditOutlined style={{ color : '#F4AD33', fontSize : 23,marginTop:12, cursor:'pointer'}} className="edit_btn"/></td>
                  <td><DeleteOutlined style={{color : '#F4AD33',marginLeft : 21, fontSize : 23, marginTop:10,cursor:'pointer'}} className="delete_btn"/></td>
 
                 </tbody>
          
           ))}
           
             </table> */}
        </div>
        </div>
        </div>

        <div className="company_register" id='company_register'>
        <div className='container-fluid'>
             <Header style={{background : '#ccc'}}>
               <span><i class="fa-solid fa-plus" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer', marginLeft:-40, marginTop:30}}></i></span>
               <a href="#">አዲስ ድርጅት ምዝገባ</a>
               <div className='close'>
               <span><i onClick={closeDrawer} id='close' class="fa-solid fa-xmark" style={{color: '#000', fontSize : 24, marginLeft:70, marginTop:-20, cursor:'pointer', width:20}}></i></span>
               </div>
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
            <h2 style={{marginLeft:25}}>ሁኔታ</h2>
            
      <Select defaultValue="ይምረጡ ያሉበትን ሁኔታ" className="select-after" style={{marginLeft:25, marginTop:-40}}>
    <Option value="ቡድን ይምረጡ">ቡድን ይምረጡ</Option>
    <Option value="ምግብ">ምግብ</Option>
    <Option value="የታሸገ ምግብ">የታሸገ ምግብ</Option>
    <Option value="መጠጥ">መጠጥ</Option>
     <Option value="ልብስ">ልብስ</Option>
     </Select>
     </div>
     <h3 style={{color:'#000'}}>{successMsg}</h3>

     <div className='border_bottom' style={{marginTop:100, marginLeft:-10, width:450}}>

     </div>
     <div className='bottom_btn'>
         <button style={{cursor:'pointer', marginLeft:'-30%', fontSize:20}} onClick={create_corporate} primary>ይጨርሱ</button>
     </div>
 </div>
 </div>
        </div>
  
  )
}