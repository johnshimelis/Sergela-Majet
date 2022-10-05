import { configureStore} from "@reduxjs/toolkit";
import productSlice from './products-slice'
import auth from './auth-slice'
import Favorite from "./fav-slice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig={
    key:'root',
    version:1,
    storage
}

const reducer=combineReducers({
    auth:auth.reducer,    
    product:productSlice.reducer,
    fav:Favorite.reducer
});

const persistedReducer=persistReducer(persistConfig,reducer)
const store=configureStore({
    reducer:persistedReducer
})

export default store;