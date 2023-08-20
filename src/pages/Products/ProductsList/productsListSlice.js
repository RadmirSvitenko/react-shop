import { getAllProducts } from "../../../requester";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalog: [],
  isLoadingPage: false,
  isLoadingComponents: false,
  error: {},
};

export const getProducts = createAsyncThunk(
  "productsList/getProducts",
  getAllProducts
);

const productsListSLice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoadingComponents = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoadingComponents = false;
      state.catalog = action.payload;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default productsListSLice.reducer;
