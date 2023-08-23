import {
  NewProductContainer,
  NewProductsMainContainer,
  ProductBox,
  TitleNewProducts,
  NameNewProducts,
  ViewAllButton,
  FlexMiniBox,
  PriceNewProduct,
  PriceStarProduct,
  PriceDiscountProduct,
  NewAdditionalProductContainer,
} from "./newArrivalsStyles";
import { Box, Chip, Collapse, Grid, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { API_PRODUCTS } from "../../requester";
import axios from "axios";

const NewArrivals = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isViewAll, setIsViewAll] = useState(false);

  const getProducts = async () => {
    const response = await axios.get(API_PRODUCTS);
    const data = await response.data.products;
    setAllProducts(data);
  };

  const togglewViewAll = () => {
    setIsViewAll((open) => !open);
  };

  const newProducts = allProducts.filter(
    (item) => item.discountPercentage > 17.5 && item.rating < 4.9
  );

  const mainProducts = newProducts.filter((item, index) => index <= 3);
  const additionalProducts = newProducts.filter((item, index) => index >= 4);

  console.log("newProducts: ", newProducts);
  console.log("allProducts: ", allProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <NewProductsMainContainer>
      <Box>
        <TitleNewProducts>NEW ARRIVALS</TitleNewProducts>
      </Box>
      <NewProductContainer>
        {mainProducts.map((item) => (
          <ProductBox>
            <img
              width={295}
              height={298}
              src={item.thumbnail}
              alt={item.title}
            />
            <NameNewProducts>{item.title}</NameNewProducts>
            <FlexMiniBox>
              <Rating name="read-only" value={item.rating} readOnly />
            </FlexMiniBox>

            <FlexMiniBox>
              <PriceNewProduct>${item.price}</PriceNewProduct>
              <PriceStarProduct>
                $
                {item.price -
                  ((item.price * item.discountPercentage) / 100).toFixed(2)}
              </PriceStarProduct>
              <PriceDiscountProduct>
                <Chip
                  sx={{
                    background: "rgba(255, 51, 51, 0.10)",
                    color: "#F33",
                  }}
                  label={`-${item.discountPercentage}%`}
                />
              </PriceDiscountProduct>
            </FlexMiniBox>
          </ProductBox>
        ))}
      </NewProductContainer>

      <Collapse timeout={{ enter: 1000, exit: 500 }} in={isViewAll}>
        <NewAdditionalProductContainer>
          {additionalProducts.map((item) => (
            <ProductBox>
              <img
                width={295}
                height={298}
                src={item.thumbnail}
                alt={item.title}
              />
              <NameNewProducts>{item.title}</NameNewProducts>
              <FlexMiniBox>
                <Rating name="read-only" value={item.rating} readOnly />
              </FlexMiniBox>

              <FlexMiniBox>
                <PriceNewProduct>${item.price}</PriceNewProduct>
                <PriceStarProduct>
                  $
                  {item.price -
                    ((item.price * item.discountPercentage) / 100).toFixed(2)}
                </PriceStarProduct>
                <PriceDiscountProduct>
                  <Chip
                    sx={{
                      background: "rgba(255, 51, 51, 0.10)",
                      color: "#F33",
                    }}
                    label={`-${item.discountPercentage}%`}
                  />
                </PriceDiscountProduct>
              </FlexMiniBox>
            </ProductBox>
          ))}
        </NewAdditionalProductContainer>
      </Collapse>
      <Box>
        <ViewAllButton variant="outlined" onClick={togglewViewAll}>
          {isViewAll ? "Close" : "View All"}
        </ViewAllButton>
      </Box>
    </NewProductsMainContainer>
  );
};

export default NewArrivals;
