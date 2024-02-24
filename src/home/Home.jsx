import React from 'react'
import Navbar from './navbar'
import Slideshow from './imageslide'
import Typography from '@mui/material/Typography';
import Productslist from './products/Productslist';
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

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
function Home() {
    const cat = ['Headphones','Laptops','Mobiles']
    const [search,setsearch]=React.useState('')
    const [sort,setsort]=React.useState('')
    const [catagory,setcatagory]=React.useState('')
 function handlecat(e){
        setcatagory(e.target.value)
    }
    function handlesort(e){
        setsort(e.target.value)
    }
    function handlesearch(e){
        setsearch(e.target.value)
    }
    console.log(search)
  return (
    <div style={{ overflow: 'hidden'}} >
        <Navbar/>
<Slideshow/>
<Box style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'start',
    
    flexDirection:'column',
    width:'100%',
    height:'100%',
    margin:'auto',
    marginTop:'20px',
   
   

}} >
    <Typography variant="h3" gutterBottom component="div">
    Welcome to E-commerce
</Typography>
<Typography variant="h5" gutterBottom component="div" className='font-bold'>
    Browse Our Products 
    
</Typography> 
<Divider className='w-full ' />
<div className='w-full justify-between flex-row flex'>
  
<Box sx={{ flexGrow:1, display: { xs: 'flex flex-row', md: 'flex-row flex' },padding:1,justifyContent:'space-between',alignItems:'center' }}>
          <FormControl sx={{ m: 1, width: '100%' }} >
         
          <OutlinedInput
          placeholder='Search'
          type='text'
          onChange={handlesearch}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
           
          />
        </FormControl>
        <div>
            <FormControl sx={{ m: 1, minWidth: '100%' }} >
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>

        <Select
      
          value={catagory}
        
         onChange={handlecat}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
         {cat.map((item,index)=>{
                return <MenuItem key={index} value={item} >{item}</MenuItem>
         })}
       
        </Select>
   
      </FormControl>
        <FormControl sx={{ m: 1, minWidth: '100%' ,color:'black'}}>
        <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>

        <Select
          value={sort}
         onChange={handlesort}
        
         
        
         
        >
          
          <MenuItem value={'asc'}>Price:ASC</MenuItem>
          <MenuItem value={'desc'}>Price:DESC</MenuItem>
          <MenuItem value={'newest'}>Newest</MenuItem>
        </Select>
   
      </FormControl> 
        </div>
       
          </Box>
</div>
<div className='flex-row flex w-full  items-center justify-center '>
<Productslist cat ={catagory} search={search} sort={sort} />
</div>


      
    </Box>
    <div className='flex flex-col flex-1 items-start m-auto w-10/12'>
    <Typography variant="h5" gutterBottom component="div" className='font-bold'>
        Subscribe to our news letter</Typography>
        <Box style={{
             margin:'auto',
             marginTop:'50px',
          marginBottom: '70px',
            color:'black',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            flexDirection:'column',
            padding:2,
            width:'100%',
            height:400,
        }}>
<img src='https://img.freepik.com/free-vector/greeting-cards-abstract-concept-vector-illustration-handmade-card-send-greeting-letter-online-birthday-party-celebration-diy-postcard-winter-holiday-christmas-tradition-abstract-metaphor_335657-6202.jpg?w=826&t=st=1702648829~exp=1702649429~hmac=10dfcfe94f7ad6a95d61bd52b218d68e78250d32c0c94033ac266b745158743e' alt='newsletter' style={{height:'100%',width:"100%",objectFit:'contain'}}/>
       
       <Box style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column',
            
              width:'100%',
              height:'100%',
              
         }}>
              <Typography variant="h5" gutterBottom component="div" className='font-bold'>
          Subscribe to our news letter</Typography>
          <Typography variant="body1" gutterBottom component="div" className='font-bold'>
          Get access to our latest offers and discounts</Typography>
          <Box style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row',
                width:'100%',
                height:'100%',
          }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{backgroundColor:'#fff',width:'50%'}}/>
                <Button variant="contained" style={{backgroundColor:'#fff',color:'#000',marginLeft:10}}>Subscribe</Button>
          </Box>

       </Box>
        </Box>
</div>
    </div>
  )
}

export default Home
