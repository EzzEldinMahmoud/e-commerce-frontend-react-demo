import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {addCartItem} from '../../redux/features/cartSlice'
function Productcard({item}) {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [hover,sethover]=React.useState(false)
  return (
    <div onClick={()=>{
      console.log(item['_id'])
navigate(`/product/${item['_id']}`)
    }} 
    onMouseOver={()=>{
sethover(true)
    }}

    onMouseLeave={()=>{
      sethover(false)
    }}>
      <div style={{ backgroundColor: 'transparent', shadowOpacity: 0,border:0 }} sx={{ maxWidth: '100%',margin:1 }} >
      <img src={item['img']} alt={item['title']} style={{height:'200'}}/>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item['title']}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          $ {item['price']}
        </Typography>
      </CardContent>
      <CardActions>
      {hover == true ?  <Button size="medium" style={{
          backgroundColor:"#000",
          color:"#fff",
        }} onClick={
           (e)=>{
            e.stopPropagation()
            dispatch(addCartItem({...item,cartCount:1,price:item['price']}))
           }
        }>Add Cart</Button>:null}
        
      </CardActions>
    </div>

    </div>
    
  )
}

export default Productcard
