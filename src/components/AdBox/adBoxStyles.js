import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import bgAdInfoContainer from "../../images/bg-ad-info-container.jpg";
import theme from "../../theme";

export const MainAdGrid = styled(Grid)(() => ({
  display: "flex",
  width: "100%",
  background: "#F2F0F1",
}));

export const AdInfoContainer = styled(Box)(() => ({
  width: "50%",
  maxWidth: "50%",
  height: "663px",
  maxHeight: "663px",
}));

export const GridInfo = styled(Grid)(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flexDirection: "column",
  padding: "80px 100px",
  marginTop: "60px",
  width: "100%",
  height: "663px",
}));

export const GridInfoText = styled(Typography)(() => ({
  fontSize: "50px",
  lineHeight: "60px",
  color: "#000",
  fontWeight: "bold",
}));

export const AdImageContainer = styled(Box)(() => ({
  width: "50%",
  position: "relative",
  maxWidth: "50%",
  height: "663px",
  maxHeight: "663px",
  backgroundImage: `url(${bgAdInfoContainer})`,
  backgroundSize: "100% auto",
  marginTop: "60px",
}));

export const ShowNowBtn = styled(Button)(() => ({
  borderRadius: "50px",
  padding: "16px 54px",
  background: "#000",
}));

export const CountInfoBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const StarIconOne = styled(Image)(() => ({
  position: "absolute",
  top: "50%",
  width: "56px",
  height: "56px",
}));

export const StarIconTwo = styled(Image)(() => ({
  position: "absolute",
  top: "50%",
  width: "56px",
  height: "56px",
}));
