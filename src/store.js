import productsListReduce from "./pages/Products/ProductsList/productsListSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    productsList: productsListReduce,
  },
});

export default store;
