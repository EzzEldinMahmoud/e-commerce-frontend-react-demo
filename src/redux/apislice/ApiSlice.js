import {loginsuccess,loginstart,loginfailure} from '../features/userSlice';
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { publicRequest } from '../../apis/constants';

export const login =async (dispatch,loginData)=>{
    dispatch(loginstart());
    try{
        const res = await publicRequest.post("auth/login",loginData);
        dispatch(loginsuccess(res.data));
        localStorage.setItem("user",JSON.stringify(res.data));
        localStorage.setItem("token",res.data.accessToken);
    }catch(err){
        dispatch(loginfailure());
    }
}