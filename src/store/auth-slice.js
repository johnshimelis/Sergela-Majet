import { createSlice } from "@reduxjs/toolkit";

const auth=createSlice({
    name:'Auth',
    initialState:{
        user:null
    },
    reducers:{
         login(state,action){
            state.user=action.payload
         },
         logout(state){
            state.user=null;
         },
         update(state,action){
            state.user.data=action.payload;
         }
    }
})
export const auth_actions=auth.actions

export default auth