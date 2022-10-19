import {useEffect, useState} from 'react';
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import {Dropdown,Menu,Space,Button,Card,Checkbox,Row,Col,Modal,Input,message,Select,Tag,Upload} from 'antd';
import {MoreOutlined,EditOutlined,DeleteOutlined,DownOutlined,PlusOutlined} from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import api from '../adapter/base';
import VectorBar from '../images/Vector_bar.png'
import ClipLoader from 'react-spinners/ClipLoader'
import Ellipse1 from '../images/ellipses/Ellipse 1.png'
import Vector from '../images/ellipses/low.png' 
import Ellipse3 from '../images/ellipses/Ellipse 3.png'
import Vector1 from '../images/ellipses/right_sign.png'
import Ellipse2 from '../images/ellipses/Ellipse 2.png'
import Vector2 from '../images/ellipses/red-x-icon.webp'
import {useSelector} from 'react-redux';
function AdminStockManagement(){
   const [visible,setVisible]=useState(false);
   const [categories,setCategories]=useState();
   const [item,setItem]=useState([]);
   const [category,setCategory]=useState([]);
   const [subCatagories,setSubCategories]=useState([]);
   const [visible_,setVisible_]=useState();
   const [visible__,setVisible__]=useState();
   const [categoryID,setCatagoryID]=useState();
   const [allCategories,setAllCategories]=useState();
   const [subcategory,setSubcategory]=useState();
   const [popular,setPopular]=useState();
   const [allProducts,setAllProducts]=useState();
   const [subcatmodal,setSubcatmodal]=useState();
   const [subCategoryID,setsubCatagoryID]=useState();
   const [previewVisible, setPreviewVisible] = useState(false);
   const [previewImage, setPreviewImage] = useState('');
   const [previewTitle, setPreviewTitle] = useState('');
   const [fileList, setFileList] = useState([]);
   const [all_file_list,setAll_file_list]=useState([]);
   const [inStock,setInStock]=useState();
   const [outOfStock,setoutOfStock]=useState();
   const [lowOnStock,setLowOnStock]=useState();
   const user=useSelector(state=>state.auth.user.access_token);

   const { Option } = Select;
   const {Meta}=Card;
   const {Search}=Input;
   
   const setcatmodalvisible=()=>{
      setTimeout(()=>{
          setSubcatmodal(true);
      },1000);
   }
   const setEditVisible_=()=>{
      setTimeout(()=>{setVisible_(true);
      },1000);
     }
   
   const setModalVisible=()=>{
      setTimeout(()=>{setVisible(true);
      },1000);
      }

   const setSubCategoryModalVisible=()=>{
      setTimeout(()=>{setVisible__(true);
      },1000);
   }
   const handleOk=()=>{
      const fd=new FormData();
      fd.append('image',all_file_list,all_file_list.name)
      fd.append('name',category.name);
      storecategory(fd);
      setVisible(false);
   }
   const handleCancel=()=>{
      setVisible(false);
   }
   const category_=async (id)=>{
       await api.get(`categories/${id}`,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).then((res)=>{
          setCategory(res.data['data']);
       }).catch(err=>{
         console.log(err);

       });      
   }
   const subcategory_=async(id)=>{
      await api.get(`subcategories/${id}`,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).then(res=>{
         setSubcategory(res.data['data']);
      })
      .catch(err=>{
       console.log(err);  
      })

   }
   const updatesubcategory=()=>{
      updateSubCategory(subCategoryID);
   }
   const updateSubCategory=(id)=>{
      api.put(`subcategories/${id}`,subcategory,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).then(
         res=>{
              message.success('updated successfully');
              window.location.reload(false);
         })
         .catch(
            err=>{
               message.error('something went wrong');
            })
   }
   const editPressed=()=>{
      update(categoryID);
   }
   const update=async (id)=>{
      await api.put(`categories/${id}`,category,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).then(
         res=>{
            message.success("Updated Succesfully");
            window.location.reload(false);
         }
      ).catch(err=>{
         message.error("Something Wrong Happened");
         window.location.reload(false);

      });
   }
   const cancelEdit=()=>{
      setVisible_(false);
      message.error("ምንም አይነት ስራ አልተሰራም!")
   }
   const menus=(id)=>(
      <Menu
        items={[
          {
            key: '1',
            label: (
              <a target="_blank" rel="noopener noreferrer" onClick={()=>{category_(id);setEditVisible_();setCatagoryID(id)}}>
                Edit
              </a>
            ),
            icon: <EditOutlined />,

          },
          {
            key: '2',
            label: (
              <a target="_blank" rel="noopener noreferrer" onClick={()=>deletecat(id)}>
                Delete
              </a>
            ),
            icon: <DeleteOutlined />,
            danger: true,
          }
        ]}
      />
    );

    const menussub=(id)=>(
      <Menu
        items={[
          {
            key: '1',
            label: (
              <a target="_blank" rel="noopener noreferrer" onClick={()=>{subcategory_(id);setcatmodalvisible();setsubCatagoryID(id)}}>
                Edit
              </a>
            ),
            icon: <EditOutlined />,

          },
          {
            key: '2',
            label: (
              <a target="_blank" rel="noopener noreferrer" onClick={()=>deletesubcat(id)}>
                Delete
              </a>
            ),
            icon: <DeleteOutlined />,
            danger: true,
          }
        ]}
      />
    );
    const deletesubcat=(id)=>{
      api.delete(`/subcategories/${id}`,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               })
      .then(
         res=>{
            message.warning("Deleted Succesfully")
            window.location.reload(false);

         })
         .catch(
            err=>{
               message.error(err.response.data.message);

      }) 
   }
   const addsubcategory=()=>{
      api.post(`/categories/${subcategory?.category_id}/subcategories`,subcategory,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).then(res=>{
         message.success('SubCategory registered succesfully');
         window.location.reload(false);
      }).catch(err=>{
         message.error(err.response.data.message)
      });
   }
   const canceladdsub=()=>{
      setVisible__(false);
      message.error("ምንም ስራ አልተሰራም፡፡");
   }
   const deletecat=(id)=>{
      api.delete(`categories/${id}`,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).
      then(res=>{
              message.success("Deleted Succesfully");
              window.location.reload(false);
      }).catch(err=> {
            message.error("Something Went Wrong");
      });
   }
   const storecategory=(data)=>{
      api.post('/categories',data,{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).then(
         (res)=>{
            message.success("Category Registered Successfully!");
            window.location.reload(false);
         }
      ).catch((err)=>{
         console.log(err);
            message.error(err.response['data'].message);
      }
      );
   }
   const menu = (
      <Menu
        items={item}
      />
    );
    const tag=(quantity)=>{
      if(quantity>=10){
         return(<Tag style={{fontSize:13,color:'green',height:25, marginLeft:535,background:'#88D4BD'}}>In stock</Tag>);
      }
      else if(quantity<10 && quantity>0){
         return(<Tag style={{fontSize:13,color:'#FAAD14',height:25, marginLeft:535,background:'#FFEEC5'}}>Low stock</Tag>);
      }
      else{
           return(<Tag style={{fontSize:13,color:'#FD706F',height:25, marginLeft:535,background:'#FBC7C5'}}>Out of stock</Tag>);
      }
    }


   useEffect(()=>{
      api.get('categories',{
         headers:
                 { "Authorization": `Bearer ${user}` },
                 params:{
                  paginate:4
               }
               }).then(
         (res)=>{
            setCategories(res.data['data']);
         }
      );
      api.get('/subcategories',{
         headers:
                 { "Authorization": `Bearer ${user}` },
                 params:{
                  paginate:4
               }
               }).then((res)=>{
         setSubCategories(res.data['data']);
      });
      api.get('categories',{
         headers:
                 { "Authorization": `Bearer ${user}` }
               }).then(
         (res)=>{
            setAllCategories(res.data['data']);
         }
      );
      api.get('/popular-products',{
         headers:
                 { "Authorization": `Bearer ${user}` },
                 params:{
                  paginate:5
               }
               }).then(res=>{
         setPopular(res.data['data']);
      }).catch(err=>{
         console.log('not setted');
      });
      api.get('/products',{
         headers:
                 { "Authorization": `Bearer ${user}` }
               ,params:{
                  paginate:5
               }
               }).then(
         res=>{  
            setAllProducts(res.data['data']);
         }
      ).catch();
      api.get('/products/count',{
         headers:
                 { "Authorization": `Bearer ${user}` },
                 params:{In_stock:{}}
               }).then(res=>{setInStock(res.data) }) ;
      api.get('/products/count',{
         headers:
                 { "Authorization": `Bearer ${user}` },
                 params:{out_of_stock:{}}
               }).then(rs=>{setoutOfStock(rs.data)});
      api.get('/products/count',{
         headers:
                 { "Authorization": `Bearer ${user}` },
                 params:{low_in_stock:{}}
               }).then(res=>{setLowOnStock(res.data)});
   },[]);

   const getBase64 = (file) =>
      new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => resolve(reader.result);
         reader.onerror = (error) => reject(error);
      });
  const handleCancels = () => setPreviewVisible(false);

  const handlePreviews = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChanges = ({ fileList: newFileList }) => {setFileList(newFileList)}

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

    return(
       <div className='admin_stock' style={{width:'100%'}}>
          <AdminHeader/>
          <AdminNav nav_link='stock_management'/>
          <h6 style={{fontSize:16,fontWeight:'bold',color:'#252733',marginTop:30, marginLeft:90}}>የስቶክ መረጃ</h6>
          <Row gutter={[16,16]} style={{marginLeft:'15%',marginTop:'2%'}}>
          <Col xs={16} md={12} lg={7}> 
             <Card  hoverable style={{ width: 280 ,height:100,borderColor:'#DFE0EB'}} >
             <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,opacity:2}} src={Ellipse1} alt='ellipse for items'/>
             <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-14}} src={Vector} alt='vector for items'/>
                    <h6 style={{fontSize:45,marginTop:-80,marginLeft:50,textAlign:'center',color:'#9FA2B4'}}>{lowOnStock}</h6>
                    <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:100}}>ትንሽ መጠን ያላቸው</h6>      
            </Card>
            </Col>
          <Col xs={16} md={12} lg={7}> 

            <Card  hoverable style={{ width: 280 ,height:100,borderColor:'#DFE0EB'}}>
             <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,zIndex:10}} src={Ellipse2} alt='ellipse for items'/>
             <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-14}} src={Vector2} alt='vector for items'/>
                    <h6 style={{fontSize:45,marginTop:-80,marginLeft:50,textAlign:'center',color:'#9FA2B4'}}>{outOfStock}</h6>
                    <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:120}}>ከስቶክ ያለቁ</h6>
            </Card>
            </Col>
            <Col xs={16} md={12} lg={7}> 
              <Card  hoverable style={{ width: 280 ,height:100,borderColor:'#DFE0EB'}}>
              <img className='ellipse' style={{borderRadius:40,width:80,height:80,marginTop:-15,opacity:2}} src={Ellipse3} alt='ellipse for items'/>
              <img className='vector' style={{width:40,height:40,marginLeft:-59,marginTop:-14}} src={Vector1} alt='vector for items'/>
                      <h6 style={{fontSize:45,marginTop:-80,marginLeft:50,textAlign:'center',color:'#9FA2B4'}}>{inStock}</h6>
                      <h6 style={{fontSize:13,fontWeight:'bold',color:'#252733',marginTop:-27,marginLeft:120}}>በስቶክ ያሉ</h6>
              </Card>
            </Col>
            </Row>
          <Row gutter={[16,8]} style={{marginLeft:'5%',marginTop:'2%',width:'90%'}}> 
             <Col xs={16} xl={12}>
                 <h6 style={{fontSize:16,color:'#252733',marginLeft:'2%'}}>Catagories</h6>
                 <Card  hoverable style={{width: 550 ,height:380,borderColor:'#DFE0EB',marginTop:'3%'}}>
                 <Button style={{color:'#FAAD14',marginLeft:'80%',width:100,borderColor:'#FAAD14'}} onClick={()=>setModalVisible()}>Add</Button>
               <Card  hoverable style={{ width: 500 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB',backgroundColor:'#EBEBEB'}}>
                <div className='stock_check' style={{marginTop:-10}}>   
                <Checkbox/>
                </div>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-20, marginLeft:60}}>Category</h6>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-22, marginLeft:'50%'}}>Quantity</h6>
                <div className='more_outline' style={{ marginLeft:'90%',marginTop:-30}}>
                     <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
               </div>                
            </Card> 
            
            {
categories?
            <div>{
               categories?.map( (category)=>{
                  return(
                  <Card  hoverable style={{ width: 500 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
                     <div className='stock_check' style={{marginTop:-10}}>
                     <Checkbox/>
                     </div>
                     <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:60}}>{category.name}</h6>
                     <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:'52%'}}>{category.products_count}</h6>
                     <div className='more_outline' style={{ marginLeft:'90%',marginTop:-30}}>
                        <Dropdown overlay={menus(category.id)} trigger={['click']}>
                        <a onClick={e => e.preventDefault()}>
                        <Space>
                                 <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                        </Space>
                        </a>
                        </Dropdown>
                     </div>  
                  </Card>
                  )
               }
               )
               }
               </div>:
               <div style={{textAlign:'center',marginTop:'20%',height:'500px'}}>
               <ClipLoader
                 size={20}
                 color={"#FAAD14"}
                 loading={true}
               />
             </div>
            }
            </Card>
            </Col>
         <Col xs={16}  xl={12}>
         <h6 style={{fontSize:16,color:'#252733',marginLeft:'2%'}}>Sub categories</h6>
                 <Card  hoverable style={{width: 550 ,height:380,borderColor:'#DFE0EB',marginTop:'3%'}}>
                 <Button style={{color:'#FAAD14',marginLeft:'80%',width:100,borderColor:'#FAAD14'}} onClick={()=>setSubCategoryModalVisible()}>Add</Button>
               <Card  hoverable style={{ width: 500 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB',backgroundColor:'#EBEBEB'}}>
                <div className='stock_check' style={{marginTop:-10}}>   
                <Checkbox/>
                </div>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-20, marginLeft:60}}>subcategories</h6>
                <h6 style={{fontSize:14,color:'#252733',marginTop:-22, marginLeft:'50%'}}>Quantity</h6>
                  <div className='more_outline' style={{ marginLeft:'90%',marginTop:-30}}>
                         <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </div>
            </Card> 
            {subCatagories.length!=0?
            <div>
            {
         subCatagories?.map( (product)=>{
            return(
            <Card  hoverable style={{ width: 500 ,height:50,marginTop:10,marginLeft:0,borderColor:'#EBEBEB'}}>
               <div className='stock_check' style={{marginTop:-10}}>
               <Checkbox/>
               </div>
               <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20,marginLeft:60}}>{product.name}</h6>
               <h6 style={{fontSize:12,color:'#8C8C8C',marginTop:-20, marginLeft:'53%'}}>{product.products_count}</h6>
               <div className='more_outline' style={{ marginLeft:'90%',marginTop:-30}}>
                  <Dropdown overlay={menussub(product.id)} trigger={['click']}>
                     <a onClick={e => e.preventDefault()}>
                  <Space>
                           <MoreOutlined style={{fontSize:16,fontWeight:'bold',color:'#000'}}/>
                  </Space>
                  </a>
                  </Dropdown>
               </div>  
            </Card>
            )
         }
         )
         }
         </div>
            :
            <div style={{textAlign:'center',marginTop:'20%',height:'500px'}}>
               <ClipLoader
                 size={20}
                 color={"#FAAD14"}
                 loading={true}
               />
             </div>}
            
            </Card>

            </Col> 
            </Row>
            <Modal className='add_catagories' closable={false} okText="ይጨመር" cancelText='ይቅር' visible={visible} title={<div><span>አዲስ ምድብ መጨመሪያ</span> </div>} onOk={handleOk} onCancel={handleCancel}>
                            <Space direction='vertical'>
                            <Input addonBefore="የቡድኑ ስም" placeholder='Category name' onChange={(e)=>{
                              setCategory((pre)=>{
                                 return{...pre,name:e.target.value}
                              });
                            }}/>
                            <ImgCrop rotate addonBefore="የቡድኑ መለያ ፎቶ">
                              
                                 <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreviews}
                                    onChange={handleChanges}   
                                    accept='.jpg, .jpeg, .png, .bmp, .gif, .svg,.webp'
                                    beforeUpload={(file)=>{
                                       setAll_file_list(file);
                                       return false;
                                    }}
                                    >
                                    {fileList.length ===1 ? null : uploadButton}
                                 </Upload>
                                    
                                                               
                           </ImgCrop>

                            </Space>
               
            </Modal>
            <Modal 
               visible={previewVisible} 
               title={previewTitle} 
               footer={null} 
               onCancel={handleCancels}
               >
               <img alt="categoryimage" style={{width: '100%',}} src={previewImage}/>
            </Modal>
            <Modal visible={visible_} okText='ይስተካከል' cancelText='አይ ይቅር' closable={false} onOk={editPressed} onCancel={cancelEdit}>
               <Space direction='vertical'>
                  <Input addonBefore="የቡድኑ ስም"  value={category?.name} onChange={(e)=>{
                     setCategory(prev=>{
                        return {...prev,name:e.target.value}
                     })
                  }}/>
               </Space>

            </Modal>
            <Modal visible={visible__} okText='ይጨመር' cancelText='አይ ይቅር' closable={false} onOk={addsubcategory} onCancel={canceladdsub}>
               <Space direction='vertical'>
                  <Input addonBefore='Subcategory Name' value={subcategory?.name} onChange={(e)=>{
                     setSubcategory(pre=>{
                        return {...pre,name:e.target.value}
                     })
                  }}/>
                  <Select defaultValue="Category Name" style={{ width: 400 }} onChange={(value)=>{
                     setSubcategory(pre=>{
                        return {...pre,category_id:value}
                     })
                  }}>
                     {
                        allCategories?.map((category)=>{
                        return <Option value={category.id}>{category.name}</Option>
                        })
                     }
                  </Select>
               </Space>
            </Modal>

            <Modal visible={subcatmodal} okText='ይስተካከል' cancelText='አይ ይቅር' closable={false} onOk={updatesubcategory} onCancel={()=>setSubcatmodal(false)}>
               <Space direction='vertical'>
                  <Input addonBefore='Subcategory Name' value={subcategory?.name} onChange={(e)=>{
                     setSubcategory(pre=>{
                        return {...pre,name:e.target.value}
                     })
                  }}/>
                  <Select defaultValue={subcategory?.category?.name} style={{ width: 400 }} onChange={(value)=>{
                     setSubcategory(pre=>{
                        return {...pre,category_id:value}
                     })
                  }}>
                     {
                        allCategories?.map((category)=>{
                        return <Option value={category.id}>{category.name}</Option>
                        })
                     }
                  </Select>
               </Space>
            </Modal>

            <div style={{marginTop:'3%',marginLeft:'6%'}}>
               <h5>በጣም የተሸጡ እቃዎች</h5>
               <div style={{marginTop:'2%',border:'1px solid #EBEBEB',width:'90%',marginLeft:'3%'}}>
               <Row gutter={[20,6]} style={{marginTop:'2%',width:'100%'}}> 
                {popular?.map(pop=>{
                  return(
                        <Col xs={10} sm={8} md={6} xl={4} style={{marginLeft:'3%'}}>
                           <Card key={pop.id} style={{ width: 200}}
                              hoverable
                              cover={<img alt="popular uploads" src={pop.image_paths[0]}/>}>
                              <Meta title={pop.name} description={pop.price +' ብር'}/>
                           </Card>
                        </Col>
                  )
                })}
                  </Row>
                  </div>

            </div>

            {/* Stock report table */}
            <div className='content'>
                    
                <h5 style={{marginTop:50, marginLeft:'6%'}}>Stock report </h5>
                 <Card className='fourth_card' hoverable style={{ width: 1200, maxHeight: 550, marginLeft:100, marginTop:20,borderRadius:10}} >
                <Card className='first_card' hoverable style={{ width: 1120, height: 60, background:'#F9F9F9'}} >
                 <Search placeholder="Order ID, product" enterButton  style={{marginTop:-10, marginLeft:-10, width:400,borderColor:'#F4AD33'}} />
                 <Dropdown
                    overlay={menu}
                    placement="bottom"
                    arrow={{
                         pointAtCenter: true,
                         }} >
                    <Button style={{marginTop:-20, marginLeft:500, height:40, background:'#F9F9F9', color:'#F4AD33', borderColor:'#F4AD33'}}>
                         <img src={VectorBar} alt="vector" style={{paddingRight:10}} /> አማራጮች</Button>
                 </Dropdown>
               
                   </Card>
                   <Card className='second_card'
           hoverable
           style={{ width: 1120, height: 50, marginTop:20, background:'#EBEBEB'}}
           >
            <div className='links' style={{marginTop:-15}}>
              <Button type="link" style={{paddingRight:40}}>የእቃው ቁጥር <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              <Button type='link' style={{paddingLeft:50}}>የእቃው ስም</Button>
              <Button type="link" style={{paddingLeft:100}}>የእቃው ዋጋ <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              <Button type="link" style={{paddingLeft:80}}>Stock status </Button>
              <Button type="link" style={{paddingLeft:70}}>Quantity</Button>
              <Button type="link" style={{paddingLeft:100}}>ቀን <DownOutlined style={{fontSize:10,textAlign:'center'}} /></Button>
              </div>
                
           </Card>
           {
            allProducts?.map((product)=>{
               return(
                  <Card className='second_card' hoverable style={{ width: 1120, height: 50, marginTop:20, background:'#FFF'}}>
                  <div className='items'>
                    <h6 style={{fontSize:13,color:'#252733',marginLeft:12,marginTop:-10}}>#{product.id} </h6>
      
                    <div className='table_element' style={{marginTop:-20,marginLeft:190}}>
                          <h6 style={{fontSize:13,color:'#252733'}}>{product.name}</h6>
                    </div>
      
                    <h6 style={{fontSize:13,color:'#252733',marginTop:-50,marginLeft:370}}>{product.price}</h6>
                    <h6 style={{fontSize:13,color:'#252733',marginTop:-21}}>
                        {tag(product.left_in_stock)}
                    </h6>
                    <h6 style={{fontSize:13,color:'#252733',marginTop:-30,marginLeft:720}}>{product.left_in_stock}</h6>
                    <h6 style={{fontSize:13,color:'#252733',marginLeft:860,marginTop:-22}}>{product.created_at?product.created_at.split("T")[0]:''}</h6>
                        
                    </div>
                      
                 </Card>
      
               )
            })
           }
           </Card>
           </div>

            </div>
    );
}


export default AdminStockManagement;