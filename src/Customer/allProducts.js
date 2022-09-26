import React,{useEffect,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import api from '../cust_adapter/base'
import LastHeader from '../components/last_header';
import { Menu,Row,Card,Image,Col } from 'antd';
export default function AllProduct() {
  const loc=useLocation();
  const navigate=useNavigate();
  const [products,setProducts]=useState()
  const [category,setCategory]=useState()
  const [suppliers, setSuppliers] = useState() 
  const [categories, setCategories] = useState()
  const [selectedProduct,setselectedProduct]=useState();
  const [productName,setProductName]=useState();
  const [visible, setVisible] = useState(false);
  const {Meta}=Card;
  const handleback=(url)=>{
        navigate(`/${url}`)
      }
    const handlemenu=(id)=>{
        api.get(`categories/${id}/products`)
        .then(res=>
          { 
            setProducts(res.data.data)
          })
        .catch(err=>{
          console.log(err);

        });
        api.get(`categories/${id}`)
        .then(res=>{
          setCategory(res.data.data.name)
        })
        .catch(err=>{console.log(err);})
    }
    const handleDetail=(product)=>{
      navigate('/main_page',{state:{product:product}})
    }
    const [navLinks,setNavLinks]=useState(
        [
            {
                label:'ምድቦች',
                key:'category'
            },
            {
               label:<i className="fa fa-arrow-left"></i>,
               key:'home',
               onClick:()=>handleback('last_home')
            }
        ]
        );
  useEffect(()=>{
      api.get('/categories')
    .then(res=>{
      setCategories(res.data.data.slice(0,5));
      res.data.data.forEach(element => {
       
        setNavLinks(prev=>{return [...prev,{label:element.name,key:element.id,onClick:()=>handlemenu(element.id)}]})
    })
    })
    .catch(err=>{
      console.log('Error happened')
    });
    api.get(`categories/${loc?.state?.id?loc.state.id:36}/products`).then(res=>{
      setProducts(res.data.data);
    })
    .catch(err=>{
      console.log('some error happened');
    });   
  },[]);
 

  return (
    
    <div>
      <LastHeader/>
         <div className='admin_nav' style={{marginTop:'0%'}}>
                     <Menu mode="horizontal" selectedKeys={39} items={navLinks}/>
              </div>
        <div style={{marginLeft:'4%',marginTop:'2%'}}>
            <h5>{category}</h5>
            <p>{products?.length===0? 'ምንም እቃ አላገኙም፡፡' : products?.length + ' እቃዎች አግኝተዋል፡፡'}</p>
        </div>

<div style={{marginTop:'4%',marginLeft:'4%'}}>
<Row gutter={[30, 100]}>
              {
                products?.map((product) => {
                  return (
                    <Col xs={10} md={6} lg={4}>
                      <Card hoverable style={{ maxWidth: 214, minHeight: 450 }}
                        cover={<Image
                          preview={{ visible: false }}
                          src={product.image_paths[0]}
                          
                        />
                        }
                        onClick={()=>handleDetail(product)}> 
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
                  
  
                        
                      </Card>
                    </Col>

                  );
                }
                )
              }

              </Row>
          
      </div>
      </div>
      
   
     
   
);
}