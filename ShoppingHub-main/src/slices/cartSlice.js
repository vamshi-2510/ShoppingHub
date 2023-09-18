import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getCartData = createAsyncThunk('cartsdata', async (userObj, thunkApi) => {

    let response = await axios.get("http://localhost:1000/cart/getCartProducts/"+userObj.username)
    let data = response.data

    if(data.message=="no products found in cart")
    {
        return thunkApi.rejectWithValue(data)
    }
    if(data.message=="products found"){
        return data.payload;
    }

})


export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartProducts:[],
        isPending:false,
        isFulfilled:false,
        isRejected:false,
        isError:false,
        errMsg:''
    },
    reducers:{
       
        addProductToCart:(state,action)=>{
            state.cartProducts.push(action.payload)
            
        },
        removeCartProduct:(state,action)=>{
            let p=-1
            for(let i=0;i<state.cartProducts.length;i++){
                if(state.cartProducts[i].image===action.payload.image){
                    p=i;
                    break;
                }
            }
            state.cartProducts.splice(p,1)
        },
        clearCart:(state,action)=>{
            state.cartProducts=[]
        }
    },
    extraReducers:{
        [getCartData.pending]: (state, action) => {
            state.isPending = true;
        },
        //deal with fulfilled
        [getCartData.fulfilled]: (state, action) => {
            state.cartProducts = action.payload;
            state.isFulfilled = true;
            state.isPending = false;
            state.isError = false;
            state.errMsg = ''
        },
        //deal with rejected
        [getCartData.rejected]: (state, action) => {
            state.isError = true;
            state.errMsg = action.payload.message;
            state.isPending = false;
            state.userData = {}
        }
    }
})

export const {addProductToCart,removeCartProduct,clearCart}=cartSlice.actions;
export default cartSlice.reducer