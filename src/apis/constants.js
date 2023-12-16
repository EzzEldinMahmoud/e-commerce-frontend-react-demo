import  axios  from "axios";

export const API_URL = 'https://e-commerce-fakestore-ezzeldin.onrender.com/api/';
export const publicRequest = axios.create({
    baseURL: API_URL
});
export const userRequest = axios.create({
    baseURL: API_URL,
    header: {token: `Bearer ${localStorage.getItem("token")}`},
});