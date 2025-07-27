import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"Cart",
    initialState:{
        k:0
    },
    reducers:{
        addToCart:(state)=>{
            state.k=state.k+1;
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;