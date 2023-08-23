import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";

export const TopProductsMainContainer = styled(Grid)(() => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "0px 40px",
}));

export const TopProductContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const ProductBox = styled(Box)(() => ({
  margin: "0px 10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexDirection: "column",
  height: "450px",
}));

export const FlexMiniBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
}));

export const FlexPriceMiniBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
}));

export const TitleTopProducts = styled(Box)(() => ({
  color: "#000",
  textAlign: "center",
  fontSize: "48px",
  fontWeight: "700",
  margin: "30px 0px",
}));

export const NameTopProducts = styled(Typography)(() => ({
  color: "#000",
  fontSize: "18px",
  fontWeight: "700",
  textTransform: "capitalize",
  margin: "15px 0px",
  maxWidth: "295px",
}));

export const ViewAllButton = styled(Button)(() => ({
  padding: "16px 54px",
  margin: "30px  30px ",
  color: "#000",
  textTransform: "none",
  letterSpacing: "1px",
  fontWeight: "700",
  fontSize: "16px",
}));

export const PriceTopProduct = styled(Typography)(() => ({
  color: "#000",
  fontSize: "20px",
  fontWeight: 700,
  marginRight: "10px",
}));

export const PriceStarProduct = styled(Typography)(() => ({
  color: "rgba(0, 0, 0, 0.4)",
  textDecorationLine: "strikethrough",
  fontSize: "20px",
  fontWeight: 700,
  marginRight: "10px",
}));

export const PriceDiscountProduct = styled(Typography)(() => ({
  color: "#000",
  fonSize: "16px",
  fonttWeight: 700,
  marginRight: "10px",
}));

export const PriceWithDiscountNewProduct = styled(Typography)(() => ({
  fontSize: "20px",
  color: "rgba(0, 0, 0, 0.40)",
  fontWeight: 700,
}));

export const NewAdditionalProductContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "950px",
  lineHeight: "100px",
  marginTop: "50px",
  flexWrap: "wrap",
}));
