import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState:{
      currentuser:null,
        isfetching:false,
        error:false,
    },
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
    }
});
export const { loginstart ,loginsuccess ,loginfailure} = userSlice.actions;

export default userSlice.reducer;