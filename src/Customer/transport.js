import React,{ useState,useEffect} from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';
import { Layout, Row, Col, Input, Button,Checkbox,Card,Steps,Modal,message } from 'antd';
import coin from '../images/coin.png'
import LastHeader from '../components/last_header';
import api from '../cust_adapter/base';
import {useSelector} from 'react-redux';
const { Header} = Layout;
const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'መረጃ',
  },
  {
    title: 'Second',
    content: 'ትራንስፖርት',
  },
  {
    title: 'Last',
    content: 'ክፍያ',
  },
];
const Meta=Card;
export default function Transport() {

    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    const [transport,setTransport]=useState()
    const [visible,setVisible]=useState(false);
    const selected_products=useSelector((state)=>state.product.productList)
    const quantity=useSelector((state)=>state.product.totalQuantity)
    const totalPrice=useSelector(state=>state.product.totalPrice)
    const totalDiscount=useSelector(state=>state.product.totalDiscount)
    const remaining_price=useSelector(state=>state.auth.user.data.loan_balance)
    const [products,setProducts]=useState([]);
    const [shippingDetail,setShippingDetail]=useState();
    const loc=useLocation();
    const user=useSelector(state=>state.auth.user.access_token);
    const [locations,setLocations]=useState({
      coords:{
        lat:'',
        long:''
      }
    })


    useEffect(()=>{
      selected_products.forEach(product=>{
        setProducts(prev=>{return [...prev,{id:product.id,quantity:product.quantities}]})
      });
      if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position)=>{
          setLocations({
            coords:{
              lat:position.coords.latitude,
              long:position.coords.longitude
            }
          })
        })
      }
      else{
        message.warning("Turn Location ON First")
      }
    },[])
    const setVisibleTrue=()=>{
      setVisible(true);
    }

    const onCancel=()=>{
      setVisible(false);
    }
    const onOk=(id)=>{
      api.post(`orders/${id}/approve`,'',{
        headers:
                { "Authorization": `Bearer ${user}` }
              })
      .then(res=>{
          message.success('Your Order Successfully Sent');
      })
      .catch(err=>{
        message.error("Not Approved Sorry")

      })
      setVisible(false);
    }
    const sendOrder=(transportType)=>{
        api.post('/orders',
      {
        payment_method:'loan',
        additional_payment_method:null,
        shipping_detail:{
          type:transportType,
          first_name:loc.state.user.first_name,
          last_name:loc.state.user.last_name,
          phone_number:loc.state.user.phone_number,
          city:loc.state.user.address.city,
          sub_city:loc.state.user.address.sub_city,
          woreda:loc.state.user.address.woreda,
          neighborhood:loc.state.user.address.neighborhood,
          house_number:loc.state.user.address.house_number,
          latitude:locations.coords.lat,
          longitude:locations.coords.long
        },
        products,
        packages:{}
        
      },{
        headers:
                { "Authorization": `Bearer ${user}` }
              }
      )
      .then(dt=>{
        setShippingDetail(dt.data.data);
        setVisible(true);
         ;
      })
      .catch(err=>{
        console.log(err);
        if(err.response.data.message.includes('.type')){
          message.warning('Choose Transport !')
        }
      })
      }
    
    const next = () => {
    setCurrent(current + 1);
    console.log(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = (e) => {
    if(e.target.checked===true){
      setTransport(e.target.value);
    }
  };
  function functionCollections(){
      if(current < steps.length){
         next();
         navigate('/payment');
     }}
  return (
    <div className='transport'>
      <LastHeader/>
        <div className='container-fluid'>
           <div className='content'>
                <Steps current={current + 1} className="steps">
                {steps.map((item) => (
               <Step onClick={functionCollections} key={item.title} title={item.content}/>
                ))}
                
               </Steps>
               <h3 style={{marginTop:50, marginLeft:140}}>ትራንስፖርት</h3>
              <Row gutter={[0, 200]}>
                <Col span={4}>
               <Card className='product_card' hoverable style={{ width: 350, height: 150 }}>
                    <Header><h3 style={{fontSize:23, marginLeft:-30, marginTop:20, paddingTop:10}}>ኮንቪኒየንስ</h3></Header>
                    
                    <div className='bottom_border'>
                    </div>
                      <div className='delete_btn'>
                      <Checkbox onChange={onChange} value='convenience'></Checkbox>
                      </div>   
                      <h6>በ 1 ሳምንት ውስጥ እናደርሳለን</h6>
               </Card>
               </Col>
                <Col span={8} style={{marginTop:-7}}>
               <Card className='product_card'
                      hoverable
                       style={{ width: 350, height: 150 }}
                       >
                    
                    <Header><h3 style={{fontSize:23, marginLeft:-30, marginTop:20, paddingTop:10}}>መደበኛ</h3></Header>
                    <div className='bottom_border'>

                    </div>
                      <div className='delete_btn'>
                      <Checkbox onChange={onChange} value='standard'></Checkbox>
                      </div>   
                      <h6>በ 1 ቀን ውስጥ እናደርሳለን</h6>
               </Card>
               </Col>
               <Col span={8}>
               <Card className='third_card'
           hoverable
           style={{ width: 400, height: 120, marginTop:10,marginLeft:200, background:'#fff'}}
              
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={coin} style={{marginTop:10,marginLeft:270, width:120, height:100}}/>} >
             <h5 style={{marginTop:-110, marginLeft:-10,fontWeight:'200'}}>ያለዎት ሂሳብ</h5>
                <h4 style={{marginTop:20, marginLeft:-10, fontWeight:'300'}}>{remaining_price} ብር</h4>
           </Card>
               </Col>
               </Row>
               <Card className='product_card'
                      hoverable
                       style={{ width: 724, height: 150, marginLeft:143, marginTop:80}}
                       >
                    
                    <Header style={{marginLeft:-25, width:725}}><h3 style={{fontSize:23, marginTop:20, paddingTop:10, marginLeft:-27}}>ሰረገላ ፈጣን</h3></Header>
                    <div className='bottom_border' style={{marginLeft:-24, width:724}}>

                    </div>
                      <div className='delete_btn'>
                        <Checkbox className='checkbox' style={{marginTop:45}} onChange={onChange} value='quick'></Checkbox>
                      </div>   
                      <h6 style={{marginTop:35}}>በ 1 ቀን ውስጥ እናደርሳለን</h6>   
                      {/* <p>+ 100 ብር</p> */}

               </Card>
  
              <Button style={{color:'#000', background:'#F4AD33',height:50}} type='warning' onClick={()=>{sendOrder(transport)}}>የሰረገላ የብድር ክፍያ</Button>
              <Button style={{marginLeft:22, background:'#000', height:50}} type='primary' onClick={()=>{navigate('/payment',{state:{user:loc.state.user,type:transport}})}}>ወደ ክፍያ ይሂዱ</Button>
              
              <div className='orders'>
          <Card className='fourth_card'
           hoverable
           
           >
             <Meta title="ትዕዛዞች"/>
             <h6 style={{marginLeft:270, marginTop:-20}}> {quantity} እቃዎች</h6>
              <div className='bottom_border'>
             </div>
             {selected_products?.map(choicen=>{
                  <div className='bottom_border'>

             </div>
              return(
             <Card className='third_card'
           hoverable
           style={{ width: 150, height: 100, marginTop:50, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={Array.isArray(choicen.image_paths)?choicen.image_paths[0]:choicen.image_paths} />}>
                <div className='bottom_border'>
             </div>
             <div className='order_description'>
               <h4>{choicen?.name}</h4>
               <h6 style={{marginTop:20}}>የአንዱ ዋጋ : {choicen?.price} ብር</h6>
               <h6>ጠቅላላ ዋጋ፡ {choicen?.totalPrice} ብር</h6>
             </div>
           </Card>
             )
            }
             )
          }
               <div className='deliver'>
             <h6>ቅናሽ<span style={{color:'red'}}><strike>{totalDiscount} ብር</strike></span></h6>
             <h6>ጠቅላላ ዋጋ፡ <span>{totalPrice} ብር</span></h6>
           <div className='bottom_border'>
             
             </div>
             </div>
             <div className='total'>
                 <div className='bottom_border'>
             </div>
             </div>
             </Card>
            </div>

  
            </div>
        <div className='footer'>
        <div className='container-fluid'>
            <Row gutter={[8, 32]}>
               <Col span={6}>
                  <div className='part_1'  style={{marginTop:-50, color:'#000'}}>
                       <h1 style={{color:'#fff'}}>ለጋዜጣችን ይመዝገቡ</h1> 
                       <h4 style={{color:'#fff'}}>ስለሚሸምቱት ዕቃዎች አዲስ መረጃ ለመስማት ሁልግዜም ቀዳሚ ይሁኑ</h4> 
                       <Input  style={{ width: 'calc(100% - 200px)', color:'#fff' }} placeholder="ኢሜል አድራሻ" />
                       <Button style={{color:'#fff'}} type="primary">ይመዝገቡ</Button>
                  </div>
                </Col>
            </Row>
     <Row gutter={[8,200]}>
       <Col span={4}>
            <div className='part_2 ' style={{color:'#fff'}}>
          <h3 style={{color:'#fff'}}>ይግዙ</h3>
          <h5 style={{color:'#fff'}}>ልብስና ጫማ</h5>
           <h5 style={{color:'#fff'}}>መጳሕፍት</h5>
            <h5 style={{color:'#fff'}}>አስቤዛ</h5>
             <h5 style={{color:'#fff'}}> ምግብና መጠጥ</h5>
              <h5 style={{color:'#fff'}}>የውበቶ ዕቃዎች</h5>
            </div>
         </Col>
         <Col span={4}>
         <div className='part_2 part_3'>
         
          <h5 style={{color:'#fff'}}>ኤሌክትሮኒክስ</h5>
           <h5 style={{color:'#fff'}}>የቤት ዕቃዎች</h5>
            <h5 style={{color:'#fff'}}>የጵሕፈት መሳሪያዎች</h5>
             <h5 style={{color:'#fff'}}>መድኃኒቶች</h5>
            </div>
            </Col>
        <Col span={4}>
         <div className='part_2'>
          <h3 style={{color:'#fff'}}>ሻጭ ይሁኑ!</h3>
          <h5 style={{color:'#fff'}}>መረጃ ማዕከል</h5>
           <h5 style={{color:'#fff'}}>ያዘዙት ዕቃዎች</h5>
            <h5 style={{color:'#fff'}}>መመለሻ ፓሊሲ</h5>
             <h5 style={{color:'#fff'}}>ያነጋግሩን</h5>
             
            </div>
            </Col>
              <Col span={4}>
         <div className='part_2'>
          <h3 style={{color:'#fff'}}>ሰረገላ</h3>
          <h5 style={{color:'#fff'}}>ስለ ሰረገላ</h5>
           <h5 style={{color:'#fff'}}>ሀላፊነት</h5>
            <h5 style={{color:'#fff'}}>ራዕይ</h5>
             
            </div>
            </Col>
            </Row>
        </div>


    </div>
              
        </div> 
        <Modal className='payment_approval' cancelButtonProps={{style:{backgroundColor:'#f44336'}}}okButtonProps={{style:{backgroundColor:'green'}}}visible={visible} closable={false} onOk={()=>onOk(shippingDetail.id)} onCancel={onCancel} okText='Approve' cancelText='Decline'>
        <div class="container">
            <h3>Payment Approval</h3>
                 <div>
                  <hr/>
                  <h5>ትራንስፖርት ዋጋ: <span><em>{shippingDetail?.estimated_delivery_cost} ብር</em></span></h5>
                  <h5>ለመድረስ፡ <span><em>{shippingDetail?.estimated_delivery_time} ደቂቃ</em></span></h5>
                  <hr/>
                  <h4 style={{float:'right'}}>ጠቅላላ ዋጋው፡ <span><em>{shippingDetail?.total_cost} ብር</em></span></h4>
                  <hr/>
                  </div>
        </div>  
        </Modal>
    </div>
  )
}
