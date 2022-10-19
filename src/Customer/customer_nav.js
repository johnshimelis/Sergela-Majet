import React,{useState,useEffect} from 'react';
import {Menu} from 'antd';
import {Link,useNavigate} from 'react-router-dom'
import api from '../cust_adapter/base';
function CustomerNav(props){
    const navigate=useNavigate();
    const handleback=(url)=>{
        navigate(`/${url}`)
    }
    const handlemenu=(id)=>{
        console.log(id);
    }
    const [navLinks,setNavLinks]=useState(
        [
            {
                label:'ምድቦች',
                key:'category'
            },
            {
               label:<i className="fa fa-arrow-left"></i>,
               key:'last_home',
               onClick:()=>handleback('last_home')
            }
        ]
        );
    useEffect(()=>{
        api.get('categories')
        .then(res=>{
            res.data.data.forEach(element => {
                setNavLinks(prev=>{return [...prev,{label:element.name,key:element.id,onClick:()=>handlemenu(element.id)}]})
            });
            
        })
        .catch(err=>{
              console.log(err);
        })
      },[])
    return(
       <>
              <div className='admin_nav' style={{marginTop:'0%'}}>
                     <Menu mode="horizontal" defaultSelectedKeys={props.nav_link} items={navLinks}/>
              </div>
        </>
    );
    
}

export default CustomerNav;