import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  Button,
  MenuItem,
  Divider,
  List,
  Drawer,
  ListItemText,
} from "@mui/material";

import {
  HeaderPaper,
  HeaderSearch,
  HeaderSearchIconWrapper,
  HeaderSearchStyledInputBase,
  HeaderBoxLinks,
  StyledMenu,
  TopHeader,
  HeaderLogotype,
  CloseButton,
  HeaderBoxIcons,
  MenuButton,
  MobileItemLink,
  MobileItemListText,
  HeaderMobileBoxIcons,
} from "./headerStyles";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import userAvatar from "../../images/user-avatar.svg";
import { AccountCircle, Close, Menu, Search } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Header = () => {
  const [isShowOffer, setIsShowOffer] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
  };

  const handleCloseHeader = () => {
    console.log("isShowOffer: ", isShowOffer);

    setIsShowOffer((open) => !open);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <TopHeader isShowOffer={isShowOffer} letterSpacing={"1.5px"}>
        Sign up and get 20% off to your first order.
        <Link style={{ textDecoration: "none", color: "#fff" }}>
          <b>Sign Up Now</b>
        </Link>
      </TopHeader>
      <CloseButton onClick={handleCloseHeader}>
        <Close />
      </CloseButton>

      <HeaderPaper>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuButton onClick={toggleMenu}>
            <Menu />
          </MenuButton>
          <HeaderLogotype>SHOP.CO</HeaderLogotype>
        </Box>

        <HeaderBoxLinks>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="text"
            color={"secondary"}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Shop
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <LocalGroceryStoreOutlinedIcon />
              Catalog
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <AddShoppingCartOutlinedIcon />
              New Products
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <ShoppingBagOutlinedIcon />
              Top Products
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              More
            </MenuItem>
          </StyledMenu>

          <Link style={{ textDecoration: "none", color: "#000" }} to={"#"}>
            On Sale
          </Link>
          <Link style={{ textDecoration: "none", color: "#000" }} to={"#"}>
            New Arrivals
          </Link>
          <Link style={{ textDecoration: "none", color: "#000" }} to={"#"}>
            Brands
          </Link>
        </HeaderBoxLinks>
        {/* 
        <HeaderMobileBoxIcons>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton aria-label="cart">
            <Badge
              badgeContent={0}
              sx={{
                color: "#000",
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <AccountCircle />
        </HeaderMobileBoxIcons> */}

        <HeaderSearch>
          <HeaderSearchIconWrapper>
            <Search />
          </HeaderSearchIconWrapper>
          <HeaderSearchStyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </HeaderSearch>

        <HeaderBoxIcons>
          <IconButton aria-label="cart">
            <Badge
              badgeContent={0}
              color="secondary"
              sx={{
                color: "#000",
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <img src={userAvatar} alt="Avatar" />
        </HeaderBoxIcons>
      </HeaderPaper>
      <Drawer anchor="left" open={openMenu} onClose={toggleMenu}>
        <List>
          <MobileItemListText>
            <MobileItemLink>Catalog</MobileItemLink>
          </MobileItemListText>

          <MobileItemListText>
            <MobileItemLink>New products</MobileItemLink>
          </MobileItemListText>

          <MobileItemListText>
            <MobileItemLink>Top products</MobileItemLink>
          </MobileItemListText>

          <MobileItemListText>
            <MobileItemLink>More...</MobileItemLink>
          </MobileItemListText>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
