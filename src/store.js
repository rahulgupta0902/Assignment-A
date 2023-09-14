import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./Features/Users/UserSlice"


export const store = configureStore({
  reducer: {
     users : userReducer
  },
})