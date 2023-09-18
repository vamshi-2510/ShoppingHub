import {createSlice} from '@reduxjs/toolkit'

export const productSlice=createSlice({
    name:"products",
    initialState:{
        productsData:[],
    },
    reducers:{
        setData:(state,action)=>{
            state.productsData=action.payload
        }

    },
   
})

export const {setData}=productSlice.actions 

export default productSlice.reducer