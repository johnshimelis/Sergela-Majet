import React from 'react'
import 'antd/dist/antd.css';
import api from '../cust_adapter/base'
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
export default function LastSideNav() {
    const navigate=useNavigate();
    const handleClick=(id)=>{
      navigate('/all_products',{state:{id}})
    } 
  const {data:home_category}=useQuery('home_cat',()=>{return api.get(`categories`)})
  return (
    <div className='last_side_nav'>
      <ul>
      <li className='sub'><i class="fa-solid fa-bars"></i><a href="#">ምድቦች</a></li>
        {
            home_category?.data?.data?.map(category => {
                return(
                 <li><i className="fa-sharp fa-solid fa-arrow-right" style={{fontSize:'10px'}}></i><a onClick={()=>{handleClick(category.id)}}>{category.name}</a></li>);    
            })
        }
      </ul>
    </div>
  )
}