import { useState } from "react";
import { Row,Col,Image,Card } from "antd";
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
const {Meta}=Card;

const Packages=()=>{
    const [packages,setPackages]=useState();
    return(
        <>
          <div className='items'>

<Row gutter={[30, 100]}>
  <div className='product_menu'>
  </div>
  {
    packages.map((product) => {
      return (
        <Col xs={10} md={6} lg={4}>
          <Card hoverable style={{ maxWidth: 214, minHeight: 450 }}
            cover={<Image
              preview={{ visible: false }}
              src={product.image_paths[0]}
            //   onClick={() =>{producty(product.id);setTimeout(()=>setVisible(true),800)}}
            />
            }> 
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup 
        // preview={{ visible, onVisibleChange: vis => setVisible(vis) }}
        >
          
          {/* {
          selectedProduct
          ?.map(imagepath=>{
          return <Image src={imagepath} />
          })
          } */}
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
          <DeleteOutlined 
        //   onClick={()=>{setDeleteId(product.id);setIsDeleteModalVisible(true);setProductName(product.name)}}style={{ color: 'red', fontSize: 23 }} 
          />
        </div>
            
          </Card>
        </Col>

      );
    }
    )
  }
  </Row>
  </div>
        </>
        )
}

export default Packages;