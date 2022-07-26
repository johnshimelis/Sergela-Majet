
import React, { Component,useRef, useState } from 'react';
import { Header } from 'antd/lib/layout/layout'
import { Input } from 'antd';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import image_14 from '../images/product_14.png';
import image_18 from '../images/product_18.png';
import image_15 from '../images/product_15.png';
import image_17 from '../images/product_17.png';
import image_19 from '../images/product_19.png';

import { Switch } from 'antd';
import NewItemCard from '../Admin/new_item_card';
import { Cascader, Select, Space, Button } from 'antd';
import {EditOutlined, DeleteOutlined, ConsoleSqlOutlined} from '@ant-design/icons';

const { Option } = Select;
const { Meta } = Card;
const name = "ብር"

const { TextArea } = Input;

export default function NewItems(){


    let newClass = 'new_class';
    let otherClass = 'row';
    const [state, setState] = useState({
      cardsCount: 0
    });
      const addRobotHandler = () => {
       onButtonClick() 
       
};
  
    const [image, setImage] = useState('');

     const  fileSelectedHandler = (event) => {
      setState(prevState => {
           return { cardsCount: prevState.cardsCount + 1 };
    });
      setImage(URL.createObjectURL(event.target.files[0]));
        
        }


  const getCards = ()  => {
    
    let cards = [];
    for(let i = 0; i < state.cardsCount; i++) {
      if( i < 2){
         cards.push(<NewItemCard src={image}/>)

      }
    
     
      // else if(state.cardsCount >2){
      //   otherClass = "other_class"
      //    cards.push(<NewItemCard2/>)
      //   newClass = 'newClass';
      // }
    }
     return cards;
  }
    const printCards = () =>{
      let new_cards = [];
      for(let j = 2; j < state.cardsCount; j++){
        if(j >=2 && j <5){
        new_cards.push(<NewItemCard src={image} />);
       
        }
      }
       return new_cards;
    }
     const printCard = () =>{
      let new_card = [];
      for(let k = 5; k < state.cardsCount; k++){
        if(state.cardsCount >2){
        new_card.push(<NewItemCard src={image} />);
       
        }
      }
       return new_card;
    }

   
  



//       const handleApi = () =>{
//           const url = 'http://18.217.229.72:8400/api/v1/products';
//           const formData = new FormData();
//             formData.append('image', image,);
//           axios.post(url, {
//          headers : 
//        {
//           "Authorization" : `Bearer ${localStorage.getItem("token")}`
//         }
//           },
//              formData).then((res) => {
//             console.log(res);
//           })
//         }



 const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };

  return (
    
    <div className='new_items'>
        <div className = "container-fluid">
           <Header style={{background : '#fff'}}>
               <span><i class="fa-solid fa-plus" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer'}}></i></span>
               <a href="#">አዲስ እቃ</a>
               <span><i class="fa-solid fa-xmark" style={{color: '#000', fontSize : 24, marginLeft:1150, marginTop:-20, cursor:'pointer'}}></i></span>
           <div className='vertical_line'>
           </div>
           </Header>
           <div className='input_area'>
            <Input placeholder="ቲማቲም" allowClear style={{width:400,height:50, marginTop:50, marginLeft:100}}/>
             <TextArea placeholder="ገበሬው ቀጥታ በጥራት የቀረበ ቲማቲም።" allowClear  style={{ marginLeft:400}}/>
            </div>
          
        <div className='item_pics'  key={state.cards}>
          <h2>ፎቶዎች</h2>

        

          <Card className='first_card'
           hoverable
           style={{ width: 580, height: 550, border:'1px dashed #000', marginLeft:50 }}
           >
              <Card className='upload_card'
           hoverable
           style={{ width: 140, height: 130, background:'#FAFAFA' }}
           >
           <input type='file' id='file' ref={inputFile} style={{display: 'none' }} accept="image/*" onChange={fileSelectedHandler} multiple/>
            <button style={{borderColor:'#FAFAFA', backgroudColor : '#FAFAFA', marginLeft:15}} onClick={addRobotHandler}> <span>
              <i class="fa-solid fa-plus" style={{color:'#8C8C8C', 
             fontSize : 30, cursor:'pointer', marginLeft:5, marginTop:10, 
             cursor:'pointer'}}></i>
             </span>
             </button>
            
             <h3 style={{fontSize:10, marginTop:10}}>እዚህ ጋር ፎቶ ያስገቡ</h3>
         
       <div className={otherClass}>
              <Row gutter={[0, 200]}>
              <Col span={10} className="col">
              <div className='new_items_added'>
             {getCards()}
             </div>
             </Col>
             </Row>
        </div>
        <div className="new_item_added2">
         <Row gutter={[0, 200]}>
              <Col span={10} className="col">
              <div className='new_items'>
             {printCards()}
             </div>
             </Col>
             </Row>
        </div>
         <div className="new_item_added2">
         <Row gutter={[0, 200]}>
              <Col span={10} className="col">
              <div className='new_items'>
             {printCard()}
             </div>
             </Col>
             </Row>
        </div>
             </Card>
            </Card>

        </div>
        <div className='page_input'>
          <h2>ዋጋ</h2>
         
          <div className='birr'>
         <Input type="text" placeholder="50"   value="ብር" className='birrs' style={{width:400,height:50}}/>
          </div>
         <div className='number'>
          <Input placeholder="Basic usage" value="45" className='numbers' style={{width:350, height:50}}  />
          </div>
          <div className='switch'>
            <Switch defaultChecked style={{background:'#F4AD33'}}/>
          </div>
          <div className='select_team'>
              <Select defaultValue="ቡድን ይምረጡ" className="select-after">
    <Option value="ቡድን ይምረጡ">ቡድን ይምረጡ</Option>
    <Option value="ምግብ">ምግብ</Option>
    <Option value="የታሸገ ምግብ">የታሸገ ምግብ</Option>
    <Option value="መጠጥ">መጠጥ</Option>
     <Option value="ልብስ">ልብስ</Option>
     </Select>
      <Button>  <span><i class="fa-solid fa-plus" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer'}}></i></span></Button>
          </div>
          <div className='selected_items'>
             <Button >ምግብ  <span><i class="fa-solid fa-xmark" style={{color: '#000', fontSize : 20,  marginTop:0,marginLeft:20, cursor:'pointer'}}></i></span></Button>
              <Button className='btn_two'>የታሸገ ምግብ <span><i class="fa-solid fa-xmark" style={{color: '#000', fontSize : 20,  marginTop:0,marginLeft:20, cursor:'pointer'}}></i></span></Button>
          </div>
          <div className='deliver'>
            <h2 style={{marginLeft:0}}>አምጪው</h2>
            
      <Select defaultValue="ቡድን ይምረጡ" className="select-after">
    <Option value="ቡድን ይምረጡ">ቡድን ይምረጡ</Option>
    <Option value="ምግብ">ምግብ</Option>
    <Option value="የታሸገ ምግብ">የታሸገ ምግብ</Option>
    <Option value="መጠጥ">መጠጥ</Option>
     <Option value="ልብስ">ልብስ</Option>
     </Select>
      <Button>  <span><i class="fa-solid fa-plus" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer'}}></i></span></Button>
          
          </div> <div className='selected_item'>
                <Button  className='btn_one'>ምግብ  <span><i class="fa-solid fa-xmark" style={{color: '#000', fontSize : 20,  marginTop:0,marginLeft:20, cursor:'pointer'}}></i></span></Button>
              <Button className='btn_two'>የታሸገ ምግብ <span><i class="fa-solid fa-xmark" style={{color: '#000', fontSize : 20,  marginTop:0,marginLeft:20, cursor:'pointer'}}></i></span></Button><br />
               <Button className='btn_three'>አስቤዛ ትልቅ ቤተሰብ" <span><i class="fa-solid fa-xmark" style={{color: '#000', fontSize : 20,  marginTop:0,marginLeft:20, cursor:'pointer'}}></i></span></Button>
             </div>
          <div className='size'>
            <h2>መጠን</h2>
            <Button>  <span><i class="fa-solid fa-plus" style={{color:'#F4AD33',  fontSize : 24, cursor:'pointer'}}></i></span></Button>
            </div>
            <div className='border_bottom'>

            </div>
            <div className='bottom_btn2'>
              <button  primary>Finish</button>
            </div>
            
          

          
          </div>
        </div>
        </div>
       
)
  }


