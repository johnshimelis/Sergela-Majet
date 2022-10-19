import { useState,useEffect} from "react";
import { Table,Button,Popconfirm,message,Tabs} from "antd";
import AdminHeader from "./admin_header";
import AdminNav from "./admin_nav";
import PendingDelivery from "../AdminComponent/pending_delivery";
import SuccessfullyDelivered from "../AdminComponent/succesfully_delivered";
import api from '../adapter/base';
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import SearchBar from "../AdminComponent/search_bar";
const Fulfilment=()=>{
    const [dataset,setDataset]=useState([]);
    const [open,setOpen]=useState(false);
    const [open_,setOpen_]=useState(false);
    const user=useSelector(state=>state.auth.user.access_token);
    const {TabPane}=Tabs
    const {data:orders}=useQuery('orders',()=>{return api.get('orders',{
        headers:{
            'Authorization':`Bearer ${user}`
        },
        params:{
            status:'pending-pickup',
            user:{},
            paginate:'all'
        }
    }
    )});
    const handleCancel=()=>{
        setOpen(false);
        message.error('Not Approved yet');

    }
    const handleCancel_=()=>{
        setOpen_(false);
        message.error('Not Declined yet');

    }
    const decline=(id)=>{
        const id_=parseInt(id.split('#')[1]);
        api.post(`orders/${id_}/cancel`,'',{
            headers:{
                "Authorization": `Bearer ${user}`
            }
        }).then(res=>
            {
                message.warning("Order Declined");
                window.location.reload(false);
            }
        ).catch(
            err=>{
                message.error("Eror Happened While Declining Order");
        }
        )
    }
    const approve=(id)=>{
        const id_=parseInt(id.split('#')[1]);
        api.post(`orders/${id_}/approve-pickup-delivery`,'',{
            headers:{
                "Authorization": `Bearer ${user}`
            }
        }).then(res=>
            {
                message.success("Approved Successfully");
                window.location.reload(false);
            }
        ).catch(
            err=>{
                message.error("Eror Happened While Approving");
        }
        );
    }
    const columns=[
        {
          key : "1",
          title : "ID",
          dataIndex : "id"
        },
          {
          key : "2",
          title : "customer",
          dataIndex : "name"
        },
          {
          key : "3",
          title : "Order Cost",
          dataIndex : "order_cost"
        },
        {
            key:'4',
            title:'Date',
            dataIndex:'date'
        },
        {
     key :"5",
     render :(records) =>{
       return(
         <>            
            <Popconfirm
                title="Approve?"
                onConfirm={()=>{approve(records.id)}}
                onCancel={()=>handleCancel()}
                okText="ይድረግ"
                cancelText="አይ ይቅር"
                open={open}>
                <Button style={{marginTop:'3%',marginLeft:'5%',backgroundColor:'#FAAD14'}} onClick={()=>setOpen(true)}>Approve</Button>
            </Popconfirm>
          
                <Popconfirm
                    title="Decline?"
                    onConfirm={()=>decline(records.id)}
                    onCancel={()=>handleCancel_()}
                    okText="ይድረግ"
                    cancelText="አይ ይቅር"
                    open={open_}>
                <Button style={{marginTop:'3%',marginLeft:'5%',backgroundColor:'red'}}>Decline</Button>
                </Popconfirm>
         </>
       );
     }
   }

    ]
    useEffect(()=>{
        setDataset([]);
        orders?.data?.data?.forEach(order=>{ 
                       setDataset(prev=>{return[...prev,{id:'#'+order.id,name:' '+order?.user?.first_name+' '+order?.user?.last_name,order_cost:order.order_cost+' ብር',date:order.created_at.split('T')[0]}]})
            })
            }
    ,[orders]);
    const onChange=(key)=>{
        message.success('key '+key)
    }
return (
    <div>
       <AdminHeader/>
       <AdminNav/>
       <SearchBar/>
        <Tabs>
            <TabPane tab='Pending PickUp Approval' key='1'>
                <div className='container' style={{marginTop:'1%'}}>
                   <Table dataSource={dataset} columns={columns} style={{marginTop:'2%',marginLeft:'1%'}} loading={dataset.length===0}/>     
                </div>
            </TabPane>
            <TabPane tab="Pending Delivery" key="2">
                <PendingDelivery/>
            </TabPane>
            <TabPane tab="Successfully Delivered" key="3">
                <SuccessfullyDelivered/>
            </TabPane>
        </Tabs>
            
    </div>
)
}

export default Fulfilment;