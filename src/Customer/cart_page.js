import React,{useEffect} from 'react'
import { Layout,Card} from 'antd';
import 'antd/dist/antd.css'; 
import LastHeader from '../components/last_header';
import { useNavigate,Link} from "react-router-dom";
import {DeleteOutlined} from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import { actions } from '../store/products-slice';
import HomeFooter from './home_footer';
const { Header} = Layout;
const { Meta } = Card;
export default function CartPage() {
  const navigate = useNavigate();
  const selected_products=useSelector((state)=>state.product.productList)
  const quantity=useSelector((state)=>state.product.totalQuantity)
  const totalPrice=useSelector(state=>state.product.totalPrice)
  const totalDiscount=useSelector(state=>state.product.totalDiscount)
  const dispatch=useDispatch()
  useEffect(()=>{
    quantity===0 && navigate('/') 
  },[quantity])
return (
    <div className='cart_page'>
        <LastHeader text="What are you looking for?" button_text="Join now"/>
           <div className='content'>
             <h3>ዘንቢልዎ ውስጥ ያስገቡት</h3>
              <h5>{quantity} እቃዎች <Link to='/all_products'>መገብየትዎን ይቀጥሉ!</Link></h5> 
             <div className='products'>
               {selected_products?.map(choicen=>{
                return (
                <Card className='product_card'
                hoverable
                style={{ width: 800, height: 300 }}
                >
                  <Meta title=""/>
                  <Header></Header>
                  <div className='bottom_border'>
                  </div>
                  <div className='delete_btn'>
                 <DeleteOutlined style={{color : 'red', fontSize : 20}} 
                 onClick={()=>{
                  dispatch(actions.removeFromCart(choicen));
                 }}
                />
                 </div>
              <Card className='third_card'
                hoverable
                style={{ width: 180, height: 180, marginTop:50, background:'#FAFAFA'}}
                 cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={Array.isArray(choicen.image_paths)?choicen.image_paths[0]:choicen.image_paths} />}
                >
                </Card>
                <div className='description'>
                  <h5>{choicen?.name}</h5>
                  <p>{choicen?.description}</p>
                    <h6>መጠን ፡ {choicen?.quantities}</h6>
                    <h6 style={{marginTop:10}}>የአንዱ ዋጋ : {choicen?.price} ብር</h6>
                    <h6>ቅናሽ ፡ {choicen?.discount} ብር</h6>
                </div>
               
             
          </Card>);
              })}
   </div>
</div>

     
     <div className='orders'>
          <Card className='fourth_card'
           hoverable
           
           >
            <div className='title'>
              <h3>ትዕዛዞች</h3>
             <h6> {quantity} እቃዎች</h6>
                <div className='bottom_border'>
                  
                </div>
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
             <h6>ቅናሽ<span style={{color:'red'}}><strike>-{totalDiscount} ብር</strike></span></h6>
             <h6>ጠቅላላ ዋጋ፡ <span>{totalPrice} ብር</span></h6>
             {/* <h6>ታክስ<span> will be calculated</span></h6> */}
           <div className='bottom_border'>
             
             </div>
             </div>
             <div className='total'>
               <button type='warning'  style={{marginTop:'2%'}} onClick={()=>{navigate('/info',{state:{cost:totalPrice}})}}>ግዙ</button>
               <div className='bottom_border'>
             
             </div>
             </div>
             </Card>
            </div>
          <HomeFooter />
</div>

    
  )
}
