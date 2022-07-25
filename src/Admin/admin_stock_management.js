import React from 'react';
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import {Button,Card, Checkbox} from 'antd';
import {MoreOutlined} from '@ant-design/icons'
// import Image1 from '../images/m 5.png';
// import Ellipse1 from '../images/ellipses/Ellipse 1.png'
// import Vector from '../images/ellipses/Vector_one.png' 
// import Ellipse3 from '../images/ellipses/Ellipse 3.png'
// import Vector1 from '../images/ellipses/Vector 1.png'
// import Ellipse2 from '../images/ellipses/Ellipse 2.png'
// import Vector2 from '../images/ellipses/Vector.png'
// import VectorBar from '../images/Vector_bar.png'

function AdminStockManagement(){
    return(
       <div className='admin_stock'>
          <AdminHeader/>
          <AdminNav nav_link='stock_management'/>
          <h6 style={{fontSize:16,color:'#252733',marginTop:30, marginLeft:100}}>Catagories</h6>
             <Card  hoverable style={{ width: 600 ,height:400,marginTop:30,marginLeft:100,borderColor:'#DFE0EB'}}>
               <Button style={{color:'#FAAD14',marginLeft:450,width:100,borderColor:'#FAAD14'}}>Add</Button>
               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB',backgroundColor:'#EBEBEB'}}>
                <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-20, marginLeft:60}}>Category</h6>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-23, marginLeft:180}}>Sub category</h6>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-22, marginLeft:340}}>Quantity</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
            </Card>
            <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
               <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:50}}>እህልና ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:190}}>ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                  <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:50}}>እህልና ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:190}}>ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                  <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:50}}>እህልና ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:190}}>ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                  <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:50}}>እህልና ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:190}}>ጥራጥሬ</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
            </Card>
          <h6 style={{fontSize:16,color:'#252733',marginTop:-445, marginLeft:800}}>Products</h6>
          
             <Card  hoverable style={{ width: 600 ,height:400,marginTop:25,marginLeft:800,borderColor:'#DFE0EB'}}>
               <Button style={{color:'#FAAD14',marginLeft:450,width:100,borderColor:'#FAAD14'}}>Add</Button>
               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB',backgroundColor:'#EBEBEB'}}>
                <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-20, marginLeft:60}}>Product name</h6>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-32, marginLeft:230}}>Price</h6>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-27, marginLeft:340}}>Quantity</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
            </Card>
               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                  <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:70}}>ድንች</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:230}}>14 ብር</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
               
               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                  <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:70}}>ሽንኩርት</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:230}}>40 ብር</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
               

               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                  <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:70}}>እንቁላል</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:230}}>13 ብር</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
               


               <Card  hoverable style={{ width: 550 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                  <div className='stock_check' style={{marginTop:-10}}>
                <Checkbox/>
                </div>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:70}}>ቲማቲም</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:230}}>24 ብር</h6>
                <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:360}}>23</h6>
                  <div className='more_outline' style={{ marginLeft:470,marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
               </Card>
               
               
            </Card>
   
       </div>
    );
}


export default AdminStockManagement;