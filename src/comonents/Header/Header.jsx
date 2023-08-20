import { Button, IconButton, TextField, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  HeaderAppBar,
  HeaderToolBar,
  HeaderBoxLogotype,
  HeaderBoxLinks,
  HeaderBoxBadge,
  HeaderBadge,
} from "./headerStyles";

const Header = () => {
  return (
    <HeaderAppBar>
      <HeaderToolBar>
        <HeaderBoxLogotype>
          <Typography>LOGO</Typography>
        </HeaderBoxLogotype>
        <HeaderBoxLinks>
          <TextField
            id="filled-basic"
            label="Поиск по каталогу"
            variant="filled"
            sx={{
              width: "50%",
            }}
          />
        </HeaderBoxLinks>
        <HeaderBoxBadge>
          <IconButton aria-label="cart">
            <HeaderBadge badgeContent={1} color="primary">
              <ShoppingCartIcon
                sx={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </HeaderBadge>
          </IconButton>
        </HeaderBoxBadge>
      </HeaderToolBar>
    </HeaderAppBar>
  );
};

export default Header;
