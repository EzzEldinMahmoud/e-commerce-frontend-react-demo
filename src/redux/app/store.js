import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

import userReducer from '../features/userSlice';

export default configureStore({

    reducer:{
        cart:cartReducer,
        user:userReducer,
    },
});