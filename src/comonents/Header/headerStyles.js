import styled from "@emotion/styled";
import {
  AppBar,
  Badge,
  Box,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

export const HeaderAppBar = styled(AppBar)(() => ({
  width: "100%",
  height: "80px",
  position: "fixed",
  background:
    "linear-gradient(180deg, rgba(252,32,32,1) 0%, rgba(250,119,119,1) 64%, rgba(255,165,165,1) 87%)",
}));

export const HeaderToolBar = styled(Toolbar)(() => ({
  width: "100%",
  flexDirection: "row",
  height: "80px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const HeaderBoxLogotype = styled(Box)(() => ({
  width: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

export const HeaderBoxLinks = styled(Box)(() => ({
  width: "40%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  margin: "0px 30px",
}));

export const HeaderBoxBadge = styled(Toolbar)(() => ({
  width: "30%",
  height: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  margin: "0px 30px",
}));

export const HeaderSearch = styled(TextField)(() => ({
  color: "#fff",
}));

export const HeaderBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 18,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
