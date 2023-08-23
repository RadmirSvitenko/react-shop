import {
  TopProductContainer,
  TopProductsMainContainer,
  ProductBox,
  TitleTopProducts,
  NameTopProducts,
  ViewAllButton,
  FlexMiniBox,
  NewAdditionalProductContainer,
  PriceTopProduct,
  PriceStarProduct,
  PriceDiscountProduct,
} from "./topSellingStyles";
import { Box, Chip, Collapse, Grid, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { API_PRODUCTS } from "../../requester";
import axios from "axios";

const TopSelling = () => {
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

  const topProducts = allProducts.filter(
    (item) => item.rating > 4.9 && item.discountPercentage < 17
  );

  const mainProducts = topProducts.filter((item, index) => index <= 3);
  const additionalProducts = topProducts.filter((item, index) => index >= 4);

  console.log("topProducts: ", topProducts);
  console.log("allProducts: ", allProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <TopProductsMainContainer>
      <Box>
        <TitleTopProducts>TOP SELLING</TitleTopProducts>
      </Box>
      <TopProductContainer>
        {mainProducts.map((item) => (
          <ProductBox>
            <img
              width={295}
              height={298}
              src={item.thumbnail}
              alt={item.title}
            />
            <NameTopProducts>{item.title}</NameTopProducts>
            <FlexMiniBox>
              <Rating name="read-only" value={item.rating} readOnly />
            </FlexMiniBox>

            <FlexMiniBox>
              <PriceTopProduct>${item.price}</PriceTopProduct>
              <PriceStarProduct>
                $
                {item.price -
                  ((item.price * item.discountPercentage) / 100).toFixed(1)}
              </PriceStarProduct>
              <PriceDiscountProduct>
                <Chip
                  sx={{ background: "rgba(255, 51, 51, 0.10)", color: "#F33" }}
                  label={`-${item.discountPercentage}%`}
                />
              </PriceDiscountProduct>
            </FlexMiniBox>
          </ProductBox>
        ))}
      </TopProductContainer>

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
              <NameTopProducts>{item.title}</NameTopProducts>
              <FlexMiniBox>
                <Rating name="read-only" value={item.rating} readOnly />
              </FlexMiniBox>

              <FlexMiniBox>
                <PriceTopProduct>${item.price}</PriceTopProduct>
                <PriceStarProduct>
                  $
                  {item.price -
                    ((item.price * item.discountPercentage) / 100).toFixed(1)}
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
    </TopProductsMainContainer>
  );
};

export default TopSelling;
