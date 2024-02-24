import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {useSelector} from 'react-redux';
import ItemCard from './itemscard';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from 'react-redux';
import {userRequest} from '../apis/constants';
const key = 'pk_test_51OGrQoHiFt1S4jrrhvODE36Hd4V1w5RQPOzuNhsYIftHfduJqnYzMW40BPQCCvciePfMZL1NvL2SWqMU6rV5nNwg00lC3R8pvF';
function Cart() {
  const cart = useSelector((state)=>state.cart);
  const [stripetoken,setstripetoken]=React.useState(null);

  useEffect(()=>{
    const makerequest = async () => {
     try{ const res = await userRequest.post("checkout/payment",{
        token:stripetoken.id,
        cart:cart['cartTotal'] * 100,
      
      }).then((res)=>{
        console.log(res);
        alert('Payment Successful');
      })
    
    } catch(err){
        console.log(err);
      }
    }
    stripetoken && makerequest();
  },[stripetoken,cart['cartTotal']])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='w-full h-full flex-col  flex justify-center items-center ' >
      <Typography variant='h1' >Cart</Typography>
      <div className='w-full  flex-row flex justify-between items-center' >
      <div className='w-1/2  flex justify-center items-center'>
      <Button  size='large' variant='outlined' onClick={
        ()=>{
          navigate('/')
        }
      } style={{
        color:'black',
        borderColor:'black',
        borderWidth:0.5,
      
      }}>
Continue Shopping
</Button>
      </div>
    
      </div>
      <div className='w-full h-full  flex-col flex justify-center items-center space-y-2' >
      <div
      className='w-full md:w-8/12  p-2 flex flex-1 flex-col justify-start items-start'
      >
        {
          cart.cartItems.map((item)=>{
            return(
            <ItemCard item={item} key={item['_id']} />
            )
          })
        }
      </div>
      <div className='w-full md:w-4/12 h-screen  flex flex-1 justify-start items-start'>
      <Box
      sx={{
        display: 'flex',
        flex:1,
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '100%',
          backgroundColor:'white',
          padding:3,
        },
      }}
    >
      
      <Paper elevation={3} style={{
       
      }}>
      <div className='w-full h-full flex justify-center items-center' >
        <Typography variant='h6' style={{color:'black'}} >ORDER SUMMARY</Typography>
        </div>
        <div className='w-full h-full flex-row flex mt-2 mb-2 justify-between items-center' >
        <Typography variant='body1' style={{color:'black',fontSize:20}} >SubTotal</Typography>
        <Typography variant='body1' style={{color:'black'}} >{'$'+cart['cartTotal']}</Typography>

        </div>
        <div className='w-full h-full flex-row flex mt-2 mb-2 justify-between items-center' >
        <Typography variant='body1' style={{color:'black',fontSize:20}} >Estimated Shipping</Typography>
        <Typography variant='body1' style={{color:'black'}} >$10</Typography>

        </div>
        <div className='w-full h-full flex-row flex mt-2 mb-2 justify-between items-center' >
        <Typography variant='body1' style={{color:'black' ,fontSize:20}} >Shipping Discount</Typography>
        <Typography variant='body1' style={{color:'black'}} > -$10</Typography>

        </div>
        <div className='w-full h-full flex-row flex  mt-2 mb-2 justify-between items-center' >
        <Typography variant='h4' style={{color:'black',fontSize:20}} >Total</Typography>
        <Typography variant='h4' style={{color:'black'}} >{'$'+cart['cartTotal']}</Typography>

        </div>
        <div className='w-full h-full -1 flex-row flex  mt-2 mb-2 justify-center items-center' >
        <StripeCheckout
        stripeKey={key}
        image='https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        token={(token)=>{
          setstripetoken(token);
          console.log(token)
        }}
        amount={cart['cartTotal']*100}
        name='CloseWorld'
        shippingAddress
        billingAddress
        description={`Your total is $${cart['cartTotal']}`}
        
        ><Button size='large' style={{
          width:'100%',
        color:'white',
      backgroundColor:'black',
        }} >Checkout</Button></StripeCheckout>
        
        

        </div>
      </Paper>
    </Box>
      </div>
      </div>
    </div>
  )
}

export default Cart
