import React from "react";
import AppHeader from "../components/header";
//import  GetProducts from "./product";
import AllProduct from "./allProducts";
import AppFooter from "../components/footer"
import SideNav from "../components/sideNav";
import GetProducts from "./product";
import AppHeader2 from "../components/header 2";
import image from '../images/ser.png';
import person from '../images/person.png';
import OnlyProducts from './only_products'
import ProductFooter from "../components/products_footer";

function HomePage(){
    return(
     <div className="home_page">
        
         <AppHeader2 />
         
         <div className="update" >
            <img style={{marginLeft:600,marginTop:-10, height:150, width:150}} src={image} alt="Sergela Majet" />
            <h2 
            style={{textAlign:'center',width:1000,marginLeft:200,marginTop:20, 
            fontWeight:'bold',fontSize:40, wordSpacing:20}}>
                የመጀመሪያው <span style={{color:'#DEA443'}}>የብድር</span> እና <span style={{color:'#DEA443'}}>የድሊቨሪ</span> ገቢያ በኢትዮጵያ
                </h2>

         </div>
         <GetProducts />
         
         <AllProduct />
         <SideNav />
         <div  className="easy" style={{zIndez:1,height:150, background:'#262626', marginLeft:340, marginTop:200, width:1020}}>
            <h6 style={{textAlign:'center', paddingTop:60, color:'#fff'}}>ቀላል እና ምቹ አገልግሎት</h6>
         </div>
          <OnlyProducts />
         <ProductFooter />
    </div>
    );
}
export default HomePage;