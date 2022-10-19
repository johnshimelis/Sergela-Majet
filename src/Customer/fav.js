import React, { useEffect} from 'react'
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import LastHeader from '../components/last_header';
import { useNavigate, Link } from "react-router-dom";
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { fav_action } from '../store/fav-slice';
import { actions } from '../store/products-slice';
const { Header } = Layout;
const { Meta } = Card;
export default function Fav() {
  const navigate = useNavigate();
  const selected_products = useSelector((state) => state.fav.favorites)
  const quantity = useSelector((state) => state.fav.totalCount)
  const dispatch = useDispatch()
  useEffect(() => {
    quantity === 0 && navigate('/')
  }, [quantity])
  const addtocart = (products) => {
    dispatch(actions.addToCart(Object.assign({}, products, { quantities: 1 })));
    dispatch(fav_action.removefav(products));
  }
  return (
    <div className='cart_page'>
      <LastHeader text="What are you looking for?" button_text="Join now" />
      <div className='content'>
        <h3>Favorites</h3>
        <h5>{quantity} ተወዳጅ እቃዎች<Link to='/all_products'>መገብየትዎን ይቀጥሉ!</Link></h5>
        <div className='products'>
          {selected_products?.map(choicen => {
            return (
              <Card className='product_card'
                hoverable
                style={{ width: 800, height: 300 }}
              >
                <Meta title="" />
                <Header></Header>
                <div className='bottom_border'>
                </div>
                <div className='delete_btn'>
                  <DeleteOutlined style={{ color: 'red', fontSize: 20 }}
                    onClick={() => {
                      dispatch(fav_action.removefav(choicen));
                    }}
                  />
                </div>
                <Card className='third_card'
                  hoverable
                  style={{ width: 180, height: 180, marginTop: 50, background: '#FAFAFA' }}
                  cover={<img alt="አስቤዛ መካከለኛ ቤተሰብ" src={Array.isArray(choicen.image_paths)?choicen.image_paths[0]:choicen.image_path} />}
                >
                </Card>
                <div className='description'>
                  <h5>{choicen?.name}</h5>
                  <p>{choicen?.description}</p>
                  <h6 style={{ marginTop: 10 }}>የአንዱ ዋጋ : {choicen?.price} ብር</h6>
                  <h6>ቅናሽ ፡ {choicen?.discount} ብር</h6>
                </div>
                <button class='btn btn-secondary' onClick={() => addtocart(choicen)} style={{ marginTop: '5%', marginLeft: '' }}>Add To Cart</button>
              </Card>);
          })}
        </div>
      </div>
    </div>


  )
}
