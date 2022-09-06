import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import api from '../adapter/base'
import { Row, Col, Slider } from 'antd';
import {useLocation} from 'react-router-dom';
const { Meta } = Card;
export default function AllProduct() {
  const loc=useLocation();
  const navigate=useNavigate();
  const [products,setProducts]=useState()
  const [category,setCategory]=useState()
  useEffect(()=>{
     api.get(`categories/${loc.state.id}/products`).then(res=>{
       setProducts(res.data.data);
     }).catch(err=>{
      console.log('some error happened');
     });
     api.get(`categories/${loc.state.id}`).then(res=>{
      setCategory(res.data.data);
     }).catch(err=>{console.log('some error happened')})
  },[loc.state.id])
  return (
<div className='container-fluid'>
    <div className='all_products' style={{height:1100}}>
    <div className="all_product">
    <Row gutter={[0, 200]}>

        <Col span={6}>
          {products?.map(product=>{
            return(
             <Card
           hoverable
           style={{ width: 214, height: 214 }}
           cover={<img alt="products" src={product.image_paths[0]} />}
           onClick={()=>{navigate('/main_page',{state:{id:product.id}})}}
             >  
               
           <Meta title={product.name}/>
            <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
           <Card 
           style={{background:'#F0F0F0', width:40, height: 40, marginLeft:150, marginTop:10}}>
            <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
             </div>
            </Card>
           
           <p>{product.price}</p>
            
          </Card>
            )
          })}
          
        </Col>
  </Row>
         
     </div>
     <p style={{marginLeft:400, marginTop:-680}}>{products?.length} ውጤቶችን አግኝተናል ።</p>
     <Row gutter={[0, 8]}>
       <div className='top'>
       <Col span={6}>
         <div className='h5'>
       <h5>{category?.name}</h5>
       </div>
       </Col>
       
        <Col span={6}>
          <div className='vector'>
       <i class="fa-solid fa-sort-down"></i>
       </div>
       </Col>
      
       
         <div className='h3'>
       <h3>U - T</h3>
       </div>
      

       <Col span={6}>
         <div className='vector_1'>
       <i class="fa-solid fa-sort-down"></i>
       </div>
       </Col>
       </div>
      </Row>
     </div>
 </div>
 
  );
}
