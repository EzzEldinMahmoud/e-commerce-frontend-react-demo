import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';

import SvgIcon from '@mui/material/SvgIcon';

import FormControl from '@mui/material/FormControl';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { publicRequest } from '../apis/constants';
import { useNavigate } from "react-router-dom";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import AsyncSelect  from 'react-select/async';
import { components } from 'react-select';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { persistor } from '../redux/app/store';

import Menu from '@mui/material/Menu';

function HomeIcon(props) {

  
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Navbar() { 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [products,setproducts]=React.useState([])
  async function getdata ()  {  
   

  return  publicRequest.get('products/')
    .then((res)=>{
      const data = res.data;
      console.log(data);
    const options = data.map(d => ({
        "value" : d._id,
        "label" : d.title
      }))
      setproducts(options);
      return options;
    })
  }

    const navigate = useNavigate();
    
const quatity = useSelector((state)=>state.cart.cartCount);
const currentuser = useSelector((state)=>state.user.currentuser);
const [selected, setSelected] = React.useState(null);

const handleChange = (selectedOption) => {
  setSelected(selectedOption);
  console.log(`Option selected:`, selectedOption.value);
  navigate(`/product/${selectedOption.value}`)
};
const DropdownIndicator = (
  props
) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchOutlinedIcon color='black'/>
    </components.DropdownIndicator>
  );
};
  return (
    <AppBar position="static" style={{backgroundColor:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
  <LocalMallOutlinedIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1,color:'black' ,}} fontSize="large" />
          <Typography
          onClick={()=>{navigate('/home')}}
            variant="h6"
            noWrap
            style={{color:'black'}}
            component="a"
           
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
                '&:hover': {
                    color: 'inherit',
                },
                fontSize: '1.5rem',
            }}
          >
            CloseWorld
          </Typography>

         
        
          <Box sx={{ flexGrow:1, display: { xs: 'flex', md: 'flex' },padding:1 }}>
          <FormControl sx={{ m: 1, width: '100%' }} >
          <AsyncSelect cacheOptions defaultOptions loadOptions={ getdata }
          
          onChange={
             
             handleChange
          } components={{
             DropdownIndicator,
            IndicatorSeparator: () => null,

           
          }} styles={{
            control: (base, state) => ({
              ...base,
              boxShadow: state.isFocused ? 0 : 0,
              borderColor: state.isFocused ? "black" : "black",
              "&:hover": {
                borderColor: state.isFocused ? "black" : "black"
              }
            }),
            menu: base => ({
              ...base,
              borderRadius: 0,
              marginTop: 0,
              color:'black',
              overflow: "hidden"
            }),

          }}/>
          

           
        </FormControl>
       
          </Box>

          <Box sx={{ flexGrow: 0 }}>
           
             
             
            { currentuser != null ?
            <div className='flex-row flex items-center space-x-2'>
               <IconButton onClick={
                handleClick
               }   sx={{ p: 0 ,marginLeft:1}}>
               <Avatar  alt={ `${currentuser['username'] }`}  />
               <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={function handlelogout(){
          handleClose();
          persistor.purge()
          
          }}>Logout</MenuItem>
      </Menu>
              
              </IconButton>
               <IconButton  onClick={
              ()=>{
                navigate('/cart')}
               } sx={{ p: 0 ,marginLeft:1}}>
              <ShoppingCartOutlinedIcon fontSize='large' />
              <div className=' rounded-full h-6 w-6 absolute top-4 left-4 bg-blue-300 items-center justify-center'>
                <Typography className='text-md'>{quatity}</Typography>
              </div>
              </IconButton>
            </div>
           : <div>
                 <IconButton  sx={{ p: 0 }} onClick={()=>{
                  navigate('/login')
                 }}>
                <Typography>
                    Login
                </Typography>
              </IconButton>
              <IconButton  sx={{ p: 0 ,marginLeft:1}} onClick={()=>{
navigate('/signup')  
       }}>
                <Typography>
                    Sign Up
                </Typography>
              </IconButton>
             </div>}
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;