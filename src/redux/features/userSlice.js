import {createSlice} from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
const initialState={
  currentuser:null,
    isfetching:false,
    error:false,
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
       loginstart:(state)=>{

        state.isfetching=true;
       }
       ,loginsuccess:(state,action)=>{
        state.isfetching=false;
        state.currentuser=action.payload;
       },
         loginfailure:(state)=>{
        state.isfetching=false;
        state.error=true;
         },
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, () => {
        return initialState;
      });
    },
});
export const { loginstart ,loginsuccess ,loginfailure} = userSlice.actions;

export default userSlice.reducer;