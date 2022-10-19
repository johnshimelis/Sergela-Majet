import {useState} from 'react';
import AdminNav from "./admin_nav";
import AdminHeader from "./admin_header";
import { Button,Drawer } from "antd";
import RegisterPackage from '../drawer/register_package';
const AdminPackageManagement=()=>{
    const [visible,setVisible]=useState(false);
    return (
    <>
      <AdminHeader/>
      <AdminNav/>
      <Button className='new_comp' onClick={()=>setVisible(true)} style={{marginTop:'3%',marginLeft:'5%',backgroundColor:'#FAAD14'}}>+ አዲስ ፓኬጅ ይመዝግቡ</Button>
      <Drawer visible={visible} closable={false} onClose={()=>setVisible(false)}>
        <RegisterPackage/>
      </Drawer>
    </>
    )
}

export default AdminPackageManagement;