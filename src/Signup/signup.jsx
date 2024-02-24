import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../apis/constants";
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
export default function Signup() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [typeofalert, settypeofalert] = React.useState('success');
  const [messagehere, setmessagehere] = React.useState('Account Created Successfully!');
  const [user,setuser] = React.useState(null);
  function handleusername(e) {
    setusername(e.target.value);
    console.log(username);
  }
  function handleemail(e) {
    setemail(e.target.value);
    console.log(email);
  }
  function handlepassword(e) {
    setpassword(e.target.value);
  }
  const handleregister = async (e) => {
    try {
      const res = await publicRequest.post("auth/register", {
        username: username,
        email: email,
        password: password,
      }).then((res)=>{
setuser(res.data)
      }).catch((err)=>{
        setOpen(true);
        settypeofalert("error");
        setmessagehere(err.message);

      });
      
    } catch (err) {
      console.log(err);
    }
  };

  function handleform(e) {
    e.preventDefault();
    if (email === "" || password === "" || username === "") {
      setOpen(true);
      settypeofalert("error");
      setmessagehere("Please fill all the fields");
    } else if (password.length < 6) {
      setOpen(true);
      settypeofalert("error");
      setmessagehere("Password must be atleast 6 characters long");
    } else if (!email.includes("@")) {
      setOpen(true);
      settypeofalert("error");
      setmessagehere("Please enter a valid email");
    } else if (!email.includes(".")) {
      setOpen(true);
      settypeofalert("error");
      setmessagehere("Please enter a valid email");
    } else {
      handleregister().then((res) => {
          if (user) {
            setOpen(true);
            settypeofalert("success");
            setmessagehere("created account Successfully");
            navigate("/login");
          }
        })
        .catch((err) => {
          setOpen(true);
          settypeofalert("error");
          setmessagehere("user already exists");
        });
    }
  }

  return (
    <div
      className="h-full w-full flex flex-col flex-1 justify-center items-center bg-black	"
      style={{
        height: "100vh",
      }}
    >
      <div className=" m-auto   w-full md:w-1/2 lg:w-1/2 bg-white flex-col  flex p-10 rounded-md	">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          autoComplete="off"
        >
          <Typography variant="h1" component="h2">
            Sign Up
          </Typography>
          <Typography component="p" variant="overline">
            To Browse our Hot offers
          </Typography>
          <input
            value={username}
            className="w-full rounded p-2  border border-gray-300 outline-none focus:border-indigo-500"
            placeholder="Username"
            required
            onChange={handleusername}
          />

          <br />
          <input
            className="w-full rounded p-2  border border-gray-300 outline-none focus:border-indigo-500"
            onChange={handleemail}
            placeholder="Email"
            defaultValue={email}
            required
          />

          <br />
          <input
            defaultValue={password}
            className="w-full rounded p-2  border border-gray-300 outline-none focus:border-indigo-500"
            security="true"
            type="password"
            onChange={handlepassword}
            placeholder="Password"
            required
          />

          <br />
          <Button
            style={{ color: "black", alignItems: "start" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account ? Login
          </Button>
          <br />
          <div className="w-1/2 items-center justify-center flex-row flex">
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "12px",
                margin: "4px",
                alignItems: "center",
              }}
              type="submit"
              onClick={(e) => {
                handleform(e);
              }}
            >
              Sign Up
            </Button>
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
  );
}
