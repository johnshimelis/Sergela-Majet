import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom'

import { useNavigate } from "react-router-dom";
function Navigate(){
const navigate = useNavigate();
}

class AdminNav extends React.Component{  
       
    render=()=>(
        <div className='admin_nav' style={{marginTop:'-90px'}}>
        <Menu mode="horizontal" defaultSelectedKeys={this.props.nav_link}>
            <Menu.Item key="main">
                <div className="home">ሰረገላ አድሚን</div>
            </Menu.Item>
            
            <Menu.Item key="main_page">
                     <Link to='/admin_dashboard'>ዋና ገጽ</Link>
            </Menu.Item> 
            
            <Menu.Item key="/new_item">
               <Link to='/admin_dashboard'>ዕቃዎች</Link>
                    
            </Menu.Item>

            <Menu.Item key="/new_products">
                    የታዘዙ
            </Menu.Item>

            <Menu.Item key="/credit">
                   ብድር(ክሬዲት)
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
        </div>
    );
}

export default AdminNav;