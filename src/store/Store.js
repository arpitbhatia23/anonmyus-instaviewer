import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./authslice";
const store =configureStore( {
   reducer:rootReducers
})
export default store
