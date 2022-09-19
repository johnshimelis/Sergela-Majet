import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import api from '../adapter/base'
import { Row, Col, Slider, Carousel } from 'antd';
import {useLocation} from 'react-router-dom';
import supp from '../images/supplier.jpeg';
const { Meta } = Card;
export default function AllProduct() {
  const usenav=useNavigate();
  const loc=useLocation();
  const navigate=useNavigate();
  const [products,setProducts]=useState()
  const [category,setCategory]=useState()
  const [suppliers, setSuppliers] = useState() 
  const [categories, setCategories] = useState()

  const product=async (id)=>{
    await api.get(`suppliers/${id}/products`)
    .then(res=>{
      setProducts(res.data.data);
      setCategory('');
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
      api.get('/categories')
    .then(res=>{
      setCategories(res.data.data.slice(0,5));
    })
    .catch(err=>{
      console.log('Error happened')
    });
     api.get(`categories/${loc.state.id}/products`).then(res=>{
       setProducts(res.data.data);
     }).catch(err=>{
      console.log('some error happened');
     });
     api.get(`categories/${loc.state.id}`).then(res=>{
      setCategory(res.data.data);
     })
     .catch(err=>{console.log('some error happened')});
  api.get('/suppliers')
  .then(res=>{
  setSuppliers(res.data.data);
  })
  .catch(err=>{
    console.log('Error Occured');
  })
  },[loc.state.id]);
 

  return (
    
    <div className='categories'>
    
{  
            categories?.map(category=>{
              return(
             
             <div className='selected_cards' onClick={()=>{usenav('/all_products',{state:{id:category.id}})}}>
               
              <ul>
                <li><a>{category.name}</a></li>
               </ul>
           </div>
        
              )
            })
          }
   



       
     <div className='category'>
     <h5>{category?.name}</h5> 
     <h6>{products?.length} ውጤቶችን አግኝተናል።</h6>
     
    <div className='all_products'>
      
    {products?.map(product=>{
      return(
        
      
   <div className='all_product'  
    onClick={()=>{navigate('/main_page',{state:{id:product.id}})}}>
        
     <img src={product?.image_paths[0]} />
     <h6>{product.name}</h6>
       <p>{product.price}</p>
      </div> 
     )})}
          
      </div>
      </div>
      </div>
    
   
     
   
);
}
