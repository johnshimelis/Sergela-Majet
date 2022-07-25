import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AppHeader from './components/header';
import GetProducts from './Customer/product'
import GetProducts2 from './Customer/product 2'
import HomePage from './components/home';
import MainPage from './Customer/main_page';
import Login from './Customer/Login';
import 'antd/dist/antd.css';
import Admin from './Customer/admin'
import Permission from './Customer/permission';
import NewProducts from './Customer/newProducts';
import NewItems from './drawer/new_items';
import NewItems2 from './drawer/new_items2';
import CompanyRegister from './drawer/company_register';
import ClientRegister from './drawer/client_register';
import AllProduct from './Customer/allProducts';
import CartPage from './Customer/cart_page';
import Info from './Customer/info';
import Transport from './Customer/transport';
import Payment from './Customer/payment';
import Success from './Customer/success';
import OrderManagment from './Customer/order_managment';
import LastProduct from './Customer/home_page';
import OrderManagmentPending from './Customer/order_managment_pending';
import AdminDashboard from './Admin/admin_dashboard';
import AdminOrderManagment from './Admin/admin_order_management';
import RBAC from './Admin/rbac';
import RBACFilter from './Admin/admin_rbac_filter';
import RBACChange from './Admin/rbac_change';
import AdminOrderManagementSuccesful from './Admin/admin_order_management_succesful_filter';
import AdminCustomerManagement from './Admin/admin_customer_management';
import AdminStockManagement from './Admin/admin_stock_management';
import HomeHeader from './components/home_header';
import LastSideNav from './components/side_nav';
import LastHome from './Customer/last_home';
import CustomerHome from './Customer/customer_home';
import HomeFooter from './Customer/home_footer';
import NewItemCard from './Admin/new_item_card';


function App() {
  return (
 <Router>
   <Routes>
     <Route path='/success' element={<Success />} />
       <Route path='/new_item_card' element={<NewItemCard />} />
        
      <Route path='/home_footer' element={<HomeFooter />} />
      <Route path='/last_home' element={<LastHome />} />
       <Route path='/customer_home' element={<CustomerHome />} />
     <Route path='/last_side_nav' element={<LastSideNav />} />
      <Route path='/home_header' element={<HomeHeader />} />
      <Route path='/order_managment_pending' element={<OrderManagmentPending />} />
     <Route path='/home_page' element={<LastProduct />} />
     <Route path='/admin_dashboard' element={<AdminDashboard />} />
      <Route path='/order_managment' element={<OrderManagment />} />
     <Route  path='/' element={<Login />} />
      <Route  path='/payment' element={<Payment />} />
     <Route  path='/transport' element={<Transport />} />
     <Route  path='/info' element={<Info />} />
    <Route  path='cart_page' element={<CartPage />} />
    <Route  path='/admin' element={<Admin />} />
     <Route  path='/all_products' element={<AllProduct />} />
     <Route  path='/get_products' element={<GetProducts />} />
      <Route  path='/ ' element={<GetProducts2 />} />
    <Route  path='/new_products' element={<NewProducts />} />
    <Route  path='/new_item' element={<NewItems />} />
    <Route  path='/new_item2' element={<NewItems2 />} />
     <Route  path='/home' element={<HomePage />} />
    <Route  path='/main_page' element={<MainPage />} />
   <Route  path='/permission' element={<Permission />} />
   <Route  path='/company_register' element={<CompanyRegister />} />
   <Route  path='/client_register' element={<ClientRegister />} />
   <Route path='/admin_order_management' element={<AdminOrderManagment/>}/>
   <Route path='/rbac' element={<RBAC/>}/>
   <Route path='/rbac_filter' element={<RBACFilter/>}/>
   <Route path='rbac_change' element={<RBACChange/>}/>
   <Route path='successfully_ordered' element={<AdminOrderManagementSuccesful/>}/>
   <Route path='customer_management' element={<AdminCustomerManagement/>}/>
   <Route path='stock_management' element={<AdminStockManagement/>}/>
  
   </Routes>
 </Router>
  );
}

export default App;
