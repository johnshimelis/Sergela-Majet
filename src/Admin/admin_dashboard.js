import React from 'react';
import {Card,Switch,Pagination} from 'antd';
import {EditOutlined, DeleteOutlined,MoreOutlined,CaretDownOutlined } from '@ant-design/icons';
import AdminHeader from './admin_header';

import AdminNav from './admin_nav';
import Img1 from '../images/m 4.png';
import Image1 from '../images/m 5.png';
import Img2 from '../images/m 6.png';
import Img3 from '../images/m 7.png';
import Img4 from '../images/w 5.png';
import Img5 from '../images/w 6.png';
function AdminDashboard(){
  
    return(
        <div className='admin_dashboard'>
            <AdminHeader/>
            <AdminNav nav_link='main_page'/>
            <h6 style={{fontSize:17,fontWeight:'bold',marginTop:50,color:'#252733',marginLeft:150,letterSpacing:1}}>Dashboard</h6>
             <Card hoverable style={{ width: 200 ,height:120,marginTop:30,marginLeft:150,borderRadius:10,borderColor:'#DFE0EB'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Customers</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>60</h6>
            </Card>
            <Card  hoverable style={{ width: 200 ,height:120,marginTop:-120,marginLeft:390,borderRadius:10,borderColor:'#DFE0EB'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Special Users</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>16</h6>
            </Card>
            <Card  hoverable style={{ width: 200 ,height:120,marginTop:-120,marginLeft:630,borderRadius:10,borderColor:'#DFE0EB'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Products</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>43</h6>
            </Card>
            <Card  hoverable style={{ width: 200 ,height:120,marginTop:-120,marginLeft:870,borderRadius:10,borderColor:'#DFE0EB'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Catagories</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>10</h6>
            </Card>
            <Card  hoverable style={{ width: 200 ,height:120,marginTop:10,marginLeft:150,borderRadius:10,borderColor:'#DFE0EB'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Packages</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>10</h6>
            </Card>
            <Card  hoverable style={{ width: 200 ,height:120,marginTop:-120,marginLeft:390,borderRadius:10,borderColor:'#DFE0EB'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Orders</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>34</h6>
            </Card>
            <Card  hoverable style={{ width: 200 ,height:120,marginTop:-120,marginLeft:630,borderRadius:10,borderColor:'#FAAD14'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#FAAD14'}}>Merchants</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#FAAD14'}}>28</h6>
            </Card>
            <Card  hoverable style={{ width: 200 ,height:120,marginTop:-120,marginLeft:870,borderRadius:10,borderColor:'#DFE0EB'}}>
                    <h6 style={{textAlign:'center',fontSize:15,fontWeight:'bold',color:'#9FA2B4'}}>Delivered Orders</h6>
                    <h6 style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#252733'}}>10</h6>
            </Card>

            {/* admin table card */}

            <Card className='admin_table' style={{height:750,marginTop:20,marginLeft:150,borderRadius:10,borderColor:'#DFE0EB'}}>
                <h6 style={{marginLeft:25,color:'#252733',fontWeight:'bold' , fontSize:18}} >Merchants</h6>
                <div className='admin_table_icons'>
                <i style={{padding:12,marginLeft:800,color:'#C5C7CD'}} className="fa-solid fa-sort"></i><span style={{color:'#4B506D'}}>Sort</span>
                <i style={{padding:12,color:'#C5C7CD'}} className="fa-solid fa-filter"></i><span style={{color:'#4B506D'}}>Filter</span>
                </div>

                    <div className='table_column'>
                        <h6 style={{color:'#C5C7CD',marginLeft:25, fontSize:14}} >Merchant Name</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-27,marginLeft:600 ,fontSize:14}} >Edit</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-27,marginLeft:700, fontSize:14}} >Delete</h6>
                        <h6 style={{color:'#C5C7CD',marginTop:-27,marginLeft:800, fontSize:14}} >Deactivate</h6>
                </div>
                <div className='bottom_border'>
                </div>
                <div className='table_element'>
                    <img className='user_profile' style={{borderRadius:50}} src={Image1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Tom Cruise</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                        <div className='outlines'>
                            <EditOutlined style={{ color : '#F4AD33',marginLeft : 600, fontSize : 20}}/>
                            <DeleteOutlined style={{color : '#F4AD33',marginLeft : 100, fontSize : 20}}/>
                            <Switch style={{backgroundColor: '#BFBFBF',marginLeft:80,size:10}} defaultChecked/>
                            <MoreOutlined style={{ fontSize:22,color:'#C5C7CD',marginLeft:39}}/>
                        </div>
                </div>

                <div className='bottom_border'>
                </div>
                <div className='table_element'>
                    <img className='user_profile' style={{borderRadius:50}} src={Img1} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Matt Damon</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                        <div className='outlines'>
                            <EditOutlined style={{ color : '#F4AD33',marginLeft : 600, fontSize : 20}}/>
                            <DeleteOutlined style={{color : '#F4AD33',marginLeft : 100, fontSize : 20}}/>
                            <Switch style={{backgroundColor: '#BFBFBF',marginLeft:80,size:10}} defaultChecked/>
                            <MoreOutlined style={{ fontSize:22,color:'#C5C7CD',marginLeft:39}}/>
                        </div>
                </div>

                <div className='bottom_border'>
                </div>
                <div className='table_element'>
                    <img className='user_profile' style={{borderRadius:50}} src={Img2} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Henry Cavil</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                        <div className='outlines'>
                            <EditOutlined style={{ color : '#F4AD33',marginLeft : 600, fontSize : 20}}/>
                            <DeleteOutlined style={{color : '#F4AD33',marginLeft : 100, fontSize : 20}}/>
                            <Switch style={{backgroundColor: '#BFBFBF',marginLeft:80,size:10}} defaultChecked/>
                            <MoreOutlined style={{ fontSize:22,color:'#C5C7CD',marginLeft:39}}/>
                        </div>
                </div>

                <div className='bottom_border'>
                </div>

                <div className='table_element'>
                    <img className='user_profile' style={{borderRadius:50}} src={Img3} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Sam Smith</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                        <div className='outlines'>
                            <EditOutlined style={{ color : '#F4AD33',marginLeft : 600, fontSize : 20}}/>
                            <DeleteOutlined style={{color : '#F4AD33',marginLeft : 100, fontSize : 20}}/>
                            <Switch style={{backgroundColor: '#BFBFBF',marginLeft:80,size:10}} defaultChecked/>
                            <MoreOutlined style={{ fontSize:22,color:'#C5C7CD',marginLeft:39}}/>
                        </div>
                </div>

                <div className='bottom_border'>
                </div>
                <div className='table_element'>
                    <img className='user_profile' style={{borderRadius:50}} src={Img4} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Chris Evan</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                        <div className='outlines'>
                            <EditOutlined style={{ color : '#F4AD33',marginLeft : 600, fontSize : 20}}/>
                            <DeleteOutlined style={{color : '#F4AD33',marginLeft : 100, fontSize : 20}}/>
                            <Switch style={{backgroundColor: '#BFBFBF',marginLeft:80,size:10}} defaultChecked/>
                            <MoreOutlined style={{ fontSize:22,color:'#C5C7CD',marginLeft:39}}/>
                        </div>
                </div>

                <div className='bottom_border'>
                </div>
                <div className='table_element'>
                    <img className='user_profile' style={{borderRadius:50}} src={Img5} alt='user profile'/>
                    <h6 style={{fontSize:13,marginLeft:55,marginTop:-45,color:'#252733'}}>Steve Roger</h6>
                    <h6 style={{fontSize:11,marginLeft:55,color:'#C5C7CD'}}>Registered 1 day ago</h6>
                        <div className='outlines'>
                            <EditOutlined style={{ color : '#F4AD33',marginLeft : 600, fontSize : 20}}/>
                            <DeleteOutlined style={{color : '#F4AD33',marginLeft : 100, fontSize : 20}}/>
                            <Switch style={{backgroundColor: '#BFBFBF',marginLeft:80}} defaultChecked/>
                            <MoreOutlined style={{ fontSize:20,color:'#C5C7CD',marginLeft:39}}/>
                        </div>
                </div>

            <div className='bottom_border'>
                </div>
                <div className='admin_pagination'>
                    <h6 style={{ fontSize:15,marginTop:25,color:'#C5C7CD',marginLeft:580}}>Rows per page: <span style={{color:'#4B506D'}}>6</span> <CaretDownOutlined style={{marginTop:0,fontSize:20}}  /></h6>
                    <Pagination style={{color: '#BFBFBF',marginTop:-33,marginLeft:820}} size="small" total={20} />
                </div>
            </Card>
        </div>
    );
}


export default AdminDashboard;