import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

export const MainTopCommentsContainer = styled(Grid)(() => ({
  padding: "0px 50px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "450px",
  flexWrap: "wrap",
  marginBottom: "50px",
}));

export const TopCommentsContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "500px",
}));

export const TitleBoxTopComments = styled(Box)(() => ({
  width: "100%",
  padding: "0px 50px",
  display: "flex",
  marginTop: "50px",
  justifyContent: "flex-start",
}));

export const TitleTopComments = styled(Typography)(() => ({
  color: "#000",
  fontSize: "44px",
  fontWeight: "700",
}));

export const TopCommnetsBox = styled(Box)(() => ({
  display: "flex",
  width: "350px",
  height: "240px",
  padding: "28px 32px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  borderRadius: "20px",
  border: "1px solid rgba(0, 0, 0, 0.10)",
}));

export const UserName = styled(Typography)(() => ({
  color: "#000",
  fontSize: "20px",
  fontWeight: "700",
}));

export const TopCommentByUser = styled(Typography)(() => ({
  color: "rgba(0, 0, 0, 0.60)",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "22px",
}));
