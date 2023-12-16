import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import  axios  from 'axios';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import {addCartItem} from '../redux/features/cartSlice'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { publicRequest } from '../apis/constants';

function Productsdetails() {
  const dispatch = useDispatch()
    let [product,setproduct]=React.useState({})
    let { id } = useParams();
    let [quatity,setquatity]=React.useState(1)
React.useEffect(()=>{
const response = async()=>{
   await publicRequest.get(`products/find/${id}`)
    .then((res)=>{
        console.log(res.data)
        setproduct(res.data)
    })
}
response()
},[id])
    return (
    <div className='w-full h-screen flex-col flex justify-center items-center ' >
      <div className='w-full flex-row flex h-auto'>
<img src={product['img']} alt={product['title']} className='w-1/2 ' style={{height:800, margin:10,objectFit:'contain'}}/>
<div className='w-1/2 h-full flex-col flex justify-start items-start'>
<h1 className='text-4xl font-bold'>{product['title']}</h1>
<div className=' flex-row flex  items-start font-bold mt-1'>
<h1 className='text-sm font-light'>USD </h1>
    <h2 className='text-3xl font-bold'> {product['price']}</h2>
</div>
<div className=' flex-row flex  items-center font-bold '>
<h1 className='text-2xl mr-1'>Category:  </h1>
    <h2 className='text-xl font-light'>  { product['categories']}</h2>
</div>
<div className=' flex-col flex  items-start font-bold  mb-1'>
<h1 className='text-2xl'>Description: </h1>
    <h2 className='text-xl font-light'> {product['desc']}</h2>
</div>

<div className='w-full h-full flex-col flex justify-start items-start'>
<div className='items-center flex-row flex text-xl'>4.0<Rating name="read-only" value={4} readOnly />(450)</div>
<br/>
<div className=' flex-row flex  items-center font-bold '>
<h1 className='text-2xl mr-1'>Select Quatity:  </h1>
<FormControl >
  
  <Select
   
   
    label="quatity"
    value={quatity}
    onChange={(e)=>{
      setquatity(e.target.value)
    }}
    input={<OutlinedInput label="quatity" />}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={5}>5</MenuItem>
  </Select>
</FormControl>
</div>
<Button variant="contained" onClick={
  (e)=>{
    e.stopPropagation()
    console.log(product['price'] * quatity);
    dispatch(addCartItem({...product, cartCount:quatity, price: parseInt(product['price'] * quatity)}))
  }
} style={{
    backgroundColor:"#000",
    color:"#fff",
    marginTop:'20px'
  }}>Add Cart</Button>

</div>
</div>

      </div>
    </div>
  )
}

export default Productsdetails
