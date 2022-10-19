import { useState,useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import api from '../adapter/base' 
import { Table,Button, message} from "antd";
const PendingDelivery=()=>{
    const user=useSelector(state=>state.auth.user.access_token);
    const {data:orders}=useQuery('pending-orders',()=>{return(api.get('orders',{headers:{'Authorization':`Bearer ${user}`},params:{
        user:{},
        status:'pending-delivery',
        paginate:'all'
    }}))});
    const [dataset,setDataset]=useState([]);
    const checkStatus=(id)=>{
        const id_=parseInt(id.split('#')[1])
        api.get(`orders/${id_}/delivery-status`,{headers:{
            'Authorization':`Bearer ${user}`
        }}).then(res=>message.warn(res.data.status.split('_').join(" ").toLowerCase()))
        
    }
    const RetryPickup=(id)=>{
        const id_=parseInt(id.split('#')[1])
        api.post(`orders/${id_}/retry-pickup-delivery`,'',{headers:{
            'Authorization':`Bearer ${user}`
        }}).then(res=>{message.success(res.data.message);window.location.reload(false);}).catch(err=>console.log(err))
        
    }
    const EndTrip=()=>{
        console.log('End Trip');
    }
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Customer Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Order Cost',
          dataIndex: 'order_cost',
          key: 'order_cost',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },{
          key:'actions',
          render:(records)=>{
            return(
              <>
                <Button style={{ color : '#F4AD33',marginLeft : 20,marginTop:'-40px'}} onClick={()=>checkStatus(records.id)}>Check Status</Button>
                <Button style={{ color : '#F4AD33',marginLeft : 20,marginTop:'-40px'}} onClick={()=>RetryPickup(records.id)}>Retry PickUp</Button>
                <Button style={{ color : '#F4AD33',marginLeft : 20,marginTop:'-40px'}}>End Trip</Button>
              </>
            )
          }
        }
      ];
    useEffect(()=>{
        setDataset([])
        orders?.data?.data.forEach(order=>{
            setDataset(prev=>{return [...prev,{
                id:'#'+order.id,
                name:order?.user?.first_name+' '+order?.user?.last_name,
                order_cost:order?.order_cost+' ብር',
                date:order?.created_at.split('T')[0]
            }]})
        })

    },[orders])
    return(
        <div className='container' style={{marginTop:'1%'}}>
          <Table columns={columns} dataSource={dataset} loading={dataset.length===0}/>
        </div>);
}

export default PendingDelivery;