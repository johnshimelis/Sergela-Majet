import { createSlice } from "@reduxjs/toolkit";
const Favorite=createSlice({
    name:'favorites',
    initialState:{
        favorites:[],
        totalCount:0
    },
    reducers:{
         addFav(state,action){
            const isExist=state.favorites.find(favorite=>favorite.id===action.payload.id);
            if(!isExist){
                state.favorites.unshift(action.payload);
                state.totalCount+=1;
            }
         },
         removefav(state,action){
            state.favorites=state.favorites.filter(favorite=>favorite.id!==action.payload.id);  
            state.totalCount-=1;
         },
         clearfav(state){
            state.favorites.length=0;
            state.totalCount=0;
         }
    }
})
export const fav_action=Favorite.actions
export default Favorite