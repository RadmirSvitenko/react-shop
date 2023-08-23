import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import StyleDressOne from "../../images/style-dress-one.png";
import StyleDressTwo from "../../images/style-dress-two.png";
import StyleDressThree from "../../images/style-dress-three.png";
import StyleDressFour from "../../images/style-dress-four.png";

export const MainContainerDressStyle = styled(Grid)(() => ({
  width: "86%",
  height: "750px",
  padding: "0px 100px",
  margin: "0px 100px",
  background: "#F0F0F0",
  marginTop: "50px",
  borderRadius: "40px",
}));

export const ContainerDressStyleOne = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "300px",
  gap: "20px",
  marginBottom: "10px",
}));

export const DressStyleImageOne = styled(Grid)(() => ({
  background: `url(${StyleDressOne})`,
  width: "35%",
  height: "289px",
  borderRadius: "20px",
  padding: "25px 36px",
}));

export const DressStyleImageTwo = styled(Grid)(() => ({
  background: `url(${StyleDressTwo})`,
  width: "65%",
  height: "289px",
  borderRadius: "20px",
  padding: "25px 36px",
}));

export const DressStyleImageThree = styled(Grid)(() => ({
  background: `url(${StyleDressThree})`,
  width: "65%",
  height: "289px",
  borderRadius: "20px",
  padding: "25px 36px",
}));

export const DressStyleImageFour = styled(Grid)(() => ({
  background: `url(${StyleDressFour})`,
  width: "35%",
  height: "289px",
  borderRadius: "20px",
  padding: "25px 36px",
}));

export const ContainerDressStyleTwo = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "20px",
  height: "300px",
}));

export const TitleDressStyle = styled(Typography)(() => ({
  color: "#000",
  textAlign: "center",
  fontSize: "40px",
  fontWeight: "700",
}));

export const DressTypographyDescription = styled(Typography)(() => ({
  color: "#000",
  fontSize: "30px",
  fontWeight: "700",
}));
