import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    isEror:false,
    flights:[],
}

 const flightSlice=createSlice({
    name:"flight",
    initialState,
    extraReducers:(builder)=>{},
})

export default flightSlice.reducer;