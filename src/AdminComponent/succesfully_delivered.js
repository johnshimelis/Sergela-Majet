import {useEffect,useState} from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import api from '../adapter/base';
import {Table} from 'antd';
const SuccessfullyDelivered=()=>{
    const [dataset,setDataset]=useState([]);
    const user=useSelector(state=>state.auth.user.access_token);
    const {data:orders}=useQuery('successfully-orders',()=>{return(api.get('orders',{headers:{'Authorization':`Bearer ${user}`},
    params:
    {
        user:{},
        status:'successful',
        paginate:'all'
    }}))});
    const columns=[
        {
          key : "1",
          title : "ID",
          dataIndex : "id"
        },
          {
          key : "2",
          title : "Customer Name",
          dataIndex : "name"
        },
          {
          key : "3",
          title : "Order Cost",
          dataIndex : "cost"
        },
        {
          key:'4',
          title: "Date" ,
          dataIndex : "date"
        }
      ]
    useEffect(()=>{
        setDataset([])
        orders?.data?.data?.forEach(order=>{
            setDataset(prev=>{return [...prev,{id:'# '+order.id,name:order?.user?.first_name + ' '+ order?.user?.last_name,cost:order?.order_cost+' ብር',date:order?.created_at.split("T")[0]}] })
        });
    },[orders]);
    return(
        <div className="container" style={{marginTop:'1%'}}>
            <Table columns={columns} dataSource={dataset} loading={dataset.length===0}/>
        </div>
    );
}
export default SuccessfullyDelivered;