import { DownOutlined ,UserOutlined,EditOutlined} from '@ant-design/icons';
import { Button, Dropdown, Menu, Space,Badge ,Avatar,Popover,Progress,Tooltip} from 'antd';
import React, {useEffect, useState} from 'react';
import image from '../images/ser.jpg';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions} from '../store/products-slice';
import { auth_actions } from '../store/auth-slice';
import { fav_action } from '../store/fav-slice';
const menu = (
  <Menu
    items={[
      {
        label: <a href="">Amharic</a>,
        key: '0',
      },
      {
        label: <a href="">Tigrigna</a>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: 'Oromigna',
        key: '3',
      },
    ]}
  />
);

function LastHeader() {
  
 const [isActive, setActive] = useState(false);
 const istherecart=useSelector(state=>state.product.totalQuantity)===0?false:true
 const cartquantity=useSelector(state=>state.product.totalQuantity);
 var user=useSelector(state=>state.auth?.user);
 const fav=useSelector(state=>state.fav?.totalCount);
 const navigate=useNavigate();
 const dispatch=useDispatch();
 const percent=Math.floor(parseInt(user?.data.loan_balance)/parseInt(user?.data?.loan_granted)*100)
 var color=percent>50?'red':'green'
 const userDetail=(
 <div>
  <div style={{textAlign:'center'}}>
  <Badge><Avatar src={user?.data.profile_thumbnail_path} size={64}></Avatar><EditOutlined style={{fontSize:'20px'}} onClick={()=>navigate('/update_profile')}/></Badge>
      <h6>{user?.data.first_name+" "+user?.data.last_name}</h6>
      </div>
      <p><i className='fa fa-phone' style={{color:'#009688'}}></i>{' +'+user?.data.phone_number}</p>
      <p><i className='fa fa-envelope' style={{color:'#009688'}}></i>{'  '+user?.data.email}</p>
      <p><i className='fa fa-dollar' style={{color:'#009688'}}></i>{'  '+user?.data.loan_balance+' '} <Tooltip title="loan used"><Progress type="circle" style={{marginLeft:'5%'}} percent={percent} strokeColor={color} width={30} /></Tooltip></p>
 </div>
 )
  const toggleClass = () => {
    const page_bar = document.getElementsByClassName("bar");
    const side_nav = document.getElementsByClassName("last_side_nav");
    if(page_bar.style.display === 'block'){
      side_nav.style.display= 'none'
    }

    setActive(!isActive);
  };
const logout=()=>{
  dispatch(auth_actions.logout());
  dispatch(actions.defaultState());
  dispatch(fav_action.clearfav());
  navigate('/login');

}
  return (
    <div className='last_header'>
      <div className='header'>
         
        <nav>
       <div className='icon'>
            <img src={image} className="img"/>
       </div> 
       <div className='search_input'>
         <Dropdown overlay={menu} trigger={['click']} className="dropdown">
            <a onClick={e => e.preventDefault()}>
            <Space>
                Engilsh
              <DownOutlined />
            </Space>
            </a>
            </Dropdown>
        <input type="search"  placeholder="ምን ይፈልጋሉ?" />
        <Button><i class="fa-solid fa-magnifying-glass"></i><span> Search </span></Button>
        {user && 
        <div className='profile'>
            <Popover content={userDetail}>
                <Avatar size='large' src={user.data.profile_thumbnail_path} icon={<UserOutlined/>}></Avatar>
            </Popover>
          </div>}
        {!user&&<Button className='join_now' onClick={()=>navigate('/registration')}>አሁኑኑ ይቀላቀሉ!</Button>}

         {fav!==0 &&<div onClick={()=>navigate('/fav')}><span className='fa'><i class="fa-solid fa-heart"></i></span>
         <Badge count={fav} size='small' offset={[-4,0]} ></Badge></div>}
         {istherecart && 
         <div onClick={()=>navigate('/cart_page')}>
          <span className='fas'>
          <i class="fa-solid fa-cart-arrow-down"></i></span>
          <Badge count={cartquantity} size='small'></Badge>
          </div>
          }
        <div className='bar'>
          <span onClick={toggleClass} ><i class="fa-solid fa-bars"></i></span> 
        </div>
        {user && <div><div style={{fontSize:'25px',color:'white'}} onClick={logout} className="logout"><i className='fa fa-sign-out'></i></div></div>}
        
</div>
    </nav>

    </div>
    </div>
  )
}

export default LastHeader