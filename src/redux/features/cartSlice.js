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
            const index = state.cartItems.findIndex((cartItem)=>cartItem.id === item.id);
            if(index < 1){
                state.cartItems.splice(index,1);
                state.cartTotal -= parseInt(action.payload.price );
                state.cartCount -= 1; 
            }
           

        },
        increasequantity:(state,action)=>{
            const item = action.payload;
            const index = state.cartItems.findIndex((cartItem)=>cartItem.id === item.id);
            state.cartItems[index].quantity += 1;
            state.cartTotal += parseInt(action.payload.price );
        },
     
    }
});
export const {addCartItem,removeCartItem,increasequantity} = cartSlice.actions;

export default cartSlice.reducer;