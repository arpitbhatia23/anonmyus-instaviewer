import { createSlice,combineReducers } from "@reduxjs/toolkit";
// const initialState={
//    status : false,
//    userData:null,
//    data:null

// }
export const authslice = createSlice({
    name:"auth" ,
     initialState:{
        status : false,
        userData:null,
        
     
     }  ,
       reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData
        },
        logout:(state,action)=>{
            state.status=false;
            state.userData=null
        }
    }
})
export const dataslice =createSlice({
    name:'data',
     initialState:{
       
        data:null
     
     } ,   reducers:{
        setdata:(state,action)=>{
            state.data=action.payload
        }
    }
})

export const themeProvider= createSlice({
    name:"Theme",
    initialState:{
        theme:"dark",
    },
    reducers:{
        settheme:(state,action)=>{
            state.theme=action.payload
    }
}

})

export const {login,logout}=authslice.actions
export const {setdata}=dataslice.actions
export const {settheme}=themeProvider.actions
const rootReducers=combineReducers({
    data:dataslice.reducer,
    auth:authslice.reducer,
    theme:themeProvider.reducer,
})
export default rootReducers;