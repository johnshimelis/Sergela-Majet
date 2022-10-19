import React,{useState} from 'react';
import {Button,Drawer,Menu} from 'antd';
import {Link} from 'react-router-dom'
function AdminNav(props){  
    const [visible, setVisible] = useState(false);

    const showDrawer = () => { setVisible(true); };

    const onClose = () => { setVisible(false); };
    return(
       <>
              <div className='admin_nav' style={{marginTop:'0%'}}>
                     <Menu mode="horizontal" defaultSelectedKeys={props.nav_link} >
                     <Menu.Item key="main_page">
                            <Link to='/admin_dashboard'>
                                   <div className="home">ሰረገላ አድሚን</div>
                            </Link>
                     </Menu.Item>
                     
                     <Menu.Item key="main">
                                   <Link to='/admin'>ዋና ገጽ</Link>
                     </Menu.Item> 
                     
                     <Menu.Item key="new_products">
                            <Link to='/new_products'> ዕቃዎች </Link>
                     </Menu.Item>

                     <Menu.Item key="warehouse">
                            <Link to='/warehouse'>ዌር ሀውስ</Link>
                     </Menu.Item>

                     <Menu.Item key="bank">
                            <Link to='/bank'>ባንክ</Link>
                     </Menu.Item>

                     <Menu.Item key="package_management">
                            <Link to='/package_management'>Package Management</Link>
                     </Menu.Item>

                     <Menu.Item key="stock_management">
                            <Link to='/stock_management'>Stock Management</Link>
                     </Menu.Item>

                     <Menu.Item key="rbac">
                            <Link to='/rbac'>RBAC</Link> 
                     </Menu.Item>

                     <Menu.Item key="order_management"> 
                            <Link to='/admin_order_management'>Order Management</Link>
                     </Menu.Item>

                     <Menu.Item key="fulfillment"> 
                            <Link to='/fulfillment'>Fullfillment</Link>
                     </Menu.Item>
                     
                     <Menu.Item key="customer_management">
                            <Link to='/customer_management'>Customer Management</Link>
                     </Menu.Item>
                     {/* <Menu.Item key="fullfillment">
                            <Link to='/fullfillment'>Fullfillment</Link>
                     </Menu.Item> */}
                     <Menu.Item key="recycler">
                            <Link to='/recycler'>ሪሳይክለር</Link>
                     </Menu.Item>

                     </Menu>
              </div>
             
              <div className='small_size'>
                     <Button className='btn' type="primary" style={{left:-500,marginTop:-85,backgroundColor:'#252733',borderColor:'#252733'}} onClick={showDrawer}>
                       <i style={{color:'#FAAD14'}} className="fas fa-bars"></i>
                     </Button>
                     <Drawer placement="right" onClose={onClose} visible={visible}>
                                   <Menu mode="vertical" defaultSelectedKeys={props.nav_link}>
                                   <Menu.Item key="main_page">
                                          <Link to='/admin_dashboard'>
                                                 <div className="home">ሰረገላ አድሚን</div>
                                          </Link>
                                   </Menu.Item>
                                   
                                   <Menu.Item key="main">
                                                 <Link to='/main_page'>ዋና ገጽ</Link>
                                   </Menu.Item> 
                                   
                                   <Menu.Item key="new_item">
                                          <Link to='/new_item'> ዕቃዎች </Link>
                                   </Menu.Item>

                                   <Menu.Item key="new_products">
                                          <Link to='/new_products'>የታዘዙ </Link>
                                   </Menu.Item>

                                   <Menu.Item key="credit">
                                          <Link to='/credit'>ብድር(ክሬዲት)</Link>
                                   </Menu.Item>

                                   <Menu.Item key="stock_management">
                                          <Link to='/stock_management'>Stock management</Link>
                                   </Menu.Item>

                                   <Menu.Item key="rbac">
                                          <Link to='/rbac'>RBAC</Link> 
                                   </Menu.Item>

                                   <Menu.Item key="order_management">
                                          <Link to='/admin_order_management'>Order management</Link>
                                   </Menu.Item>
                                   
                                   <Menu.Item key="customer_management">
                                          <Link to='/customer_management'>Customer management</Link>
                                   </Menu.Item>

                                   </Menu>
                     </Drawer>
              </div>
        </>
    );
    
}

export default AdminNav;