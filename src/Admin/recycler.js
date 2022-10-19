import { useEffect,useState} from 'react';
import {useQuery} from 'react-query';
import api from '../adapter/base';
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import {Card,Collapse,Statistic,Table, Tooltip} from 'antd';
import {ArrowUpOutlined,DeleteOutlined,RedoOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux';
const Recycler=()=>{
    const [datas,setDatas]=useState([]);
    const user=useSelector(state=>state.auth.user.access_token)
    const {data:products}=useQuery('trashed_products',()=>{return api.get('products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            },{params:{only_trashed:{}}})},{retryDelay:500})
    const {data:suppliers}=useQuery('trashed_suppliers',()=>{return api.get('suppliers',{
      headers:
              { "Authorization": `Bearer ${user}` }
            },{params:{only_trashed:{}}})},{retryDelay:500})
    const {data:categories}=useQuery('trashed_categories',()=>{return api.get('categories',{
      headers:
              { "Authorization": `Bearer ${user}` }
            },{params:{only_trashed:{}}})},{retryDelay:500})
    const {data:users}=useQuery('trashed_users',()=>{return api.get('users',{
      headers:
              { "Authorization": `Bearer ${user}` }
            },{params:{only_trashed:{}}})})
    const {data:packages}=useQuery('trashed_package',()=>{return api.get('packages',{
      headers:
              { "Authorization": `Bearer ${user}` }
            },{params:{only_trashed:{}}})})
    const {data:subcategories}=useQuery('trashed_subcategories',()=>{return api.get('subcategories',{
      headers:
              { "Authorization": `Bearer ${user}` }
            },{params:{only_trashed:{}}})})
    const {Panel}=Collapse;
    const columns = [
      {
        title: 'ስም',
        dataIndex: 'name',
      },
      {
        title: 'ገለጻ',
        dataIndex: 'description',
      },
      {
        title: 'ዋጋ',
        dataIndex: 'price',
      }
      ,
      {
        title: 'ቅናሽ',
        dataIndex: 'discount',
      },
      {
        title: 'ስቶክ የቀረ',
        dataIndex: 'stock',
      },
      {
      
        render :(record) =>{
          return(
            <>
              <Tooltip title='restore'>
                  <RedoOutlined style={{color : 'green',marginLeft : 40, fontSize : 17}} onClick={()=>{}}/>
              </Tooltip>
              <Tooltip title="Delete Permanently">
                  <DeleteOutlined style={{color : 'red',marginLeft : 40, fontSize : 17}} onClick={()=>{}}/>
              </Tooltip>
            </>
          );
        }
      }
    ];
    useEffect(()=>{
        for(let i=0;i<products?.data?.data.length;i++){
          setDatas(pre=>{
            return [...pre,{name:products?.data?.data[i]?.name,description:products?.data?.data[i]?.description,price:products?.data?.data[i]?.price,discount:products?.data?.data[i]?.discount,stock:products?.data?.data[i]?.left_in_stock}]
          })
        }
      },[products]);
    return (
        <div>
           <AdminHeader/>
          <AdminNav nav_link='recycler'/>
            <Card hoverable title="Deleted Recycler" style={{marginTop:'3%',marginLeft:'5%',width:'90%'}}>
              <Collapse bordered={false} defaultActiveKey={['1']} accordion>
              
                <Panel header="Products" key="1">
                <Statistic
                    title="Deleted"
                    value={products?.data?.data.length}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    suffix={<ArrowUpOutlined />}
                    />
                      <Table columns={columns} dataSource={datas} size='small'/>
                </Panel>
                <Panel header="Suppliers" key="2">
                      {suppliers?.data?.data.map(supplier=>{
                      return <div>
                          {supplier.name}
                      </div>
                    })}
                </Panel>
                <Panel header="Categories" key="3">
                      {categories?.data?.data.map(category=>{
                      return <div>
                          {category.name}
                      </div>
                    })}
                </Panel>
                <Panel header="Users" key="4">
                      {users?.data?.data.map(user=>{
                      return <div>
                          {user.name}
                      </div>
                    })}
                </Panel>
                <Panel header="Packages" key="5">
                      {packages?.data?.data.map(pack=>{
                      return <div>
                          {pack.name}
                      </div>
                    })}
                </Panel>
                <Panel header="Sub Categories" key="6">
                      {subcategories?.data?.data.map(sub_cate=>{
                      return <div>
                          {sub_cate.name}
                      </div>
                    })}
                </Panel>
                
            </Collapse>
            </Card>
        </div>
  )
}


export default Recycler;