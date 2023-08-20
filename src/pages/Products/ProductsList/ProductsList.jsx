import React, { useEffect } from "react";
import Header from "../../../comonents/Header/Header";
import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { ProductsContainer } from "./productsList.Styles";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsListSlice";

const ProductsList = () => {
  const productsList = useSelector((state) => state.productsList.catalog);
  const productsCatalog = productsList;
  console.log("productsCatalog: ", productsCatalog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Grid
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        margin: "120px 0",
      }}
    >
      <Header />
      <ImageList
        sx={{ width: "80%", height: "auto" }}
        variant="masonry"
        cols={3}
        gap={8}
      >
        {productsCatalog.map((item) => (
          <ImageListItem
            key={item.id}
            sx={{
              "&:hover": {
                opacity: "0.8",
                transition: "0.8s",
              },
            }}
          >
            <img
              src={`${item.thumbnail}?w=248&fit=crop&auto=format`}
              srcSet={`${item.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default ProductsList;
