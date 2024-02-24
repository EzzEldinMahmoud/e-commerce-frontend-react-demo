import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Productcard from './Productcard';
import axios from 'axios'
import { publicRequest } from '../../apis/constants';
import {useDispatch} from 'react-redux'
import {addCartItem} from '../../redux/features/cartSlice'
function Productslist({cat,search,sort}) {
    const [products,setproducts]=React.useState([])
    const [filteredproducts,setfilteredproducts]=React.useState([])
    const [sortby,setsortby]=React.useState('')
const dispatch = useDispatch()
    React.useEffect( () =>{
 async function getdata ()  {  const res = await publicRequest.get(cat ?'products?category='+cat:'products')
   res.data && setproducts(res.data)
        }
        getdata()
    },[cat])
  
   React.useEffect(()=>{
      if(search != ' '){
    setfilteredproducts(products.filter(item=>Object.keys(item).some(key=>item[key].toString().toLowerCase().includes(search.toLowerCase()))))
search == '' && setfilteredproducts(products)

}
    else{
        setfilteredproducts(products)
    }
   },[search])
   React.useEffect(()=>{
        if(sort == 'asc'){
            setfilteredproducts(products.sort((a,b)=>a['price']-b['price']))
        }
        else if(sort == 'desc'){
            setfilteredproducts(products.sort((a,b)=>b['price']-a['price']))
        }
        else if(sort == 'newest'){
            setfilteredproducts(products.sort((a,b)=>new Date(b['createdAt'])-new Date(a['createdAt'])))
        }
        
        else{
          setfilteredproducts(products)
        }
   },[sort])
    
  
  return (
    <div >
      <Box className="flex-col flex " style={{
        width:'100%'
      }}>
        <Grid className='items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
      search.length > 0 && filteredproducts.length > 0 ? filteredproducts?.map((item,index)=>{
            return(
                <Grid item xs= {`${ filteredproducts.length == 1 ? 'auto': 1}`}>
                {
                    
                   <Productcard key={item['_id']} item={item}/>
                }
       
               </Grid>
            )
        }):
        
     products?.map((item,index)=>{
            return(
                <Grid item xs={3} >
                {
                    
                   <Productcard key={item['_id']} item={item}/>
                }
       
               </Grid>
            )
        })
       }
       
      </Grid>
    </Box>
    </div>
  )
}

export default Productslist
