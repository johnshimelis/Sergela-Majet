import React,{ useState ,useEffect} from 'react'
import LastHeader from '../components/last_header';
import api from '../cust_adapter/base';
import {Input,Button,Layout,Card,Steps,Row,message,Col,Modal} from 'antd';
import { useNavigate,useLocation } from "react-router-dom";
import {useSelector} from 'react-redux';
import birr from '../images/birr.png';
import tele from '../images/tele.png'
import awash from '../images/awash.png'
import coin from '../images/coin.png'
import success from '../images/success.png';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
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


 export default function Payment() {
  const loc=useLocation();
  const user=useSelector(state=>state.auth.user.access_token);
  const remaining_price=useSelector(state=>state.auth.user.data.loan_balance);
  const selected_products=useSelector((state)=>state.product.productList);
  const [visible,setVisible]=useState(false);
  const [products,setProducts]=useState([]);
  const [shippingDetail,setShippingDetail]=useState();
  const [locations,setLocations]=useState({
    coords:{
      lat:'',
      long:''
    }
  })
  useEffect(()=>{
    if(!loc.state.type){
      navigate('/transport');
    }
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
  const onCancel=()=>{
    setVisible(false);
  }
  const onOk=(id)=>{
    api.post(`orders/${id}/approve`,'',{
      headers:
              { "Authorization": `Bearer ${user}` }
            })
    .then(res=>{
        window.open(res.data.toPayUrl)
        // window.open(res.data.toPayUrl.replace('http://localhost:8400/','http://18.217.229.72:8400/'))
    })
    .catch(err=>{
      console.log(err);
      message.error("Not Approved Sorry")

    })
    setVisible(false);
  }
  const sendOrder=(transportType)=>{
    api.post('/orders',
    {
      payment_method:'telebirr',
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
    })
    .catch(err=>{
      if(err.response.data.message.includes('.type')){
        message.warning('Choose Transport !')
      }
    })
  }
  function exit(){
     const success = document.getElementById('success');
     const payment = document.getElementById('content');
        if(success.style.display === 'block'){
         success.style.display = 'none';
         payment.style.color = '#fff'
         payment.style.background = '#fff'
  }
}
      const [current, setCurrent] = useState(0);
      const navigate = useNavigate();

  const next = () => {
    setCurrent(current + 2);
    console.log(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  function functionCollections(){
      if(current < steps.length){
         next();
         navigate('/payment');
     }}     

  return (
    <div className='payment' id='payment'>
               <LastHeader/>
        <div className='container-fluid'>            
            <div className='content' id='content'>
                <Steps current={current+2} className="steps">
                {steps.map((item) => (
               <Step onClick={functionCollections} key={item.title} title={item.content}/>
                ))}
                
               </Steps>
               <div className='body'>
            <h5 style={{color:"#000"}} href='#'>የክፍያ መንግዶች</h5>
               <Row gutter={[8,200]}>
         <Col span={4}>
           <Card className='third_card'
           hoverable
           style={{ width: 280, height: 120, marginTop:20,marginLeft:180, background:'#fff'}}
           cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={tele} style={{marginTop:10,marginLeft:10, width:140, height:100}}/>} 
           onClick={()=>sendOrder(loc.state.type)} 
            >
                <h5 style={{marginTop:-80, marginLeft:160}}>ቴሌብር</h5>
           </Card>
           </Col>
            <Col span={4}>
           <Card className='third_card '
           hoverable
           style={{ width: 280, height: 120, marginTop:20,marginLeft:260, background:'#fff'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={awash} style={{marginTop:10,marginLeft:10, width:140, height:100}}/>} >
                <h5 style={{marginTop:-80, marginLeft:147}}>አዋሽ ብር</h5>
           </Card>
           </Col>
               <Col span={4}>
           <Card className='third_card'
           hoverable
           style={{ width: 400, height: 120, marginTop:-20,marginLeft:400, background:'#fff'}}
              
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={coin} style={{marginTop:10,marginLeft:270, width:120, height:100}}/>} >
             <h5 style={{marginTop:-110, marginLeft:-10,fontWeight:'200'}}>ያለዎት ሂሳብ</h5>
                <h4 style={{marginTop:20, marginLeft:-10, fontWeight:'300'}}>{remaining_price} ብር</h4>
           </Card>
           </Col>
           </Row>
           <Card className='third_card '
           hoverable
           style={{ width: 280, height: 120, marginTop:20,marginLeft:180, background:'#fff'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={birr} style={{marginTop:10,marginLeft:10, width:120, height:100}}/>} >
                <h5 style={{marginTop:-80, marginLeft:140}}>ሲቤኢ ብር</h5>
           </Card>

             
              {/* <div className='basic_info'>
                       <h5 style={{marginTop:100, marginLeft:100}}>ቴሌ ብር</h5>
                   <Input placeholder="የደንበኝነት ቁጥር" style={{width:300, height:40, marginLeft:100, marginTop:20}}/>
                   <Input placeholder="ስም" style={{width:300, height:40, marginLeft:20}}/><br />
                   <Input placeholder="ስልክ ቁጥር" style={{width:620, height:40, marginLeft:100, marginTop:20,paddingBottom:-50}}/>
                   </div>
                    <Button style={{height:40}} type='primary' onClick=>አሁኑኑ በቴሌብር  ይክፈሉ</Button>
               </div>
                   <div className='orders' style={{marginTop:-400, marginLeft:880}}> */}
          {/* <Card className='fourth_card'
           hoverable
           style={{ width: 450, height: 680 }}
           >
             <Meta title="ትዕዛዞች"/>
             <h6 style={{marginLeft:270, marginTop:-20}}> 2 እቃዎች</h6>
             <Header></Header>
              <div className='bottom_border'>

             </div>
             <Card className='third_card'
           hoverable
           style={{ width: 150, height: 100, marginTop:50, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={image} style={{marginTop:0,marginLeft:10, width:120, height:100}}/>} >
                <div className='bottom_border'>

             </div>
             <div className='order_description'>
               <h4>ቲማቲም</h4>
               <h6 style={{marginTop:10}}> ኪሎ : 1ኪ . ግ  <span>አይነት : ለቁርጥ</span></h6>
               <h6 style={{marginTop:20}}>የአንዱ ኪሎ ዋጋ : 40 ብር</h6>
             </div>
           </Card>
              <Card className='third_card'
           hoverable
           style={{ width: 150, height: 100, marginTop:80, background:'#FAFAFA'}}
            cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={image2} style={{marginTop:10,marginLeft:10, width:120, height:80}}/>} >
                <div className='bottom_border'>

             </div>
             <div className='order_description'>
               <h4>ኦማር የምግብ ዘይት</h4>
               <h6 style={{marginTop:10}}> ኪሎ : 1ኪ . ግ  <span>አይነት : ለቁርጥ</span></h6>
               <h6 style={{marginTop:20}}>የአንዱ ኪሎ ዋጋ : 40 ብር</h6>
             </div>
           </Card>
           <div className='deliver'>
             <h6 style={{marginTop:-130}}>ማድረሻ<span>0 ብር</span></h6>
             <h6>ቅናሽ<span>-120 ብር</span></h6>
             <h6>ታክስ<span>-124.50 ብር</span></h6>
           <div className='bottom_border'>
             
             </div>
             </div>
             <div className='total'>
               <h6>ጠቅላላ<span>954.50 ብር</span></h6>
               
               <div className='bottom_border'>
             
             </div>
             </div>
             </Card> */}
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
 <div className='success' id='success' style={{display:'none'}}>
        <div className='container-fluid'>
            <div className='image'>
             <img src={success} className="logo"/>
            </div>
            <div className='body'>
              <h2 style={{marginLeft:0, marginTop:20,fontSize:35}}>እንኳን ድስ አለዎ!</h2>
              <h3 style={{marginLeft:-70, marginTop:20,fontSize:35}}>ትዕዛዞ በተሳካ ሁኔታ ተሳክቷል!</h3>
            </div>
            
            <Button onClick={exit}>እሺ</Button>
            </div>

    </div>
    </div>
    
  )
}
