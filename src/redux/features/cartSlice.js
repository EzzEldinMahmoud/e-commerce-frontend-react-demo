import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        cartTotal:0,
        cartCount:0,
    },
    reducers:{
        addCartItem:(state,action)=>{
            const item = action.payload;
           state.cartItems.push(item);
              state.cartTotal += parseInt(action.payload.price );
            console.log(state.cartTotal);
            state.cartCount += 1; 
        },
        removeCartItem:(state,action)=>{
            const item = action.payload;
            state.cartItems.pop(item);
            state.cartTotal -= parseInt(action.payload.price );
            console.log(state.cartTotal);
            state.cartCount += 1; 
        }
    }
});
export const {addCartItem,removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;