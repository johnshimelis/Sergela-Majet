import {Input,Form,Button,Upload,Select} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import api from '../adapter/base'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
const onFinish = (values) => {
    console.log('Success:', values);
  };

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
const RegisterPackage=()=>{
    const [products,setProducts]=useState();
    const [tags,setTags]=useState();
    const { Option } = Select;
    const user=useSelector(state=>state.auth.user.access_token)
    var children = [];
    const [selectedProduct,setSelectedProduct]=useState([]);
    products?.forEach(product=>children.push(<Option key={product.id}>{product.name}</Option>));
    const handleChange = (value) => {
        setSelectedProduct(prev=>{return[...prev,{id:value[0],quantity:1}]});
      };
      console.log(selectedProduct);
    useEffect(()=>{
        const fetchProduct=async ()=>{
            await api.get('/products',{headers:{'Authorization':`Bearer ${user}`}})
        .then(res=>{

            setProducts(res.data.data);
        })
        .catch(err=>{
          console.warn("Network Error");
        });
    }
     const fetchTags=async ()=>{
        await api.get('tags',{
            headers:{
                'Authorization':`Bearer ${user}`
        }}).then(res=>{
            setTags(res.data.data);
        })
        .catch(err=>console.warn("Network Error"))
     }
        fetchTags();
        fetchProduct();
        
    },[])
    return(
        <div style={{marginTop:'10px'}}>
            <h4 style={{}}>Register Package</h4>
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Package Name"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input Package Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
      label="Tag"
      name="Tag"
      rules={[
        {
          required: true,
          message: 'Please Select tag!',
        },
      ]}>
          <Select>
            {
                tags?.forEach(tag=>{
                  <Option value={tag.id}>{tag.name}</Option>        
                })
            }
          </Select>
        </Form.Item>

        <Form.Item 
      label="Products"
      name="Products"
      rules={[
        {
          required: true,
          message: 'Please Select tag!',
        },
      ]}>
           <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      onChange={handleChange}
    >
      {children}
    </Select>
        </Form.Item>

      <Form.Item
        label="Price"
        name="Price"
        rules={[
          {
            required: true,
            message: 'Please input package price!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Discount"
        name="Discount"
        rules={[
          {
            required: true,
            message: 'Please Enter Discount!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

<Form.Item label="Package Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
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
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}
export default RegisterPackage;