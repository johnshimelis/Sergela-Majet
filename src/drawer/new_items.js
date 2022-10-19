import React,{useState} from 'react'
import api from '../adapter/base'
import { Input, message,Col, Form,Row,Upload,Select,Switch,Tag} from 'antd';
import ImgCrop from 'antd-img-crop';
import {useQuery} from 'react-query';
const { Option } = Select;
const {CheckableTag}=Tag;

const NewItems=()=>{
  const [fileList,setFileList]=useState([])
  const [product,setProduct]=useState()
  const[tagsData,setTagsData]=useState(["ትልቅ", "መካከለኛ","ትንሽ"])
  const[selectedTags,setSelectedTags]=useState(["ትልቅ"]);

  const categories=useQuery('subcategory',()=>{return api.get('subcategories')});
  const suppliers=useQuery('suppliers',()=>{return api.get('suppliers')})
  const handleChanges = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  };
  
  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const [store_quantities,setStore_quantities]=useState([]);
  const registerProduct=()=>{
       const fd=new FormData();
       fd.append('name',product.name);
       fd.append('description',product.description);
       fd.append('supplier_id',product.supplier_id);
       fd.append('brand',product?.brand);
       fd.append('price',product.price);
       fd.append('discount',product.discount);
       fd.append('weight',product?.weight);
       fd.append('sub_category_id',product.sub_category_id);
       fd.append('measurement_type',product.measurement_type);
       for(let i=0;i<selectedTags.length;i++) 
          {
            fd.append('size[]',selectedTags[i]);
          }
       for(let i=0;i<fileList.length;i++)
          {
            fd.append('images[]',fileList[i].originFileObj,fileList[i].originFileObj.name);
          }
         Object.keys(store_quantities).forEach(key =>{
            fd.append(`store_quantities[0][${key}]`,store_quantities[key]);
         });
      api.post('products',fd).then(res=>{
        message.success("Product Registered succesfully");
        window.location.reload(false);
      }).catch(err=>{
        message.error(err.response.data.message)
      })
  }

    return (
    <div className='new_items'>
           <Form layout="vertical" hideRequiredMark>
          <Row gutter={16} style={{marginTop:10}}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="የእቃው ስም"
                rules={[
                  {
                    required:false,
                    message: 'እባኮን የእቃውን ስም ያስገቡ',
                  },
                ]}
              >
                <Input placeholder="Product Name" onChange={(e)=>{setProduct(pre=>
                    {
                      return{...pre,name:e.target.value}
                    })}}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="ዋጋ"
                rules={[
                  {
                    required:false,
                    message: 'ዋጋውን ያስገቡ',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  placeholder="ዋጋው እዚህ ጋር"
                  onChange={(e)=>{setProduct(pre=>
                    {
                      return{...pre,price:e.target.value}
                    })}}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
            <Form.Item
                name="description"
                label="ገለጻ ስለ እቃው"
                rules={[
                  {
                    required:false,
                    message: 'እባኮን መግለጫውን አስተካክለው ያስገቡ',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Detail Description About The Product"
                onChange={(e)=>{setProduct(pre=>
                  {
                    return{...pre,description:e.target.value}
                  })}}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="discount"
                rules={[
                  {
                    required:false,
                    message: 'ቅናሽ ዋጋ ያስገቡ',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '85%',
                  }}
                  placeholder="ቅናሽ"
                  onChange={(e)=>{setProduct(pre=>
                    {
                      return{...pre,discount:e.target.value}
                    })}}
                />
                <Switch/>
              </Form.Item>
              <Form.Item
                name="category"
                rules={[
                  {
                    required:false,
                    message: 'እባኮን መጠን ያስገቡ',
                  },
                ]}
              >
           <Select style={{width: '100%'}} onChange={(value)=>{setProduct(pre=>
                    {
                      return{...pre,sub_category_id:value}
                    })}} placeholder='ቡድን'>
                {categories?.data?.data?.data.map(cat=>{
                return <Option value={cat?.id}>{cat?.name}</Option>
                })}
           </Select>
  
    
                
              </Form.Item>
              
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="photos"
                label="ፎቶዎች"
                rules={[
                  {
                    required:false,
                    message: 'ምንም አይነት ፎቶ አላስገቡም',
                  },
                ]}
              >
                <ImgCrop rotate>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        accept='.jpg, .jpeg, .png, .bmp, .gif, .svg,.webp'
        beforeUpload={(file)=>{
           return false;
        }}
      >
        {fileList.length < 6 && '+ ፎቶ'}
      </Upload>
    </ImgCrop>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="supplier"
                rules={[
                  {
                    required:false,
                    message: 'እባኮን አቅራቢውን ይምረጡ',
                  },
                ]}
              >
            
           <Select style={{width: '100%'}} onChange={(value)=>{setProduct(pre=>
                    {
                      return{...pre,supplier_id:value}
                    })}} placeholder='አምጪው  '>
                {suppliers?.data?.data?.data.map(sup=>{
                  return <Option value={sup.id}>{sup.name}</Option>
                })}
           </Select>
           <Form.Item
                name="quantity"
                rules={[
                  {
                    required:false,
                    message: 'ብዛት አላስገቡም',
                  },
                ]}
              >
                <span 
                style={{
                  marginRight: 8,
                  display:'block',
                  marginTop:10,
                  marginBottom:10
                }}>
                <Input
                  style={{
                    width: '100%',
                  }}
                  onChange={(e)=>{
                    setStore_quantities(pre=>
                    {
                      return{...pre,quantity:e.target.value}
                    });
                    setStore_quantities(pre=>
                      {
                        return{...pre,store_id:2}
                      });
                      setProduct(pre=>
                    {
                      return{...pre,store_quantities:store_quantities}
                    })}}
                  placeholder="ብዛት"
                />
                </span>

                <Select style={{width: '100%'}} onChange={(value)=>{setProduct(pre=>
                    {
                      return{...pre,measurement_type:value}
                    })}} placeholder='መለኪያ'>
                    <Option value='unit'>Unit</Option>
                    <Option value='kilo'>Kilo</Option>
           </Select>
              </Form.Item>

           <span
        style={{
          marginRight: 8,
          display:'block',
          marginTop:10,
          marginBottom:10
        }}
      >
        መጠን:
      </span>
      {tagsData?.map((tag) => (
        <CheckableTag
          style={{marginRight: 8}}
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChanges(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
              </Form.Item>
              
            </Col>
            
          </Row>
          <Row>
            <Col style={{marginLeft:"35%"}} span={24}>
              <div className='bottom_btn2'>
                  <button primary onClick={registerProduct}>መዝግብ</button>
              </div>
            </Col>
          </Row>
        </Form>
        </div>
       
  )

}

export default NewItems;