import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'products',
    initialState:{
        productList:[],
        totalQuantity:0,
        totalPrice:0,
        totalDiscount:0
    },
    reducers:{
        addToCart(state,action)
        {
            const existingProduct=state.productList.find(product=>product.id===action.payload.id);
            if(existingProduct){
                existingProduct.totalPrice+=parseFloat(action.payload.quantities)*parseFloat(existingProduct.price);
                existingProduct.quantities=parseFloat(existingProduct.quantities)+parseFloat(action.payload.quantities);
                state.totalPrice+=parseFloat(action.payload.quantities)*parseFloat(existingProduct.price);
                state.totalDiscount+=parseFloat(action.payload.discount)*parseFloat(action.payload.quantities)
            }
            else{
                state.productList.unshift(
                    {
                     id:action.payload.id,
                     name:action.payload.name,
                     price:action.payload.price-action.payload.discount,
                     description:action.payload.description,
                     discount:action.payload.discount,
                     image_paths:action.payload.image_paths?action.payload.image_paths:action.payload.image_path,
                     quantities:action.payload.quantities,
                     totalPrice:(action.payload.price-action.payload.discount)*action.payload.quantities
                    }
                    );
                    state.totalQuantity++;
                    state.totalPrice+=(action.payload.price-action.payload.discount)*action.payload.quantities;
                    state.totalDiscount+=action.payload.discount*action.payload.quantities;
            }
        },
        removeFromCart(state,action){
            state.productList=state.productList.filter(product=>product.id!==action.payload.id);
            state.totalPrice-=action.payload.price*action.payload.quantities;
            state.totalDiscount-=action.payload.discount*action.payload.quantities;
            state.totalQuantity-=1

        },
        defaultState(state){
            state.productList.length=0;    
            state.totalQuantity=0;
            state.totalPrice=0;
            state.totalDiscount=0        
        }
        
    }
});
export const actions=productSlice.actions
export default productSlice;