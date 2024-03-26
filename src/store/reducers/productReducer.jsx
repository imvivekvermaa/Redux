import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initialState

const initialState = {
  products: [],
};


export const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    getProducts: (state, action)=>{
        console.log(action)
        state.products= action.payload
        
    }
  },
});

export default ProductSlice.reducer;
export const {getProducts}= ProductSlice.actions
