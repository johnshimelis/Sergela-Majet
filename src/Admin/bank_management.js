import {useEffect,useState} from 'react';
import {useQuery} from 'react-query'
import api from '../adapter/base'
import AdminHeader from './admin_header'
import AdminNav from './admin_nav'
import {Button,Table,Modal,Input,Space,message,Drawer,Popconfirm} from 'antd'
import { useSelector } from 'react-redux';
import { EditOutlined,DeleteOutlined} from '@ant-design/icons';
import UpdateBank from '../drawer/updateBank';
const Bank=()=>{
    const {data:banks}=useQuery('banks',()=>{return api.get('banks',{
      headers:
              { "Authorization": `Bearer ${user}` }
            })},{refetchOnWindowFocus:true});
    const [dataSource ,setDataSource]=useState([]);
    const [Visible,setVisible]=useState(false);
    const [bank,setBank]=useState();
    const [address,setAddress]=useState();
    const user=useSelector(state=>state.auth.user.access_token);
    const [updateId,setUpdateId]=useState();
    const [vis,setVis]=useState(false);
    const [open,setOpen]=useState(false);

    const setpopvisible=()=>{
      setOpen(true);
    }
    const handleCancel=()=>{
      setOpen(false);
      message.error("ስረዛው ተቋርጧል");
    }
    const delete_=async (id)=>{
      await api.delete(`banks/${id}`,{
        headers:
                { "Authorization": `Bearer ${user}` }
              }).then(res=>{
                message.success('Bank Deleted Succesfully');
                window.location.reload(true);
              }).catch(err=>{
                console.warn(err);
              })
    }
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },{
          key:'actions',
          render:(records)=>{
            return(
              <>
                <EditOutlined style={{ color : '#F4AD33',marginLeft : 20, fontSize : 20,marginTop:'-40px'}} onClick={()=>{setUpdateId(records.id);setVis(true)}}/>
                <Popconfirm 
                title="Are You Sure To Delete?"
                onConfirm={()=>delete_(records.id)}
                onCancel={()=>handleCancel()}
                okText="ሰርዝ"
                cancelText="ይቅር"
                open={open}
                >
                <DeleteOutlined style={{color : 'red',marginLeft :20, fontSize : 20}} onClick={()=>setpopvisible}/>
                </Popconfirm>
              </>
            )
          }
        }
      ];
      const registerBank=async ()=>{
        await api.post('banks',bank,{
          headers:
                  { "Authorization": `Bearer ${user}` }
                }).then(res=>{
          message.success('registered succesfully');
          window.location.reload(true); 
        }).catch(err=>{
          message.warning(err.response.data.message)
        })

      }
      useEffect(()=>{
        setDataSource([])
        banks?.data?.data.forEach(
            bank=>{
                setDataSource(pre=>{
                    return [...pre,{id:bank['id'],name:bank['name'],address:bank['address']['city']+','+bank['address']['sub_city'],phone:bank['phone_number']}]
                });
            }
        )
        
      },[banks])
    return(
       <div>
        <AdminHeader/>
        <AdminNav nav_link='/bank'/>
            <Button className='new_comp' onClick={()=>{setVisible(true)}} style={{marginTop:'3%',marginLeft:'5%',backgroundColor:'#FAAD14'}}>+ አዲስ ባንክ ይመዝግቡ</Button>
        <div style={{marginLeft:'10%',marginTop:'2%',width:'75%'}}>
            <Table dataSource={dataSource} columns={columns} loading={banks?.data?.data.length===0} style={{height:'13px'}}/>
        </div>
        <Modal
            title="Register Bank"
            style={{ top: 20 }}
            visible={Visible}
            onOk={() => {registerBank()}}
            onCancel={() => {setVisible(false);message.warning('ምንም ስራ አልተሰራም')}}
            closable={false}
            okText='ይመዝገብ'
            cancelText='ይቅር'
        >
        <Space direction='vertical' style={{width:'80%'}}>
            <Input placeholder="የባንክ ስም"  onChange={(e)=>{setBank(pre=>{return{...pre,name:e.target.value}})}}/>
            <Input showCount maxLength={12} placeholder="ስልክ ቁጥር" onChange={(e)=>{setBank(pre=>{return{...pre,phone_number:e.target.value}})}}/>
            <Input placeholder="ኢሜል" onChange={(e)=>{setBank(pre=>{return{...pre,email:e.target.value}})}}/>
            <Input placeholder="ከተማ" onChange={(e)=>{setAddress(pre=>{return{...pre,city:e.target.value}});setBank(pre=>{return{...pre,address}})}}/>
            <Input placeholder="ክፍለ ከተማ" onChange={(e)=>{setAddress(pre=>{return{...pre,sub_city:e.target.value}});setBank(pre=>{return{...pre,address}})}}/>
            <Input placeholder="ወረዳ"  onChange={(e)=>{setAddress(pre=>{return{...pre,woreda:e.target.value}});setBank(pre=>{return{...pre,address}})}}/>
            <Input placeholder="የቤት ቁጥር" onChange={(e)=>{setAddress(pre=>{return{...pre,house_number:e.target.value}});setBank(pre=>{return{...pre,address}})}}/>
        </Space>
      </Modal>
      <Drawer closable={false} visible={vis} onClose={()=>setVis(false)}>
        <UpdateBank id={updateId}/>
      </Drawer>
       </div>)
}

export default Bank;