import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { publicRequest } from '../apis/constants';
import {useDispatch} from 'react-redux'
import { login } from '../redux/apislice/ApiSlice';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
export default function Login() {
  const [email,setemail]=React.useState('')
  const [password,setpassword]=React.useState('')
  const dispatch=useDispatch()
  const [open, setOpen] = React.useState(false);
  const [typeofalert, settypeofalert] = React.useState('success');
  const [messagehere, setmessagehere] = React.useState('Account Created Successfully!');
  const user = useSelector((state)=>state.user.currentuser);
  function handleemail  (e)  {
    setemail(e.target.value)
    console.log(email);
  }
  function handlepassword  (e)  {
    setpassword(e.target.value)
  }

function handleform(e){
  e.preventDefault();
  if(email===''||password===''){
    setOpen(true);
    settypeofalert('error')
    setmessagehere('Please fill all the fields')

  }else if (password.length<6){
    setOpen(true);
    settypeofalert('error')
    setmessagehere('Password must be atleast 6 characters long')
  }
  else if (!email.includes('@')){
    setOpen(true);
    settypeofalert('error')
    setmessagehere('Please enter a valid email')

  }
  else if (!email.includes('.')){
    setOpen(true);
    settypeofalert('error')
    setmessagehere('Please enter a valid email')

  }else  {
   login(dispatch,{email,password}).then(()=>{
    if(user){
      setOpen(true);
      settypeofalert('success')
      setmessagehere('Logged in Successfully')
      navigate('/home');
    }
   
   }).catch((err)=>{
    setOpen(true);
    settypeofalert('error')
    setmessagehere('wrong email or password')
   })

}
 
 
}
  const navigate = useNavigate();
  return (
    <div className='h-full w-full flex flex-col flex-1 justify-center items-center bg-black	'
    style={{
        height: "100vh",
    }}
    >
      <div className=' m-auto  w-1/2 bg-white flex-col  flex p-10 rounded-md	'>
        <Box
  
  component="form"
  sx={{
    '& > :not(style)': {   m: 1,width: '100%' },
  }}
    noValidate
  autoComplete="off"
>
<Typography variant="h1" component="h2" >
Login
</Typography>
<Typography component="p" variant="overline" >
  To Browse our Hot offers
</Typography>

  <TextField
  type='email'
  defaultValue={email}
  onChange={
    handleemail
  } id="Email address" label="Email address" variant="outlined" fullWidth/>
  <br/>
    <TextField type='password'
    onChange={
     handlepassword
    }
    id="Password" label="Password" variant="outlined" fullWidth/>
    <br/>
    <Button style={{color:'black',alignItems:'start'}} onClick={()=>{
navigate('/signup')
    }}>Don't have an account ? Sign Up</Button>
    <div className='w-1/2 items-center justify-center flex-row flex'>
        <Button variant="contained" style={{
            backgroundColor: "white",
        color
        : "black",
            fontSize: "12px",
            margin: "4px",
            alignItems: "center"
        }} 
        
        onClick={handleform}
        >Login</Button>
    </div>
    
</Box>
      </div>
      
      

      <Collapse in={open}>
        <Alert
          severity={`${typeofalert}`}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         {messagehere}
        </Alert>
      </Collapse>
    </div>
  )
}
