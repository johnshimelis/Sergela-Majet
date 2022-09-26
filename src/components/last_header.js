import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React, {useState} from 'react';
import image from '../images/ser.png';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions} from '../store/products-slice';



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
 const navigate=useNavigate();
 const dispatch=useDispatch();
 
 
//  useEffect(()=>{
//     localStorage.setItem('products',[]);
//     const product= localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[];
//     product.unshift({product:loc.state.product,counter:loc.state.counter});
//     localStorage.setItem('products',JSON.stringify(product));
//     setSelected_products(JSON.parse(localStorage.getItem('products')));
// },[]);

  const toggleClass = () => {
    const page_bar = document.getElementsByClassName("bar");
    const side_nav = document.getElementsByClassName("last_side_nav");
    if(page_bar.style.display === 'block'){
      side_nav.style.display= 'none'
    }

    setActive(!isActive);
  };
  const logout=()=>{
  localStorage.setItem('token','');
  localStorage.setItem('user_name','');
  dispatch(actions.defaultstate);
  navigate('/');

}
  
  return (
    <div className='last_header'>
      <div className='header'>
       
          <Dropdown overlay={menu} trigger={['click']} className="dropdown">
           <a onClick={e => e.preventDefault()}>
           <Space>
              Engilsh
             <DownOutlined />
           </Space>
           </a>
          </Dropdown>
           
        <nav>
       <div className='icon'>
            <img src={image} className="img"/>
             <a href="http://google.com">Sergela<span>Majet</span></a>
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
        
        {!localStorage.getItem('token')&&<Button className='join_now'>አሁኑኑ ይቀላቀሉ!</Button>}
        
         <span className='fa'><i class="fa-solid fa-heart"></i></span>
          {istherecart && 
         <div onClick={()=>navigate('/cart_page')}>
          <span className='fas'>
          <i class="fa-solid fa-cart-arrow-down"></i></span>
          <div className='badge'><p>{cartquantity}</p></div>
          </div>
          }
          {
          localStorage.getItem('token') && 
          <div>
            <div style={{fontSize:'25px',color:'white'}} onClick={logout}><i className='fa fa-sign-out'></i>
            </div>
            </div>
            }
        </div>
        <div className='menu'>
          <ul>
            <li><a href='#'>ጥቅሎች</a></li>
            <li><a href='#'>ያዘዙት ዕቃዎች</a></li>
            <li><span><i class="fa-solid fa-user"></i></span></li>

          </ul>
        </div>
        <div className='bar'>
         
          <span onClick={toggleClass} ><i class="fa-solid fa-bars"></i></span>
       
        </div>

    </nav>
  <div className={isActive ? 'menu_bar': 'new_class'} >
          <ul>
            <li><a href='#'>ጥቅሎች</a></li>
            <li><a href='#'>ያዘዙት ዕቃዎች</a></li>
            <li><span><i class="fa-solid fa-user"></i></span></li>

          </ul>
  </div>
    
 
   
    </div>
    </div>
  )
}

export default LastHeader