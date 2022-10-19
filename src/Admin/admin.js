import { Header } from 'antd/lib/layout/layout'
// import fs from 'fs';
import React, { useEffect, useState} from 'react'
import { Select,Input,Button,Drawer,Table, Tag,Space, message, Tooltip,Modal,Avatar,List,Statistic,Upload} from 'antd';
import api from '../adapter/base'
import 'antd/dist/antd.css';
import {EditOutlined, DeleteOutlined,PlusOutlined,UserOutlined,UploadOutlined,DownloadOutlined} from '@ant-design/icons';
import {useQuery} from 'react-query';
import AdminHeader from './admin_header';
import AdminNav from './admin_nav';
import ClipLoader from 'react-spinners/ClipLoader';
import ImgCrop from 'antd-img-crop';
import {useSelector}  from 'react-redux';
const {Option}=Select;
export default function Admin() {
  const [visible_,setVisible_]=useState(false);
  const [corporate,setCorporate]=useState();
  const [singleCorp,setSingleCorp]=useState();
  const [id,setId]=useState();
  const [address,setAddress]=useState([]);
  const [dataSource, setDataSource] = useState([])
  const [page,setPage]=useState();
  const [lastPage,setLastPage]=useState();
  const [visible, setVisible] = useState(false);
  const [addVisible,setAddVisible]=useState(false);
  const [employee,setEmployee]=useState([])
  const [data,setData]=useState([]);
  const [corporateName,setCorporateName]=useState('');
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const {data:banks}=useQuery('banks',()=>{return api.get('banks',{
    headers:
            { "Authorization": `Bearer ${user}` }
          })})
  const [detailvisible,setDetailvisible]=useState(false);
  const showDrawer = () => { setVisible(true); };
  const onClose = () => { setVisible(false); };
  const onClose_ = () => { setVisible_(false); }
  const showAddModal=()=>{setAddVisible(true)}
  const showDetailVisible=()=>{setDetailvisible(true)}
  const closeDetailVisible=()=>{setDetailvisible(false)}
  const user=useSelector(state=>state.auth.user.access_token);
  const getBase64 = (file) =>
  new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = () => resolve(reader.result);
     reader.onerror = (error) => reject(error);
  });

const handlePreviews = async (file) => {
if (!file.url && !file.preview) {
  file.preview = await getBase64(file.originFileObj);
}

setPreviewImage(file.url || file.preview);
setPreviewVisible(true);
setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
};

const handleChanges = ({ fileList: newFileList }) => {setFileList(newFileList);}

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

  
  const addEmployee=()=>{
    //set the default password to password
    const fd=new FormData();
    Object.keys(employee).forEach(key=>{
      if(key==='address'){
        Object.keys(employee['address']).forEach(
          address=>{
            fd.append(`address[${address}]`,employee['address'][address]);
          }
        );
         return 
      }
      fd.append(key,employee[key])})
      fd.append('profile_image',fileList[0].originFileObj,fileList[0].originFileObj.name);
      api.post('users',fd,{
        headers:
                { "Authorization": `Bearer ${user}` }
              }).then(res=>{
          message.success("Registered succesfully");
          window.location.reload(false);
      }).catch(err=>{
            message.error(err.response.data.message)
      })
  }
  
  const columns=[
    {
      key : "1",
      title : "የድርጅቱ ስም",
      dataIndex : "name"
    },
      {
      key : "2",
      title : "የሰራተኛ ብዛት",
      dataIndex : "number"
    },
      {
      key : "3",
      title : "ካፕ",
      dataIndex : "cap"
    },
    {
      key:'4',
      title: "የብድር መጠን" ,
      dataIndex : "rent"
    },
    {
      key:'5',
      title: "ባንክ" ,
      dataIndex : "bank"
    },
    {
      key: '6',
      title: 'ደረጃ',
      dataIndex: 'rank',
       render : (tag) =>{
         const color = tag.includes('ተፈቅዷል')?'Green':tag.includes('እይታ ላይ')?'#595959': tag.includes('የታገደ')?'red':'blue'
            return <Tag color={color} key={tag}>{tag}</Tag>
            
          }
   }, 
   {
     key :"7",
     render :(records) =>{
       return(
         <>
         <Tooltip title='Upload Employee Information using Excel'>
             <Button icon={<UploadOutlined />}>Upload</Button>
         </Tooltip>
         <Tooltip title='Download Employee Information'>
             <Button icon={<DownloadOutlined/>} style={{marginLeft:'1%'}}>Download</Button>
         </Tooltip>
         <Tooltip title='Add Employee'>
             <PlusOutlined style={{color : '#F4AD33', fontSize : 20}} onClick={()=>{setAddress([]);setEmployee(pre=>{return{...pre,corporate_id:records.id}});showAddModal()}}/>
         </Tooltip>
         <Tooltip title='Edit Corporate'>
           <EditOutlined style={{ color : '#F4AD33',marginLeft : 20, fontSize : 20,marginTop:'-40px'}} onClick={()=>{specific_corporate(records);setId(records.id)}}/>
         </Tooltip>
         <Tooltip title='Delete Corporate'>
             <DeleteOutlined style={{color : 'red',marginLeft :20, fontSize : 20}} onClick={()=>delete_corporate_(records)}/>
         </Tooltip>
         </>
       );
     }
   }  
  ]

const downloadTemplate=()=>{
  api.get('/users/download-excel-template',{
    headers:
            { "Authorization": `Bearer ${user}`}
          }).then(res=>{
            const data='downloaded.xls'
            // fs.writeFileSync(data,res.data);
          }).catch(err=>{
            console.log(err);
          })
}
const cor_status=(stat)=>{
  if(stat==='accepted'){
    return('ተፈቅዷል');
  }
  else if(stat==='pending'){
    return('እይታ ላይ');
  }
  else{
    return('የታገደ');
  }
      
 }

 useEffect(()=>{ 
  
  setSingleCorp(prev=>{
    return {...prev,address:address}
  })
 },[address]);
  useEffect( () => {
    api.get('corporates',
    {
      headers:
              { "Authorization": `Bearer ${user}` }
            }).then(
      (res)=> {
        setLastPage(res.data.meta.last_page);
      for(let i=0;i<Object.keys(res.data['data']).length;i++){
        setDataSource(pre=>{
          return [...pre,{id:res.data['data'][i].id,name:res.data['data'][i].name,number:res.data['data'][i].number_of_employees,rent:res.data['data'][i].loan_balance,rank:cor_status(res.data['data'][i].status),cap:res.data['data'][i].loan_cap,bank:res.data.data[i]?.bank?.name}];
        })

      }
    }
   );}, []);
   const paginater=(page)=>{
    api.get('corporates',{
      headers:
              { "Authorization": `Bearer ${user}` },
              params:{
                page:page
            }
            }).then(
      (res)=> {
      for(let i=0;i<Object.keys(res.data['data']).length;i++){
        setDataSource(pre=>{
          return [...pre,{id:res.data['data'][i].id,name:res.data['data'][i].name,number:res.data['data'][i].number_of_employees,rent:res.data['data'].loan_balance,rank:cor_status(res.data['data'][i].status)}];
        })

      }
    }
   );

   }
const specific_corporate=async (record)=>{
  await api.get(`corporates/${record.id}`,{
    headers:
            { "Authorization": `Bearer ${user}` }
          }).then(
     (response)=> 
           {
             setAddress(response.data['data'].address)
             setSingleCorp(response.data['data']);
     });
     setVisible_(true);
  }

const delete_corporate_=async (record)=>{
          const data=await api.delete(`corporates/${record.id}`,{
            headers:
                    { "Authorization": `Bearer ${user}` }
                  }).then(
              (response)=> 
              {
                message.warning('deleted succesfully');
                window.location.reload(false);
              });
          return data;
}
const create_corporate=async ()=>{
        await api.post('corporates',corporate,{
          headers:
                  { "Authorization": `Bearer ${user}` }
                })
        .then(res=>{
           message.success('Corporate Registered Successfully!');
           window.location.reload(false);
     })
     .catch(err=>{  
          message.error(err.response.data.message);
     })  
}
const update_corp=async (id)=>{
  const data=await api.put(`corporates/${id}`,singleCorp,{
    headers:
            { "Authorization": `Bearer ${user}` }
          })
  .then(res=>{
      message.success("updated Successfully");
      window.location.reload(false);
  })
  .catch(err=>{
    message.error(err.response.data.message);

  });
    return data;    
}
const [employeeDetail,setEmployeeDetail]=useState();
const showDetailEmployee=async (id)=>{
    await api.get(`users/${id}`,{
      headers:
              { "Authorization": `Bearer ${user}` }
            })
    .then(res=>{
         setEmployeeDetail(res.data.data)
    })
    .catch(err=>{

    });
}
 
const onRow=(record,rowIndex)=>{
  return {
    onClick:(event)=>{
      setData([]);
      setCorporateName(record.name);
      api.get(`corporates/${record.id}/users`,{
        headers:
                { "Authorization": `Bearer ${user}` }
              }).then(res=>{
                console.log(res.data.data);
                
        for (let i=0;i<Object.keys(res.data.data).length;i++){
          setData(pre=>{return[...pre,{id:res.data.data[i].id,title:res.data.data[i].first_name+' '+res.data.data[i].last_name,email:res.data.data[i].email,image:res.data.data[i].profile_thumbnail_path}]});
        }
      })
    }
  }
}

return (
  
    <div className='admin'>
        <AdminHeader/>
        <AdminNav nav_link='main'/>
        <div className='container-fluid'>
      <div className='new_company'>
          <Button className='new_comp' onClick={showDrawer} style={{marginTop:'3%',marginLeft:'5%',backgroundColor:'#FAAD14'}}>+ አዲስ ድርጅት ይጨምሩ</Button>
          <Button className='new_comp' onClick={()=>downloadTemplate()} style={{marginTop:'3%',marginLeft:'5%',backgroundColor:'#FAAD14'}}><DownloadOutlined/> ኤክሴል ቴምፕሌት</Button>

      </div>
      <div className='container' style={{marginTop:'-2%'}}>
      <div style={{marginLeft:'2%',marginTop:'5%'}}>
         {
         dataSource.length!==0
         ?
         <Table dataSource={dataSource} columns={columns} 
         
         onRow={onRow}
         pagination={{
          pageSize:10,
          total:{lastPage}*10,
          onChange:(page)=>{
            setPage(page);
            paginater(page);
          }      
         }}
/>:
         <div style={{textAlign:'center',marginTop:'20%',height:'500px'}}>
                    <ClipLoader
                      size={20}
                      color={"#FAAD14"}
                      loading={true}
                    />
                  </div> }
        </div>
        {data.length!==0?
        <div class='listitem'>
        <Statistic title="Registered" 
            style={{marginLeft:'2%'}}
            valueStyle={{
                color: '#3f8600',
                }}
            value={data.length}
            ></Statistic>
        <List
        itemLayout="horizontal"
        dataSource={data}
        header={"የ"+corporateName+ ' ሰራተኞች ስም ዝርዝር'}
        loading={data===[]?true:false}
        style={{marginLeft:'2%'}}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              style={{width:'80%'}}
              avatar={<Avatar size='large' src={item.image}/>}
              title={item.title}
              description={item.email}
            />
            <UserOutlined onClick={()=>{showDetailEmployee(item.id);showDetailVisible()}}/>
          </List.Item>
        )}
      />
      </div>:
      ''
      }
        </div>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <div className='drawer_'>
                  <Header style={{background : '#ccc'}}>
                    <span><i class="fa-solid fa-plus" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer', marginLeft:'2%', marginTop:'1%'}}></i></span>
                    <a href="" style={{marginLeft:'4%'}}>አዲስ ድርጅት ምዝገባ</a>
                </Header>
                <div className='input_area'>
                      <h2>መግቢያ</h2>
                      <Input placeholder="የድርጅቱ ስም" allowClear 
                      onChange={(e)=>setCorporate(pre=>{
                              return{...pre,name:e.target.value}
                        })} style={{width:300,height:50, marginTop:0, marginLeft:"1%"}}/>
                      <Input placeholder="ዘርፍ" allowClear onChange={(e)=>setCorporate(pre=>
                        {
                          return{...pre,type:e.target.value}
                      }
                      )} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input placeholder="የሰራተኛ ብዛት" allowClear onChange={(e)=>setCorporate(pre=>{
                         return{...pre,number_of_employees:e.target.value}
                      })} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
              </div>
                <div className='input_area'>
                      <h2>አድራሻ</h2>
                      <Input placeholder="የከተማ ስም" allowClear onChange={(e)=>{setAddress(pre=>{return{...pre,city:e.target.value}});setCorporate(pre=>{return{...pre,address}})}} style={{width:300,height:50, marginTop:0, marginLeft:"1%"}}/>
                      <Input placeholder="ክፍለ ከተማ ስም" allowClear onChange={(e)=>{setAddress(pre=>{return{...pre,sub_city:e.target.value}});setCorporate(pre=>{return{...pre,address}})}}style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input placeholder="ወረዳ" allowClear onChange={(e)=>{setAddress(pre=>{return{...pre,woreda:e.target.value}});setCorporate(pre=>{return{...pre,address}})}} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input placeholder="የቤት ቁጥር" onChange={(e)=>{setAddress(pre=>{return{...pre,house_number:e.target.value}});setCorporate(pre=>{return{...pre,address}})}}                   style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input placeholder="ስልክ ቁጥር" allowClear onChange={(e)=>setCorporate(pre=>{return{...pre,phone_number:e.target.value}})} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input placeholder="የካፕ መጠን" allowClear onChange={(e)=>setCorporate(pre=>{return{...pre,loan_cap:e.target.value}})} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Select defaultValue="አብሮ ሚሰራ ባንክ ስም" style={{width:300,height:50, marginTop:3, marginLeft:"1%"}} onChange={(value)=>{setCorporate(pre=>{return{...pre,bank_id:value}})}}>
                           {
                        banks?.data?.data?.map((bank)=>{
                        return <Option value={bank.id}>{bank.name}</Option>
                        })
                        }
                  </Select>                      
                </div>  
              
              <div className='deliver'>
                  <h2 style={{marginLeft:"1%",marginTop:'4%'}}>ሁኔታ</h2>
                  
            <Select defaultValue="ይምረጡ ያሉበትን ሁኔታ" onChange={(value)=>setCorporate(pre=>{
                        return{...pre,status:value}
                      })}className="select-after" style={{marginLeft:'2%', marginTop:"1%",width:300}}>
                  <Option value="accepted">ተፈቅዷል</Option>
                  <Option value="pending">እይታ ላይ</Option>
                  <Option value="rejected">የታገደ</Option>
            </Select>
          </div>
          <div className='border_bottom' style={{marginTop:20, marginLeft:'0%', width:'100%'}}>

          </div>
          <div className='bottom_btn'>
              <button style={{cursor:'pointer', marginLeft:"50%", fontSize:20}} onClick={()=>{create_corporate()}} primary>ይጨርሱ</button>
          </div>
          </div>
 </Drawer>

       <Drawer placement="right" onClose={onClose_} visible={visible_}>

          <div className='drawer_'>
                  <Header style={{background : '#ccc'}}>
                    <span><i class="fa-solid fa-gear" style={{color:'#F4AD33', fontSize : 24, cursor:'pointer', marginLeft:'2%', marginTop:'1%'}}></i></span>
                    <a href="#" style={{marginLeft:'4%',fontSize:16}}> የተመዘገበ ድርጅት ማስተካከያ</a>
                </Header>
                <div className='input_area'>
                      <h2>መግቢያ</h2>
                      <Space direction='vertical'>
                          <Input addonBefore="የድርጅቱ ስም"  value={singleCorp?.name} onChange={(e)=>setSingleCorp(orig=>{return {...orig,name:e.target.value}})} allowClear   style={{width:300,height:50, marginTop:3, marginLeft:"1%"}} />
                          <Input addonBefore="ዘርፍ" value={singleCorp?.type} allowClear onChange={(e)=>setSingleCorp(orig=>{return {...orig,type:e.target.value}})} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                          <Input addonBefore="የሰራተኛ ብዛት" value={singleCorp?.number_of_employees} allowClear onChange={(e)=>setSingleCorp(orig=>{return {...orig,number_of_employees:e.target.value}})} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      </Space>
              </div>
                <div className='input_area'>
                      <h2>አድራሻ</h2>
                      <Input addonBefore="የከተማ ስም" value={address?.city} allowClear onChange={(e)=>{setAddress(pre=>{return {...pre,city:e.target.value}});
                          setSingleCorp(prev=>{return{...prev,address}})
                    }} style={{width:300,height:50, marginTop:0, marginLeft:"1%"}}/>
                      <Input addonBefore="ክፍለ ከተማ ስም" value={address?.sub_city} allowClear onChange={(e)=>{setAddress(orig=>{return {...orig,sub_city:e.target.value}});setSingleCorp(prev=>{return{...prev,address}})}} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input addonBefore="ወረዳ" value={address?.woreda} allowClear onChange={(e)=>{setAddress(orig=>{return {...orig,woreda:e.target.value}});setSingleCorp(prev=>{return{...prev,address}})}} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input addonBefore="የቤት ቁጥር" value={address?.house_number} allowClear onChange={(e)=>{setAddress(orig=>{return {...orig,house_number:e.target.value}});setSingleCorp(prev=>{return{...prev,address}})}} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input addonBefore="ስልክ ቁጥር" value={singleCorp?.phone_number} allowClear onChange={(e)=>{setSingleCorp(orig=>{return {...orig,phone_number:e.target.value}})}} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                      <Input addonBefore="የካፕ መጠን" value={singleCorp?.loan_cap} allowClear onChange={(e)=>{setSingleCorp(orig=>{return {...orig,loan_cap:e.target.value}})}} style={{width:300,height:50, marginTop:3, marginLeft:"1%"}}/>
                </div>
              
              <div className='deliver'>
                  <h2 style={{marginLeft:"1%",marginTop:'4%'}}>ሁኔታ</h2>
                  
            <Select value={singleCorp?.status} onChange={(value)=>setSingleCorp(orig=>{return {...orig,status:value}})} className="select-after" style={{marginLeft:'2%', marginTop:"1%",width:300}}>
                  <Option value="accepted">ተፈቅዷል</Option>
                  <Option value="pending">እይታ ላይ</Option>
                  <Option value="rejected">የታገደ</Option>
            </Select>
          </div>
          <div className='border_bottom' style={{marginTop:20, marginLeft:'0%', width:'100%'}}>

          </div>
          <div className='bottom_btn'>
              <button style={{cursor:'pointer', marginLeft:"50%", fontSize:20}} onClick={()=>{update_corp(id)}} primary>ያስተካክሉ</button>
          </div>
          </div>
 </Drawer>

 <Drawer visible={detailvisible} placement="right"  onClose={()=>{closeDetailVisible()}} closable={true}>
              <div className="card">
                  <img src={employeeDetail?.profile_image_path} alt="corporate employee" style={{width:'100%'}}/>
                  <div className="container">
                    <div className="hcontents">
                      <Space direction='vertical'>
                          <Tooltip title="Employee Name"><h1>{employeeDetail?.first_name+ ' '+employeeDetail?.last_name}</h1></Tooltip>
                          <Tooltip title="Employee Email"><h6 class="title"><i className='fa fa-envelope'></i>{'  '+employeeDetail?.email}</h6></Tooltip>
                          <p>
                            {employeeDetail?.is_active===1?
                            <div id="center-div">
                            <div class="bubble">
                              <span class="bubble-outer-dot">
                              <span class="bubble-inner-dot"></span>
                              </span>
                            </div>
                          </div>:
                          ''}                   
                          </p>                      
                      <Tooltip title="Employee Phone Number"><h6><i className='fa fa-phone'></i>{'  '+employeeDetail?.phone_number}</h6></Tooltip>
                      <Tooltip title="Loan Granted"><h6><i className='fa-solid fa-stamp'></i>{'  '+employeeDetail?.loan_granted+' Br'}</h6></Tooltip>
                      <Tooltip title="Loan Used"><h6><i className='fa-solid fa-money-bill-transfer'></i> {'  '+employeeDetail?.loan_used+ ' Br'}</h6></Tooltip>
                      <Tooltip title="Corporate Integrated Bank"><h6><i className='fa fa-bank'></i>{'  '+employeeDetail?.bank?.name}</h6></Tooltip>
                      <Tooltip title="Employee Location"><h6><i className='fa fa-location'></i>{'  '+employeeDetail?.address?.city+' ,'+employeeDetail?.address?.sub_city +' ,'+employeeDetail?.address?.woreda}</h6></Tooltip>
</Space>
                  </div>
                  </div>
              </div>
            </Drawer>
        </div>


        <Modal title="Add Corporate Employee" okText="ይጨምሩ" cancelText="ይቅር" style={{textAlign:'center'}} closable={false} visible={addVisible} onOk={()=>addEmployee()} onCancel={()=>{message.warning('ምንም ስራ አልተሰራም');setAddVisible(false)}}>
                  <Space direction='vertical' >
                  <ImgCrop rotate addonBefore="መለያ ፎቶ">
                              
                              <Upload
                                 listType="picture-card"
                                 fileList={fileList}
                                 onPreview={handlePreviews}
                                 onChange={handleChanges}   
                                 accept='.jpg, .jpeg, .png, .bmp, .gif, .svg,.webp'
                                 beforeUpload={(file)=>{
                                    return false;
                                 }}
                                 >
                                 {fileList.length ===1 ? null : uploadButton}
                              </Upload>
                                 
                                                            
                        </ImgCrop>
                    <Input addonBefore='መለያ ስም' value={employee.user_name} onChange={(e)=>{setEmployee(pre=>{return{...pre,user_name:e.target.value}});setEmployee(pre=>{return{...pre,password:'password'}});setEmployee(pre=>{return{...pre,password_confirmation:'password'}});}}/>
                    <Input addonBefore='ስም' value={employee.first_name} onChange={(e)=>setEmployee(pre=>{return{...pre,first_name:e.target.value}})}/>
                    <Input addonBefore='የአባት ስም' value={employee.last_name} onChange={(e)=>setEmployee(pre=>{return{...pre,last_name:e.target.value}})}/>
                    <Input addonBefore='ኢሜል' value={employee.email} onChange={(e)=>setEmployee(pre=>{return{...pre,email:e.target.value}})}/>
                    <Input addonBefore='ስልክ ቁጥር' value={employee.phone_number} onChange={(e)=>setEmployee(pre=>{return{...pre,phone_number:e.target.value}})}/>
                    <Input addonBefore='ከተማ' value={address?.city} onChange={(e)=>{setAddress(pre=>{return{...pre,city:e.target.value}});setEmployee(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ክፍለ ከተማ'  value={address?.sub_city} onChange={(e)=>{setAddress(pre=>{return{...pre,sub_city:e.target.value}});setEmployee(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ወረዳ' value={address?.woreda} onChange={(e)=>{setAddress(pre=>{return{...pre,woreda:e.target.value}});setEmployee(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='ጎረቤት' value={address?.neighborhood} onChange={(e)=>{setAddress(pre=>{return{...pre,neighborhood:e.target.value}});setEmployee(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='የቤት ቁጥር' value={address?.house_number} onChange={(e)=>{setAddress(pre=>{return{...pre,house_number:e.target.value}});setEmployee(pre=>{return{...pre,address:address}})}}/>
                    <Input addonBefore='የብድር መጠን' value={employee?.loan_amount} onChange={(e)=>{setEmployee(pre=>{return{...pre,loan_amount:e.target.value}})}}/>
                    <Input addonBefore='የባንክ አካውንት' value={employee.account_number} onChange={(e)=>{setEmployee(pre=>{return{...pre,account_number:e.target.value}})}}/>
                  </Space>
            </Modal>
            
    </div>
  )
}


