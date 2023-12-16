import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Signup/signup';
import Login from './login/Login';
import Home from './home/Home';
import Navbar from './home/navbar';
import Productsdetails from './productsdetails/Productsdetails';
import Cart from './cart/Cart';
import Settings from './settings/Settings';
import { Provider } from 'react-redux';
import store from './redux/app/store';
const router = createBrowserRouter([
  {
    path: "/",
    element:<>
    <Home/>
    </> ,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    
    path: "/product/:id",
    element: <>
    <Navbar/>
    <Productsdetails/>
    </>,
  },
  {
    path: "/cart",
    element:<>
    <Navbar/>
    <Cart/>
    </>,
  },
  {
    path: "/settings",
    element: <>
    <Navbar/>
    <Settings/>
    </>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />  
    </Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
