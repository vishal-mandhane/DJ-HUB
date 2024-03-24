import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    currentUser: "",
    list:[],
    cart: [],
    wish: [],
    cartItems: [],
    quantity: 0,
    amount: 0,
}

const ShoppingCart = createSlice({
    name: "user",
    initialState,
    reducers: {
        addList: (state, action) => {
            state.list = action.payload;  
        },
        updateList: (state, action) => {
            state.list.push(action.payload);
            console.log(action.payload);
        },
        RemoveUser: (state, action) => {
          state.currentUser = ''
        },
        AddUser: (state, action) => {
            state.currentUser = action.payload
        },
        AddCart: (state, action) =>{
            const find = state.cart.findIndex((item)=> item.id === action.payload.id);
            if(find >= 0){
                state.cart[find].quantity+=1;
            }else{
                const tempvar = {...action.payload, quantity:1}
                state.cart.push(tempvar);
            };
        },
        removeCart(state, action){
           const nextCartItems =  state.cart.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );
            state.cart = nextCartItems;
        },
        AddWishlist: (state, action) =>{
            const val = state.wish.findIndex((item)=> item.id === action.payload.id);
            if(val >= 0){
                state.wish[val].quantity+=1;
            }else{
                const temp = {...action.payload, quantity:1}
                state.wish.push(temp);
            };
        },
        removeWishlist(state, action){
            const nextWishItems =  state.wish.filter(
                 (cartItem) => cartItem.id !== action.payload.id
             );
             state.wish = nextWishItems;
        },
        decreaseCart(state, action){
            const itemIndex = state.cart.findIndex(
                carts => carts.id === action.payload.id
            )
            if(state.cart[itemIndex].quantity > 1){
                state.cart[itemIndex].quantity -= 1
            }else if(state.cart[itemIndex].quantity === 1){
                const nextCartItems =  state.cart.filter(
                    (carts) => carts.id !== action.payload.id
                );
                state.cart = nextCartItems;
                toast.success("Item Removed!")
            }
        },
        clearCart(state, action){
            state.cart = []
            state.amount = 0;
            // toast.success("Cart Is Empty!")
        },
        getTotals(state, action){
            let { total, totalQuantity } = state.cart.reduce(
                (cartTotal, carts) => {
                    const { price, quantity } = carts;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.totalQuantity += quantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    totalQuantity: 0,
                }
            );

            state.quantity = totalQuantity;
            state.amount = total;
            console.log(state.amount)
        }
    }
})

export const  {addList, updateList, RemoveUser, AddUser, AddCart, removeCart, AddWishlist, removeWishlist, decreaseCart, clearCart, getTotals} = ShoppingCart.actions;
export default ShoppingCart.reducer