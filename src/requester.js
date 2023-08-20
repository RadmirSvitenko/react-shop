import axios from "axios";

export const BASE_API = `https://dummyjson.com`;
export const PRODUCTS_LIST_API = `https://dummyjson.com/products`;
export const PRODUCT_CATEGORY = `https://dummyjson.com/products/category/`;

export const getAllProducts = async () => {
  const response = await axios.get(PRODUCTS_LIST_API);
  return response.data.products;
};
