import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux'
import {increasequantity, removeCartItem} from '../redux/features/cartSlice'

function ItemCard({item}) {
    const [count,setcount]=React.useState(item['cartCount'])
    const dispatch=useDispatch()
  return (
    <div>
        <div className='w-full flex-col md:flex-row flex h-full m-2  '>
        <img src={item['img']} alt={item['title']} style={{height:'100%',width:'40%',objectFit:'cover'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {item['title']}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item['desc']}
        </Typography>
      
      </CardContent>
      <div className='flex-col flex items-center justify-center '>
<CardActions style={{flexDirection:"row",display:"flex",alignContent: 'center'}}>
        <Button size="large" onClick={
        ()=>{
        setcount(count+1);
        dispatch(increasequantity({...item,price:item['price']}))
        }
        }>+</Button>
        <Typography gutterBottom variant="h5" component="div">
          {count}
        </Typography>
        <Button size="large" onClick={
        (e)=>{
       if(count == 0){ setcount(count -1);}else{
        dispatch(removeCartItem({...item,price:item['price']}))
       }
        }
        }>-</Button>
      </CardActions>
      <Typography variant="h5" color="text.secondary">
        {'$'+item['price'] }
        </Typography>
      </div>
      
     
    </div>
    </div>
  )
}

export default ItemCard
