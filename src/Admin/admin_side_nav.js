import React,{useState,useEffect} from 'react';
import {Menu,Badge} from 'antd';
import api from '../cust_adapter/base';
const AdminSideNav=(props)=>{
    const handlemenu=(id)=>{
        props.productId(id);
    }
    const [navLinks,setNavLinks]=useState(
        [
            {
                label:<div><h5><i className="fa fa-list"></i> Categories</h5></div>,
                key:'category'
            }
        ]
        );
    useEffect(()=>{
        api.get('categories')
        .then(res=>{
            res.data.data.forEach(element => {
                api.get(`categories/${element.id}/products`).then(res=>{
                        var color=res.data.data.length===0?'red':res.data.data.length<4?'yellow':'green'
                        setNavLinks(prev=>{return [...prev,{label:<Badge count={res.data.data.length} offset={[10, 20]} size="small" color={color}>{element.name}</Badge>,key:element.id,onClick:()=>handlemenu(element.id)}]})
                  })
                  .catch(err=>{})
            });
            
        })
        .catch(err=>{
              console.log(err);
        })
      },[])
    return(
       <div className='new_navs'>
              <div className='container' style={{marginTop:'0%'}}>
                <div className='row'>
                    <div col='3'>
                     <Menu mode="vertical" defaultSelectedKeys={props.nav_link} items={navLinks}/>
                     </div>
                </div>
              </div>
        </div>
    );
    
}

export default AdminSideNav;