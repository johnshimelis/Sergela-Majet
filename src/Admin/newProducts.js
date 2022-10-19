import React, { useEffect, useState } from 'react'
import api from '../adapter/base'
import AdminNav from '../Admin/admin_nav'
import NewItems from '../drawer/new_items'
import image from '../images/ser.png'
import image_2 from '../images/abebe.jpeg'
import { Header } from 'antd/lib/layout/layout'
import { Row, Col, Card, Input, Button,Checkbox, Drawer, Modal,Pagination,message,Image } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'
import AdminSideNav from './admin_side_nav'

const { Meta } = Card;

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteId,setDeleteId]= useState();
  const [productName,setProductName]=useState();
  const [selectedProduct,setselectedProduct]=useState();
  const [visible, setVisible] = useState(false);
  const [visible_,setVisible_]=useState(false);
  const [lastPage,setLastPage]=useState();
  const user=useSelector(state=>state.auth.user.access_token);
  const user_name=useSelector(state=>state.auth.user.data.first_name)

  const onClose_=()=>{setVisible_(false)}
  const {Search}=Input;
const producty=(id)=>{api.get(`products/${id}`,{
  headers:
          { "Authorization": `Bearer ${user}` }
        }).then(res=>{ 
  setselectedProduct(res.data.data.image_paths);
})}
  const onSucess=()=>{
    message.success('ከፊት ለፊት ገጽ በተሳካ ሁኔታ ሰርዘዋል፡፡',10);
  }
  const onError=()=>{
    message.error(<>ስራው አልተሰራም መሰረዙ አልተሳካም <i className='fa fa-exclamation-triangle' style={{color:'red',font:15}}></i></>,5)
  }
  const changeproducts=(data)=>{
          console.log(data);
  }
  const paginator=(page)=>{
    api.get('products',{
      headers:
              { "Authorization": `Bearer ${user}` },
              params:{
                page:page
              }
            }).then(res=>{
      setProducts(res.data.data);
    }).catch(err=>{
      console.log(err)
    })
  }
  const handleOk = () => {
    setIsDeleteModalVisible(false);
    delete_product_(deleteId);
  };

  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    onError();
  };

  const delete_product_=async (id)=>{
    const data=await api.delete(`products/${id}`,{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
        (response)=> 
        { 
          onSucess();
          window.location.reload(false);
        });
    return data;
}
const all_products=(e)=>{
  if(e.target.checked===true){
  api.get('products',{
    headers:
            { "Authorization": `Bearer ${user}` }
          }).then(
    (response) => {
      setProducts(response.data['data']);
    });
  }
}
  const packed_food = (e) => {
  if(e.target.checked===true){
    api.get('categories/1/products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (response) => {
        setProducts(response.data['data']);
      });
    }
  };
  const cereals=(e)=>{
  if(e.target.checked===true){
    api.get('categories/2/products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (response) => {
        setProducts(response.data['data']);
      });
  }
  }
  const drinks=(e)=>{
  if(e.target.checked===true){
    api.get('categories/3/products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (response) => {
        setProducts(response.data['data']);
      });
    }
  }
  const sanitary=(e)=>{
  if(e.target.checked===true){
    api.get('categories/4/products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (response) => {
        setProducts(response.data['data'])
      });
  }
  }
  const writings=(e)=>{
  if(e.target.checked===true){
    api.get('categories/5/products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (response) => {
        setProducts(response.data['data']);
      
      });
  
  }
  }
  const cloths=(e)=>{
    if(e.target.checked===true){
    api.get('categories/6/products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (response) => {
        setProducts(response.data['data']);
      });
    }
  }


useEffect(() => {
    api.get('products',{
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (response) => {
        setProducts(response.data['data']);
        setLastPage(response.data.meta.last_page);
      });
  }, []);
 const onSearch=(term)=>{
  api.get('products',{
    headers:
            { "Authorization": `Bearer ${user}` },params:{
              name:term
            }
          }).then(
    (response) => {
      setProducts(response.data['data']);
    });
 }
  const itemss = [
    {
      label: <Checkbox onChange={all_products}>ሁሉም ምድቦች</Checkbox>,
      key: 'all_catagories'
    },
    {
      label: <Checkbox  onChange={packed_food}>የታሸጉ ምግቦች</Checkbox>,
      key: 'packed_foods'
    },
    {
      label: <Checkbox  onChange={cereals}>እህልና ጥራጥሬ</Checkbox>,
      key: 'cereals'
    },
    {
      label: <Checkbox  onChange={drinks}>መጠጦች</Checkbox>,
      key: 'drinks'
    },
    {
      label: <Checkbox  onChange={sanitary}>የንጽህና መጠበቂያ</Checkbox>,
      key: 'sanitary'
    },
    {
      label: <Checkbox  onChange={writings}>የጽሕፈት መሳሪያዎች</Checkbox>,
      key: 'writing'
    },
    {
      label: <Checkbox  onChange={cloths}>ልብስና ጫማ</Checkbox>,
      key: 'clothes'
    }
  ]

  return (
    <div div className='new_products'>
      <div className='container_fluid'>
        <Header>
          <div className="logo">
            <img src={image} className="img" alt='seregela'/>
            <a href="http://google.com">Sergela<span>Majet</span></a>
          </div>
          <div className='header_corner'>
            <h1>እንኳን በደህና መጣህ!</h1>
            <h2 style={{marginTop:'1%'}}>{user_name}</h2>
            <img src={image_2} style={{ height: 40, width: 40 }} alt='user'/>
            <div className='setting'>
              <i class="fa-solid fa-gear"></i>
            </div>
    
          </div>
        </Header>

        <div className='tabs'>
          <AdminNav />
          <Button type='warning' style={{ marginTop: '2%' }} onClick={() => setVisible_(true)}>+ አዲስ እቃ</Button>
          <Search placeholder="ይፈልጉ" enterButton onChange={(e)=>onSearch(e.target.value)} className='search-input' style={{marginTop:40, marginLeft:100, width:400,height:60,borderColor:'#F4AD33'}} />
          <div className='items'>

            <Row gutter={[30, 100]}>
              <div className='product_menu'>
                {/* <Menu items={itemss} /> */}
                <AdminSideNav productId={changeproducts}/>
              </div>
              {
                products.map((product) => {
                  return (
                    <Col xs={10} md={6} lg={4}>
                      <Card hoverable style={{ maxWidth: 214, minHeight: 450 }}
                        cover={<Image
                          preview={{ visible: false }}
                          src={product.image_paths[0]}
                          onClick={() =>{producty(product.id);setTimeout(()=>setVisible(true),800)}}
                        />
                        }> 
                  <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                      
                      {
                      selectedProduct?.map(imagepath=>{
                      return <Image src={imagepath} />
                      })
                      }
                    </Image.PreviewGroup>
                  </div>
                  <Meta title={product.name} description={product.description}/>
                  <Meta description={[
                  <div style={{color:'green'}}>
                      <strike style={{color:'red'}}>
                        {parseInt(product.discount)+parseInt(product.price)} ብር</strike>
                        <br/>
                      {product.price + ' ብር'}
                      <br/>
                      {
                      product.image_paths.length===1?product.image_paths.length+' image':product.image_paths.length+' images' 
                      }
                      <br/>
                    </div>]} />
                  <Meta description={product.left_in_stock + ' ስቶክ ላይ የቀረ'}/>
                  {product.size?<Meta description={'መጠን፡'+product.size }/>:null}
                  
                    <div className='edit'>
                      <EditOutlined style={{ color: 'red', fontSize: 23 }} />
                    </div>
                    <div className='delete'>
                      <DeleteOutlined onClick={()=>{setDeleteId(product.id);setIsDeleteModalVisible(true);setProductName(product.name)}}style={{ color: 'red', fontSize: 23 }} />
                    </div>
                        
                      </Card>
                    </Col>

                  );
                }
                )
              }
              <Col span={18} style={{marginTop:-200}}></Col>
              <Col span={6} >
              <div>
          <Pagination defaultCurrent={1} style={{marginTop:-70}} total={lastPage} pageSize={1}
                onChange={(page)=>
                  {
                    paginator(page)
                }}
                itemRender={(page,type)=>{
                   if(type==="next"){
                    return <a>Next</a>
                   }
                   else if(type==="prev"){
                    return <a>Prev</a>
                   }
                   else if(type==="page"){
                    return <a>{page}</a>
                   }
                }}
          />
        </div>
              </Col>

            </Row>
            
            <Modal className='delete_modal' closable={false} okText="እሽ" cancelText='ይቅር' visible={isDeleteModalVisible} title={<div><i class='fa fa-trash' aria-hidden='true' style={{fontSize:20,color:'red'}}></i> <span>ለማጥፋት ወስነዋል?</span> </div>} onOk={handleOk} onCancel={handleCancel}>
                            <p style={{fontSize:15}}> <b>{productName}</b> ከገጽዎ ይጥፋ?</p>
            </Modal>
          </div>
        </div>
        
      </div>

      <Drawer placement="right" onClose={onClose_} closable={false} visible={visible_} width={800}>
        <div className='drawer_'>
          <NewItems />
        </div>
      </Drawer>
      
    </div>
  )
}