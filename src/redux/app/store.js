import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

import userReducer from '../features/userSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
 import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



  
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, userReducer)
const store = configureStore({

    reducer:{
        cart:cartReducer,
        user:persistedReducer,
    }
});
export const persistor = persistStore(store)
export default store;