import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getOrdersData = createAsyncThunk('ordersdata', async (userObj, thunkApi) => {

    let response = await axios.get("http://localhost:1000/order/getOrders/"+userObj.username)
    let data = response.data
    if(data.message=="no orders found")
    {
        return thunkApi.rejectWithValue(data)
    }
    if(data.message=="orders found"){
        return data.payload;
    }

})

export const ordersSlice=createSlice({
    name:"orders",
    initialState:{
        ordersData:[],
        isPending:false,
        isFulfilled:false,
        isRejected:false,
        isError:false,
        errMsg:''
    },
    reducers:{
        addNewOrder:(state,action)=>{
            state.ordersData.push(action.payload)
        },
        clearOrders:(state,action)=>{
            state.ordersData=[]
        }
    },
    extraReducers:{
        [getOrdersData.pending]: (state, action) => {
            state.isPending = true;
        },
        //deal with fulfilled
        [getOrdersData.fulfilled]: (state, action) => {
            state.ordersData = action.payload;
            state.isFulfilled = true;
            state.isPending = false;
            state.isError = false;
            state.errMsg = ''
        },
        //deal with rejected
        [getOrdersData.rejected]: (state, action) => {
            state.isError = true;
            state.errMsg = action.payload.message;
            state.isPending = false;
            state.userData = {}
        }
    }
})

export const {addNewOrder,clearOrders}=ordersSlice.actions;

export default ordersSlice.reducer