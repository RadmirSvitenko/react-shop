import styled from "@emotion/styled";
import { Box, Grid, Link, Typography } from "@mui/material";

export const FooterMainContainer = styled(Grid)(() => ({
  width: "100%",
  height: "500px",
  padding: "100px 100px 0px 100px",
  flexDirection: "column",
  background: "#F0F0F0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const FooterAboutContainer = styled(Grid)(() => ({
  width: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "50px",
}));

export const FooterAboutLinkContainer = styled(Grid)(() => ({
  display: "flex",
  height: "100%",
  alignItems: "flex-start",
  flexDirection: "column",
}));

export const FooterAboutLinkTitle = styled(Typography)(() => ({
  color: "#000",
  fontSize: "16px",
  lineHeight: "18px",
  letterSpacing: "3px",
  marginBottom: "20px",
  textTransform: "uppercase",
  fontWeight: "bolder",
}));

export const FooterAboutLink = styled(Link)(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "16px",
  lineHeight: "50px",
  justifyContent: "space-between",
  color: "#00000099",
  alignItems: "flex-start",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: "#000",
  },
}));

export const FooterAboutLinkFitstBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  lineHeight: "100px",
  color: "#00000099",
  alignItems: "flex-start",
}));

export const FooterDown = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100px",
}));
export const FooterVisaBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));
