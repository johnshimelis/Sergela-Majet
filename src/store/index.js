import { configureStore} from "@reduxjs/toolkit";
import productSlice from './products-slice'
import auth from './auth-slice'
const store=configureStore({
    reducer:{
        product:productSlice.reducer,
        auth:auth.reducer
    }
})

export default store;