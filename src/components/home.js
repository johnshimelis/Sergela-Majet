import React from "react";
import AppHeader from "./header";
//import  GetProducts from "./product";
import AllProduct from "../Customer/allProducts";
import AppFooter from "../components/footer"
import SideNav from "../components/sideNav";
import GetProducts2 from "../Customer/product 2";
import AppHeader2 from "../components/header 2";
import image from '../images/ser.png';
import person from '../images/person.png';

function HomePage(){
    return(
     <div className="home">
        
         <AppHeader2 />
         <div className="update">
            <h2 style={{width:550,marginLeft:80,marginTop:20, fontWeight:'bold',fontSize:40, wordSpacing:20}}>የመጀመሪያው <span style={{color:'#DEA443'}}>የብድር</span> እና የድሊቨሪ ገቢያ በኢትዮጵያ</h2>
            <img style={{marginLeft:600,marginTop:-150, height:150, width:150}} src={image} alt="Sergela Majet" />
            <img src={person} alt="person" style={{width:640, height: 220, marginTop:-185, marginLeft:20}} />
         </div>
         <GetProducts2 />
         
         <AllProduct />
         <SideNav />
         <AppFooter />
    </div>
    );
}
export default HomePage;