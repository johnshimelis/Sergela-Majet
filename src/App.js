import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'antd/dist/antd.variable.min.css';
import './App.css';
import { QueryClientProvider,QueryClient } from 'react-query';
import GetProducts from './components/product';
import MainPage from './customer/main_page';

import Login from './common/Login';
import Admin from './Admin/admin'
import Permission from './components/permission';
import NewProducts from './Admin/newProducts';
import NewItems from './drawer/new_items';
import ClientRegister from './drawer/client_register';
import RegisterPackage from './drawer/register_package';
// import Success from './components/success';
import AdminDashboard from './Admin/admin_dashboard';
import AdminOrderManagment from './Admin/admin_order_management';
import RBAC from './Admin/rbac';
import AdminCustomerManagement from './Admin/admin_customer_management';
import AdminStockManagement from './Admin/admin_stock_management';
import Registration from './common/Registeration';
import ForgetPassword from './common/ForgetPassword';
import Recycler from './Admin/recycler';
import Bank from './Admin/bank_management';
import WareHouse from './Admin/warehouse_management';
import AdminPackageManagement from './Admin/admin_package_management';
import Fulfilment from './Admin/Fulfillment';
//Customer
import LastHome from './customer/last_home';
import AllProduct from './customer/allProducts';
import CartPage from './customer/cart_page';
import Info from './customer/info';
import Transport from './customer/transport';
import Payment from './customer/payment';
import Fav from './customer/fav';
import ResetPassword from './common/reset_password';
import UpdateProfile from './common/update_profile';
function App() {
  const client=new QueryClient();
  return (
    <QueryClientProvider client={client}>
        <Router>
          <Routes>
              {/* <Route path='/success' element={<Success />} /> */}
              <Route path='/admin_dashboard' element={<AdminDashboard />} />
              <Route  path='/login' element={<Login />} />
              <Route  path='/payment' element={<Payment />} />
              <Route  path='/transport' element={<Transport />} />
              <Route  path='/info' element={<Info />} />
              <Route  path='cart_page' element={<CartPage />} />
              <Route  path='/admin' element={<Admin />} />
              <Route path='/bank' element={<Bank/>}/>
              <Route  path='/all_products' element={<AllProduct />} />
              <Route  path='/get_products' element={<GetProducts />} />
              {/* new products */}
              <Route  path='/new_products' element={<NewProducts />} />
              {/*  */}
              <Route  path='/new_item' element={<NewItems />} />

              {/* <Route  path='/main_page' element={<MainPage />} /> */}
              <Route  path='/permission' element={<Permission />} />
              <Route  path='/client_register' element={<ClientRegister />} /> 
              <Route path='/admin_order_management' element={<AdminOrderManagment/>}/>
              <Route path='/rbac' element={<RBAC/>}/>
              <Route path='customer_management' element={<AdminCustomerManagement/>}/>
              <Route path='stock_management' element={<AdminStockManagement/>}/>
              <Route path='registration' element={<Registration/>}/>
              <Route path='forget_pass' element={<ForgetPassword/>}/>
              <Route path='' element={<LastHome/>}/>
              <Route path='recycler' element={<Recycler/>}/>
              <Route path='warehouse' element={<WareHouse/>}/>
              {/* Customer Side Routes */}
              <Route path='last_home' element={<LastHome />} />
              <Route path='main_page' element={<MainPage />} />
              <Route path='fav' element={<Fav/>}/>
              <Route path='reset_pass' element={<ResetPassword/>}/>
              <Route path='update_profile' element={<UpdateProfile/>}/>
              <Route path='package_management' element={<AdminPackageManagement/>}/>
              <Route path='register_package' element={<RegisterPackage/>}/>
              <Route path='fulfillment' element={<Fulfilment/>}/>
          </Routes>
 </Router>
 </QueryClientProvider>
  );
}
export default App;
