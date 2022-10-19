import React from 'react'
import { Header } from 'antd/lib/layout/layout'
import { Input,Card, Col, Row,Cascader, Select, Space, Button } from 'antd';
import { Switch } from 'antd';
const { Option } = Select;
const { Meta } = Card;
const name = "ብር"
const { TextArea } = Input;
export default function NewItems2() {
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

             <div className='item_pics'>
          <h2>ፎቶዎች</h2>
          <Card className='first_card'
           hoverable
           style={{ width: 580, height: 450, border:'1px dashed #000', marginLeft:50 }}
           >
            
              <Card className='upload_card'
           hoverable
           style={{ width: 140, height: 130, background:'#FAFAFA' }}>
             <span><i class="fa-solid fa-plus" style={{color:'#8C8C8C', fontSize : 30, cursor:'pointer', marginLeft:25, marginTop:20, cursor:'pointer'}}></i></span>
             <h3 style={{fontSize:10, marginTop:10}}>እዚህ ጋር ፎቶ ያስገቡ</h3>
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
            <Switch defaultChecked style={{background:'#F9DEDB'}}/>
          </div>

          <div className='switch2'>
            <Switch defaultChecked style={{background:'#F9DEDB'}}/>
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
 <div className='deliver'>
            <h2>አምጪው</h2>
            
      <Select defaultValue="ቡድን ይምረጡ" className="select-after">
    <Option value="ቡድን ይምረጡ">ቡድን ይምረጡ</Option>
    <Option value="ምግብ">ምግብ</Option>
    <Option value="የታሸገ ምግብ">የታሸገ ምግብ</Option>
    <Option value="መጠጥ">መጠጥ</Option>
     <Option value="ልብስ">ልብስ</Option>
     </Select>
      <Button>  <span><i class="fa-solid fa-plus" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer'}}></i></span></Button>
          
          </div> 
          <div className='selected_item'>
                
             </div>
          <div className='size2'>
            <h2>መጠን</h2>
            <Button>  <span><i class="fa-solid fa-plus" style={{color:'#F4AD33',  fontSize : 24, cursor:'pointer'}}></i></span></Button>
            </div>
            <div className='border_bottom2'>

            </div>
            <div className='bottom_btn'>
              <button primary>Finish</button>
            </div>
          </div>



   </div>
 </div>

  )
}
