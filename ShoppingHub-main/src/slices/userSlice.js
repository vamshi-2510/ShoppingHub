import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { setCartProducts } from './cartSlice'



export const getUserData = createAsyncThunk('usersdata', async (userObj, thunkApi) => {

        let response = await axios.post("http://localhost:1000/user/loginUser",userObj)
        let data = response.data
        if(data.message=="invalid username"||data.message=="invalid password")
        {
            alert("invalid username or password")
            return thunkApi.rejectWithValue(data)
        }
        if(data.message=="logged in successfully"){
            localStorage.setItem("token",data.payload)
            return data.userObj;
        }

})

export const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:{},
        isPending:false,
        isFulfilled:false,
        isRejected:false,
        isError:false,
        errMsg:''
    },
    reducers:{
        clearData:(state)=>{
        state.userData=null;
        state.isFulfilled=false;
        state.isError=false;
        state.isPending=false;
        state.isRejected=false;
        }
    },
    extraReducers:{
         //deal with pending
    [getUserData.pending]: (state, action) => {
        state.isPending = true;
    },
    //deal with fulfilled
    [getUserData.fulfilled]: (state, action) => {
        state.userData = action.payload;
        state.isFulfilled = true;
        state.isPending = false;
        state.isError = false;
        state.errMsg = ''
    },
    //deal with rejected
    [getUserData.rejected]: (state, action) => {
        state.isError = true;
        state.errMsg = action.payload.message;
        state.isPending = false;
        state.userData = {}
    }

    }
})

export const {clearData}=userSlice.actions 

export default userSlice.reducer