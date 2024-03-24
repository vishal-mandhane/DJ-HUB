import { configureStore } from "@reduxjs/toolkit";
import ShoppingCart from "./redux/ShoppingCart";


const store = configureStore({
    reducer:{
        user: ShoppingCart,
    }
});

export default store;