import styled from "@emotion/styled";
import {
  Box,
  IconButton,
  InputBase,
  ListItemText,
  Menu,
  Paper,
  Typography,
  alpha,
} from "@mui/material";
import theme from "../../theme";
import { Link } from "react-router-dom";

export const HeaderAddDiscount = styled(Box)(() => ({
  width: "100%",
  height: "38px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000",
}));

export const HeaderPaper = styled(Paper)(() => ({
  width: "1440px",
  maxWidth: "1440px",
  height: "96px",
  maxHeight: "96px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "0px 100px",
}));

export const HeaderLogotype = styled(Typography)(() => ({
  color: "#000",
  fontSize: "46px",
  fontWeight: "bold",
  leadingTrim: "both",
  textEdge: "cap",
}));

export const HeaderBoxLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "400px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-between",
    padding: "0 20px",
  },
}));

export const HeaderBoxIcons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "140px",
}));

export const HeaderSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  outline: "1px solid black",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#e5e5e5",
    transition: "0.8s",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const HeaderSearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const HeaderSearchStyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const TopHeader = styled(Box)(({ isShowOffer }) => ({
  display: isShowOffer ? "flex" : "none",
  background: "#000",
  color: "#fff",
  padding: "9px 0",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "38px",
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  height: "20px",
  width: "20px",
  color: "#fff",
  position: "absolute",
  right: "-10px",
  top: "8px",
  marginRight: "100px",
  [theme.breakpoints.down("sm")]: {
    marginRight: 10,
  },
}));

// StyledMenu;

export const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
}));

export const MobileItemLink = styled(Link)(() => ({
  padding: "30px",
  color: "#000",
  fontWeight: "bold",
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "0.7s",
}));

export const MobileItemListText = styled(ListItemText)(() => ({
  padding: "30px 0px",
  transition: "0.7s",
  ":hover": {
    textDecoration: "underline",
    transition: "0.7s",
  },

  ":active": {
    background: "red",
    color: "#fff",
    textDecoration: "none",
    transition: "0.5s",
  },
}));
