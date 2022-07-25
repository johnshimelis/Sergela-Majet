
import React from "react";
import { Row, Col, Slider } from 'antd';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import image from '../images/abebe.jpeg';
import { Button } from 'antd';
import { Carousel } from 'antd';
import product1_image from '../images/product1.png';
import product2_image from '../images/product2.png';
import { Typography } from 'antd';

const {title} = Typography;

const { Meta } = Card;
const star = '  <i class="fa-solid fa-star"></i>';

function GetProducts(){
    return(
    <div className="container-fluid">
       <div className="products">
{/*         
       <div className="card_1">
     <Card bordered style={{width: 432, height: 200, border: '2px solid #F4AD33', background : '#FFFBE6'}} className="product_card">
       <div className="card_content">
       <img src={image} style = {{height: 46, width : 46}} />
          <h2 className="h2_1">አበበ ቢቂላ</h2>
         <h2>እንኳን በደህና መጣህ!</h2>
       
           <h4>ቀሪ ገንዘብ</h4>
           <h1>500.63</h1>
          <hr style={{
            borderColor : '#F4AD33'
          }}/>
           <a href="#" className="one">የግዢ ታሪክዎ</a>
           <a href="#">ብድር ጭማሪ ይጠይቁ</a>
        </div>
        </Card>
      </div> */}
      <div className="card_2">
          <Card bordered style={{marginLeft:-500,marginTop:300,width: 432, height: 200, border: '2px solid #F0F0F0', background : '#F0F0F0'}} className="product_card">
       <div className="card_content">
           <Button>ታላቅ ቅናሽ</Button>
           <h1>የሶስት ወር አስቤዛ</h1>
           <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
               <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
          <p>23br</p>
          <img src={product1_image} />
           </div>
        </Card>
      </div>

          <div className="card_2">
          <Card bordered style={{width: 432, height: 200, border: '2px solid #F0F0F0', background : '#F0F0F0'}} className="product_card">
       <div className="card_content">
           <Button>ታላቅ ቅናሽ</Button>
           <h1>የሶስት ወር አስቤዛ</h1>
           <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
               <div className="bag"><i class="fa-solid fa-bag-shopping"></i></div>
          <p>23br</p>
          <img src={product1_image} />
           </div>
        </Card>
      </div>
    
         
         
      

       <div className="card_3">
          <Card bordered style={{width: 432, height: 200, border: '2px solid #F0F0F0', background : '#F0F0F0'}} className="product_card">
       <div className="card_content">
           <Button>ታላቅ ቅናሽ</Button>
           <h1>መጠጥና የቺብስ ጥቅል</h1>
           <div className="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
          </div>
            <div className="bag_2"><i class="fa-solid fa-bag-shopping"></i></div>
          <p>23br</p>
          
          <img src={product2_image} />
         
       </div>
        </Card>
      </div>
      

      
       
    </div>  
   
 </div>
);
}
export default GetProducts;